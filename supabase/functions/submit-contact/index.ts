import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.79.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const RATE_LIMIT = 3; // Max submissions per hour
const RATE_WINDOW_HOURS = 1;

interface ContactRequest {
  name: string;
  company: string;
  role: string;
  email: string;
  message?: string;
  honeypot?: string; // Should always be empty
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get client IP from headers
    const forwardedFor = req.headers.get("x-forwarded-for");
    const realIp = req.headers.get("x-real-ip");
    const clientIp = forwardedFor?.split(",")[0]?.trim() || realIp || "unknown";

    console.log(`Contact form submission from IP: ${clientIp}`);

    // Parse request body
    const body: ContactRequest = await req.json();
    const { name, company, role, email, message, honeypot } = body;

    // Honeypot check - if filled, it's a bot
    if (honeypot && honeypot.trim() !== "") {
      console.log(`Bot detected (honeypot filled) from IP: ${clientIp}`);
      // Return success to not alert the bot
      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate required fields
    if (!name || name.length < 2 || name.length > 100) {
      return new Response(
        JSON.stringify({ error: "Name must be between 2 and 100 characters" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!company || company.length < 2 || company.length > 100) {
      return new Response(
        JSON.stringify({ error: "Company name must be between 2 and 100 characters" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!role || role.length < 2 || role.length > 100) {
      return new Response(
        JSON.stringify({ error: "Role must be between 2 and 100 characters" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email) || email.length > 255) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (message && message.length > 1000) {
      return new Response(
        JSON.stringify({ error: "Message must be less than 1000 characters" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Create Supabase client with service role for rate limiting table
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Clean up old rate limit entries
    await supabase.rpc("cleanup_old_rate_limits");

    // Check rate limit
    const oneHourAgo = new Date(Date.now() - RATE_WINDOW_HOURS * 60 * 60 * 1000).toISOString();
    const { data: recentSubmissions, error: rateLimitError } = await supabase
      .from("rate_limits")
      .select("id")
      .eq("ip_address", clientIp)
      .eq("endpoint", "contact")
      .gte("created_at", oneHourAgo);

    if (rateLimitError) {
      console.error("Rate limit check error:", rateLimitError);
      return new Response(
        JSON.stringify({ error: "Service temporarily unavailable" }),
        { status: 503, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (recentSubmissions && recentSubmissions.length >= RATE_LIMIT) {
      console.log(`Rate limit exceeded for IP: ${clientIp}`);
      return new Response(
        JSON.stringify({ error: "Too many submissions. Please try again later." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Record this submission for rate limiting
    const { error: recordError } = await supabase
      .from("rate_limits")
      .insert({ ip_address: clientIp, endpoint: "contact" });

    if (recordError) {
      console.error("Failed to record rate limit:", recordError);
      // Continue anyway - don't block legitimate submissions
    }

    // Insert the contact request
    const { error: insertError } = await supabase
      .from("contact_requests")
      .insert({
        name: name.trim(),
        company: company.trim(),
        role: role.trim(),
        email: email.trim().toLowerCase(),
        message: message?.trim() || null,
      });

    if (insertError) {
      console.error("Failed to insert contact request:", insertError);
      return new Response(
        JSON.stringify({ error: "Failed to submit request" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`Contact request submitted successfully from IP: ${clientIp}`);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in submit-contact function:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

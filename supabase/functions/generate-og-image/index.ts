import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface OGImageRequest {
  title: string;
  category: string;
  author: string;
  postId: string;
  readTime?: string;
  forceRegenerate?: boolean;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { title, category, author, postId, readTime, forceRegenerate } = await req.json() as OGImageRequest;

    if (!title || !postId) {
      return new Response(
        JSON.stringify({ error: "Title and postId are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Initialize Supabase client with service role for storage access
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Check cache first (unless forcing regeneration)
    if (!forceRegenerate) {
      const { data: cached } = await supabase
        .from("og_image_cache")
        .select("public_url")
        .eq("post_id", postId)
        .single();

      if (cached?.public_url) {
        console.log("Returning cached OG image for:", postId);
        return new Response(
          JSON.stringify({ imageUrl: cached.public_url, cached: true }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY not configured");
      return new Response(
        JSON.stringify({ error: "API key not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Generate OG image using Lovable AI
    const prompt = `Create a professional blog post social media preview image (1200x630 OG image):
- Title text: "${title}" (large, bold, white text, centered)
- Category: "${category}" badge in top-left
- Modern gradient background (deep blue #1e3a5f to purple #4c1d95)
- "Velaree Blog" watermark bottom-right
- Clean, minimal design with subtle geometric patterns
- No faces or photos, text-focused
- Professional tech/corporate aesthetic`;

    console.log("Generating OG image for:", postId, title);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-image-preview",
        messages: [{ role: "user", content: prompt }],
        modalities: ["image", "text"],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded, please try again later" }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted" }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI API error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "Failed to generate image" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const base64Image = data.choices?.[0]?.message?.images?.[0]?.image_url?.url;

    if (!base64Image) {
      console.error("No image in response:", JSON.stringify(data));
      return new Response(
        JSON.stringify({ error: "No image generated" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Extract base64 data and convert to binary
    const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, "");
    const binaryData = Uint8Array.from(atob(base64Data), c => c.charCodeAt(0));

    // Upload to storage
    const storagePath = `${postId}.png`;
    const { error: uploadError } = await supabase.storage
      .from("og-images")
      .upload(storagePath, binaryData, {
        contentType: "image/png",
        upsert: true,
      });

    if (uploadError) {
      console.error("Storage upload error:", uploadError);
      // Return base64 as fallback
      return new Response(
        JSON.stringify({ imageUrl: base64Image, cached: false }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from("og-images")
      .getPublicUrl(storagePath);

    const publicUrl = urlData.publicUrl;

    // Cache the URL in database
    await supabase
      .from("og_image_cache")
      .upsert({
        post_id: postId,
        storage_path: storagePath,
        public_url: publicUrl,
        updated_at: new Date().toISOString(),
      }, { onConflict: "post_id" });

    console.log("OG image generated and cached for:", postId);

    return new Response(
      JSON.stringify({ imageUrl: publicUrl, cached: false }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error generating OG image:", errorMessage);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

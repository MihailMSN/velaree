import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { concept } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const prompts: Record<string, string> = {
      "geometric": `Create a professional minimalist logo for "Velaree", a travel technology API company. Design a modern geometric "V" lettermark with an integrated arc or flight path suggesting travel trajectory and speed. Style: Clean vector-style, corporate tech aesthetic. Colors: Deep navy blue (#1e3a5f) as primary with a teal/cyan accent (#14b8a6). The logo should work on both light and dark backgrounds. No text, just the symbol. White background. Ultra clean edges, suitable for all sizes.`,
      
      "network": `Create a professional minimalist logo for "Velaree", a travel technology API company. Design a modern "V" formed by interconnected nodes and lines, representing data connectivity and API network architecture. Style: Clean tech/startup aesthetic, vector-style. Colors: Deep navy blue (#1e3a5f) with teal accent nodes (#14b8a6). The logo should be simple yet memorable, working at small sizes. No text, just the symbol. White background. Ultra high resolution.`,
      
      "speed": `Create a professional minimalist logo for "Velaree", a travel technology API company. Design a sleek, dynamic "V" lettermark with motion lines or speed streaks suggesting velocity and efficiency. Think aviation meets fintech. Style: Modern, premium, corporate. Colors: Deep navy (#1e3a5f) with gradient to teal (#14b8a6). Clean edges, no text, just the symbol. White background. Ultra high resolution, vector-style clean.`
    };

    const prompt = prompts[concept] || prompts["geometric"];

    console.log("Generating logo with concept:", concept);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-image-preview",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        modalities: ["image", "text"],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required. Please add credits." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    console.log("AI response received");

    const imageUrl = data.choices?.[0]?.message?.images?.[0]?.image_url?.url;
    const textContent = data.choices?.[0]?.message?.content;

    return new Response(
      JSON.stringify({ 
        image: imageUrl,
        description: textContent,
        concept 
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error generating logo:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

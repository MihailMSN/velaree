import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface UseOGImageOptions {
  title: string;
  category: string;
  author: string;
  postId: string;
  readTime?: string;
  autoGenerate?: boolean;
}

interface UseOGImageResult {
  ogImageUrl: string | null;
  isLoading: boolean;
  error: string | null;
  generate: () => Promise<void>;
}

export const useOGImage = ({
  title,
  category,
  author,
  postId,
  readTime,
  autoGenerate = true,
}: UseOGImageOptions): UseOGImageResult => {
  const [ogImageUrl, setOgImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generate = async (forceRegenerate = false) => {
    if (!title || !postId) return;
    
    setIsLoading(true);
    setError(null);

    try {
      const { data, error: fnError } = await supabase.functions.invoke(
        "generate-og-image",
        {
          body: { title, category, author, postId, readTime, forceRegenerate },
        }
      );

      if (fnError) {
        throw new Error(fnError.message);
      }

      if (data?.imageUrl) {
        setOgImageUrl(data.imageUrl);
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Failed to generate OG image";
      console.error("OG image error:", errorMessage);
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const checkCache = async () => {
      if (!postId) return;

      // First check if we have a cached image
      const { data: cached } = await supabase
        .from("og_image_cache")
        .select("public_url")
        .eq("post_id", postId)
        .single();

      if (cached?.public_url) {
        setOgImageUrl(cached.public_url);
        return;
      }

      // If auto-generate is enabled and no cache, generate
      if (autoGenerate) {
        generate();
      }
    };

    checkCache();
  }, [postId, autoGenerate]);

  return { 
    ogImageUrl, 
    isLoading, 
    error, 
    generate: () => generate(true) 
  };
};

// Utility to get cached OG image URL synchronously (for SSR/meta tags)
export const getCachedOGImageUrl = async (postId: string): Promise<string | null> => {
  const { data } = await supabase
    .from("og_image_cache")
    .select("public_url")
    .eq("post_id", postId)
    .single();

  return data?.public_url || null;
};

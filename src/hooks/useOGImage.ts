import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface UseOGImageOptions {
  title: string;
  category: string;
  author: string;
  postId: string;
  readTime?: string;
}

interface UseOGImageResult {
  ogImageUrl: string | null;
  isLoading: boolean;
  error: string | null;
}

// Simple in-memory cache for generated images
const imageCache = new Map<string, string>();

export const useOGImage = ({
  title,
  category,
  author,
  postId,
  readTime,
}: UseOGImageOptions): UseOGImageResult => {
  const [ogImageUrl, setOgImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const generateImage = async () => {
      // Check cache first
      if (imageCache.has(postId)) {
        setOgImageUrl(imageCache.get(postId)!);
        return;
      }

      // For now, we'll skip automatic generation to avoid API costs
      // Users can trigger generation manually or we use a fallback
      // setIsLoading(true);
      // setError(null);

      // try {
      //   const { data, error: fnError } = await supabase.functions.invoke(
      //     "generate-og-image",
      //     {
      //       body: { title, category, author, readTime },
      //     }
      //   );

      //   if (fnError) throw fnError;

      //   if (data?.imageUrl) {
      //     imageCache.set(postId, data.imageUrl);
      //     setOgImageUrl(data.imageUrl);
      //   }
      // } catch (err: any) {
      //   console.error("Failed to generate OG image:", err);
      //   setError(err.message);
      // } finally {
      //   setIsLoading(false);
      // }
    };

    if (title && category && author) {
      generateImage();
    }
  }, [title, category, author, postId, readTime]);

  return { ogImageUrl, isLoading, error };
};

// Manual generation function for on-demand use
export const generateOGImage = async (
  title: string,
  category: string,
  author: string,
  readTime?: string
): Promise<string | null> => {
  try {
    const { data, error } = await supabase.functions.invoke("generate-og-image", {
      body: { title, category, author, readTime },
    });

    if (error) throw error;
    return data?.imageUrl || null;
  } catch (err) {
    console.error("Failed to generate OG image:", err);
    return null;
  }
};

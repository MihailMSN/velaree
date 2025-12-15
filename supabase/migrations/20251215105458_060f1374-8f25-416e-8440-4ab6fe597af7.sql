-- Create storage bucket for OG images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('og-images', 'og-images', true);

-- Allow public read access to OG images
CREATE POLICY "Public can view OG images"
ON storage.objects FOR SELECT
USING (bucket_id = 'og-images');

-- Allow edge functions to manage OG images (using service role)
CREATE POLICY "Service role can manage OG images"
ON storage.objects FOR ALL
USING (bucket_id = 'og-images')
WITH CHECK (bucket_id = 'og-images');

-- Create a table to track generated OG images
CREATE TABLE public.og_image_cache (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id TEXT NOT NULL UNIQUE,
  storage_path TEXT NOT NULL,
  public_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.og_image_cache ENABLE ROW LEVEL SECURITY;

-- Allow public read access to cached URLs
CREATE POLICY "Anyone can read OG image cache"
ON public.og_image_cache FOR SELECT
USING (true);

-- Create index for fast lookups
CREATE INDEX idx_og_image_cache_post_id ON public.og_image_cache(post_id);
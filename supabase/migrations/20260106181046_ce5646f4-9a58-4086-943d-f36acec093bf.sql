-- Drop OG image cache table
DROP TABLE IF EXISTS public.og_image_cache;

-- Delete storage bucket contents and bucket
DELETE FROM storage.objects WHERE bucket_id = 'og-images';
DELETE FROM storage.buckets WHERE id = 'og-images';
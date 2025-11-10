-- Create contact_requests table to store lead submissions
CREATE TABLE public.contact_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  role TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit contact requests (it's a public lead form)
CREATE POLICY "Anyone can create contact requests"
ON public.contact_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Create index for sorting by date
CREATE INDEX idx_contact_requests_created_at ON public.contact_requests(created_at DESC);

-- Create platform_stats table for real-time metrics
CREATE TABLE public.platform_stats (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  metric_name TEXT NOT NULL UNIQUE,
  value NUMERIC NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.platform_stats ENABLE ROW LEVEL SECURITY;

-- Allow public read access (no auth needed for marketing site)
CREATE POLICY "Public read access to platform stats"
ON public.platform_stats
FOR SELECT
TO anon, authenticated
USING (true);

-- Add trigger for updated_at
CREATE TRIGGER update_platform_stats_updated_at
BEFORE UPDATE ON public.platform_stats
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

-- Seed initial platform stats data
INSERT INTO public.platform_stats (metric_name, value) VALUES
  ('bookings_today', 1247),
  ('searches_hour', 3891),
  ('response_time', 89);

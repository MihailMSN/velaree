-- Create a table for pitch deck download leads
CREATE TABLE public.pitch_deck_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  name TEXT,
  company TEXT,
  downloaded_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  source TEXT DEFAULT 'pitch_deck'
);

-- Enable RLS
ALTER TABLE public.pitch_deck_leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for lead capture)
CREATE POLICY "Anyone can submit their email for pitch deck" 
ON public.pitch_deck_leads 
FOR INSERT 
WITH CHECK (true);

-- Only platform admins can view leads
CREATE POLICY "Platform admins can view pitch deck leads" 
ON public.pitch_deck_leads 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() 
    AND role = 'platform_admin'
  )
);
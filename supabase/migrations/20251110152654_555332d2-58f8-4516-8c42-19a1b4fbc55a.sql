-- Create admin_actions audit log table
CREATE TABLE IF NOT EXISTS public.admin_actions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  action TEXT NOT NULL,
  resource_type TEXT NOT NULL,
  resource_id UUID,
  details JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on admin_actions
ALTER TABLE public.admin_actions ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check if user is platform admin
CREATE OR REPLACE FUNCTION public.is_platform_admin(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = 'platform_admin'
  )
$$;

-- Update contact_requests RLS policies to allow platform admins to view
CREATE POLICY "Platform admins can view all contact requests"
ON public.contact_requests
FOR SELECT
TO authenticated
USING (is_platform_admin(auth.uid()));

CREATE POLICY "Platform admins can update contact requests"
ON public.contact_requests
FOR UPDATE
TO authenticated
USING (is_platform_admin(auth.uid()));

CREATE POLICY "Platform admins can delete contact requests"
ON public.contact_requests
FOR DELETE
TO authenticated
USING (is_platform_admin(auth.uid()));

-- Update platform_stats RLS policies to allow platform admins to update
CREATE POLICY "Platform admins can update platform stats"
ON public.platform_stats
FOR UPDATE
TO authenticated
USING (is_platform_admin(auth.uid()));

-- RLS policies for admin_actions
CREATE POLICY "Platform admins can view all admin actions"
ON public.admin_actions
FOR SELECT
TO authenticated
USING (is_platform_admin(auth.uid()));

CREATE POLICY "Authenticated users can insert their own admin actions"
ON public.admin_actions
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Add indexes for performance
CREATE INDEX IF NOT EXISTS idx_admin_actions_user_id ON public.admin_actions(user_id);
CREATE INDEX IF NOT EXISTS idx_admin_actions_created_at ON public.admin_actions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_requests_status ON public.contact_requests(status);
CREATE INDEX IF NOT EXISTS idx_contact_requests_created_at ON public.contact_requests(created_at DESC);
-- Allow platform admins to insert new platform stats
CREATE POLICY "Platform admins can insert platform stats"
ON public.platform_stats
FOR INSERT
WITH CHECK (is_platform_admin(auth.uid()));

-- Allow platform admins to delete platform stats
CREATE POLICY "Platform admins can delete platform stats"
ON public.platform_stats
FOR DELETE
USING (is_platform_admin(auth.uid()));
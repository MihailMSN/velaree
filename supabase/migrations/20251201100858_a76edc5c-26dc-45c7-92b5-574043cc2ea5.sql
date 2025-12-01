-- Fix 1: Remove the dangerous "Users can create their own roles" policy
DROP POLICY IF EXISTS "Users can create their own roles" ON public.user_roles;

-- Fix 2: Add CHECK constraint to contact_requests status field
ALTER TABLE public.contact_requests 
ADD CONSTRAINT valid_contact_status 
CHECK (status IN ('new', 'contacted', 'qualified', 'closed'));

-- Fix 3: Add status field to business_accounts for approval workflow
ALTER TABLE public.business_accounts 
ADD COLUMN IF NOT EXISTS status text NOT NULL DEFAULT 'pending' 
CHECK (status IN ('pending', 'active', 'suspended'));

-- Fix 4: Update business_accounts INSERT policy to only allow pending status
DROP POLICY IF EXISTS "Authenticated users can create business accounts" ON public.business_accounts;

CREATE POLICY "Authenticated users can create pending business accounts" 
ON public.business_accounts 
FOR INSERT 
TO authenticated
WITH CHECK (status = 'pending');

-- Fix 5: Only platform admins can activate business accounts
CREATE POLICY "Platform admins can update business account status" 
ON public.business_accounts 
FOR UPDATE 
TO authenticated
USING (is_platform_admin(auth.uid()))
WITH CHECK (true);

-- Fix 6: Create secure function for business admins to assign roles (not platform_admin)
CREATE OR REPLACE FUNCTION public.assign_business_role(
  _target_user_id uuid,
  _business_account_id uuid,
  _role app_role
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Prevent assigning platform_admin role through this function
  IF _role = 'platform_admin' THEN
    RAISE EXCEPTION 'Cannot assign platform_admin role through this function';
  END IF;
  
  -- Check if caller is a business_admin for this business account
  IF NOT has_role(auth.uid(), _business_account_id, 'business_admin') THEN
    RAISE EXCEPTION 'Only business admins can assign roles';
  END IF;
  
  -- Insert the role
  INSERT INTO public.user_roles (user_id, business_account_id, role)
  VALUES (_target_user_id, _business_account_id, _role)
  ON CONFLICT (user_id, business_account_id) 
  DO UPDATE SET role = _role;
  
  RETURN true;
END;
$$;

-- Fix 7: Add unique constraint if not exists for user_roles
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint 
    WHERE conname = 'user_roles_user_business_unique'
  ) THEN
    ALTER TABLE public.user_roles 
    ADD CONSTRAINT user_roles_user_business_unique 
    UNIQUE (user_id, business_account_id);
  END IF;
EXCEPTION WHEN duplicate_object THEN
  NULL;
END $$;
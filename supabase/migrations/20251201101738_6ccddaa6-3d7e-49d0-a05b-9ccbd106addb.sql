-- Add CHECK constraint for contact_requests status (if not exists)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint 
    WHERE conname = 'contact_requests_status_check'
  ) THEN
    ALTER TABLE public.contact_requests 
    ADD CONSTRAINT contact_requests_status_check 
    CHECK (status IN ('new', 'contacted', 'qualified', 'closed'));
  END IF;
END $$;

-- Add unique constraint on user_roles (if not exists)
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
END $$;
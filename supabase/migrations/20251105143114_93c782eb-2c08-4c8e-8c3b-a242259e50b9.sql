-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('business_admin', 'business_user');

-- Create enum for PNR status
CREATE TYPE public.pnr_status AS ENUM ('pending', 'processing', 'completed', 'failed');

-- Create business_accounts table
CREATE TABLE public.business_accounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name TEXT NOT NULL,
  contact_email TEXT NOT NULL,
  contact_phone TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.business_accounts ENABLE ROW LEVEL SECURITY;

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  business_account_id UUID REFERENCES public.business_accounts(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL DEFAULT 'business_user',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, business_account_id)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create pnrs table for storing PNR submissions
CREATE TABLE public.pnrs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_account_id UUID REFERENCES public.business_accounts(id) ON DELETE CASCADE NOT NULL,
  pnr_code TEXT NOT NULL,
  submitted_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  status pnr_status NOT NULL DEFAULT 'pending',
  original_price DECIMAL(10, 2),
  best_price DECIMAL(10, 2),
  potential_savings DECIMAL(10, 2),
  gds_source TEXT,
  route_info JSONB,
  passenger_count INTEGER,
  reshop_results JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.pnrs ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check user role
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _business_account_id UUID, _role app_role)
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
      AND business_account_id = _business_account_id
      AND role = _role
  )
$$;

-- Create security definer function to get user's business accounts
CREATE OR REPLACE FUNCTION public.get_user_business_accounts(_user_id UUID)
RETURNS SETOF UUID
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT business_account_id
  FROM public.user_roles
  WHERE user_id = _user_id
$$;

-- RLS Policies for business_accounts
CREATE POLICY "Users can view their business accounts"
  ON public.business_accounts FOR SELECT
  TO authenticated
  USING (id IN (SELECT public.get_user_business_accounts(auth.uid())));

CREATE POLICY "Business admins can update their accounts"
  ON public.business_accounts FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), id, 'business_admin'));

CREATE POLICY "Anyone can create business accounts"
  ON public.business_accounts FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- RLS Policies for user_roles
CREATE POLICY "Users can view their own roles"
  ON public.user_roles FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Business admins can manage roles"
  ON public.user_roles FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), business_account_id, 'business_admin'));

-- RLS Policies for pnrs
CREATE POLICY "Users can view PNRs from their business accounts"
  ON public.pnrs FOR SELECT
  TO authenticated
  USING (business_account_id IN (SELECT public.get_user_business_accounts(auth.uid())));

CREATE POLICY "Users can create PNRs for their business accounts"
  ON public.pnrs FOR INSERT
  TO authenticated
  WITH CHECK (business_account_id IN (SELECT public.get_user_business_accounts(auth.uid())));

CREATE POLICY "Users can update PNRs from their business accounts"
  ON public.pnrs FOR UPDATE
  TO authenticated
  USING (business_account_id IN (SELECT public.get_user_business_accounts(auth.uid())));

-- Create trigger function for updated_at
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Add triggers for updated_at
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.business_accounts
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.pnrs
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();
-- Drop the restrictive policy on business_accounts
DROP POLICY IF EXISTS "Anyone can create business accounts" ON business_accounts;

-- Create a permissive policy allowing authenticated users to insert
CREATE POLICY "Authenticated users can create business accounts"
  ON business_accounts
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Add policy to allow users to create their own role assignments
CREATE POLICY "Users can create their own roles"
  ON user_roles
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());
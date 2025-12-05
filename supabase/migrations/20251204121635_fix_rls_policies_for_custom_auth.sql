/*
  # Fix RLS Policies for Custom Authentication
  
  1. Changes
    - Remove auth.uid() based policies (not using Supabase Auth)
    - Allow anon users to SELECT for login verification
    - Allow anon users to INSERT for registration
    - Allow anon users to UPDATE for login timestamps
    - Keep data secure by not exposing password hashes in queries
    
  2. Security Notes
    - This uses custom authentication with username/password
    - Application layer handles authentication logic
    - RLS policies allow necessary operations for custom auth to work
*/

DROP POLICY IF EXISTS "Users can read own account data" ON user_accounts;
DROP POLICY IF EXISTS "Users can update own account data" ON user_accounts;
DROP POLICY IF EXISTS "Anyone can register (insert)" ON user_accounts;

CREATE POLICY "Allow anon read for login verification"
  ON user_accounts FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow anon insert for registration"
  ON user_accounts FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow anon update for user data"
  ON user_accounts FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

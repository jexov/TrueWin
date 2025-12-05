/*
  # Create User Accounts Table

  1. New Tables
    - `user_accounts`
      - `id` (uuid, primary key) - Unique identifier for each user
      - `user_id` (text, unique) - Generated user ID for display
      - `primary_username` (text, unique) - Main username (required)
      - `telegram_username` (text, unique, nullable) - Optional Telegram username
      - `instagram_username` (text, unique, nullable) - Optional Instagram username
      - `password` (text) - User password (stored as plain text per requirements)
      - `tokens_owned` (integer, default 0) - Number of tokens the user owns
      - `vip_status` (boolean, default false) - Whether user has active VIP
      - `vip_tier` (text, nullable) - VIP tier (Basic, Pro, Elite, Ultra)
      - `vip_expiry` (timestamptz, nullable) - VIP expiration date
      - `created_at` (timestamptz) - Account creation timestamp
      - `last_login` (timestamptz, nullable) - Last login timestamp
      - `is_active` (boolean, default true) - Account active status
      
  2. Security
    - Enable RLS on `user_accounts` table
    - Add policies for users to read and update their own data
    - Add policy for user registration (insert)
*/

CREATE TABLE IF NOT EXISTS user_accounts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text UNIQUE NOT NULL DEFAULT 'TW' || LPAD(FLOOR(RANDOM() * 1000000)::text, 6, '0'),
  primary_username text UNIQUE NOT NULL,
  telegram_username text UNIQUE,
  instagram_username text UNIQUE,
  password text NOT NULL,
  tokens_owned integer DEFAULT 0,
  vip_status boolean DEFAULT false,
  vip_tier text,
  vip_expiry timestamptz,
  created_at timestamptz DEFAULT now(),
  last_login timestamptz,
  is_active boolean DEFAULT true
);

ALTER TABLE user_accounts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own account data"
  ON user_accounts FOR SELECT
  TO authenticated
  USING (auth.uid()::text = id::text);

CREATE POLICY "Users can update own account data"
  ON user_accounts FOR UPDATE
  TO authenticated
  USING (auth.uid()::text = id::text)
  WITH CHECK (auth.uid()::text = id::text);

CREATE POLICY "Anyone can register (insert)"
  ON user_accounts FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_user_accounts_primary_username ON user_accounts(primary_username);
CREATE INDEX IF NOT EXISTS idx_user_accounts_telegram_username ON user_accounts(telegram_username);
CREATE INDEX IF NOT EXISTS idx_user_accounts_instagram_username ON user_accounts(instagram_username);
CREATE INDEX IF NOT EXISTS idx_user_accounts_user_id ON user_accounts(user_id);
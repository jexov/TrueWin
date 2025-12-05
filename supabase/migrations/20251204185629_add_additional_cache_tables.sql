/*
  # Add Additional Cache Tables
  
  1. New Tables
    - `token_sales_cache` - Stores token sales log from CSV
      - `id` (uuid, primary key)
      - `transaction_id` (text) - Unique transaction identifier
      - `user_id` (text) - User who purchased tokens
      - `tokens_purchased` (integer) - Number of tokens purchased
      - `amount_paid` (numeric) - Amount paid in INR
      - `payment_method` (text) - Payment method used
      - `payment_id` (text) - Payment gateway transaction ID
      - `purchase_date` (timestamptz) - When tokens were purchased
      - `created_at` (timestamptz) - Record creation timestamp
    
    - `vip_members_cache` - Stores VIP members list from CSV
      - `id` (uuid, primary key)
      - `user_id` (text) - User identifier
      - `username` (text) - Username
      - `vip_tier` (text) - VIP tier (Basic, Pro, Elite, Ultra)
      - `start_date` (timestamptz) - VIP start date
      - `expiry_date` (timestamptz) - VIP expiration date
      - `is_active` (boolean) - Whether VIP is currently active
      - `created_at` (timestamptz) - Record creation timestamp
    
    - `payout_log_cache` - Stores payout history from CSV
      - `id` (uuid, primary key)
      - `payout_id` (text) - Unique payout identifier
      - `user_id` (text) - User receiving payout
      - `username` (text) - Username
      - `amount` (numeric) - Payout amount in INR
      - `upi_id` (text) - UPI ID used for payout
      - `status` (text) - Payout status (pending, completed, failed)
      - `payout_date` (timestamptz) - When payout was processed
      - `proof_link` (text) - Link to payout proof
      - `created_at` (timestamptz) - Record creation timestamp
      
  2. Security
    - Enable RLS on all tables
    - Public read access for transparency
    - Only backend can write via service role
    
  3. Notes
    - These tables cache data from Google Sheets
    - Updated regularly via edge function
    - Provides fast access to historical data
*/

CREATE TABLE IF NOT EXISTS token_sales_cache (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  transaction_id text NOT NULL,
  user_id text NOT NULL,
  tokens_purchased integer NOT NULL,
  amount_paid numeric NOT NULL,
  payment_method text,
  payment_id text,
  purchase_date timestamptz NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS vip_members_cache (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text NOT NULL,
  username text NOT NULL,
  vip_tier text NOT NULL,
  start_date timestamptz NOT NULL,
  expiry_date timestamptz NOT NULL,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS payout_log_cache (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  payout_id text NOT NULL,
  user_id text NOT NULL,
  username text NOT NULL,
  amount numeric NOT NULL,
  upi_id text,
  status text DEFAULT 'pending',
  payout_date timestamptz NOT NULL,
  proof_link text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE token_sales_cache ENABLE ROW LEVEL SECURITY;
ALTER TABLE vip_members_cache ENABLE ROW LEVEL SECURITY;
ALTER TABLE payout_log_cache ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read token sales"
  ON token_sales_cache FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can read VIP members"
  ON vip_members_cache FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can read payout logs"
  ON payout_log_cache FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_token_sales_user_id ON token_sales_cache(user_id);
CREATE INDEX IF NOT EXISTS idx_token_sales_date ON token_sales_cache(purchase_date DESC);
CREATE INDEX IF NOT EXISTS idx_vip_members_user_id ON vip_members_cache(user_id);
CREATE INDEX IF NOT EXISTS idx_vip_members_username ON vip_members_cache(username);
CREATE INDEX IF NOT EXISTS idx_vip_members_expiry ON vip_members_cache(expiry_date DESC);
CREATE INDEX IF NOT EXISTS idx_payout_log_user_id ON payout_log_cache(user_id);
CREATE INDEX IF NOT EXISTS idx_payout_log_username ON payout_log_cache(username);
CREATE INDEX IF NOT EXISTS idx_payout_log_date ON payout_log_cache(payout_date DESC);
CREATE INDEX IF NOT EXISTS idx_payout_log_status ON payout_log_cache(status);
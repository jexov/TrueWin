/*
  # Create Cached Data Tables

  1. New Tables
    - `winners_cache` - Stores cached winner data from CSV
    - `stats_cache` - Stores monthly statistics from CSV
    - `banned_users_cache` - Stores banned users list from CSV
    - `token_purchases` - Tracks token purchases
    - `vip_purchases` - Tracks VIP membership purchases
    
  2. Details
    Winners Cache:
      - giveaway_id, date, winner_username, prize_amount, token_used, proof_link
    
    Stats Cache:
      - total_giveaways, total_winners, total_payouts, active_vips, last_updated
    
    Banned Users Cache:
      - username, reason, ban_date, telegram_username, instagram_username
    
    Token Purchases:
      - user_id, amount, tokens_purchased, payment_id, status
    
    VIP Purchases:
      - user_id, plan_name, duration_months, amount, payment_id, status
      
  3. Security
    - Enable RLS on all tables
    - Public read access for public data (winners, stats, banned users)
    - Restricted access for purchase logs
*/

CREATE TABLE IF NOT EXISTS winners_cache (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  giveaway_id text NOT NULL,
  date timestamptz NOT NULL,
  winner_username text NOT NULL,
  prize_amount numeric NOT NULL,
  token_used boolean DEFAULT false,
  proof_link text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS stats_cache (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  total_giveaways integer DEFAULT 0,
  total_winners integer DEFAULT 0,
  total_payouts numeric DEFAULT 0,
  active_vips integer DEFAULT 0,
  last_updated timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS banned_users_cache (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  username text NOT NULL,
  reason text,
  ban_date timestamptz NOT NULL,
  telegram_username text,
  instagram_username text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS token_purchases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES user_accounts(id),
  amount numeric NOT NULL,
  tokens_purchased integer NOT NULL,
  payment_id text,
  payment_status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS vip_purchases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES user_accounts(id),
  plan_name text NOT NULL,
  duration_months integer NOT NULL,
  amount numeric NOT NULL,
  payment_id text,
  payment_status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE winners_cache ENABLE ROW LEVEL SECURITY;
ALTER TABLE stats_cache ENABLE ROW LEVEL SECURITY;
ALTER TABLE banned_users_cache ENABLE ROW LEVEL SECURITY;
ALTER TABLE token_purchases ENABLE ROW LEVEL SECURITY;
ALTER TABLE vip_purchases ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read winners"
  ON winners_cache FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can read stats"
  ON stats_cache FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can read banned users"
  ON banned_users_cache FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Users can read own token purchases"
  ON token_purchases FOR SELECT
  TO authenticated
  USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can read own VIP purchases"
  ON vip_purchases FOR SELECT
  TO authenticated
  USING (auth.uid()::text = user_id::text);

CREATE INDEX IF NOT EXISTS idx_winners_cache_date ON winners_cache(date DESC);
CREATE INDEX IF NOT EXISTS idx_winners_cache_username ON winners_cache(winner_username);
CREATE INDEX IF NOT EXISTS idx_banned_users_username ON banned_users_cache(username);
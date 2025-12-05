/*
  # Add Monthly Stats and Proofs Cache Tables

  1. New Tables
    - `monthly_stats_cache`
      - `id` (uuid, primary key)
      - `month` (text) - Month name (e.g., "Jan", "Feb")
      - `total_giveaways` (integer) - Number of giveaways in month
      - `total_winners` (integer) - Number of winners in month
      - `total_prize_distributed` (numeric) - Total prize money distributed
      - `vip_revenue` (numeric) - Revenue from VIP sales
      - `total_tokens_sold` (integer) - Number of tokens sold
      - `created_at` (timestamp)
    
    - `proofs_cache`
      - `id` (uuid, primary key)
      - `giveaway_id` (text) - Giveaway identifier
      - `date` (timestamptz) - Date of giveaway
      - `winner_username` (text) - Winner's username
      - `proof_link` (text) - Link to proof
      - `prize` (text) - Prize amount or description
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for public read access
*/

-- Create monthly_stats_cache table
CREATE TABLE IF NOT EXISTS monthly_stats_cache (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  month text NOT NULL,
  total_giveaways integer DEFAULT 0,
  total_winners integer DEFAULT 0,
  total_prize_distributed numeric DEFAULT 0,
  vip_revenue numeric DEFAULT 0,
  total_tokens_sold integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE monthly_stats_cache ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view monthly stats"
  ON monthly_stats_cache FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create proofs_cache table
CREATE TABLE IF NOT EXISTS proofs_cache (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  giveaway_id text,
  date timestamptz,
  winner_username text NOT NULL,
  proof_link text,
  prize text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE proofs_cache ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view proofs"
  ON proofs_cache FOR SELECT
  TO anon, authenticated
  USING (true);
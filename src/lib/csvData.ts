import Papa from 'papaparse';

export const CSV_URLS = {
  winners: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRTFfbvRXpFFbLBNz1UIFf3TqIl3VsZbZ-mJTUpEfB-uST7UWr6RlsNCcftZrPLA94PFi0yzQvZzM73/pub?gid=0&single=true&output=csv',
  stats: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTrCtJjkcSqg-QCXZ1B3U-NAb0dzm9H08F3wfWrUKMlw8Ox1N_SKeKjNBdxbIeRZgugdxPfMssFBWvK/pub?output=csv',
  tokenSales: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_MsiRso7s2osQ__ur2ljWNht61_h2ne2MavqwEnwW6a1FqLCoqWWnNAHf6x4zoPsY904ugu5g4YQL/pub?output=csv',
  vipMembers: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRvPMe9_npNUSc_w93k0sfS-4h8h4bYx1vR5PNwfNukLqJ1Jd1KZkBsXQh50hGaQtJPmNcTBk0GWyj7/pub?output=csv',
  bannedUsers: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRaPfEeCL_iO0tY8CqBCsmJCjg67izTZad-1LgjKqBmp1AT5mXVQQaYLnIMzrUj6JQZE36lS1aZPdYg/pub?output=csv',
  payoutLog: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSaDCg5J18QTN0P89SgVeuHnEJHhk9x1sDs5dW06R0D1pVerJ57JGDahaIKblZxeztYkxLAZt8fXwy_/pub?output=csv',
  userAccounts: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ0yBage8NWWZZYS26DksKOJZFvF5wDhKq_hXZrrFuvkyFPvLDGQuISuaiF8p8enk-G5N6Ol4QI4cc2/pub?gid=0&single=true&output=csv',
};

export async function fetchCSVData<T>(url: string): Promise<T[]> {
  try {
    const response = await fetch(url);
    const csvText = await response.text();

    return new Promise((resolve, reject) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          resolve(results.data as T[]);
        },
        error: (error) => {
          reject(error);
        },
      });
    });
  } catch (error) {
    console.error('Error fetching CSV data:', error);
    return [];
  }
}

export interface WinnerData {
  giveaway_id: string;
  date: string;
  winner_username: string;
  prize_amount: string;
  token_used: string;
  proof_link: string;
}

export interface StatsData {
  total_giveaways: string;
  total_winners: string;
  total_payouts: string;
  active_vips: string;
}

export interface BannedUserData {
  username: string;
  reason: string;
  ban_date: string;
  telegram_username?: string;
  instagram_username?: string;
}

export interface UserAccountData {
  user_id: string;
  primary_username: string;
  telegram_username?: string;
  instagram_username?: string;
  password: string;
  tokens_owned: string;
  vip_status: string;
  vip_tier?: string;
  vip_expiry?: string;
  created_at: string;
  last_login?: string;
  is_active: string;
}

export interface TokenSaleData {
  transaction_id: string;
  user_id: string;
  tokens_purchased: string;
  amount_paid: string;
  payment_method?: string;
  payment_id?: string;
  purchase_date: string;
}

export interface VIPMemberData {
  user_id: string;
  username: string;
  vip_tier: string;
  start_date: string;
  expiry_date: string;
  is_active: string;
}

export interface PayoutLogData {
  payout_id: string;
  user_id: string;
  username: string;
  amount: string;
  upi_id?: string;
  status: string;
  payout_date: string;
  proof_link?: string;
}

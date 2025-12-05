import { createClient } from 'npm:@supabase/supabase-js@2.57.4';
import Papa from 'npm:papaparse@5.5.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

const CSV_URLS = {
  winners: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRTFfbvRXpFFbLBNz1UIFf3TqIl3VsZbZ-mJTUpEfB-uST7UWr6RlsNCcftZrPLA94PFi0yzQvZzM73/pub?gid=0&single=true&output=csv',
  userAccounts: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ0yBage8NWWZZYS26DksKOJZFvF5wDhKq_hXZrrFuvkyFPvLDGQuISuaiF8p8enk-G5N6Ol4QI4cc2/pub?gid=0&single=true&output=csv',
  monthlyStats: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTrCtJjkcSqg-QCXZ1B3U-NAb0dzm9H08F3wfWrUKMlw8Ox1N_SKeKjNBdxbIeRZgugdxPfMssFBWvK/pub?gid=0&single=true&output=csv',
  proofs: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR-UvI45jS5KOSjO5M25Yad7ONCvxIi1d_13dWvCWpjF2aOnkzcKBB_2ZQeZ1h2bAetZCY8vAQPasBw/pub?gid=0&single=true&output=csv',
  bannedUsers: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRaPfEeCL_iO0tY8CqBCsmJCjg67izTZad-1LgjKqBmp1AT5mXVQQaYLnIMzrUj6JQZE36lS1aZPdYg/pub?gid=0&single=true&output=csv',
  payoutLog: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSaDCg5J18QTN0P89SgVeuHnEJHhk9x1sDs5dW06R0D1pVerJ57JGDahaIKblZxeztYkxLAZt8fXwy_/pub?gid=0&single=true&output=csv',
};

function parseDate(dateString: string): string {
  if (!dateString || dateString.trim() === '') {
    return new Date().toISOString();
  }

  const parts = dateString.split('/');
  if (parts.length === 3) {
    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1;
    let year = parseInt(parts[2]);

    if (year < 100) {
      year += 2000;
    }

    const parsedDate = new Date(year, month, day);
    if (!isNaN(parsedDate.getTime())) {
      return parsedDate.toISOString();
    }
  }

  const date = new Date(dateString);
  if (!isNaN(date.getTime())) {
    return date.toISOString();
  }

  return new Date().toISOString();
}

function parsePrizeAmount(prizeString: string): number {
  if (!prizeString) return 0;
  const cleaned = prizeString.replace(/[₹,\s]/g, '');
  const amount = parseFloat(cleaned);
  return isNaN(amount) ? 0 : amount;
}

async function fetchCSV(url: string): Promise<Record<string, string>[]> {
  const response = await fetch(url);
  const csvText = await response.text();

  return new Promise((resolve, reject) => {
    Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => resolve(results.data as Record<string, string>[]),
      error: (error: Error) => reject(error),
    });
  });
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const results: Record<string, { success: boolean; count: number; error?: string }> = {
      winners: { success: false, count: 0 },
      monthlyStats: { success: false, count: 0 },
      proofs: { success: false, count: 0 },
      bannedUsers: { success: false, count: 0 },
      payoutLog: { success: false, count: 0 },
      userAccounts: { success: false, count: 0 },
    };

    try {
      const winnersData = await fetchCSV(CSV_URLS.winners);

      await supabase.from('winners_cache').delete().neq('id', '00000000-0000-0000-0000-000000000000');

      const winnersToInsert = winnersData
        .filter((row) => row['Winner Username'] && row['Winner Username'].trim() !== '')
        .map((row) => ({
          giveaway_id: row['Giveaway ID'] || '',
          date: parseDate(row['Date']),
          winner_username: row['Winner Username'],
          prize_amount: parsePrizeAmount(row['Prize']),
          token_used: false,
          proof_link: row['Proof Link'] || null,
        }));

      if (winnersToInsert.length > 0) {
        const { error: winnersError } = await supabase
          .from('winners_cache')
          .insert(winnersToInsert);

        if (!winnersError) {
          results.winners = { success: true, count: winnersToInsert.length };
        } else {
          results.winners.error = winnersError.message;
        }
      } else {
        results.winners = { success: true, count: 0 };
      }
    } catch (error) {
      console.error('Error syncing winners:', error);
      results.winners.error = (error as Error).message;
    }

    try {
      const monthlyStatsData = await fetchCSV(CSV_URLS.monthlyStats);

      await supabase.from('monthly_stats_cache').delete().neq('id', '00000000-0000-0000-0000-000000000000');

      const monthlyStatsToInsert = monthlyStatsData
        .filter((row) => row['Month'] && row['Month'].trim() !== '')
        .map((row) => ({
          month: row['Month'],
          total_giveaways: parseInt(row['Total_Giveaways']) || 0,
          total_winners: parseInt(row['Total_Winners']) || 0,
          total_prize_distributed: parseFloat(row['Total_Prize_Distributed']) || 0,
          vip_revenue: parseFloat(row['VIP_Revenue']) || 0,
          total_tokens_sold: parseInt(row['Total_Tokens_Sold']) || 0,
        }));

      if (monthlyStatsToInsert.length > 0) {
        const { error: monthlyStatsError } = await supabase
          .from('monthly_stats_cache')
          .insert(monthlyStatsToInsert);

        if (!monthlyStatsError) {
          results.monthlyStats = { success: true, count: monthlyStatsToInsert.length };

          const totalGiveaways = monthlyStatsToInsert.reduce((sum, row) => sum + row.total_giveaways, 0);
          const totalWinners = monthlyStatsToInsert.reduce((sum, row) => sum + row.total_winners, 0);
          const totalPayouts = monthlyStatsToInsert.reduce((sum, row) => sum + row.total_prize_distributed, 0);

          await supabase.from('stats_cache').delete().neq('id', '00000000-0000-0000-0000-000000000000');
          await supabase.from('stats_cache').insert({
            total_giveaways: totalGiveaways,
            total_winners: totalWinners,
            total_payouts: totalPayouts,
            active_vips: 0,
            last_updated: new Date().toISOString(),
          });
        } else {
          results.monthlyStats.error = monthlyStatsError.message;
        }
      } else {
        results.monthlyStats = { success: true, count: 0 };
      }
    } catch (error) {
      console.error('Error syncing monthly stats:', error);
      results.monthlyStats.error = (error as Error).message;
    }

    try {
      const proofsData = await fetchCSV(CSV_URLS.proofs);

      await supabase.from('proofs_cache').delete().neq('id', '00000000-0000-0000-0000-000000000000');

      const proofsToInsert = proofsData
        .filter((row) => row['Winner Username'] && row['Winner Username'].trim() !== '')
        .map((row) => ({
          giveaway_id: row['Giveaway ID'] || '',
          date: parseDate(row['Date']),
          winner_username: row['Winner Username'],
          proof_link: row['Proof Link'] || null,
          prize: row['Prize'] || '',
        }));

      if (proofsToInsert.length > 0) {
        const { error: proofsError } = await supabase
          .from('proofs_cache')
          .insert(proofsToInsert);

        if (!proofsError) {
          results.proofs = { success: true, count: proofsToInsert.length };
        } else {
          results.proofs.error = proofsError.message;
        }
      } else {
        results.proofs = { success: true, count: 0 };
      }
    } catch (error) {
      console.error('Error syncing proofs:', error);
      results.proofs.error = (error as Error).message;
    }

    try {
      const bannedData = await fetchCSV(CSV_URLS.bannedUsers);

      await supabase.from('banned_users_cache').delete().neq('id', '00000000-0000-0000-0000-000000000000');

      const bannedToInsert = bannedData
        .filter((row) => row['Username'] && row['Username'].trim() !== '')
        .map((row) => ({
          username: row['Username'],
          reason: row['Reason'] || null,
          ban_date: parseDate(row['Date']),
          telegram_username: null,
          instagram_username: null,
        }));

      if (bannedToInsert.length > 0) {
        const { error: bannedError } = await supabase
          .from('banned_users_cache')
          .insert(bannedToInsert);

        if (!bannedError) {
          results.bannedUsers = { success: true, count: bannedToInsert.length };
        } else {
          results.bannedUsers.error = bannedError.message;
        }
      } else {
        results.bannedUsers = { success: true, count: 0 };
      }
    } catch (error) {
      console.error('Error syncing banned users:', error);
      results.bannedUsers.error = (error as Error).message;
    }

    try {
      const payoutLogData = await fetchCSV(CSV_URLS.payoutLog);

      await supabase.from('payout_log_cache').delete().neq('id', '00000000-0000-0000-0000-000000000000');

      const payoutLogToInsert = payoutLogData
        .filter((row) => row['Payout_ID'] && row['Payout_ID'].trim() !== '')
        .map((row) => ({
          payout_id: row['Payout_ID'],
          user_id: '',
          username: row['Username'] || '',
          amount: parseFloat(row['Amount']) || 0,
          upi_id: row['UPI'] || null,
          status: row['Status'] || 'pending',
          payout_date: parseDate(row['Date']),
          proof_link: row['Proof_Link'] || null,
        }));

      if (payoutLogToInsert.length > 0) {
        const { error: payoutLogError } = await supabase
          .from('payout_log_cache')
          .insert(payoutLogToInsert);

        if (!payoutLogError) {
          results.payoutLog = { success: true, count: payoutLogToInsert.length };
        } else {
          results.payoutLog.error = payoutLogError.message;
        }
      } else {
        results.payoutLog = { success: true, count: 0 };
      }
    } catch (error) {
      console.error('Error syncing payout log:', error);
      results.payoutLog.error = (error as Error).message;
    }

    try {
      const userAccountsData = await fetchCSV(CSV_URLS.userAccounts);

      const filteredUsers = userAccountsData.filter((row) =>
        row['User_ID'] &&
        row['User_ID'].trim() !== '' &&
        row['Primary_Username'] &&
        row['Primary_Username'].trim() !== ''
      );

      let successCount = 0;

      for (const row of filteredUsers) {
        try {
          const { data: existingUser } = await supabase
            .from('user_accounts')
            .select('id')
            .eq('user_id', row['User_ID'])
            .maybeSingle();

          const userData = {
            primary_username: row['Primary_Username'],
            telegram_username: row['Telegram_Username'] || null,
            instagram_username: row['Instagram_Username'] || null,
            password: row['Password'] || '',
            tokens_owned: parseInt(row['Token_Balance']) || 0,
            vip_status: row['Vip_Status']?.toLowerCase() === 'true' || row['Vip_Status'] === '1',
            vip_tier: row['Vip_Tier'] || null,
            vip_expiry: row['Vip_Expiry'] ? parseDate(row['Vip_Expiry']) : null,
            is_active: row['Is_Active']?.toLowerCase() === 'true' || row['Is_Active'] === '1' || true,
          };

          if (existingUser) {
            await supabase
              .from('user_accounts')
              .update(userData)
              .eq('id', existingUser.id);
          } else {
            await supabase
              .from('user_accounts')
              .insert({
                user_id: row['User_ID'],
                ...userData,
                created_at: row['Created_At'] ? parseDate(row['Created_At']) : new Date().toISOString(),
              });
          }

          successCount++;
        } catch (userError) {
          console.error(`Error syncing user ${row['User_ID']}:`, userError);
        }
      }

      results.userAccounts = { success: true, count: successCount };
    } catch (error) {
      console.error('Error syncing user accounts:', error);
      results.userAccounts.error = (error as Error).message;
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'CSV sync completed',
        results,
      }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Sync error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: (error as Error).message,
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});

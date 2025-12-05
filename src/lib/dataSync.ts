export async function syncCSVData(): Promise<{
  success: boolean;
  results?: unknown;
  error?: string;
}> {
  try {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    const response = await fetch(`${supabaseUrl}/functions/v1/sync-csv-data`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${supabaseAnonKey}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error syncing CSV data:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

export function startAutoSync(intervalMinutes: number = 5): () => void {
  const intervalId = setInterval(() => {
    syncCSVData().then((result) => {
      if (result.success) {
        console.log('Auto-sync completed:', result.results);
      } else {
        console.error('Auto-sync failed:', result.error);
      }
    });
  }, intervalMinutes * 60 * 1000);

  return () => clearInterval(intervalId);
}

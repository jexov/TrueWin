import { useState } from 'react';
import { RefreshCw, CheckCircle, XCircle, Database, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

interface SyncResult {
  success: boolean;
  count?: number;
  error?: string;
}

interface SyncResults {
  winners: SyncResult;
  monthlyStats: SyncResult;
  proofs: SyncResult;
  bannedUsers: SyncResult;
  payoutLog: SyncResult;
  userAccounts: SyncResult;
}

export default function Admin() {
  const [syncing, setSyncing] = useState(false);
  const [results, setResults] = useState<SyncResults | null>(null);
  const [error, setError] = useState('');

  const handleSync = async () => {
    setSyncing(true);
    setError('');
    setResults(null);

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      const response = await fetch(`${supabaseUrl}/functions/v1/sync-csv-data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseKey}`,
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to sync: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      console.log('Sync response:', data);

      if (data.success) {
        setResults(data.results);
      } else {
        setError(data.error || 'Sync failed');
      }
    } catch (err) {
      setError((err as Error).message || 'Failed to connect to sync service');
    } finally {
      setSyncing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden py-12">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-950 to-gray-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex justify-center mb-4"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-50" />
              <Database className="relative text-blue-400" size={48} />
            </div>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Admin Panel</h1>
          <p className="text-xl text-gray-400">Sync CSV data from Google Sheets to database</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-yellow-900/20 backdrop-blur-sm border-2 border-yellow-600/50 rounded-xl p-6 mb-8"
        >
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-lg font-bold text-yellow-300 mb-2">Important</h3>
              <p className="text-gray-300 mb-2">
                This will fetch data from your Google Sheets and update the database cache.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                <li>Winners List will be refreshed</li>
                <li>Monthly Stats will be updated</li>
                <li>Proofs will be synchronized</li>
                <li>Banned Users list will be synchronized</li>
                <li>Payout Log will be synchronized</li>
                <li>User Accounts will be updated</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Data Sources</h2>
          <div className="space-y-3 mb-8">
            {[
              { icon: CheckCircle, title: 'Winners List', desc: 'Public giveaway winners and prizes', color: 'green' },
              { icon: CheckCircle, title: 'Monthly Stats', desc: 'Total giveaways, winners, and revenue', color: 'blue' },
              { icon: CheckCircle, title: 'Proofs', desc: 'Winner proof links and verification', color: 'purple' },
              { icon: CheckCircle, title: 'Banned Users', desc: 'Public ban log with reasons', color: 'red' },
              { icon: CheckCircle, title: 'Payout Log', desc: 'Backend payout transaction history', color: 'cyan' },
              { icon: CheckCircle, title: 'User Accounts', desc: 'Login system user database', color: 'yellow' },
            ].map((source, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 5 }}
                className={`flex items-center gap-3 p-4 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-${source.color}-500/50 transition-all`}
              >
                <source.icon className={`text-${source.color}-400`} size={20} />
                <div className="flex-1">
                  <div className="text-sm font-semibold text-white">{source.title}</div>
                  <div className="text-xs text-gray-400">{source.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSync}
            disabled={syncing}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30"
          >
            <RefreshCw className={syncing ? 'animate-spin' : ''} size={20} />
            {syncing ? 'Syncing Data...' : 'Sync All Data Now'}
          </motion.button>
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-red-900/20 backdrop-blur-sm border-2 border-red-600/50 rounded-xl p-6 mb-8"
          >
            <div className="flex items-start gap-3">
              <XCircle className="text-red-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-bold text-red-300 mb-2">Sync Failed</h3>
                <p className="text-gray-300">{error}</p>
              </div>
            </div>
          </motion.div>
        )}

        {results && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Sync Results</h2>
            <div className="space-y-4">
              {[
                { key: 'winners', label: 'Winners List', data: results.winners },
                { key: 'monthlyStats', label: 'Monthly Stats', data: results.monthlyStats },
                { key: 'proofs', label: 'Proofs', data: results.proofs },
                { key: 'bannedUsers', label: 'Banned Users', data: results.bannedUsers },
                { key: 'payoutLog', label: 'Payout Log', data: results.payoutLog },
                { key: 'userAccounts', label: 'User Accounts', data: results.userAccounts },
              ].map((result, index) => (
                <motion.div
                  key={result.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-gray-800/50 border border-gray-700 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    {result.data.success ? (
                      <CheckCircle className="text-green-400" size={24} />
                    ) : (
                      <XCircle className="text-red-400" size={24} />
                    )}
                    <div>
                      <div className="font-semibold text-white">{result.label}</div>
                      {result.data.success ? (
                        <div className="text-sm text-green-400">
                          {result.data.count !== undefined ? `Successfully synced ${result.data.count} records` : 'Successfully synced'}
                        </div>
                      ) : (
                        <div className="text-sm text-red-400">{result.data.error || 'Unknown error occurred'}</div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {results.winners.success && results.monthlyStats.success && results.proofs.success &&
             results.bannedUsers.success && results.payoutLog.success && results.userAccounts.success && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-6 p-4 bg-green-900/20 border-2 border-green-600/50 rounded-lg backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 text-green-300">
                  <CheckCircle size={20} />
                  <span className="font-semibold">Data sync completed successfully!</span>
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  Your website is now displaying the latest data from Google Sheets.
                </p>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { Shield, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';

interface BannedUserData {
  username: string;
  reason: string;
  ban_date: string;
  telegram_username?: string;
  instagram_username?: string;
}

export default function Logs() {
  const [bannedUsers, setBannedUsers] = useState<BannedUserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchBannedUsers() {
      const { data, error } = await supabase
        .from('banned_users_cache')
        .select('*')
        .order('ban_date', { ascending: false });

      if (!error && data) {
        setBannedUsers(data);
      }
      setLoading(false);
    }
    fetchBannedUsers();
  }, []);

  const filteredUsers = bannedUsers.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.telegram_username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.instagram_username?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden py-12">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-gray-950 to-gray-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-900/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
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
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-2xl opacity-50" />
              <Shield className="relative text-red-400" size={48} />
            </div>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Public Logs</h1>
          <p className="text-xl text-gray-400">Complete transparency: Banned users and reasons</p>
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
              <h3 className="text-lg font-bold text-yellow-300 mb-2">Transparency & Accountability</h3>
              <p className="text-gray-300">
                This public log maintains complete transparency about users who have been banned from our platform.
                We believe in accountability and protecting our community from fraudulent activities.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl p-6 mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Shield className="text-blue-400" size={20} />
            <h3 className="text-lg font-semibold text-white">Search Banned Users</h3>
          </div>
          <input
            type="text"
            placeholder="Search by username, Telegram, or Instagram..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </motion.div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            <p className="mt-4 text-gray-400">Loading banned users...</p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl overflow-hidden"
          >
            {filteredUsers.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                {searchTerm ? 'No users found matching your search.' : 'No banned users at this time.'}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Username</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Telegram</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Instagram</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Ban Date</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Reason</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {filteredUsers.map((user, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="hover:bg-gray-800/50 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm text-white font-medium">{user.username}</td>
                        <td className="px-6 py-4 text-sm text-gray-400">{user.telegram_username || '-'}</td>
                        <td className="px-6 py-4 text-sm text-gray-400">{user.instagram_username || '-'}</td>
                        <td className="px-6 py-4 text-sm text-gray-400">{user.ban_date}</td>
                        <td className="px-6 py-4 text-sm text-red-400 font-medium">{user.reason}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-600 rounded-xl p-8 text-white text-center overflow-hidden relative"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          />
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4">Report Suspicious Activity</h2>
            <p className="mb-6 text-blue-100">
              If you encounter any scam attempts or fraudulent behavior, please report it immediately
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/support"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-2xl"
            >
              Report to Support
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

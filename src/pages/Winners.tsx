import { useEffect, useState } from 'react';
import { ExternalLink, Filter, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';

interface WinnerData {
  giveaway_id: string;
  date: string;
  winner_username: string;
  prize_amount: number;
  token_used: boolean;
  proof_link?: string;
}

export default function Winners() {
  const [winners, setWinners] = useState<WinnerData[]>([]);
  const [filteredWinners, setFilteredWinners] = useState<WinnerData[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [usernameFilter, setUsernameFilter] = useState('');
  const [tokenFilter, setTokenFilter] = useState('all');
  const itemsPerPage = 15;

  useEffect(() => {
    async function fetchWinners() {
      const { data, error } = await supabase
        .from('winners_cache')
        .select('*')
        .order('date', { ascending: false });

      if (!error && data) {
        setWinners(data);
        setFilteredWinners(data);
      }
      setLoading(false);
    }
    fetchWinners();
  }, []);

  useEffect(() => {
    let filtered = winners;

    if (usernameFilter) {
      filtered = filtered.filter((winner) =>
        winner.winner_username.toLowerCase().includes(usernameFilter.toLowerCase())
      );
    }

    if (tokenFilter !== 'all') {
      const tokenUsed = tokenFilter === 'yes';
      filtered = filtered.filter((winner) => winner.token_used === tokenUsed);
    }

    setFilteredWinners(filtered);
    setCurrentPage(1);
  }, [usernameFilter, tokenFilter, winners]);

  const totalPages = Math.ceil(filteredWinners.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentWinners = filteredWinners.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-gray-950 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="text-fuchsia-500" size={40} />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-fuchsia-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Winners Gallery
            </h1>
          </div>
          <p className="text-xl text-gray-400">100% Transparent. Every Winner. Every Prize. Verified.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Filter className="text-fuchsia-500" size={20} />
            <h3 className="text-lg font-semibold text-white">Filters</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Search Username</label>
              <input
                type="text"
                placeholder="Enter username..."
                value={usernameFilter}
                onChange={(e) => setUsernameFilter(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Token Used</label>
              <select
                value={tokenFilter}
                onChange={(e) => setTokenFilter(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all"
              >
                <option value="all">All Winners</option>
                <option value="yes">Token Used</option>
                <option value="no">No Token</option>
              </select>
            </div>
          </div>
        </motion.div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-fuchsia-600"></div>
            <p className="mt-4 text-gray-400">Loading winners...</p>
          </div>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Giveaway ID</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Date</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Winner</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Prize Amount</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Token Used</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Proof</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {currentWinners.map((winner, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="hover:bg-gray-800/50 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm text-white font-medium">{winner.giveaway_id}</td>
                        <td className="px-6 py-4 text-sm text-gray-400">{winner.date}</td>
                        <td className="px-6 py-4 text-sm text-white font-medium">{winner.winner_username}</td>
                        <td className="px-6 py-4 text-sm text-green-400 font-semibold">₹{winner.prize_amount}</td>
                        <td className="px-6 py-4 text-sm">
                          {winner.token_used ? (
                            <span className="px-3 py-1 bg-fuchsia-500/20 text-fuchsia-400 border border-fuchsia-500/30 rounded-full text-xs font-medium">Yes</span>
                          ) : (
                            <span className="px-3 py-1 bg-gray-800 text-gray-400 border border-gray-700 rounded-full text-xs font-medium">No</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          {winner.proof_link && (
                            <a
                              href={winner.proof_link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-fuchsia-400 hover:text-fuchsia-300 font-medium transition-colors"
                            >
                              View Proof
                              <ExternalLink size={14} />
                            </a>
                          )}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {totalPages > 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex justify-center items-center gap-2"
              >
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-gray-900 border border-gray-800 text-white rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Previous
                </button>
                <div className="flex gap-2">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                    return (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`px-4 py-2 rounded-lg transition-all ${
                          currentPage === pageNum
                            ? 'bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white shadow-lg shadow-fuchsia-500/25'
                            : 'bg-gray-900 border border-gray-800 text-white hover:bg-gray-800'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-gray-900 border border-gray-800 text-white rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                </button>
              </motion.div>
            )}

            <div className="text-center mt-4 text-sm text-gray-400">
              Showing {startIndex + 1} to {Math.min(endIndex, filteredWinners.length)} of {filteredWinners.length} winners
            </div>
          </>
        )}
      </div>
    </div>
  );
}

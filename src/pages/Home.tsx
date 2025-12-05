import { Link } from 'react-router-dom';
import { Trophy, Users, DollarSign, Crown, Shield, Sparkles, Zap, Star, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';

export default function Home() {
  const [stats, setStats] = useState({
    totalGiveaways: '0',
    totalWinners: '0',
    totalPayouts: '0',
    activeVips: '0',
  });

  useEffect(() => {
    async function fetchStats() {
      const { data, error } = await supabase
        .from('stats_cache')
        .select('*')
        .order('last_updated', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (!error && data) {
        setStats({
          totalGiveaways: data.total_giveaways?.toString() || '0',
          totalWinners: data.total_winners?.toString() || '0',
          totalPayouts: data.total_payouts?.toString() || '0',
          activeVips: data.active_vips?.toString() || '0',
        });
      }
    }
    fetchStats();
  }, []);

  const features = [
    { icon: Trophy, title: 'Transparent Giveaways', desc: 'Every winner publicly verified with proof', color: 'from-yellow-500 to-orange-500' },
    { icon: Shield, title: 'MSME Registered', desc: 'Legally registered with government certification', color: 'from-green-500 to-emerald-500' },
    { icon: Crown, title: 'VIP Rewards', desc: 'Exclusive benefits and priority support', color: 'from-fuchsia-500 to-pink-500' },
    { icon: Sparkles, title: 'Season Tokens', desc: 'Boost rewards with power tokens', color: 'from-blue-500 to-cyan-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-900/20 via-gray-950 to-gray-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-900/10 via-transparent to-transparent" />

      <section className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
        <motion.div
          className="container mx-auto px-4 text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 space-y-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 via-pink-500 to-purple-500 rounded-full blur-2xl opacity-50"
                />
                <Sparkles className="relative text-fuchsia-400" size={80} />
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="block text-gray-200"
              >
                Transform How You
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="block bg-gradient-to-r from-fuchsia-500 via-pink-500 to-purple-500 bg-clip-text text-transparent font-extrabold my-4"
              >
                Win Big
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="block text-gray-200"
              >
                Every Single Day
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-lg md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4"
            >
              Join the most transparent giveaway platform. 100% verified winners, instant payouts, exclusive VIP perks.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <Link to="/account">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(217, 70, 239, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-fuchsia-600 to-pink-600 px-10 py-4 rounded-xl font-semibold shadow-2xl shadow-fuchsia-500/50 text-lg flex items-center gap-2"
              >
                Start Winning Today
                <ArrowRight size={20} />
              </motion.div>
            </Link>
            <Link to="/winners">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-900/50 backdrop-blur-sm border-2 border-gray-700 px-10 py-4 rounded-xl font-semibold hover:border-fuchsia-500 transition-all text-lg"
              >
                View Winners
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="max-w-6xl mx-auto mt-16 relative"
          >
            <motion.div
              animate={{
                background: [
                  'linear-gradient(135deg, rgba(217, 70, 239, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)',
                  'linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)',
                  'linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(217, 70, 239, 0.2) 100%)',
                  'linear-gradient(135deg, rgba(217, 70, 239, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)',
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-2xl blur-3xl"
            />
            <div className="relative bg-gray-900/60 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { icon: Trophy, value: stats.totalGiveaways, label: 'Total Giveaways', color: 'cyan' },
                  { icon: Users, value: stats.totalWinners, label: 'Total Winners', color: 'green' },
                  { icon: DollarSign, value: `₹${stats.totalPayouts}`, label: 'Total Payouts', color: 'yellow' },
                  { icon: Crown, value: stats.activeVips, label: 'Active VIPs', color: 'purple' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 + index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="text-center group"
                  >
                    <div className="flex justify-center mb-3">
                      <div className={`bg-${stat.color}-500/10 p-3 rounded-lg group-hover:bg-${stat.color}-500/20 transition-all`}>
                        <stat.icon className={`text-${stat.color}-400`} size={32} />
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.7 + index * 0.1 }}
                      className="text-4xl font-bold text-white mb-1"
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="relative py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 border-t border-gray-800/50">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 30%, rgba(217, 70, 239, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(168, 85, 247, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 30%, rgba(217, 70, 239, 0.08) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-fuchsia-500/10 border border-fuchsia-500/30 px-4 py-2 rounded-full mb-6"
            >
              <Zap className="text-fuchsia-400" size={20} />
              <span className="text-fuchsia-400 font-semibold">Why Choose TrueWin</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Built For <span className="bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent">Winners</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The most trusted and transparent platform for giveaways and rewards
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/10 to-pink-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl hover:border-fuchsia-500/50 transition-all">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-4 shadow-lg`}
                  >
                    <feature.icon className="text-white w-full h-full" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 30% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 60%, rgba(217, 70, 239, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 30% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="relative bg-gradient-to-br from-gray-800/80 via-gray-900/90 to-gray-950 border border-gray-700/50 rounded-3xl p-12 shadow-2xl backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-pink-500/5 to-transparent" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"
              />

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex justify-center mb-6"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-xl opacity-40" />
                    <Star className="relative text-yellow-400" size={60} fill="currentColor" />
                  </div>
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Start Winning?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join thousands of satisfied winners and experience the most transparent giveaway platform
                </p>
                <Link to="/account">
                  <motion.div
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(217, 70, 239, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-12 py-4 rounded-xl font-bold text-lg shadow-lg hover:from-fuchsia-500 hover:to-pink-500 transition-all"
                  >
                    Create Your Account
                  </motion.div>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { Sparkles, TrendingUp, Award, Mail, Send, Instagram } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const tokenTiers = [
  { name: 'Bronze', tokens: 4, bonus: '+2%', color: 'from-amber-700 to-amber-600' },
  { name: 'Silver', tokens: 9, bonus: '+5%', color: 'from-gray-400 to-gray-500' },
  { name: 'Gold', tokens: 19, bonus: '+10%', color: 'from-yellow-400 to-yellow-600' },
  { name: 'Platinum', tokens: 49, bonus: '+15%', color: 'from-cyan-400 to-cyan-600' },
  { name: 'Diamond', tokens: '50+', bonus: '+25%', color: 'from-fuchsia-500 to-pink-600', highlight: true },
];

export default function Tokens() {
  const [showPurchaseConfirm, setShowPurchaseConfirm] = useState(false);

  const handlePurchase = () => {
    setShowPurchaseConfirm(true);
  };

  return (
    <div className="min-h-screen bg-gray-950 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="flex justify-center mb-4"
          >
            <div className="bg-gradient-to-br from-yellow-500 to-orange-600 p-4 rounded-2xl shadow-lg shadow-yellow-500/25">
              <Sparkles className="text-white" size={48} />
            </div>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Season 1 Tokens
          </h1>
          <p className="text-xl text-gray-400">Boost Your Rewards with Season-Based Power Tokens</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border-2 border-yellow-500/50 rounded-xl p-6 mb-12 backdrop-blur-sm"
        >
          <div className="flex items-start gap-3">
            <Sparkles className="text-yellow-400 flex-shrink-0 mt-1 animate-pulse" size={24} />
            <div>
              <h3 className="text-lg font-bold text-yellow-400 mb-2">Launch Offer – Telegram Only</h3>
              <p className="text-gray-300 mb-2">
                Buy 1 Token → Get ₹10 Instant Cashback
              </p>
              <p className="text-sm text-gray-400">
                Cashback ONLY for purchases via: <a href="https://t.me/tanish_parikh" target="_blank" rel="noopener noreferrer" className="text-fuchsia-400 font-medium hover:underline">@tanish_parikh</a>
              </p>
              <p className="text-sm text-red-400 font-medium mt-1">No cashback on website payments.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-4">What Are Tokens?</h2>
          <p className="text-gray-400 leading-relaxed">
            Season-based reward boosters that increase your winning bonus percentage on valid wins.
            Tokens carry zero risk and only provide reward boosts. More tokens you own = higher bonus percentage
            on your prizes. These are exclusive Season 1 tokens that never expire during the season.
          </p>
        </motion.div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Token Tiers - Season 1</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {tokenTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center ${
                  tier.highlight ? 'ring-2 ring-fuchsia-500 shadow-lg shadow-fuchsia-500/25' : ''
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-fuchsia-500 to-pink-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                      BEST VALUE
                    </span>
                  </div>
                )}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${tier.color} mx-auto mb-4 flex items-center justify-center shadow-lg`}
                >
                  <Award className="text-white" size={32} />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-white mb-2">{tier.tokens}</div>
                <div className="text-sm text-gray-400 mb-3">Tokens</div>
                <div className={`text-2xl font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                  {tier.bonus}
                </div>
                <div className="text-sm text-gray-400">Bonus</div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Token Rules</h2>
          <ul className="space-y-3">
            {[
              'Season 1 tokens never expire during Season 1',
              'If you remain active, tokens carry forward to Season 2',
              'Tokens are used on eligible events only',
              'Zero risk - tokens only boost rewards, not gambling',
            ].map((rule, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-400 text-sm font-bold">✓</span>
                </div>
                <span className="text-gray-400">{rule}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Why Buy Tokens?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: TrendingUp, color: 'fuchsia', title: 'Higher Rewards', desc: 'Get bigger bonuses on your wins with the same effort' },
              { icon: Sparkles, color: 'yellow', title: 'Season-Long Bonus', desc: 'Enjoy benefits throughout the entire season' },
              { icon: Award, color: 'purple', title: 'Founder Status', desc: 'Early member recognition and exclusive perks' },
              { icon: TrendingUp, color: 'green', title: 'Risk-Free Investment', desc: 'No gambling, only reward enhancement' },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                className="flex items-start gap-3 group"
              >
                <benefit.icon className={`text-${benefit.color}-400 flex-shrink-0 group-hover:scale-110 transition-transform`} size={24} />
                <div>
                  <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                  <p className="text-sm text-gray-400">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6 }}
          className="bg-gradient-to-br from-fuchsia-600 to-pink-600 rounded-xl shadow-2xl shadow-fuchsia-500/25 p-8 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Website Token Purchase</h2>
          <div className="text-5xl font-bold mb-2">₹99</div>
          <div className="text-xl mb-6">per token</div>
          <p className="text-pink-100 mb-6">No cashback on website payments</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePurchase}
            className="bg-white text-fuchsia-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
          >
            Buy Tokens (No Cashback)
          </motion.button>
        </motion.div>

        {showPurchaseConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowPurchaseConfirm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-gray-800 rounded-xl max-w-md w-full p-8 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Token Purchase</h3>
              <p className="text-gray-400 mb-6">
                Complete your payment and contact us with your payment screenshot for token activation.
              </p>
              <div className="space-y-3 mb-6">
                <a
                  href="https://rzp.io/rzp/truewinstore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all font-semibold"
                >
                  <Sparkles size={20} />
                  Pay Now
                </a>
                <a
                  href="mailto:support@truewin.one"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-fuchsia-700 hover:to-pink-700 transition-all"
                >
                  <Mail size={20} />
                  Email Support
                </a>
                <a
                  href="https://t.me/tanish_parikh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors"
                >
                  <Send size={20} />
                  Telegram DM
                </a>
                <a
                  href="https://www.instagram.com/truewin.india?igsh=MXR6dDVnemoweTQ1MQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-pink-600 to-fuchsia-600 text-white px-6 py-3 rounded-lg hover:from-pink-700 hover:to-fuchsia-700 transition-all"
                >
                  <Instagram size={20} />
                  Instagram DM
                </a>
              </div>
              <button
                onClick={() => setShowPurchaseConfirm(false)}
                className="w-full border-2 border-gray-700 text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

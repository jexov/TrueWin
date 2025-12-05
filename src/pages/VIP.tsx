import { Crown, Zap, Star, CheckCircle, AlertCircle, Mail, Send, Instagram, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const vipPlans = [
  { name: 'VIP Basic', duration: '1 Month', price: 149, color: 'from-blue-400 to-blue-600' },
  { name: 'VIP Pro', duration: '3 Months', price: 349, color: 'from-purple-400 to-purple-600', popular: true },
  { name: 'VIP Elite', duration: '6 Months', price: 599, color: 'from-pink-400 to-pink-600' },
  { name: 'VIP Ultra', duration: '12 Months', price: 1149, color: 'from-fuchsia-400 to-pink-600', bestValue: true },
];

export default function VIP() {
  const [showPurchaseConfirm, setShowPurchaseConfirm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const handlePurchase = (planName: string) => {
    setSelectedPlan(planName);
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
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="flex justify-center mb-4"
          >
            <div className="bg-gradient-to-br from-fuchsia-500 to-pink-600 p-4 rounded-2xl shadow-lg shadow-fuchsia-500/25">
              <Crown className="text-white" size={48} />
            </div>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-fuchsia-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            VIP Membership Plans
          </h1>
          <p className="text-xl text-gray-400">Unlock Exclusive Benefits and Priority Treatment</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">VIP Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Zap, color: 'fuchsia', title: 'Priority Support', desc: 'Get faster responses to all your queries and issues' },
              { icon: CheckCircle, color: 'green', title: 'Faster Payout & Verification', desc: 'Quick processing of your winnings and verifications' },
              { icon: Crown, color: 'yellow', title: 'VIP Tag', desc: 'Special recognition badge in the community' },
              { icon: Star, color: 'purple', title: 'VIP-Only Events', desc: 'Access to exclusive giveaways and boosted rewards' },
              { icon: Zap, color: 'cyan', title: 'Early Access', desc: 'Get hints and early info on selected events' },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border-2 border-yellow-500/50 rounded-xl p-6 mb-12 backdrop-blur-sm"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-lg font-bold text-yellow-400 mb-2">Important Note</h3>
              <p className="text-gray-300 mb-2">
                Early access and hints apply only to selected events. Not all giveaways will have early information.
              </p>
              <p className="text-sm text-gray-400">
                VIP members will receive early info privately via DM when available.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {vipPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden ${
                plan.popular || plan.bestValue ? 'ring-2 ring-fuchsia-500 shadow-lg shadow-fuchsia-500/25' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white px-3 py-1 text-xs font-bold">
                  POPULAR
                </div>
              )}
              {plan.bestValue && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 text-xs font-bold">
                  BEST VALUE
                </div>
              )}
              <div className={`h-2 bg-gradient-to-r ${plan.color}`}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-gray-400 text-sm mb-4">{plan.duration}</div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">₹{plan.price}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handlePurchase(plan.name)}
                  className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all`}
                >
                  Get {plan.name}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-br from-fuchsia-600 to-pink-600 rounded-xl shadow-2xl shadow-fuchsia-500/25 p-8 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Why Go VIP?</h2>
          <p className="text-xl text-pink-100 mb-6">
            Join the elite community of TrueWin members and enjoy premium benefits that enhance your experience
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              { title: 'Faster Everything', desc: 'Priority processing for all your transactions and support requests' },
              { title: 'Exclusive Access', desc: 'Special events and opportunities available only to VIP members' },
              { title: 'Recognition', desc: 'Stand out with your VIP badge and special member status' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors"
              >
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-pink-100">{item.desc}</p>
              </motion.div>
            ))}
          </div>
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
              <h3 className="text-2xl font-bold text-white mb-4">VIP Purchase - {selectedPlan}</h3>
              <p className="text-gray-400 mb-6">
                Complete your payment and contact us with your payment screenshot for activation.
              </p>
              <div className="space-y-3 mb-6">
                <a
                  href="https://rzp.io/rzp/truewinstorevip"
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

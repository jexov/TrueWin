import { HelpCircle, Mail, Send, Instagram, FileText, AlertCircle, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Support() {
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
              <HelpCircle className="relative text-blue-400" size={48} />
            </div>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Support & Verification</h1>
          <p className="text-xl text-gray-400">We're here to help with payouts, verification, VIP, tokens, and scam reports</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-red-900/20 backdrop-blur-sm border-2 border-red-600/50 rounded-xl p-6 mb-8"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="text-red-400 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-lg font-bold text-red-300 mb-2">Important: Keep Your Screenshots Ready</h3>
              <p className="text-gray-300 mb-2">
                Always keep screenshots ready for payment, UPI transactions, and payouts. Without proper proof,
                verification may get delayed or denied.
              </p>
              <p className="text-sm text-red-400 font-medium">
                No screenshot = No verification
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Submit Support Request</h2>
          <p className="text-gray-400 mb-6">
            Fill out our Google Form with all required details and screenshots. Our team will review and respond
            based on your membership status.
          </p>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://docs.google.com/forms/d/e/1FAIpQLSez_YPYuB3b2V0OAiSN4DNDZT7Vj2wNkKSoPo_BcEMetAEO-w/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg shadow-blue-500/30"
          >
            <FileText size={20} />
            Open Support Form
          </motion.a>
          <div className="mt-6 p-4 bg-gray-800/50 border border-gray-700 rounded-lg">
            <h4 className="font-semibold text-white mb-2">Form Fields Include:</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Full Name</li>
              <li>• Telegram Username</li>
              <li>• Instagram Username (Optional)</li>
              <li>• Email Address (Optional)</li>
              <li>• Issue Type (Payout, Verification, VIP, Tokens, Scam Report)</li>
              <li>• Detailed Message</li>
              <li>• Screenshot Upload (Required)</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Contact Us Directly</h2>
          <div className="space-y-4">
            <motion.a
              whileHover={{ scale: 1.02, x: 5 }}
              href="mailto:support@truewin.one"
              className="flex items-center gap-4 p-4 border-2 border-gray-700 rounded-lg hover:border-blue-500 hover:bg-gray-800/50 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <Mail className="text-blue-400 group-hover:text-white" size={24} />
              </div>
              <div>
                <div className="font-semibold text-white">Email Support</div>
                <div className="text-sm text-gray-400">support@truewin.one</div>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02, x: 5 }}
              href="https://t.me/tanish_parikh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border-2 border-gray-700 rounded-lg hover:border-cyan-500 hover:bg-gray-800/50 transition-all group"
            >
              <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center group-hover:bg-cyan-500 transition-colors">
                <Send className="text-cyan-400 group-hover:text-white" size={24} />
              </div>
              <div>
                <div className="font-semibold text-white">Telegram</div>
                <div className="text-sm text-gray-400">@tanish_parikh</div>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02, x: 5 }}
              href="https://www.instagram.com/truewin.india?igsh=MXR6dDVnemoweTQ1MQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border-2 border-gray-700 rounded-lg hover:border-pink-500 hover:bg-gray-800/50 transition-all group"
            >
              <div className="w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center group-hover:bg-pink-500 transition-colors">
                <Instagram className="text-pink-400 group-hover:text-white" size={24} />
              </div>
              <div>
                <div className="font-semibold text-white">Instagram</div>
                <div className="text-sm text-gray-400">@truewin.india</div>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02, x: 5 }}
              href="https://t.me/truewinproofs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border-2 border-gray-700 rounded-lg hover:border-green-500 hover:bg-gray-800/50 transition-all group"
            >
              <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-colors">
                <Shield className="text-green-400 group-hover:text-white" size={24} />
              </div>
              <div>
                <div className="font-semibold text-white">Telegram Proofs</div>
                <div className="text-sm text-gray-400">@truewinproofs</div>
              </div>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-800/50 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Response Times</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 shadow"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <h4 className="font-semibold text-white">VIP Members</h4>
              </div>
              <p className="text-sm text-gray-400">Priority support with faster response time</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 shadow"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <h4 className="font-semibold text-white">Regular Members</h4>
              </div>
              <p className="text-sm text-gray-400">Typical response within 3-4 hours</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { Mail, Send, Sparkles, Instagram, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-gray-300 mt-auto border-t border-gray-800/50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-950/20 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="text-fuchsia-500 w-5 h-5" />
              <h3 className="text-white text-lg font-bold bg-gradient-to-r from-fuchsia-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                TrueWin
              </h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Transparent Giveaways, VIP Rewards & Season Tokens. MSME Registered & 100% Legal.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/winners" className="hover:text-fuchsia-400 transition-colors inline-block hover:translate-x-1 duration-200">Winners</Link></li>
              <li><Link to="/tokens" className="hover:text-fuchsia-400 transition-colors inline-block hover:translate-x-1 duration-200">Season Tokens</Link></li>
              <li><Link to="/vip" className="hover:text-fuchsia-400 transition-colors inline-block hover:translate-x-1 duration-200">VIP Plans</Link></li>
              <li><Link to="/logs" className="hover:text-fuchsia-400 transition-colors inline-block hover:translate-x-1 duration-200">Public Logs</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="hover:text-fuchsia-400 transition-colors inline-block hover:translate-x-1 duration-200">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-fuchsia-400 transition-colors inline-block hover:translate-x-1 duration-200">Privacy Policy</Link></li>
              <li><Link to="/refund" className="hover:text-fuchsia-400 transition-colors inline-block hover:translate-x-1 duration-200">Refund Policy</Link></li>
              <li><Link to="/anti-scam" className="hover:text-fuchsia-400 transition-colors inline-block hover:translate-x-1 duration-200">Anti-Scam Policy</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2 group">
                <Mail size={16} className="text-fuchsia-500 group-hover:scale-110 transition-transform" />
                <a href="mailto:support@truewin.one" className="hover:text-fuchsia-400 transition-colors">
                  support@truewin.one
                </a>
              </li>
              <li className="flex items-center space-x-2 group">
                <Send size={16} className="text-fuchsia-500 group-hover:scale-110 transition-transform" />
                <a href="https://t.me/tanish_parikh" target="_blank" rel="noopener noreferrer" className="hover:text-fuchsia-400 transition-colors">
                  @tanish_parikh
                </a>
              </li>
              <li className="flex items-center space-x-2 group">
                <Instagram size={16} className="text-fuchsia-500 group-hover:scale-110 transition-transform" />
                <a href="https://www.instagram.com/truewin.india?igsh=MXR6dDVnemoweTQ1MQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-fuchsia-400 transition-colors">
                  @truewin.india
                </a>
              </li>
              <li className="flex items-center space-x-2 group">
                <Shield size={16} className="text-fuchsia-500 group-hover:scale-110 transition-transform" />
                <a href="https://t.me/truewinproofs" target="_blank" rel="noopener noreferrer" className="hover:text-fuchsia-400 transition-colors">
                  Proofs Channel
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} TrueWin Digital Services. All rights reserved.</p>
          <div className="mt-3 flex items-center justify-center gap-3 flex-wrap">
            <span className="px-3 py-1 bg-gray-900/50 border border-gray-800 rounded-full text-xs">MSME Registered</span>
            <span className="px-3 py-1 bg-gray-900/50 border border-gray-800 rounded-full text-xs">Razorpay Secured</span>
            <span className="px-3 py-1 bg-gray-900/50 border border-gray-800 rounded-full text-xs">100% Transparent</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

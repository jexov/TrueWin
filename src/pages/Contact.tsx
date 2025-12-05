import { Mail, Send, Instagram, Clock, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden py-12">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-gray-950 to-gray-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />

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
              <MessageCircle className="relative text-blue-400" size={48} />
            </div>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-400">Get in touch with our support team</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            href="mailto:support@truewin.one"
            className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl p-8 hover:border-blue-500/50 transition-all group"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors"
            >
              <Mail className="text-blue-400 group-hover:text-white transition-colors" size={32} />
            </motion.div>
            <h3 className="text-xl font-bold text-white text-center mb-2">Email Support</h3>
            <p className="text-center text-blue-400 font-medium mb-3">support@truewin.one</p>
            <p className="text-sm text-gray-400 text-center">
              Send us detailed queries and we'll respond as soon as possible
            </p>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
            href="https://t.me/tanish_parikh"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl p-8 hover:border-cyan-500/50 transition-all group"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-500 transition-colors"
            >
              <Send className="text-cyan-400 group-hover:text-white transition-colors" size={32} />
            </motion.div>
            <h3 className="text-xl font-bold text-white text-center mb-2">Telegram</h3>
            <p className="text-center text-cyan-400 font-medium mb-3">@tanish_parikh</p>
            <p className="text-sm text-gray-400 text-center">
              Direct message for quick responses and updates
            </p>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -5 }}
            href="https://www.instagram.com/truewin.india?igsh=MXR6dDVnemoweTQ1MQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl p-8 hover:border-pink-500/50 transition-all group"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-500 transition-colors"
            >
              <Instagram className="text-pink-400 group-hover:text-white transition-colors" size={32} />
            </motion.div>
            <h3 className="text-xl font-bold text-white text-center mb-2">Instagram</h3>
            <p className="text-center text-pink-400 font-medium mb-3">@truewin.india</p>
            <p className="text-sm text-gray-400 text-center">
              Follow us on Instagram for updates and announcements
            </p>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-800/50 rounded-xl p-8 mb-8"
        >
          <div className="flex items-start gap-3 mb-6">
            <Clock className="text-blue-400 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Response Times</h3>
              <p className="text-gray-400">
                We strive to respond to all queries as quickly as possible. Response times vary based on membership status:
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 shadow"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <h4 className="font-semibold text-white">VIP Members</h4>
              </div>
              <p className="text-sm text-gray-400">Priority support with faster response times</p>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl p-8"
        >
          <h3 className="text-xl font-bold text-white mb-4">Before You Contact</h3>
          <ul className="space-y-3 text-gray-400">
            {[
              'Check our support page for common issues and solutions',
              'Have your screenshots and transaction details ready',
              'Provide your username and relevant account information',
              'Be clear and specific about your issue or query',
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-start gap-2"
              >
                <span className="text-blue-400 font-bold">•</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

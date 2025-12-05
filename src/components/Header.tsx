import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/winners', label: 'Winners' },
  { path: '/tokens', label: 'Tokens' },
  { path: '/vip', label: 'VIP' },
  { path: '/support', label: 'Support' },
  { path: '/logs', label: 'Logs' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="sticky top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-gray-950/60 border-b border-white/10 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-b-[3rem]">
          <motion.div
            animate={{
              background: [
                'linear-gradient(90deg, rgba(217, 70, 239, 0.05) 0%, rgba(168, 85, 247, 0.05) 50%, rgba(236, 72, 153, 0.05) 100%)',
                'linear-gradient(180deg, rgba(236, 72, 153, 0.05) 0%, rgba(217, 70, 239, 0.05) 50%, rgba(168, 85, 247, 0.05) 100%)',
                'linear-gradient(270deg, rgba(168, 85, 247, 0.05) 0%, rgba(236, 72, 153, 0.05) 50%, rgba(217, 70, 239, 0.05) 100%)',
                'linear-gradient(360deg, rgba(217, 70, 239, 0.05) 0%, rgba(168, 85, 247, 0.05) 50%, rgba(236, 72, 153, 0.05) 100%)',
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-fuchsia-500/10 via-transparent to-transparent"
          />

          <div className="relative px-8 py-5">
            <div className="flex justify-between items-center">
              <Link to="/" className="flex items-center space-x-2 group">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <motion.div
                    animate={{
                      rotate: 360,
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-full blur-xl opacity-50"
                  />
                  <Sparkles className="text-fuchsia-400 absolute -top-1 -right-1 w-4 h-4 animate-pulse" />
                  <div className="relative text-2xl font-bold bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    TrueWin
                  </div>
                </motion.div>
              </Link>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/10 text-white"
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </motion.button>

              <nav className="hidden md:flex items-center gap-2 bg-white/5 backdrop-blur-lg rounded-[2rem] px-2 py-2 border border-white/10">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className="relative px-4 py-2 text-sm font-medium transition-colors group"
                    >
                      {location.pathname !== item.path && (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      )}
                      {location.pathname === item.path && (
                        <motion.div
                          layoutId="pill"
                          animate={{
                            background: [
                              'linear-gradient(135deg, #d946ef 0%, #ec4899 100%)',
                              'linear-gradient(135deg, #ec4899 0%, #a855f7 100%)',
                              'linear-gradient(135deg, #a855f7 0%, #d946ef 100%)',
                            ]
                          }}
                          transition={{
                            background: { duration: 6, repeat: Infinity, ease: "linear" },
                            layout: { type: "spring", bounce: 0.2, duration: 0.6 }
                          }}
                          className="absolute inset-0 rounded-full shadow-lg shadow-fuchsia-500/50"
                        />
                      )}
                      <motion.span
                        className={`relative z-10 ${
                          location.pathname === item.path
                            ? 'text-white'
                            : 'text-gray-300 group-hover:text-white'
                        }`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {item.label}
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
                <Link to="/account">
                  <motion.div
                    animate={{
                      background: [
                        'linear-gradient(135deg, #d946ef 0%, #ec4899 100%)',
                        'linear-gradient(135deg, #ec4899 0%, #a855f7 100%)',
                        'linear-gradient(135deg, #a855f7 0%, #d946ef 100%)',
                      ]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    whileHover={{ scale: 1.08, boxShadow: "0 0 20px rgba(217, 70, 239, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="ml-2 px-6 py-2 rounded-full font-medium text-sm text-white shadow-lg shadow-fuchsia-500/30"
                  >
                    Account
                  </motion.div>
                </Link>
              </nav>
            </div>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.nav
                  initial={{ opacity: 0, height: 0, y: -20 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden mt-4 pt-4 space-y-2 overflow-hidden border-t border-white/10"
                >
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <Link
                        to={item.path}
                        className={`block py-3 px-4 rounded-2xl transition-all ${
                          location.pathname === item.path
                            ? 'bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white shadow-lg shadow-fuchsia-500/30'
                            : 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: navItems.length * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Link
                      to="/account"
                      className="block py-3 px-4 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-2xl text-white font-medium shadow-lg shadow-fuchsia-500/30"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Account
                    </Link>
                  </motion.div>
                </motion.nav>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

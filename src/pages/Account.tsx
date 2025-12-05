import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, LogOut, Crown, Coins, Calendar, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { loginUser, registerUser, AuthUser } from '../lib/auth';
import LightPillar from '../components/LightPillar';

export default function Account() {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [regPrimaryUsername, setRegPrimaryUsername] = useState('');
  const [regTelegramUsername, setRegTelegramUsername] = useState('');
  const [regInstagramUsername, setRegInstagramUsername] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem('truewin_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const authUser = await loginUser(loginUsername, loginPassword);

    if (authUser) {
      setUser(authUser);
      localStorage.setItem('truewin_user', JSON.stringify(authUser));
      setLoginUsername('');
      setLoginPassword('');
    } else {
      setError('Invalid credentials. Please check your username and password.');
    }

    setLoading(false);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (regPassword !== regConfirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (regPassword.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    const result = await registerUser(
      regPrimaryUsername,
      regPassword,
      regTelegramUsername || undefined,
      regInstagramUsername || undefined
    );

    if (result.success && result.user) {
      setUser(result.user);
      localStorage.setItem('truewin_user', JSON.stringify(result.user));
      setRegPrimaryUsername('');
      setRegTelegramUsername('');
      setRegInstagramUsername('');
      setRegPassword('');
      setRegConfirmPassword('');
    } else {
      setError(result.error || 'Registration failed');
    }

    setLoading(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('truewin_user');
    navigate('/');
  };

  const getVIPExpiryDays = () => {
    if (!user?.vip_expiry) return null;
    const expiry = new Date(user.vip_expiry);
    const now = new Date();
    const diffTime = expiry.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  if (user) {
    const vipDaysLeft = getVIPExpiryDays();

    return (
      <div className="min-h-screen bg-gray-950 relative overflow-hidden py-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-900/20 via-gray-950 to-gray-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-900/10 via-transparent to-transparent" />

        <div className="absolute left-0 top-0 z-0 opacity-40" style={{ width: '400px', height: '100vh', maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, transparent 70%)', WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, transparent 70%)' }}>
          <LightPillar
            topColor="#d946ef"
            bottomColor="#ec4899"
            intensity={0.3}
            rotationSpeed={0.15}
            glowAmount={0.002}
            pillarWidth={2.0}
            pillarHeight={0.7}
            noiseIntensity={0.5}
            pillarRotation={15}
            interactive={false}
            mixBlendMode="screen"
          />
        </div>
        <div className="absolute right-0 top-0 z-0 opacity-40" style={{ width: '400px', height: '100vh', maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, transparent 70%)', WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, transparent 70%)' }}>
          <LightPillar
            topColor="#a855f7"
            bottomColor="#d946ef"
            intensity={0.3}
            rotationSpeed={0.18}
            glowAmount={0.002}
            pillarWidth={2.0}
            pillarHeight={0.7}
            noiseIntensity={0.5}
            pillarRotation={-15}
            interactive={false}
            mixBlendMode="screen"
          />
        </div>

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl p-8 mb-8"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Welcome back, {user.primary_username}!</h1>
                <p className="text-gray-400">User ID: {user.user_id}</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-lg"
              >
                <LogOut size={20} />
                Logout
              </motion.button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/30 backdrop-blur-sm border-2 border-yellow-600/50 rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                    <Crown className="text-yellow-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">VIP Status</h3>
                    <p className="text-sm text-gray-400">
                      {user.vip_status ? user.vip_tier || 'Active' : 'Not Active'}
                    </p>
                  </div>
                </div>
                {user.vip_status && vipDaysLeft !== null && (
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar size={16} />
                    <span className="text-sm">
                      {vipDaysLeft > 0 ? `${vipDaysLeft} days remaining` : 'Expired'}
                    </span>
                  </div>
                )}
                {!user.vip_status && (
                  <button
                    onClick={() => navigate('/vip')}
                    className="mt-4 w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition-colors font-semibold"
                  >
                    Upgrade to VIP
                  </button>
                )}
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 backdrop-blur-sm border-2 border-blue-600/50 rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Coins className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Season Tokens</h3>
                    <p className="text-3xl font-bold text-blue-400">{user.tokens_owned}</p>
                  </div>
                </div>
                <button
                  onClick={() => navigate('/tokens')}
                  className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Buy More Tokens
                </button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Account Information</h2>
            <div className="space-y-4">
              {[
                { icon: User, label: 'Primary Username', value: user.primary_username },
                ...(user.telegram_username ? [{ icon: Send, label: 'Telegram Username', value: user.telegram_username }] : []),
                ...(user.instagram_username ? [{ icon: User, label: 'Instagram Username', value: user.instagram_username }] : []),
                { icon: Calendar, label: 'Member Since', value: new Date(user.created_at).toLocaleDateString() },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 p-4 bg-gray-800/50 border border-gray-700 rounded-lg"
                >
                  <item.icon className="text-gray-400" size={20} />
                  <div>
                    <div className="text-sm text-gray-400">{item.label}</div>
                    <div className="font-semibold text-white">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Quick Links</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'View Winners', desc: 'See all past winners and prizes', link: '/winners' },
                { title: 'Support', desc: 'Get help with verification and issues', link: '/support' },
              ].map((link, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  onClick={() => navigate(link.link)}
                  className="p-4 border-2 border-gray-700 rounded-lg hover:border-blue-500 hover:bg-gray-800/50 transition-all text-left"
                >
                  <h4 className="font-semibold text-white mb-1">{link.title}</h4>
                  <p className="text-sm text-gray-400">{link.desc}</p>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden py-12">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-950 to-gray-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent" />

      <div className="absolute left-1/2 top-0 z-0 -translate-x-1/2 opacity-50" style={{ width: '500px', height: '100vh', maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.9) 0%, transparent 75%)', WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.9) 0%, transparent 75%)' }}>
        <LightPillar
          topColor="#3b82f6"
          bottomColor="#06b6d4"
          intensity={0.4}
          rotationSpeed={0.2}
          glowAmount={0.003}
          pillarWidth={2.5}
          pillarHeight={0.8}
          noiseIntensity={0.4}
          pillarRotation={0}
          interactive={false}
          mixBlendMode="screen"
        />
      </div>
      <div className="absolute left-0 top-1/4 z-0 opacity-35" style={{ width: '300px', height: '80vh', maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, transparent 65%)', WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, transparent 65%)' }}>
        <LightPillar
          topColor="#06b6d4"
          bottomColor="#0ea5e9"
          intensity={0.3}
          rotationSpeed={0.15}
          glowAmount={0.002}
          pillarWidth={1.8}
          pillarHeight={0.6}
          noiseIntensity={0.5}
          pillarRotation={20}
          interactive={false}
          mixBlendMode="screen"
        />
      </div>
      <div className="absolute right-0 top-1/4 z-0 opacity-35" style={{ width: '300px', height: '80vh', maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, transparent 65%)', WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, transparent 65%)' }}>
        <LightPillar
          topColor="#0ea5e9"
          bottomColor="#3b82f6"
          intensity={0.3}
          rotationSpeed={0.17}
          glowAmount={0.002}
          pillarWidth={1.8}
          pillarHeight={0.6}
          noiseIntensity={0.5}
          pillarRotation={-20}
          interactive={false}
          mixBlendMode="screen"
        />
      </div>

      <div className="container mx-auto px-4 max-w-md relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl p-8"
        >
          <h1 className="text-3xl font-bold text-center text-white mb-8">
            {isLogin ? 'Login' : 'Create Account'}
          </h1>

          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 p-4 bg-red-900/20 border-2 border-red-600/50 rounded-lg text-red-300"
            >
              {error}
            </motion.div>
          )}

          {isLogin ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Username (Primary, Telegram, or Instagram)
                </label>
                <input
                  type="text"
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter any of your usernames"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your password"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/30"
              >
                {loading ? 'Logging in...' : 'Login'}
              </motion.button>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Primary Username <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={regPrimaryUsername}
                  onChange={(e) => setRegPrimaryUsername(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your main username"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Telegram Username (Optional)
                </label>
                <input
                  type="text"
                  value={regTelegramUsername}
                  onChange={(e) => setRegTelegramUsername(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="@your_telegram"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Instagram Username (Optional)
                </label>
                <input
                  type="text"
                  value={regInstagramUsername}
                  onChange={(e) => setRegInstagramUsername(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="@your_instagram"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password <span className="text-red-400">*</span>
                </label>
                <input
                  type="password"
                  value={regPassword}
                  onChange={(e) => setRegPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="At least 6 characters"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Confirm Password <span className="text-red-400">*</span>
                </label>
                <input
                  type="password"
                  value={regConfirmPassword}
                  onChange={(e) => setRegConfirmPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Re-enter your password"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-green-500/30"
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </motion.button>
            </form>
          )}

          <div className="mt-6 text-center">
            {isLogin ? (
              <p className="text-gray-400">
                Don't have an account?{' '}
                <button
                  onClick={() => {
                    setIsLogin(false);
                    setError('');
                  }}
                  className="text-blue-400 font-semibold hover:underline"
                >
                  Register here
                </button>
              </p>
            ) : (
              <p className="text-gray-400">
                Already have an account?{' '}
                <button
                  onClick={() => {
                    setIsLogin(true);
                    setError('');
                  }}
                  className="text-blue-400 font-semibold hover:underline"
                >
                  Login here
                </button>
              </p>
            )}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-700">
            <p className="text-sm text-gray-400 text-center">
              Forgot your password?{' '}
              <a href="mailto:support@truewin.one" className="text-blue-400 hover:underline">
                Email support@truewin.one
              </a>{' '}
              or DM{' '}
              <a href="https://t.me/tanish_parikh" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                @tanish_parikh
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

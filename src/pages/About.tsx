import { Building, Shield, Award, Users, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden py-12">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/20 via-gray-950 to-gray-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About TrueWin</h1>
          <p className="text-xl text-gray-400">Building Trust Through Transparency</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            TrueWin Digital Services was founded with a simple mission: to create a transparent, fair, and
            legally compliant platform for skill-based giveaways and rewards. In an industry often plagued by
            scams and unclear practices, we stand out by making everything public and verifiable.
          </p>
          <p className="text-gray-400 leading-relaxed">
            We believe that transparency builds trust, and trust creates a thriving community. Every winner,
            every transaction, and every rule is publicly available for anyone to verify. This is not just
            a business for us - it's a commitment to doing things the right way.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            { icon: Building, title: 'MSME Registered', desc: 'Officially registered as a Micro, Small & Medium Enterprise with the Government of India. Complete legal compliance and business certification.', color: 'blue' },
            { icon: Shield, title: 'Razorpay Secured', desc: 'All payments are processed through Razorpay, India\'s most trusted payment gateway. Your financial information is always protected.', color: 'green' },
            { icon: Award, title: '100% Transparency', desc: 'Every winner, transaction, and statistic is publicly verifiable. We maintain complete transparency in all our operations and giveaways.', color: 'yellow' },
            { icon: Users, title: 'Community First', desc: 'We prioritize our community\'s trust and satisfaction. Every decision is made with our participants\' best interests in mind.', color: 'purple' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl p-6 hover:border-gray-700 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-12 h-12 bg-${item.color}-500/10 rounded-full flex items-center justify-center`}
                >
                  <item.icon className={`text-${item.color}-400`} size={24} />
                </motion.div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
              </div>
              <p className="text-gray-400">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Our Values</h2>
          <div className="space-y-4">
            {[
              { title: 'Transparency Above All', desc: 'We believe in complete openness. Every aspect of our operations is public and verifiable.' },
              { title: 'Legal Compliance', desc: 'We operate strictly within legal boundaries and maintain all required certifications.' },
              { title: 'Fair Play', desc: 'Skill-based giveaways with clear rules. No hidden terms, no manipulation.' },
              { title: 'Anti-Scam Protection', desc: 'Strict policies against fraud and scams. We protect our community vigilantly.' },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-white mb-1">{value.title}</h4>
                  <p className="text-sm text-gray-400">
                    {value.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1 }}
          className="bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-600 rounded-xl shadow-2xl p-8 text-white text-center overflow-hidden relative"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-xl text-blue-100 mb-6">
              Be part of a transparent, fair, and exciting giveaway platform
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/account"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-2xl"
            >
              Get Started Today
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

import { Shield } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden py-12">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/20 via-gray-950 to-gray-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Shield className="text-green-500" size={40} />
          <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              We collect the following information to provide our services:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>Username (primary identifier)</li>
              <li>Telegram username (optional)</li>
              <li>Instagram username (optional)</li>
              <li>Email address (optional, for communication)</li>
              <li>Payment transaction details</li>
              <li>Account activity and participation history</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              Your information is used for:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>Account creation and management</li>
              <li>Processing payments and payouts</li>
              <li>Verification and support services</li>
              <li>Communication about giveaways and updates</li>
              <li>Maintaining platform security</li>
              <li>Displaying winners publicly (usernames only)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Public Information</h2>
            <p className="text-gray-300 leading-relaxed">
              As part of our transparency commitment, certain information is made public:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4 mt-3">
              <li>Winner usernames and prize amounts</li>
              <li>Banned user information (username and reason)</li>
              <li>Public statistics and metrics</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-3">
              By participating, you consent to this public disclosure as necessary for platform transparency.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Storage and Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We implement appropriate security measures to protect your information. Payment data is processed
              securely through Razorpay and is subject to their privacy policy. We store account information
              securely and restrict access to authorized personnel only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              We use the following third-party services:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>Razorpay for payment processing</li>
              <li>Supabase for data storage</li>
              <li>Google Sheets for public data transparency</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-3">
              These services have their own privacy policies and security measures.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
            <p className="text-gray-300 leading-relaxed">
              We retain your account information for as long as your account is active. Winner information and
              transaction records are retained permanently for transparency and verification purposes. You may
              request account deletion by contacting support.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>Access your personal information</li>
              <li>Request corrections to inaccurate data</li>
              <li>Request account deletion (subject to record-keeping requirements)</li>
              <li>Opt out of non-essential communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Cookies and Tracking</h2>
            <p className="text-gray-300 leading-relaxed">
              We use minimal cookies and tracking technologies necessary for website functionality and user
              authentication. We do not use third-party advertising or tracking cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              Our services are not intended for users under 18 years of age. We do not knowingly collect
              information from minors. If we become aware of such collection, we will delete the information
              immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Changes to Privacy Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this privacy policy periodically. Significant changes will be communicated to users.
              Continued use of the service after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              For privacy-related questions or requests, contact us at support@truewin.one or via Telegram
              @tanish_parikh.
            </p>
          </section>

          <p className="text-sm text-gray-500 mt-8 pt-6 border-t border-gray-800">
            Last Updated: December 2024
          </p>
        </div>
      </div>
    </div>
  );
}

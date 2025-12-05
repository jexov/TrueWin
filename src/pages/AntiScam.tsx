import { Shield, AlertTriangle } from 'lucide-react';

export default function AntiScam() {
  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden py-12">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-gray-950 to-gray-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-900/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Shield className="text-red-500" size={40} />
          <h1 className="text-4xl font-bold text-white">Anti-Scam Policy</h1>
        </div>

        <div className="bg-red-900/20 border-2 border-red-500/50 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-red-400 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-lg font-bold text-red-300 mb-2">Zero Tolerance for Scams</h3>
              <p className="text-gray-300">
                TrueWin Digital Services maintains a strict zero-tolerance policy against scams, fraud, and
                deceptive practices. We are committed to protecting our community and ensuring a safe, transparent
                platform for all participants.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Our Commitment</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              We are dedicated to maintaining a scam-free platform through:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>100% transparent winner verification</li>
              <li>Public disclosure of all giveaway results</li>
              <li>Secure payment processing through Razorpay</li>
              <li>Public banned users list for community awareness</li>
              <li>Clear rules and policies for all activities</li>
              <li>MSME registration and legal compliance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. What Constitutes a Scam</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              The following activities are considered scams and will result in immediate account termination:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>Creating fake accounts or identities</li>
              <li>Attempting to manipulate giveaway results</li>
              <li>Using fraudulent payment methods</li>
              <li>Impersonating TrueWin staff or officials</li>
              <li>Selling or trading accounts</li>
              <li>Using bots or automation for unfair advantage</li>
              <li>Falsifying screenshots or proof documents</li>
              <li>Phishing or attempting to steal user credentials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Protection Measures</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              We implement multiple layers of protection:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>Manual verification of all winners</li>
              <li>Screenshot requirements for all transactions</li>
              <li>Secure payment gateway integration</li>
              <li>Public transparency through winner lists and logs</li>
              <li>Regular monitoring of suspicious activities</li>
              <li>Community reporting system</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. How to Identify Official Communications</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              Official TrueWin communications will only come from:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>Email: support@truewin.one</li>
              <li>Telegram: @tanish_parikh (verified account)</li>
              <li>This official website: truewin.one</li>
            </ul>
            <p className="text-red-400 font-medium mt-3">
              We will NEVER ask for your password, bank PIN, or OTP. Be wary of imposters using similar names.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Reporting Scams</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              If you encounter suspicious activity or potential scams:
            </p>
            <ol className="list-decimal list-inside text-gray-400 space-y-2 ml-4">
              <li>Do not engage with the suspicious party</li>
              <li>Take screenshots of all communications</li>
              <li>Report immediately to support@truewin.one</li>
              <li>Provide detailed information and evidence</li>
              <li>Do not share your account credentials</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Consequences for Scammers</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              Users caught engaging in scam activities will face:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>Immediate account termination</li>
              <li>Public listing in banned users log</li>
              <li>Forfeiture of all tokens, VIP benefits, and winnings</li>
              <li>Permanent ban from all TrueWin services</li>
              <li>Legal action if applicable</li>
              <li>Reporting to relevant authorities for serious offenses</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Verification Requirements</h2>
            <div className="bg-blue-900/20 border-2 border-blue-500/50 rounded-lg p-4">
              <p className="text-gray-300 leading-relaxed">
                <strong>Users must provide clear screenshots for all transactions.</strong> This requirement helps
                prevent fraud and ensures accountability. Missing proof may delay or deny resolution of issues.
                This is a critical anti-scam measure that protects both users and the platform.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. User Responsibilities</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              To help maintain a scam-free environment:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>Verify all communications are from official channels</li>
              <li>Never share your password or account access</li>
              <li>Report suspicious activities immediately</li>
              <li>Keep records of all transactions</li>
              <li>Be cautious of offers that seem too good to be true</li>
              <li>Verify winner announcements on official channels</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Public Transparency</h2>
            <p className="text-gray-300 leading-relaxed">
              We maintain public logs of banned users to protect the community. This transparency helps other
              users identify and avoid potential scammers. All bans are carefully reviewed and documented with
              clear reasons.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Appeals Process</h2>
            <p className="text-gray-300 leading-relaxed">
              If you believe your account was wrongly banned for scam activities, you may submit an appeal
              to support@truewin.one with complete evidence. Appeals are reviewed within 7 business days.
              False appeals or continued fraudulent behavior will result in permanent ban with no further appeals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Legal Action</h2>
            <p className="text-gray-300 leading-relaxed">
              TrueWin reserves the right to pursue legal action against individuals engaging in fraud, identity
              theft, or other illegal activities. We cooperate fully with law enforcement and will provide all
              necessary evidence for prosecution.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Contact for Scam Reports</h2>
            <p className="text-gray-300 leading-relaxed">
              Report scams or suspicious activities to:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4 mt-2">
              <li>Email: support@truewin.one</li>
              <li>Telegram: @tanish_parikh</li>
              <li>Use the support form on our website</li>
            </ul>
          </section>

          <p className="text-sm text-gray-500 mt-8 pt-6 border-t border-gray-800">
            Last Updated: December 2024
          </p>
        </div>
      </div>
    </div>
  );
}

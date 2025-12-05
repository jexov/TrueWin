import { FileText } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden py-12">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-950 to-gray-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="flex items-center justify-center gap-3 mb-8">
          <FileText className="text-blue-500" size={40} />
          <h1 className="text-4xl font-bold text-white">Terms of Service</h1>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing and using TrueWin Digital Services, you accept and agree to be bound by the terms and
              provisions of this agreement. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Service Description</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              TrueWin Digital Services provides skill-based giveaway participation opportunities, VIP membership
              plans, and season token rewards. Our services include:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>Skill-based giveaway events</li>
              <li>VIP membership benefits</li>
              <li>Season token rewards system</li>
              <li>Public winner verification</li>
              <li>Support and verification services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
            <p className="text-gray-300 leading-relaxed mb-3">As a user, you agree to:</p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>Provide accurate and truthful information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Not engage in fraudulent or manipulative behavior</li>
              <li>Follow all rules and guidelines for each giveaway</li>
              <li>Keep clear screenshots of all transactions for verification purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Verification Requirements</h2>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-red-400">Users must provide clear screenshots for all transactions, payments, and payouts.</strong> Missing
              proof may delay or deny resolution of issues. This requirement is essential for maintaining transparency
              and preventing fraud.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Payments and Refunds</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              All payments are processed securely through Razorpay. By making a purchase, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>The payment terms and pricing displayed at the time of purchase</li>
              <li>Our refund policy as detailed in the Refund Policy page</li>
              <li>Providing payment screenshots for verification and activation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. VIP Membership</h2>
            <p className="text-gray-300 leading-relaxed">
              VIP memberships provide enhanced benefits including priority support, faster verifications, and access
              to exclusive events. VIP benefits are valid for the purchased duration and may be subject to changes
              with prior notice. Early access and hints apply only to selected events.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Season Tokens</h2>
            <p className="text-gray-300 leading-relaxed">
              Season tokens provide bonus percentages on eligible wins. Tokens are non-transferable and carry
              forward to the next season only if the user remains active. Tokens do not guarantee wins and only
              provide reward boosts on valid victories.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Prohibited Activities</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              The following activities are strictly prohibited:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>Creating multiple accounts to manipulate giveaways</li>
              <li>Attempting to fraud or deceive the system</li>
              <li>Sharing account credentials with others</li>
              <li>Engaging in scam activities</li>
              <li>Harassing other users or staff</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Account Termination</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to suspend or terminate accounts that violate these terms, engage in fraudulent
              activities, or pose a risk to our community. Terminated accounts may be publicly listed in our banned
              users log for transparency.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              TrueWin Digital Services is not liable for any indirect, incidental, or consequential damages arising
              from the use of our services. Our total liability is limited to the amount paid by the user for the
              specific service in question.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these terms at any time. Users will be notified of significant changes.
              Continued use of the service after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed">
              For questions about these terms, please contact us at support@truewin.one or via Telegram @tanish_parikh.
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

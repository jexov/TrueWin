import { DollarSign } from 'lucide-react';

export default function Refund() {
  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden py-12">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-900/20 via-gray-950 to-gray-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-900/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="flex items-center justify-center gap-3 mb-8">
          <DollarSign className="text-yellow-500" size={40} />
          <h1 className="text-4xl font-bold text-white">Refund Policy</h1>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Overview</h2>
            <p className="text-gray-300 leading-relaxed">
              At TrueWin Digital Services, we strive for complete transparency in all transactions. This refund
              policy outlines the circumstances under which refunds may be issued for VIP memberships and token
              purchases.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. VIP Membership Refunds</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              VIP membership refunds are available under the following conditions:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>Refund request made within 48 hours of purchase</li>
              <li>No VIP benefits have been utilized</li>
              <li>Valid payment screenshot provided</li>
              <li>Account has not participated in VIP-exclusive events</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-3">
              Refunds for VIP memberships are processed within 5-7 business days to the original payment method.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Token Purchase Refunds</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              Token purchase refunds may be issued if:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>Tokens were not credited to your account due to technical error</li>
              <li>Duplicate payment was made by mistake</li>
              <li>Request made within 24 hours of purchase</li>
              <li>Tokens have not been used in any events</li>
            </ul>
            <p className="text-red-400 font-medium mt-3">
              Note: Tokens purchased through Telegram with cashback offer are not eligible for refunds.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Non-Refundable Items</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              The following are not eligible for refunds:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>VIP memberships after 48 hours or after benefits are used</li>
              <li>Tokens that have been used in any event</li>
              <li>Participation fees for completed giveaways</li>
              <li>Services already rendered or consumed</li>
              <li>Telegram cashback token purchases</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Verification Requirements</h2>
            <div className="bg-yellow-900/20 border-2 border-yellow-500/50 rounded-lg p-4">
              <p className="text-gray-300 leading-relaxed font-medium">
                <strong className="text-red-400">IMPORTANT:</strong> Users must provide clear screenshots of payment transactions
                for all refund requests. Missing proof may delay or deny the refund process. This includes:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4 mt-2">
                <li>Payment confirmation screenshot</li>
                <li>Transaction ID</li>
                <li>UPI reference number (if applicable)</li>
                <li>Bank statement showing the transaction</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Refund Request Process</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              To request a refund:
            </p>
            <ol className="list-decimal list-inside text-gray-400 space-y-2 ml-4">
              <li>Contact support at support@truewin.one or Telegram @tanish_parikh</li>
              <li>Provide your username and transaction details</li>
              <li>Submit clear payment screenshots and proof</li>
              <li>State the reason for refund request</li>
              <li>Wait for verification and processing (5-7 business days)</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Processing Time</h2>
            <p className="text-gray-300 leading-relaxed">
              Approved refunds are processed within 5-7 business days. The time for funds to reflect in your
              account depends on your bank or payment provider. VIP members receive priority processing for
              refund requests.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Disputed Transactions</h2>
            <p className="text-gray-300 leading-relaxed">
              If you notice an unauthorized transaction on your account, contact us immediately. We will
              investigate and take appropriate action. Provide all relevant screenshots and details for faster
              resolution.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Failed Transactions</h2>
            <p className="text-gray-300 leading-relaxed">
              If payment was deducted but service was not delivered due to technical issues, we will either
              provide the service or issue a full refund. Contact support with transaction proof within 24 hours
              of the failed transaction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Policy Changes</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify this refund policy at any time. Users will be notified of
              significant changes. The updated policy applies to all transactions made after the change date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Contact for Refunds</h2>
            <p className="text-gray-300 leading-relaxed">
              For refund requests or questions, contact:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4 mt-2">
              <li>Email: support@truewin.one</li>
              <li>Telegram: @tanish_parikh</li>
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

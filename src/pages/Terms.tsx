import React from 'react';
import { motion } from 'motion/react';
import { siteData } from '../data/siteData';
import { SEO } from '../components/SEO';

export const Terms: React.FC = () => {
  return (
    <>
      <SEO 
        title={`Terms and Conditions | ${siteData.companyName}`}
        description={`Terms and Conditions for ${siteData.companyName} services and messaging programs.`}
      />
      
      <div className="bg-soft-teal/10 min-h-screen py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-10 lg:p-16 rounded-[3rem] shadow-sm border border-gray-100"
          >
            <h1 className="text-4xl font-bold text-[#2B525F] mb-2">Terms and Conditions</h1>
            <p className="text-gray-500 mb-8">Last Updated: January 13th, 2026</p>
            
            <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
              <p>
                These Terms and Conditions govern your use of {siteData.companyName} services, including our website and our SMS and email communications programs. By using our services or opting into our communications, you agree to these Terms and our Privacy Policy.
              </p>

              <section>
                <h2 className="text-2xl font-bold text-[#2B525F] mb-4">1. Program Description</h2>
                <p>
                  {siteData.companyName} may send SMS and email messages to users who opt in. Messages may include promotional offers, service updates, appointment confirmations, and appointment reminders. Message frequency may vary.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2B525F] mb-4">2. Consent to Receive Messages</h2>
                <p>
                  By providing your phone number and opting in, you authorize {siteData.companyName} to send text messages to your mobile number. Consent is not a condition of purchase.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2B525F] mb-4">3. Opt Out</h2>
                <p>
                  You can cancel the SMS service at any time. Just text "STOP" to the {siteData.phone}. After you send the SMS message "STOP" to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2B525F] mb-4">4. Opt In Again</h2>
                <p>
                  If you want to rejoin after opting out, you can opt in again using the same method you used to enroll originally.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2B525F] mb-4">5. Help and Support</h2>
                <p>
                  If you are experiencing issues with the messaging program you can reply with the keyword HELP for more assistance, or you can get help directly at {siteData.email} or {siteData.phone}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2B525F] mb-4">6. Message Frequency and Rates</h2>
                <p>
                  As always, message and data rates may apply for any messages sent to you from us and to us from you. You will receive messages at a varying frequency. If you have any questions about your text plan or data plan, it is best to contact your wireless provider.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2B525F] mb-4">7. Carrier Disclaimer</h2>
                <p>
                  Carriers are not liable for delayed or undelivered messages.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2B525F] mb-4">8. Privacy</h2>
                <p>
                  Your use of the messaging program is also governed by our Privacy Policy. You can view it here: <a href="/privacy-policy" className="text-[#65D6CE] hover:underline">Privacy Policy</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2B525F] mb-4">9. Changes to Terms</h2>
                <p>
                  We may update these Terms from time to time. Updates will be posted with a new Last Updated date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2B525F] mb-4">10. Contact</h2>
                <p>Questions about these Terms can be sent to:</p>
                <div className="mt-4 p-6 bg-soft-teal/5 rounded-2xl border border-soft-teal/10">
                  <p className="font-bold text-[#2B525F]">{siteData.companyName}</p>
                  <p>Address: {siteData.address}</p>
                  <p>Phone: {siteData.phone}</p>
                  <p>Email: {siteData.email}</p>
                </div>
                <p className="mt-6">
                  If you have any questions regarding privacy, please read our privacy policy: <a href="/privacy-policy" className="text-[#65D6CE] hover:underline">{window.location.origin}/privacy-policy</a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

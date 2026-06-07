import React from 'react';
import { motion } from 'motion/react';
import { siteData } from '../data/siteData';
import { SEO } from '../components/SEO';

export const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <SEO 
        title={`Privacy Policy | ${siteData.companyName}`}
        description={`Privacy Policy for ${siteData.companyName}. Learn how we collect, use, and protect your personal data.`}
      />
      
      <div className="bg-soft-teal/10 min-h-screen py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-10 lg:p-16 rounded-[3rem] shadow-sm border border-gray-100"
          >
            <h1 className="text-4xl font-bold text-[#2B525F] mb-2">Privacy Policy</h1>
            <p className="text-gray-500 mb-8">Last Updated: January 13th, 2026</p>
            
            <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-[#2B525F] mb-4">1. Introduction</h2>
                <p>
                  {siteData.companyName} (we, us, our) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services, including SMS marketing, email marketing, appointment reminders, and website tracking tools. By using our services or opting into our communications, you agree to this Privacy Policy and our Terms and Conditions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2B525F] mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-bold text-[#2B525F] mb-2">Contact information</h3>
                <p>
                  We may collect your name, email address, phone number, and mailing address when you submit forms, book appointments, request information, or otherwise provide it to us.
                </p>
                <h3 className="text-xl font-bold text-[#2B525F] mb-2 mt-4">Communications data</h3>
                <p>
                  If you opt in, we collect your messaging preferences and maintain records of consent and opt out activity related to SMS and email communications.
                </p>
                <h3 className="text-xl font-bold text-[#2B525F] mb-2 mt-4">Usage and device information</h3>
                <p>
                  We may use cookies, pixels, and analytics tools to collect information about how you use our website. This may include your IP address, browser type, pages visited, and interaction data.
                </p>
                <h3 className="text-xl font-bold text-[#2B525F] mb-2 mt-4">Appointment and service data</h3>
                <p>
                  If you schedule appointments or use our services, we may collect details associated with those interactions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2B525F] mb-4">3. How We Use Your Information</h2>
                <p>We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide requested services and customer support</li>
                  <li>Send appointment confirmations and reminders</li>
                  <li>Send SMS and email communications that you have explicitly consented to receive</li>
                  <li>Improve our website and marketing performance using analytics</li>
                  <li>Maintain compliance records related to consent and opt outs</li>
                  <li>Protect our business and users, including fraud and security monitoring</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2B525F] mb-4">4. Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar technologies to personalize your experience and understand how our website is used. You can control cookies through your browser settings. Some features may not work correctly if cookies are disabled.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2B525F] mb-4">5. How We Share Your Information</h2>
                <p>
                  We do not sell your personal information. We do not share mobile phone numbers, SMS opt in data, or consent information with third parties or affiliates for marketing or promotional purposes. We may share information only in the following limited circumstances:
                </p>
                <h3 className="text-xl font-bold text-[#2B525F] mb-2 mt-4">Service providers</h3>
                <p>
                  We may share information with trusted vendors who help us deliver services, such as SMS and email delivery, customer support tools, scheduling tools, and analytics providers. These providers may only use information to perform services on our behalf.
                </p>
                <h3 className="text-xl font-bold text-[#2B525F] mb-2 mt-4">Legal and safety</h3>
                <p>
                  We may disclose information if required by law or to protect the rights, safety, and security of {siteData.companyName}, our users, or others.
                </p>
                <h3 className="text-xl font-bold text-[#2B525F] mb-2 mt-4">Business transfers</h3>
                <p>
                  If {siteData.companyName} is involved in a merger, acquisition, or asset sale, information may be transferred as part of that transaction. Any successor will be required to honor this Privacy Policy.
                </p>
                <h3 className="text-xl font-bold text-[#2B525F] mb-2 mt-4">Third party sharing</h3>
                <p>
                  No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2B525F] mb-4">6. Your Choices</h2>
                <h3 className="text-xl font-bold text-[#2B525F] mb-2">SMS opt out</h3>
                <p>
                  You can opt out of SMS messages at any time by replying STOP to any message. After you send STOP, we will send a confirmation message and you will no longer receive SMS messages unless you opt back in.
                </p>
                <h3 className="text-xl font-bold text-[#2B525F] mb-2 mt-4">Email opt out</h3>
                <p>
                  You can unsubscribe from marketing emails by clicking the unsubscribe link in the email.
                </p>
                <h3 className="text-xl font-bold text-[#2B525F] mb-2 mt-4">Access and correction</h3>
                <p>
                  You may contact us to request access to, correction of, or deletion of your personal information, subject to applicable law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2B525F] mb-4">7. Data Security</h2>
                <p>
                  We use reasonable administrative, technical, and physical safeguards to protect your information. No method of transmission or storage is fully secure, so we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2B525F] mb-4">8. Children’s Privacy</h2>
                <p>
                  Our services are not intended for children under 13 and we do not knowingly collect personal information from children.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2B525F] mb-4">9. Updates to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. The updated version will be posted with a new Last Updated date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2B525F] mb-4">10. Contact Us</h2>
                <p>If you have questions about this Privacy Policy, contact:</p>
                <div className="mt-4 p-6 bg-soft-teal/5 rounded-2xl border border-soft-teal/10">
                  <p className="font-bold text-[#2B525F]">{siteData.companyName}</p>
                  <p>Address: {siteData.address}</p>
                  <p>Phone: {siteData.phone}</p>
                  <p>Email: {siteData.email}</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

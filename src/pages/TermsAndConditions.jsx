

import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

const TermsAndConditions = () => {
  return (
    <Fragment>
      <Helmet>
        <html lang="en" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Terms and Conditions - Watchdogs.net</title>
        <meta name="description" content="Read our Terms and Conditions to understand the rules for using Watchdogs.net sports betting and odds comparison services, including user eligibility, betting rules, and liabilities." />
        <meta name="keywords" content="terms and conditions, betting rules, user agreement, sports betting terms, responsible gambling" />
        <meta name="author" content="Watchdogs Team" />
        <link rel="canonical" href="https://watchdogs.net/terms-and-conditions" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Terms and Conditions - Watchdogs.net" />
        <meta property="og:description" content="Understand the terms governing your use of Watchdogs.net, including account registration, betting rules, and limitations of liability." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://watchdogs.net/terms-and-conditions" />
        <meta property="og:image" content="https://watchdogs.net/og-terms.jpg" />
        <meta property="og:image:alt" content="Terms and Conditions - Watchdogs.net" />
        <meta property="og:site_name" content="Watchdogs.net" />
        {/* Structured Data: WebPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms and Conditions",
            "url": "https://watchdogs.net/terms-and-conditions",
            "description": "Terms and conditions for using Watchdogs.net sports betting services.",
            "publisher": {
              "@type": "Organization",
              "name": "Watchdogs.net",
              "url": "https://watchdogs.net/",
              "logo": {
                "@type": "ImageObject",
                "url": "https://watchdogs.net/logo.jpg"
              }
            }
          })}
        </script>
      </Helmet>
      <div className="pt-[120px] min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="bg-white rounded-lg shadow-lg border-2 border-gray-500 p-6 md:p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms and Conditions</h1>
            <p className="text-gray-600 mb-4">Last updated: October 04, 2025</p>
            
            <div className="space-y-8">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms and Conditions ("Terms") govern your access to and use of our website (the "Site") and services (collectively, "Services") provided by [Your Company Name], a sports betting and odds comparison platform. 
                  By accessing the Site or using our Services, you agree to be bound by these Terms. If you do not agree, please do not use the Site or Services.
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  We reserve the right to modify these Terms at any time. Continued use after changes constitutes acceptance.
                </p>
              </section>

              {/* Acceptance of Terms */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By registering an account, placing a bet, or otherwise using the Services, you confirm that you have read, understood, and agree to these Terms, our Privacy Policy, and any applicable rules or guidelines.
                </p>
              </section>

              {/* User Eligibility */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Eligibility</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You must be at least 18 years old (or the legal age in your jurisdiction) to use our Services. By using the Site, you represent that you meet this requirement and are not located in a jurisdiction where such activities are prohibited.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>We reserve the right to request proof of age and identity.</li>
                  <li>Users from restricted countries (e.g., USA for certain betting) are not permitted.</li>
                  <li>Abuse of multiple accounts or bonus abuse may result in suspension.</li>
                </ul>
              </section>

              {/* Account Registration */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Account Registration</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To access certain features, you must create an account with accurate information. You are responsible for maintaining the confidentiality of your login credentials.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>You may not transfer or sell your account.</li>
                  <li>We may suspend or terminate accounts for violations.</li>
                  <li>You agree to notify us of any unauthorized use immediately.</li>
                </ul>
              </section>

              {/* User Conduct */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. User Conduct</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Use the Site for unlawful purposes or in violation of any laws.</li>
                  <li>Engage in fraudulent activities, such as using stolen credit cards.</li>
                  <li>Interfere with the Site's operation or security.</li>
                  <li>Post harmful, obscene, or infringing content.</li>
                  <li>Attempt to reverse-engineer or hack the Site.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-2">
                  We may report violations to authorities and cooperate with law enforcement.
                </p>
              </section>

              {/* Betting Rules */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Betting Rules</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All bets are subject to the rules of the relevant bookmaker and our platform guidelines. We provide odds comparison but do not guarantee outcomes.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Bets are final once placed; no cancellations except in cases of technical errors.</li>
                  <li>Void bets will be refunded at stake.</li>
                  <li>We are not liable for losses due to betting decisions.</li>
                  <li>Promotions and bonuses have specific wagering requirements.</li>
                  <li>Maximum bet limits may apply.</li>
                </ul>
              </section>

              {/* Payments and Withdrawals */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Payments and Withdrawals</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All transactions are processed in [Currency, e.g., USD]. We use third-party processors for security.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Deposits are instant; withdrawals may take 1-5 business days.</li>
                  <li>Minimum withdrawal: [Amount, e.g., $10].</li>
                  <li>Fees may apply for certain methods.</li>
                  <li>We may request verification before withdrawals to prevent fraud.</li>
                  <li>Currency conversion fees are your responsibility.</li>
                </ul>
              </section>

              {/* Intellectual Property */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed">
                  All content on the Site, including text, graphics, logos, and software, is owned by us or our licensors and protected by copyright, trademark, and other laws. 
                  You may not reproduce, distribute, or create derivative works without our written permission.
                </p>
              </section>

              {/* Disclaimers and Limitations of Liability */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Disclaimers and Limitations of Liability</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Site is provided "as is" without warranties of any kind. We disclaim all warranties, express or implied.
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  In no event shall we be liable for indirect, incidental, or consequential damages, including loss of profits or data. Our total liability shall not exceed the amount you paid us in the past 12 months.
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  Betting involves risk; we encourage responsible gambling. Seek help if needed (e.g., via Gamblers Anonymous).
                </p>
              </section>

              {/* Termination */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Termination</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may terminate or suspend your access at any time for violations of these Terms. Upon termination, your right to use the Services ends, but obligations (e.g., payment) survive.
                </p>
              </section>

              {/* Governing Law */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms are governed by the laws of [Jurisdiction, e.g., England and Wales], without regard to conflict of laws principles. Any disputes shall be resolved in the courts of [Location, e.g., London].
                </p>
              </section>

              {/* Changes to Terms */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update these Terms periodically. Changes will be posted on the Site with the updated date. Significant changes may be notified via email. Continued use after updates means acceptance.
                </p>
              </section>

              {/* Contact Us */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have questions about these Terms, please contact us at:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 mt-2">
                  <li>Email: support@example.com</li>
                  <li>Address: [Your Company Address]</li>
                  <li>Phone: +1-234-567-8900</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TermsAndConditions;
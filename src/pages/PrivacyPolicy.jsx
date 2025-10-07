

import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {
  return (
    <Fragment>
      <Helmet>
        <html lang="en" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Privacy Policy - Watchdogs.net</title>
        <meta name="description" content="Read our Privacy Policy to understand how Watchdogs.net collects, uses, and protects your personal information when using our sports betting and odds comparison services." />
        <meta name="keywords" content="privacy policy, data protection, personal information, GDPR, CCPA, cookies, sports betting privacy" />
        <meta name="author" content="Watchdogs Team" />
        <link rel="canonical" href="https://watchdogs.net/privacy-policy" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Privacy Policy - Watchdogs.net" />
        <meta property="og:description" content="Learn how Watchdogs.net handles your personal data, including collection, usage, sharing, and your rights under GDPR and CCPA." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://watchdogs.net/privacy-policy" />
        <meta property="og:image" content="https://watchdogs.net/og-privacy.jpg" />
        <meta property="og:image:alt" content="Privacy Policy - Watchdogs.net" />
        <meta property="og:site_name" content="Watchdogs.net" />
        {/* Structured Data: WebPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy",
            "url": "https://watchdogs.net/privacy-policy",
            "description": "Privacy policy detailing how Watchdogs.net collects, uses, and protects user information.",
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
      <div className="pt-[125px] min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="bg-white rounded-lg shadow-lg border-2 border-gray-500 p-6 md:p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            <p className="text-gray-600 mb-4">Last updated: October 04, 2025</p>
            
            <div className="space-y-8">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  Welcome to our website (the "Site"). We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our Site or use our services (collectively, "Services"). 
                  Please read this policy carefully. If you do not agree with the terms of this policy, please do not access the Site or use our Services.
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  We operate as a sports betting and odds comparison platform. By using our Services, you consent to the practices described in this policy.
                </p>
              </section>

              {/* Information We Collect */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We collect information to provide and improve our Services. The types of information we collect include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, date of birth, and payment details when you register an account or place bets.</li>
                  <li><strong>Usage Data:</strong> Information about how you interact with our Site, such as IP address, browser type, pages visited, and time spent on pages.</li>
                  <li><strong>Cookies and Tracking Data:</strong> We use cookies to track user preferences and analyze Site usage (see Section 7 for details).</li>
                  <li><strong>Financial Information:</strong> Payment card details or other financial data processed through third-party payment gateways.</li>
                  <li><strong>Betting Data:</strong> Details of bets placed, including selections, stakes, and outcomes, to comply with regulatory requirements.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-2">
                  We do not collect sensitive personal information such as racial or ethnic origin, political opinions, or health data unless required for age verification or regulatory compliance.
                </p>
              </section>

              {/* How We Use Your Information */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>To provide and maintain our Services, including processing bets and displaying odds.</li>
                  <li>To personalize your experience, such as recommending matches or promotions.</li>
                  <li>To communicate with you, including sending updates, promotions, or account notifications.</li>
                  <li>To improve our Site and Services through analytics and research.</li>
                  <li>To prevent fraud, ensure compliance with gambling laws, and verify user age (must be 18+).</li>
                  <li>To process payments and manage refunds or withdrawals.</li>
                  <li>For legal purposes, such as responding to subpoenas or complying with data protection laws like GDPR or CCPA.</li>
                </ul>
              </section>

              {/* Sharing Your Information */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Sharing Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not sell your personal information. We may share it in the following limited circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Service Providers:</strong> With trusted third parties who assist us in operating our Site, such as payment processors (e.g., Stripe, PayPal), analytics tools (e.g., Google Analytics), and email services.</li>
                  <li><strong>Legal Requirements:</strong> If required by law, regulation, or legal process, or to protect our rights, property, or safety.</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</li>
                  <li><strong>Affiliates:</strong> With our corporate affiliates who provide services on our behalf.</li>
                  <li><strong>Third-Party Bookmakers:</strong> Anonymized betting data may be shared with partner bookmakers for odds comparison, without revealing personal identifiers.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-2">
                  All third parties are required to protect your information and use it only for the purposes we specify.
                </p>
              </section>

              {/* Data Security */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement reasonable administrative, technical, and physical safeguards to protect your personal information from loss, misuse, unauthorized access, disclosure, alteration, or destruction. 
                  These include encryption for sensitive data, secure servers, and regular security audits. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
                </p>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Access: Request a copy of your personal data.</li>
                  <li>Rectification: Correct inaccurate information.</li>
                  <li>Deletion: Request removal of your data (subject to legal obligations).</li>
                  <li>Objection: Object to processing in certain cases.</li>
                  <li>Portability: Receive your data in a structured format.</li>
                  <li>Withdraw Consent: Where processing is based on consent, withdraw it at any time.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-2">
                  To exercise these rights, contact us at [email@example.com]. We will respond within 30 days. For users in the EU/UK, this is in line with GDPR; for California residents, CCPA.
                </p>
              </section>

              {/* Cookies and Tracking */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use cookies, web beacons, and similar technologies to enhance your experience. Cookies are small files stored on your device.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Essential Cookies:</strong> Necessary for Site functionality.</li>
                  <li><strong>Analytics Cookies:</strong> To understand usage patterns.</li>
                  <li><strong>Marketing Cookies:</strong> To deliver relevant ads.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-2">
                  You can manage cookies via your browser settings. Disabling them may limit Site features. For more details, see our Cookie Policy [link to cookie policy].
                </p>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Children's Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our Services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. 
                  If we become aware of such collection, we will delete the information promptly. Parents or guardians who believe their child has provided us with information should contact us.
                </p>
              </section>

              {/* Changes to This Policy */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to This Privacy Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this policy from time to time to reflect changes in our practices or legal requirements. The updated policy will be posted on this page with a revised "Last updated" date. 
                  We encourage you to review this policy periodically. Continued use of our Services after changes constitutes acceptance of the new policy.
                </p>
              </section>

              {/* Contact Us */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have questions about this Privacy Policy, please contact our Data Protection Officer at:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 mt-2">
                  <li>Email: privacy@example.com</li>
                  <li>Address: [Your Company Address]</li>
                  <li>Phone: +1-234-567-8900</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-2">
                  For EU/UK users, you may also contact your local data protection authority.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PrivacyPolicy;
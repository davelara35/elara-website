
import React from 'react';
import { Mail } from 'lucide-react';

const SECTIONS = [
  {
    title: '1. Information We Collect',
    subsections: [
      {
        title: '1.1 Information You Provide',
        content: 'We collect information you provide directly, such as your name, email address, phone number, practice information, billing details, and any other information you submit when creating an account, filling out forms, or contacting us.',
      },
      {
        title: '1.2 Information Collected Automatically',
        content: 'When you use our Services, we may automatically collect certain information, including your IP address, browser type, device information, operating system, usage data, and interaction logs.',
      },
      {
        title: '1.3 Call and Chat Data',
        content: 'Our AI receptionist and automation tools may process call recordings, transcripts, chat messages, and related metadata to deliver and improve the Services. This data is treated as Customer Data under our Terms and Conditions.',
      },
      {
        title: '1.4 Cookies and Tracking Technologies',
        content: 'We use cookies, pixels, and similar technologies to enhance your experience, analyze usage patterns, and deliver relevant content. You can manage cookie preferences through your browser settings.',
      },
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [
      'Provide, operate, and maintain the Services.',
      'Process transactions and send related information.',
      'Respond to your inquiries, comments, and support requests.',
      'Improve, personalize, and expand our Services.',
      'Analyze usage trends and monitor the effectiveness of our platform.',
      'Communicate with you about updates, promotions, and other news (with your consent where required).',
      'Detect, prevent, and address technical issues and security threats.',
      'Comply with legal obligations and enforce our agreements.',
    ],
    prefix: 'We use the information we collect to:',
  },
  {
    title: '3. How We Share Your Information',
    subsections: [
      {
        title: '3.1 Service Providers',
        content: 'We may share your information with third-party vendors and service providers who perform services on our behalf, such as hosting, analytics, payment processing, and customer support.',
      },
      {
        title: '3.2 Business Transfers',
        content: 'In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.',
      },
      {
        title: '3.3 Legal Requirements',
        content: 'We may disclose your information if required by law, regulation, legal process, or governmental request, or to protect the rights, safety, or property of Elara, our users, or the public.',
      },
      {
        title: '3.4 With Your Consent',
        content: 'We may share your information with third parties when you have given us explicit consent to do so.',
      },
    ],
  },
  {
    title: '4. Data Retention',
    text: 'We retain your information for as long as your account is active or as needed to provide you with the Services. We may also retain certain information as required by law, to resolve disputes, enforce agreements, or for legitimate business purposes such as analytics and record-keeping.',
  },
  {
    title: '5. Data Security',
    text: 'We implement commercially reasonable technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.',
  },
  {
    title: '6. Your Rights and Choices',
    content: [
      '<strong>Access:</strong> Request a copy of the personal information we hold about you.',
      '<strong>Correction:</strong> Request that we correct inaccurate or incomplete information.',
      '<strong>Deletion:</strong> Request that we delete your personal information, subject to certain exceptions.',
      '<strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time by clicking the "unsubscribe" link in our emails.',
      '<strong>Data Portability:</strong> Request a copy of your data in a structured, machine-readable format.',
      '<strong>Restrict Processing:</strong> Request that we limit the processing of your personal information under certain circumstances.',
    ],
    prefix: 'Depending on your location, you may have the following rights regarding your personal information:',
  },
  {
    title: '7. HIPAA and Healthcare Data',
    text: 'Elara is committed to supporting healthcare practices in meeting their compliance obligations. Where applicable, we will enter into a Business Associate Agreement (BAA) with covered entities as required under the Health Insurance Portability and Accountability Act (HIPAA). Protected Health Information (PHI) is handled in accordance with applicable regulations and our BAA commitments.',
  },
  {
    title: '8. Children\'s Privacy',
    text: 'Our Services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected information from a child, we will take steps to delete it promptly.',
  },
  {
    title: '9. Third-Party Links and Integrations',
    text: 'Our Services may contain links to third-party websites or integrate with third-party applications. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.',
  },
  {
    title: '10. Changes to This Policy',
    text: 'We may update this Privacy Policy from time to time. When we make changes, we will update the "Last updated" date at the top of this page. We encourage you to review this policy periodically to stay informed about how we protect your information.',
  },
];

const PrivacyPolicy: React.FC = () => {
  return (
    <section id="privacy" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Privacy Policy</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Last updated: Sep 18, 2025
          </p>
        </div>

        {/* Intro */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="p-8 md:p-12 rounded-3xl glass border">
            <p className="text-gray-400 text-base leading-relaxed mb-4">
              Try Elara LLC ("Elara," "we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you access or use our AI receptionist platform, call and chat automation tools, and related services ("Services").
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-4">
              This policy applies to all users of our Services, including healthcare practices, their staff, and patients whose information may be processed through the platform.
            </p>
            <p className="text-gray-300 text-base leading-relaxed font-medium">
              By using the Services, you consent to the practices described in this Privacy Policy. If you do not agree, please discontinue use of the Services.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="max-w-4xl mx-auto space-y-12">
          {SECTIONS.map((section, idx) => (
            <div key={idx} className="p-8 rounded-3xl glass border">
              <h3 className="text-xl md:text-2xl font-bold mb-6">{section.title}</h3>

              {section.text && (
                <p className="text-gray-400 text-base leading-relaxed">{section.text}</p>
              )}

              {section.prefix && (
                <p className="text-gray-400 text-base leading-relaxed mb-3">{section.prefix}</p>
              )}

              {section.content && (
                <ul className="space-y-3">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"></span>
                      <span
                        className="text-gray-400 text-base leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    </li>
                  ))}
                </ul>
              )}

              {section.subsections && (
                <div className="space-y-6">
                  {section.subsections.map((sub, i) => (
                    <div key={i}>
                      <h4 className="text-lg font-semibold mb-2 text-gray-200">{sub.title}</h4>
                      <p className="text-gray-400 text-base leading-relaxed">{sub.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="p-8 md:p-12 rounded-3xl glass border text-center">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400 text-base leading-relaxed mb-2">
              If you have questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <a
              href="mailto:legal@tryelara.org"
              className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
            >
              legal@tryelara.org
            </a>
            <p className="text-gray-500 text-sm mt-4">Try Elara LLC — Raleigh, NC, USA</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <p className="text-gray-400 text-lg leading-relaxed">
            Elara gives your practice the tools to manage every patient conversation, inbound or outbound, with ease — keeping your schedule full and every lead or inquiry engaged.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;

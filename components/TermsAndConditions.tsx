
import React from 'react';
import { FileText, Mail } from 'lucide-react';

const SECTIONS = [
  {
    title: '1. Definitions',
    content: [
      '<strong>Affiliate:</strong> Any entity that controls, is controlled by, or is under common control with a party.',
      '<strong>Agreement:</strong> This document, including all attachments, or referenced policies.',
      '<strong>Elara Materials:</strong> All software, documentation, workflows, AI models, voice scripts, integrations, and other intellectual property provided by Elara.',
      '<strong>Customer Data:</strong> Any information, data, or content submitted by you or your users through the Services.',
      '<strong>Order Form:</strong> The ordering document (digital or written) executed by Customer and Elara for subscription Services.',
      '<strong>Services:</strong> Elara\'s AI receptionist, call handling, scheduling, chat automation, integrations, and related SaaS offerings.',
      '<strong>Users:</strong> Individuals authorized by Customer to use the Services.',
    ],
  },
  {
    title: '2. The Services',
    subsections: [
      {
        title: '2.1 Access',
        content: 'Subject to this Agreement, Elara grants Customer a limited, non-exclusive, non-transferable right to access and use the Services during the Subscription Term solely for internal business purposes.',
      },
      {
        title: '2.2 Software & Updates',
        content: 'Certain features may require you to install or connect software. Software may update automatically. Any open-source components will be governed by their respective licenses.',
      },
      {
        title: '2.3 Ownership',
        content: 'All rights, title, and interest in the Services, Elara Materials, and related intellectual property belong exclusively to Elara. No rights are granted except as expressly provided herein.',
      },
      {
        title: '2.4 Third-Party Products',
        content: 'The Services may integrate with third-party applications. Elara is not responsible for any third-party products or services and disclaims all liability arising from their use.',
      },
      {
        title: '2.5 Free or Trial Services',
        content: 'Free trials are provided "as is" without warranty. Elara may suspend or terminate free access at any time.',
      },
    ],
  },
  {
    title: '3. Customer Data',
    subsections: [
      {
        title: '3.1 Ownership',
        content: 'You retain all rights to Customer Data. Elara will not sell your data.',
      },
      {
        title: '3.2 License to Elara',
        content: 'You grant Elara a limited license to use Customer Data for the purpose of delivering and improving the Services.',
      },
      {
        title: '3.3 Aggregate & De-Identified Data',
        content: 'Elara may use anonymized and aggregated data to improve Services, provided it does not identify you or your users.',
      },
      {
        title: '3.4 Security',
        content: 'Elara uses commercially reasonable measures to protect Customer Data. However, you are responsible for maintaining the security of your account and credentials.',
      },
    ],
  },
  {
    title: '4. Customer Responsibilities',
    content: [
      'Copy, resell, or distribute the Services.',
      'Use the Services for unlawful or harmful purposes.',
      'Reverse engineer or attempt to extract source code.',
      'Share access credentials outside of authorized Users.',
      'Use the Services in violation of applicable laws (including call recording, privacy, or data protection laws).',
    ],
    prefix: 'You agree not to:',
  },
  {
    title: '5. Fees & Payment',
    subsections: [
      {
        title: '5.1 Fees',
        content: 'You agree to pay all fees as specified in the applicable Order Form or pricing page.',
      },
      {
        title: '5.2 Billing & Payment',
        content: 'Unless otherwise agreed, payments are due within 30 days of invoice. Credit card and ACH payments authorize Elara to automatically charge your account.',
      },
      {
        title: '5.3 Late Payments',
        content: 'Overdue amounts may incur interest of 1.5% per month or the maximum allowed by law. Elara may suspend Services for non-payment.',
      },
      {
        title: '5.4 Taxes',
        content: 'Fees are exclusive of taxes. You are responsible for all applicable sales, use, and similar taxes.',
      },
    ],
  },
  {
    title: '6. Warranties & Disclaimers',
    content: [
      'Each party represents that it has the authority to enter this Agreement.',
      'Services are provided "as is" without warranties of merchantability, fitness for a particular purpose, or error-free operation.',
      'Beta features are experimental and provided without guarantees.',
    ],
  },
  {
    title: '7. Confidentiality',
    text: 'Each party agrees to protect the other\'s confidential information with at least the same care it uses to protect its own. Confidential information may not be disclosed without prior written consent.',
  },
  {
    title: '8. Term & Termination',
    subsections: [
      {
        title: '8.1 Term',
        content: 'This Agreement remains in effect until terminated in accordance with this Section.',
      },
      {
        title: '8.2 Termination for Cause',
        content: 'Either party may terminate this Agreement if the other materially breaches and fails to cure within 30 days.',
      },
      {
        title: '8.3 Effect of Termination',
        content: 'Upon termination, your right to access Services ends immediately. Elara may delete Customer Data after termination unless otherwise required by law.',
      },
    ],
  },
  {
    title: '9. Indemnification',
    content: [
      'Elara will indemnify you against claims that the Services infringe third-party intellectual property rights.',
      'Customer will indemnify Elara against claims arising from Customer Data, misuse of Services, or violations of this Agreement.',
    ],
  },
  {
    title: '10. Limitation of Liability',
    content: [
      'Neither party is liable for indirect, incidental, or consequential damages.',
      'Elara\'s total liability will not exceed the fees you paid in the 12 months preceding the claim.',
    ],
    prefix: 'To the fullest extent permitted by law:',
  },
  {
    title: '11. General Provisions',
    subsections: [
      {
        title: '11.1 Relationship',
        content: 'The parties are independent contractors.',
      },
      {
        title: '11.2 Notices',
        content: 'Notices must be sent to legal@tryelara.org or to the Customer\'s registered address.',
      },
      {
        title: '11.3 Assignment',
        content: 'Neither party may assign this Agreement without the other\'s consent, except in connection with a merger or acquisition.',
      },
      {
        title: '11.4 Governing Law',
        content: 'This Agreement is governed by the laws of the State of North Carolina.',
      },
      {
        title: '11.5 Arbitration',
        content: 'Any disputes shall be resolved through binding arbitration in North Carolina under JAMS Rules. Claims must be brought individually, not as part of a class action.',
      },
      {
        title: '11.6 Force Majeure',
        content: 'Neither party is liable for delays caused by events beyond reasonable control.',
      },
      {
        title: '11.7 Entire Agreement',
        content: 'This Agreement constitutes the entire agreement and supersedes all prior terms.',
      },
    ],
  },
];

const TermsAndConditions: React.FC = () => {
  return (
    <section id="terms" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Terms and Conditions</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Last updated: Sep 18, 2025
          </p>
        </div>

        {/* Intro */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="p-8 md:p-12 rounded-3xl glass border">
            <p className="text-gray-400 text-base leading-relaxed mb-4">
              This Customer Terms of Service Agreement ("Agreement") is entered into by and between Try Elara LLC ("Elara," "we," "our," or "us") and the entity or individual purchasing, accessing, or using any of our Services ("Customer," "you," or "your").
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-4">
              If you are using the Services on behalf of an organization, you represent and warrant that you are authorized to bind that organization to this Agreement. In such cases, all references to "you" or "Customer" herein refer to that organization.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-4">
              This Agreement governs your access to and use of Elara's software-as-a-service platform, AI receptionist solutions, call and chat automation tools, and related services ("Services").
            </p>
            <p className="text-gray-300 text-base leading-relaxed font-medium">
              By accessing or using the Services, you agree to be bound by this Agreement. If you do not agree, do not use the Services.
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
              For questions about these Terms, please contact us at:
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

export default TermsAndConditions;

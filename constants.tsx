
import React from 'react';
import { PricingPlan, FAQItem, FeatureItem } from './types';
import { Phone, Calendar, Settings, ShieldCheck, BarChart3, Zap } from 'lucide-react';

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Basic',
    price: 299,
    minutes: 2000,
    overage: 0.20,
    features: [
      'Core Voice AI Engine',
      '2,000 Monthly Minutes',
      'Inbound Call Handling',
      'Standard Integrations',
      'Email Support'
    ]
  },
  {
    name: 'Pro',
    price: 499,
    minutes: 4000,
    overage: 0.20,
    recommended: true,
    features: [
      'Complete Voice AI Platform',
      '4,000 Monthly Minutes',
      'Done-With-You Implementation',
      'Custom Configuration & Training',
      'PMS/Phone System Integration',
      'Real-Time Analytics Dashboard'
    ]
  },
  {
    name: 'Premium',
    price: 699,
    minutes: 7000,
    overage: 0.12,
    features: [
      'Enterprise Voice AI Engine',
      '7,000 Monthly Minutes',
      'Lower Overage Rates ($0.12)',
      'Advanced Workflow Automation',
      'White-Glove Priority Implementation',
      'Multi-Site Support'
    ]
  }
];

export const FEATURES: FeatureItem[] = [
  {
    title: 'Call Management & Booking',
    description: 'Our Voice AI platform handles inbound patient calls with intelligent conversation flows designed to capture information and book appointments.',
    icon: <Phone className="w-6 h-6 text-indigo-400" />
  },
  {
    title: 'Patient Follow-Up Automation',
    description: 'Run recall campaigns, appointment reminders, and treatment follow-ups without adding staff hours via automated outbound calling.',
    icon: <Calendar className="w-6 h-6 text-indigo-400" />
  },
  {
    title: 'Custom Configuration Tools',
    description: 'Flexible scripting, PMS integrations, and workflow customization to adapt the AI to your exact specialty needs.',
    icon: <Settings className="w-6 h-6 text-indigo-400" />
  },
  {
    title: 'PMS/Phone Integration',
    description: 'Seamlessly connects with your existing patient management systems and VOIP providers for a unified experience.',
    icon: <Zap className="w-6 h-6 text-indigo-400" />
  },
  {
    title: 'HIPAA Compliant Security',
    description: 'Engineered with healthcare security standards in mind, ensuring all patient data and voice logs are protected.',
    icon: <ShieldCheck className="w-6 h-6 text-indigo-400" />
  },
  {
    title: 'Real-Time Analytics',
    description: 'Track conversion rates, call volumes, and patient satisfaction scores through a sleek, centralized dashboard.',
    icon: <BarChart3 className="w-6 h-6 text-indigo-400" />
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How do I get started with Elara?",
    answer: "After purchasing the platform, we schedule your 'Done-With-You' implementation sessions. We'll guide you through configuration, integrate with your existing systems, and train you on the software."
  },
  {
    question: "How is this different from hiring a service?",
    answer: "Unlike traditional call centers, Elara is software you own. It's faster, more consistent, and integrated directly into your database. Plus, it never calls in sick and can handle 1,000 calls simultaneously."
  },
  {
    question: "Does this work with my existing phone system?",
    answer: "Yes! Elara is designed to sit alongside or integrate directly with most modern VOIP systems and standard healthcare PMS platforms."
  },
  {
    question: "Can I customize the AI's responses?",
    answer: "Absolutely. During implementation, we build custom scripts and flows that match your practice's unique voice, medical terminology, and operational workflows."
  }
];

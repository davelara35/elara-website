
import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Frequently Asked Questions</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-md">
              Everything you need to know about the Elara platform, implementation, and clinical integration.
            </p>
            <div className="p-8 rounded-3xl glass border border-indigo-500/20 bg-indigo-500/5">
              <h3 className="text-xl font-bold mb-4 text-indigo-400">Still have questions?</h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                Our team is ready to review your practice needs, explore system capabilities, and map your perfect configuration—before you invest.
              </p>
              <a
                href="#contact"
                className="text-indigo-400 font-bold hover:text-indigo-300 transition-colors flex items-center gap-2 group focus:outline-none focus:underline"
              >
                Schedule a Consultation
                <div className="w-5 h-5 rounded-full border border-indigo-400 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <Plus className="w-3 h-3" />
                </div>
              </a>
            </div>
          </div>

          <div className="space-y-4" role="region" aria-label="Frequently asked questions">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              const buttonId = `faq-button-${idx}`;
              const panelId = `faq-panel-${idx}`;

              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen ? 'glass border-indigo-500/30' : 'border-white/5 hover:border-white/20'
                  }`}
                >
                  <h3>
                    <button
                      id={buttonId}
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full p-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset rounded-2xl"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <span className="font-bold text-lg">{faq.question}</span>
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-indigo-400 flex-shrink-0" aria-hidden="true" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-500 flex-shrink-0" aria-hidden="true" />
                      )}
                    </button>
                  </h3>
                  {isOpen && (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="px-6 pb-6 text-gray-400 leading-relaxed animate-fade-in-down"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

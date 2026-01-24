
import React from 'react';
import { PRICING_PLANS } from '../constants';
import { Check, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#050b1a]/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Transparent Pricing Plans</h2>
          <p className="text-gray-400 text-lg">
            Your investment in voice AI automation that pays for itself with a single patient. Choose the plan that fits your practice size.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, idx) => (
            <div 
              key={idx}
              className={`relative p-8 rounded-3xl glass border flex flex-col transition-all duration-300 ${
                plan.recommended 
                ? 'border-indigo-500 shadow-[0_0_40px_rgba(79,70,229,0.2)] scale-105 z-10 bg-indigo-500/5' 
                : 'hover:border-white/20'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-indigo-500 text-white text-[10px] font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <div className="mt-4 inline-block px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-gray-300">
                  {plan.minutes.toLocaleString()} mins + ${plan.overage.toFixed(2)} over
                </div>
              </div>

              <div className="flex-1 space-y-4 mb-10">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://api.leadconnectorhq.com/widget/booking/0usmFWdqKxXZlzCtSL91"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#050b1a] ${
                  plan.recommended
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-white/10 text-white hover:bg-white/20'
                }`}
                aria-label={`Buy now - ${plan.name} plan`}
              >
                Buy Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* DSO/Contact Banner */}
        <div className="mt-16 p-8 rounded-3xl glass border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-2">DSO, GPO, or Multi-Location Practice?</h3>
            <p className="text-gray-400">Specialized pricing and white-glove deployment for large organizations.</p>
          </div>
          <a
            href="https://api.leadconnectorhq.com/widget/booking/Pn8X4pl7wr9mMibar01L"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl glass border-white/10 font-bold hover:bg-white/10 transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#050b1a]"
          >
            Talk to Enterprise Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

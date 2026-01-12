import React, { useState } from 'react';
import { Calculator, Minus, Plus, TrendingDown, DollarSign } from 'lucide-react';

const ROICalculator: React.FC = () => {
  const [customerLTV, setCustomerLTV] = useState(1000);
  const [missedCallsPerMonth, setMissedCallsPerMonth] = useState(50);
  const [conversionRate, setConversionRate] = useState(25);

  // Calculations
  const estimatedSalesLost = missedCallsPerMonth * (conversionRate / 100);
  const estimatedRevenueLost = estimatedSalesLost * customerLTV;

  // Formatting functions
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatDecimal = (value: number) => {
    return value.toFixed(1);
  };

  // Handler functions
  const handleLTVIncrease = () => {
    if (customerLTV < 50000) {
      setCustomerLTV(prev => Math.min(prev + 100, 50000));
    }
  };

  const handleLTVDecrease = () => {
    if (customerLTV > 0) {
      setCustomerLTV(prev => Math.max(prev - 100, 0));
    }
  };

  return (
    <section id="roi-calculator" className="py-24 md:py-32 bg-[#050b1a]/50">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Calculator className="w-8 h-8 text-indigo-400" />
            <h2 className="text-3xl md:text-5xl font-bold">Calculate Your ROI</h2>
          </div>
          <p className="text-gray-400 text-lg">
            See how much revenue you're losing from missed calls and unanswered inquiries
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Inputs Column */}
          <div className="lg:col-span-3 space-y-6">
            {/* Customer LTV Input */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Customer LTV ($)
              </label>
              <div className="p-6 rounded-2xl glass border border-white/10 flex items-center justify-between gap-4">
                <button
                  onClick={handleLTVDecrease}
                  disabled={customerLTV === 0}
                  className="w-12 h-12 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-label="Decrease customer LTV"
                >
                  <Minus className="w-5 h-5 text-indigo-400" />
                </button>
                <div className="flex-1 text-center">
                  <span className="text-3xl md:text-4xl font-bold text-white">
                    {formatCurrency(customerLTV)}
                  </span>
                </div>
                <button
                  onClick={handleLTVIncrease}
                  disabled={customerLTV === 50000}
                  className="w-12 h-12 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-label="Increase customer LTV"
                >
                  <Plus className="w-5 h-5 text-indigo-400" />
                </button>
              </div>
            </div>

            {/* Missed Calls Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Missed Calls Per Month
                </label>
                <span className="text-sm font-bold text-indigo-400 px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                  {missedCallsPerMonth} calls
                </span>
              </div>
              <div className="p-6 rounded-2xl glass border border-white/10">
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={missedCallsPerMonth}
                  onChange={(e) => setMissedCallsPerMonth(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-indigo-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-indigo-500 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
                  aria-label="Missed calls per month"
                  aria-valuemin={0}
                  aria-valuemax={200}
                  aria-valuenow={missedCallsPerMonth}
                />
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>0</span>
                  <span>200</span>
                </div>
              </div>
            </div>

            {/* Conversion Rate Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Conversion Rate (%)
                </label>
                <span className="text-sm font-bold text-indigo-400 px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                  {conversionRate}%
                </span>
              </div>
              <div className="p-6 rounded-2xl glass border border-white/10">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-indigo-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-indigo-500 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
                  aria-label="Conversion rate percentage"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={conversionRate}
                />
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>0%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-8 rounded-3xl bg-indigo-500/5 border border-indigo-500/20 space-y-6">
              {/* Sales Lost */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                    <TrendingDown className="w-5 h-5 text-red-400" />
                  </div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Estimated Sales Lost/Mo
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-4xl md:text-5xl font-bold text-red-400">
                    {formatDecimal(estimatedSalesLost)}
                  </p>
                  <p className="text-sm text-gray-500">sales/month</p>
                </div>
              </div>

              <div className="border-t border-white/10"></div>

              {/* Revenue Lost */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-red-400" />
                  </div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Estimated Revenue Lost/Mo
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-4xl md:text-5xl font-bold text-red-400">
                    {formatCurrency(estimatedRevenueLost)}
                  </p>
                  <p className="text-sm text-gray-500">/month</p>
                </div>
              </div>
            </div>

            {/* CTA Message */}
            <div className="p-6 rounded-2xl glass border border-white/10">
              <p className="text-sm text-gray-300 text-center">
                <span className="text-indigo-400 font-bold">Stop losing revenue.</span> See how Elara can help your practice capture every opportunity below.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;

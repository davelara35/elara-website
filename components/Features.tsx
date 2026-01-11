
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Comprehensive Voice AI for Healthcare</h2>
          <p className="text-gray-400 text-lg">
            We're committed to delivering powerful automation tools tailored to your practice needs. Our Done-With-You platform gives you the software, training, and support to scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-3xl glass border group hover:border-indigo-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(79,70,229,0.1)]"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

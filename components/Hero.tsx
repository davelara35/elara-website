
import React from 'react';
import { ChevronRight, Play, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Next-Gen Voice AI for Clinics
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Your Voice AI Partner in <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-500 to-indigo-600">
              Practice Growth
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl">
            Build the AI receptionist your practice needs with guided implementation, expert training, and software you own. Capture every call and grow 24/7.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <a
              href="#pricing"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] flex items-center justify-center gap-2 group"
            >
              Get Started
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#ai-demo"
              className="w-full sm:w-auto px-8 py-4 rounded-full glass font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2 group"
            >
              <Play className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
              Watch Demo
            </a>
          </div>

          {/* Interactive Element: Dashboard Preview Mockup */}
          <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden glass border shadow-2xl animate-fade-in-up">
            <div className="h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
            </div>
            <div className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1 md:col-span-2 space-y-6">
                <div className="h-48 rounded-xl bg-gradient-to-br from-indigo-500/10 to-blue-500/5 flex items-center justify-center border border-indigo-500/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-400">1,248</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest mt-1 font-semibold">Total Calls Handled</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-28 rounded-xl glass border border-white/5 p-5 flex flex-col justify-center gap-1">
                      <span className="text-xs text-gray-500">Appointments Booked</span>
                      <span className="text-2xl font-bold text-green-400">342</span>
                    </div>
                    <div className="h-28 rounded-xl glass border border-white/5 p-5 flex flex-col justify-center gap-1">
                      <span className="text-xs text-gray-500">Patient ROI</span>
                      <span className="text-2xl font-bold text-blue-400">12.4x</span>
                    </div>
                  </div>
                  <div className="h-28 rounded-xl glass border border-white/5 p-5 flex flex-col justify-center gap-1">
                    <span className="text-xs text-gray-500">Revenue Generated</span>
                    <span className="text-2xl font-bold text-purple-400">$86.2K</span>
                  </div>
                </div>
              </div>
              <div className="h-full min-h-[300px] rounded-xl glass border border-white/5 p-6">
                <div className="text-sm font-semibold mb-4 text-gray-300">Live Activity Feed</div>
                <div className="space-y-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="flex gap-3 text-xs">
                      <div className="w-8 h-8 rounded-full bg-white/5 flex-shrink-0 flex items-center justify-center">
                        <Phone className="w-3 h-3 text-indigo-400" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-gray-300 font-medium">New Appointment Scheduled</div>
                        <div className="text-gray-500">Patient #29481 handled by Elara AI</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
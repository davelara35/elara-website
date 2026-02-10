
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="font-bold text-white text-xl">E</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">Elara</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              The next generation of voice AI for forward-thinking healthcare practices. Capture every patient, grow every day.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-500">Platform</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors">Call Management</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Patient Follow-up</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-500">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Elara AI. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Follow us on Twitter">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Follow us on LinkedIn">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Follow us on Instagram">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

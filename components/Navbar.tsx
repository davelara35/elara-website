
import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 glass border-b' : 'py-8'}`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 group"
          aria-label="Elara - Return to homepage"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
            <span className="font-bold text-white text-xl">E</span>
          </div>
          <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Elara
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400" role="navigation">
          <a href="/#features" className="hover:text-white transition-colors focus:outline-none focus:text-white focus:underline">Platform</a>
          <a href="/#pricing" className="hover:text-white transition-colors focus:outline-none focus:text-white focus:underline">Pricing</a>
          <a href="/#faq" className="hover:text-white transition-colors focus:outline-none focus:text-white focus:underline">FAQ</a>
          <a href="/#contact" className="hover:text-white transition-colors focus:outline-none focus:text-white focus:underline">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="/#contact"
            className="hidden sm:block text-sm font-medium text-gray-300 hover:text-white transition-colors focus:outline-none focus:text-white focus:underline"
            aria-label="Login to your account"
          >
            Login
          </a>
          <a
            href="/#pricing"
            className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#030712]"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

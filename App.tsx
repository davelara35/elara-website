
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const AIDemo = lazy(() => import('./components/AIDemo'));
const Features = lazy(() => import('./components/Features'));
const ROICalculator = lazy(() => import('./components/ROICalculator'));
const Pricing = lazy(() => import('./components/Pricing'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const AboutUs = lazy(() => import('./components/AboutUs'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout: React.FC<{ children: React.ReactNode; scrolled: boolean }> = ({ children, scrolled }) => (
  <div className="min-h-screen bg-grid selection:bg-indigo-500/30">
    {/* Background Orbs */}
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/10 blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px] animate-pulse-slow"></div>
    </div>

    <Navbar scrolled={scrolled} />

    <main>
      {children}
    </main>

    <Suspense fallback={<LoadingFallback />}>
      <Footer />
    </Suspense>
  </div>
);

const HomePage: React.FC = () => (
  <>
    <Hero />
    <Suspense fallback={<LoadingFallback />}>
      <AIDemo />
      <Features />
      <ROICalculator />
      <Pricing />
      <FAQ />
      <Contact />
    </Suspense>
  </>
);

const AboutPage: React.FC = () => (
  <div className="pt-32">
    <Suspense fallback={<LoadingFallback />}>
      <AboutUs />
    </Suspense>
  </div>
);

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');

      if (anchor && anchor instanceof HTMLAnchorElement) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();

          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <Layout scrolled={scrolled}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Layout>
  );
};

export default App;

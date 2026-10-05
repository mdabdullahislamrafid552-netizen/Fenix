import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Atelier', href: '#atelier' },
    { label: 'Materials', href: '#materials' },
    { label: 'Process', href: '#process' },
    { label: 'Estimator', href: '#estimator' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-8 lg:px-12 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-xl border-b border-black/[0.08] shadow-sm py-3'
          : 'bg-gradient-to-b from-black/50 via-black/20 to-transparent backdrop-blur-[6px] py-5 sm:py-6'
      }`}
    >
      <div className="w-full max-w-[1360px] mx-auto flex items-center justify-between">
        
        {/* Left: Brand Mark with Dark Gradient Text-Shadow & Subtle Frosted Backdrop */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div 
            className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${
              isScrolled
                ? 'bg-[#1A1614] text-white shadow-xs'
                : 'bg-black/50 backdrop-blur-md border border-white/30 text-white shadow-[0_2px_8px_rgba(0,0,0,0.5)]'
            }`}
          >
            <svg
              className="w-4 h-4 stroke-[2.2] fill-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.5L12 3l9 6.5M19 10v10a1 1 0 01-1 1H6a1 1 0 01-1-1V10" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V12h6v9" />
            </svg>
          </div>
          <span 
            className={`font-serif text-lg sm:text-xl font-normal tracking-tight transition-all duration-300 ${
              isScrolled 
                ? 'text-[#1A1614] drop-shadow-none' 
                : 'text-white [text-shadow:_0_1px_3px_rgba(0,0,0,0.9),_0_2px_8px_rgba(0,0,0,0.55)] drop-shadow-[0_1.5px_4px_rgba(0,0,0,0.85)]'
            }`}
          >
            Fenix Renovations
          </span>
        </a>

        {/* Center: The Floating Pill Menu with Semi-Transparent Backdrop Blur */}
        <nav 
          className={`hidden xl:flex items-center gap-0.5 p-1 rounded-full transition-all duration-300 text-xs font-medium ${
            isScrolled
              ? 'bg-black/[0.05] border border-black/10 text-[#57534E]'
              : 'bg-black/45 backdrop-blur-xl border border-white/20 shadow-[0_4px_16px_rgba(0,0,0,0.4)] text-white'
          }`}
        >
          {navLinks.map((link) => {
            const isActive = activeTab === link.label;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveTab(link.label)}
                className={`relative px-3.5 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap z-10 ${
                  isActive
                    ? isScrolled
                      ? 'text-white font-semibold'
                      : 'text-[#1A1614] font-semibold'
                    : isScrolled
                      ? 'text-[#57534E] hover:text-[#1A1614]'
                      : 'text-white/90 hover:text-white [text-shadow:_0_1px_2px_rgba(0,0,0,0.85)]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className={`absolute inset-0 rounded-full shadow-xs -z-10 ${
                      isScrolled ? 'bg-[#1A1614]' : 'bg-white'
                    }`}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Pill Button with High-Contrast Legibility */}
        <div className="hidden sm:flex items-center">
          <button
            onClick={onOpenQuote}
            className={`group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 ${
              isScrolled
                ? 'bg-[#1A1614] text-white hover:bg-[#2D221C]'
                : 'bg-white/95 hover:bg-white text-[#1A1614] border border-white/40 shadow-[0_2px_12px_rgba(0,0,0,0.35)] backdrop-blur-sm'
            }`}
          >
            <span>Explore Services</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex xl:hidden items-center gap-2">
          <button
            onClick={onOpenQuote}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs transition-colors ${
              isScrolled
                ? 'bg-[#1A1614] text-white'
                : 'bg-white text-[#1A1614] shadow-[0_2px_8px_rgba(0,0,0,0.3)]'
            }`}
          >
            Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-full transition-colors ${
              isScrolled
                ? 'text-[#1A1614] bg-black/[0.06] hover:bg-black/10'
                : 'text-white bg-black/45 backdrop-blur-md border border-white/20 shadow-[0_2px_8px_rgba(0,0,0,0.4)]'
            }`}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="xl:hidden mt-3 max-w-[1360px] mx-auto bg-white/95 backdrop-blur-2xl rounded-2xl p-5 shadow-2xl border border-black/10 text-[#1A1614] space-y-3"
          >
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setActiveTab(link.label);
                    setMobileMenuOpen(false);
                  }}
                  className="px-3 py-2 text-sm font-medium text-[#1A1614] hover:bg-black/5 rounded-lg"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-black/5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-2.5 bg-[#1A1614] text-white text-xs font-semibold rounded-full text-center hover:bg-[#2D221C] transition-colors"
              >
                Get a Quote →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

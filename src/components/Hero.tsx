import React from 'react';
import { Star, ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { LuxuryImage } from './LuxuryImage';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative w-full h-[85vh] min-h-[620px] max-h-[900px] overflow-hidden bg-[#181412] flex items-center justify-center">
      {/* Full Bleed Architectural Photography */}
      <motion.div 
        initial={{ scale: 1.05, opacity: 0.85 }}
        animate={{ scale: 1.0, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 w-full h-full"
      >
        <LuxuryImage
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=85"
          alt="Architectural luxury living space in Doha Qatar"
          containerClassName="w-full h-full"
          className="w-full h-full object-cover object-center"
        />
        {/* Measured Scrim for supreme legibility without feeling washed out */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/40" />
      </motion.div>

      {/* Center Editorial Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-8 text-center text-white pt-16 flex flex-col items-center justify-center">
        
        {/* Discrete Trust Badge */}
        <motion.div
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-5 sm:mb-6"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-xs text-white/90 shadow-sm">
            <Star className="w-3.5 h-3.5 fill-[#FFC107] text-[#FFC107]" />
            <span className="font-medium tracking-wide">5.0 (950+ Reviews)</span>
          </div>
        </motion.div>

        {/* Headline: Clean, Pure, Crisp Typography (No tacky gradient slop) */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[72px] font-normal leading-[1.12] text-white tracking-tight text-balance"
        >
          Renovate Your Spaces,<br />
          <span className="italic font-light text-white/95">
            Inspire Better Living
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-white/90 max-w-xl mx-auto font-light leading-relaxed text-balance"
        >
          From kitchen upgrades to full-home renovations, we deliver quality in every detail.
        </motion.p>

        {/* Single Dark Pill Button */}
        <motion.div
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8"
        >
          <button
            onClick={onOpenQuote}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#2D221C] hover:bg-[#1E1713] text-white text-xs sm:text-sm font-medium tracking-tight transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:scale-95"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>

      </div>

      {/* Subtle Scroll Cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors"
      >
        <span className="text-[10px] uppercase tracking-widest font-mono">Explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.a>
    </section>
  );
};

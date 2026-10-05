import React from 'react';
import { ArrowRight, Instagram } from 'lucide-react';

interface FooterProps {
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  return (
    <footer id="contact" className="bg-[#151210] text-white py-28 sm:py-36 px-4 sm:px-8">
      <div className="max-w-[1340px] mx-auto">
        
        {/* Main Headline & Call to Action (Remodix Exact Minimalist Layout) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-18 sm:pb-24 border-b border-white/10">
          <div className="max-w-2xl space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-white/50 font-mono">
              Fenix Renovations · Doha, Qatar
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[58px] text-white font-normal leading-[1.12] tracking-tight">
              We are building dreams.<br />
              <span className="text-white/60 italic font-light">Let's build yours.</span>
            </h2>
          </div>

          <div>
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#151210] hover:bg-[#FAF8F5] text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 shadow-sm hover:shadow"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Clean Contact Details & Links */}
        <div className="py-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-white/10 text-xs sm:text-sm text-white/70">
          <div className="flex flex-wrap items-center gap-6 sm:gap-10 font-light">
            <span>Doha, State of Qatar</span>
            <a href="tel:+97451828555" className="hover:text-white transition-colors font-mono">
              +974 518 28 555
            </a>
            <a href="mailto:hello@fenixreno.qa" className="hover:text-white transition-colors">
              hello@fenixreno.qa
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/fenixreno"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Instagram className="w-4 h-4" />
              <span>@fenixreno</span>
            </a>
            <span className="text-white/20">·</span>
            <a
              href="https://instagram.com/fenixfurniture.qa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              @fenixfurniture.qa
            </a>
          </div>
        </div>

        {/* Minimal Copyright & Arabic Touch */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>
            © 2026 Fenix Renovations. All rights reserved. Doha, Qatar.
          </div>
          <div className="font-serif text-white/60">
            فينيكس رينوفيشنز — نبني أحلامكم بدقة متناهية
          </div>
        </div>

      </div>
    </footer>
  );
};

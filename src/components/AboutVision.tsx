import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LuxuryImage } from './LuxuryImage';

interface AboutVisionProps {
  onOpenQuote: () => void;
}

export const AboutVision: React.FC<AboutVisionProps> = ({ onOpenQuote }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="py-28 sm:py-36 px-4 sm:px-8 max-w-[1340px] mx-auto">
      {/* Kicker: • ABOUT US */}
      <div className="text-xs uppercase tracking-widest text-[#78716C] font-medium mb-4 flex items-center gap-1.5">
        <span className="text-[#2D221C]">•</span>
        <span>ABOUT US</span>
      </div>

      {/* Top Row: Left Large Headline, Right Short Paragraph + "More About Us →" */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 sm:mb-20">
        
        {/* Left Side: Large Headline */}
        <div className="lg:col-span-7">
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[52px] text-[#1A1614] font-normal leading-[1.14] tracking-tight">
            Deliver Renovation Solutions<br className="hidden sm:inline" /> Tailored to Your Lifestyle
          </h2>
        </div>

        {/* Right Side: Short Paragraph & Outline Pill Button */}
        <div className="lg:col-span-5 space-y-6 pt-2">
          <p className="text-sm sm:text-base text-[#57534E] font-light leading-relaxed">
            Fenix Renovations was founded on a single belief that every homeowner deserves a renovation experience as beautiful as the finished space itself. We specialize in premium kitchen, royal Majlis, and full villa transformations in Doha.
          </p>

          <div>
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/25 hover:border-black text-[#1A1614] text-xs font-medium tracking-tight transition-all duration-200 hover:bg-black/5"
            >
              <span>{expanded ? 'Hide Studio Story' : 'More About Us'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Studio Philosophy Drawer */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-14 p-6 sm:p-8 bg-[#F5F2EB] rounded-2xl border border-black/5 text-sm text-[#57534E] leading-relaxed overflow-hidden"
          >
            <div className="max-w-3xl space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#B88E5E] font-mono">Doha Atelier · @fenixfurniture.qa</span>
              <h3 className="font-serif text-2xl text-[#1A1614] font-normal">
                "Hold the VISION, Trust the PROCESS."
              </h3>
              <p className="font-light">
                We operate our own in-house bespoke furniture and joinery workshop in Qatar. Unlike typical contractors who rely on commercial catalogs, our master carpenters, gypsum carvers, and marble fitters craft each architectural element specifically for your villa dimensions.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-[#1A1614] font-medium">
                <span>✓ Complete Baladiya & QCDD Compliance</span>
                <span>✓ Turnkey MEP & Smart Automation</span>
                <span>✓ Fixed Milestone Schedules</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lower Row: Two images side by side (one tall, one short) & Minimalist stats row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end">
        
        {/* Left Side: Two images side by side */}
        <div className="lg:col-span-7 flex items-end gap-4 sm:gap-6">
          
          {/* Image 1: Tall vertical image */}
          <div className="w-3/5 h-[340px] sm:h-[440px] rounded-2xl overflow-hidden bg-[#ECE8E1] group shadow-xs">
            <LuxuryImage
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
              alt="Artisan craftsman installing cabinetry"
              containerClassName="w-full h-full"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
            />
          </div>

          {/* Image 2: Short / smaller image */}
          <div className="w-2/5 h-[220px] sm:h-[280px] rounded-2xl overflow-hidden bg-[#ECE8E1] group shadow-xs">
            <LuxuryImage
              src="https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=600&q=80"
              alt="Architectural dining and pendant lighting detail"
              containerClassName="w-full h-full"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
            />
          </div>

        </div>

        {/* Right Side: Minimalist stats row separated by a thin line */}
        <div className="lg:col-span-5 pb-4">
          <div className="flex items-center gap-10 sm:gap-16 border-t lg:border-t-0 pt-8 lg:pt-0 border-black/10">
            {/* Stat 1 */}
            <div>
              <div className="font-serif text-4xl sm:text-5xl font-normal text-[#1A1614] tabular-nums tracking-tight">
                750+
              </div>
              <div className="text-xs text-[#78716C] font-medium mt-1">
                Projects Completed
              </div>
            </div>

            {/* Thin vertical separator */}
            <div className="w-[1px] h-12 bg-black/15" />

            {/* Stat 2 */}
            <div>
              <div className="font-serif text-4xl sm:text-5xl font-normal text-[#1A1614] tabular-nums tracking-tight">
                100%
              </div>
              <div className="text-xs text-[#78716C] font-medium mt-1">
                Licensed & Insured
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

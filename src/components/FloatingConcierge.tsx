import React, { useState } from 'react';
import { MessageSquare, Phone, Calendar, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingConciergeProps {
  onOpenQuote: () => void;
}

export const FloatingConcierge: React.FC<FloatingConciergeProps> = ({ onOpenQuote }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-72 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-black/10 text-[#111111] space-y-3"
          >
            <div className="flex items-center justify-between pb-2 border-b border-black/5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#111111]">
                  Fenix Concierge · Doha
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#888888] hover:text-[#111111] p-1"
                aria-label="Close concierge"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-[11px] text-[#666666] leading-relaxed">
              Connect directly with our senior architectural team for villa renovations across Qatar.
            </p>

            <div className="space-y-1.5 pt-1">
              <a
                href="https://wa.me/97451828555?text=Hello%20Fenix%20Renovations,%20I%20would%20like%20to%20discuss%20a%20villa%20transformation."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-2 px-3 py-2 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#15803D] text-xs font-medium transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Chat via WhatsApp (+974 518 28 555)</span>
              </a>

              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenQuote();
                }}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-xl bg-[#111111] hover:bg-[#2A2421] text-white text-xs font-medium transition-colors text-left"
              >
                <Calendar className="w-3.5 h-3.5 text-[#E8D9C5]" />
                <span>Book Feasibility Visit</span>
              </button>

              <a
                href="tel:+97451828555"
                className="w-full flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-black/5 text-[#555555] hover:text-[#111111] text-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="font-mono">Call +974 518 28 555</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#111111] hover:bg-[#2A2421] text-white text-xs font-medium shadow-2xl hover:shadow-black/25 transition-all duration-300 border border-white/15 active:scale-95"
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        <span className="hidden sm:inline tracking-tight font-sans">Doha Studio Concierge</span>
        <MessageSquare className="w-4 h-4 text-[#E8D9C5]" />
      </button>
    </div>
  );
};

import React from 'react';
import { PARTNERS } from '../data/content';

export const PartnerTicker: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 border-b border-black/5 max-w-[1340px] mx-auto px-4 sm:px-8">
      <div className="text-center text-[11px] uppercase tracking-widest text-[#777777] font-medium mb-6">
        1000+ Reliable Industry Partners & Material Purveyors
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 md:gap-18 opacity-70 hover:opacity-95 transition-opacity">
        {PARTNERS.map((partner) => (
          <div
            key={partner.name}
            className="flex items-center gap-2 text-[#333333] hover:text-[#111111] transition-colors"
            title={`${partner.name} · ${partner.category}`}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#332620]/60" />
            <span className="font-serif text-sm sm:text-base tracking-wide font-medium">
              {partner.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

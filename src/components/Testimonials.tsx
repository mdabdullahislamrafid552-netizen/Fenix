import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 sm:py-36 px-4 sm:px-8 max-w-[1340px] mx-auto border-t border-black/5">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
        <div className="text-xs uppercase tracking-widest text-[#78716C] font-medium mb-3 flex items-center justify-center gap-1.5">
          <span className="text-[#2D221C]">•</span>
          <span>CLIENT REPUTATION</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1614] font-normal leading-[1.14] tracking-tight">
          Trusted by Homeowners Across Qatar
        </h2>
        <p className="text-sm sm:text-base text-[#57534E] font-light mt-3 leading-relaxed">
          Discreet reviews from completed villa and Majlis transformations in Al Waab, The Pearl, and West Bay Lagoon.
        </p>
      </div>

      {/* Testimonials Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="p-8 rounded-2xl sm:rounded-3xl bg-white border border-black/10 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
          >
            <div className="space-y-4">
              {/* Star rating */}
              <div className="flex items-center gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#1A1614] text-[#1A1614]" />
                ))}
              </div>

              <p className="text-sm text-[#333333] italic font-serif leading-relaxed">
                "{t.quote}"
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-black/5">
              <div className="font-serif text-base text-[#1A1614] font-medium">
                {t.client}
              </div>
              <div className="flex items-center gap-1 text-xs text-[#78716C] mt-0.5">
                <MapPin className="w-3 h-3 text-[#2D221C]" />
                <span>{t.location}</span>
              </div>
              <div className="text-[11px] text-[#78716C] font-mono mt-1">
                {t.projectType}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

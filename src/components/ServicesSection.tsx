import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES } from '../data/content';
import { LuxuryImage } from './LuxuryImage';

interface ServicesSectionProps {
  onOpenQuote: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="services" className="py-24 sm:py-36 px-4 sm:px-8 max-w-[1340px] mx-auto border-t border-black/5">
      {/* Section Kicker */}
      <div className="text-xs uppercase tracking-widest text-[#78716C] font-medium mb-3 flex items-center gap-1.5">
        <span className="text-[#2D221C]">•</span>
        <span>OUR PRACTICES</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
        <div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1614] font-normal leading-[1.14] tracking-tight">
            Specialized Renovation Practices
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] font-light max-w-xl mt-3 leading-relaxed">
            From structural engineering and Baladiya approvals to custom furniture handcrafting under one roof in Doha.
          </p>
        </div>

        <button
          onClick={onOpenQuote}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-black/25 hover:border-black text-[#1A1614] text-xs font-semibold tracking-tight transition-all self-start md:self-auto hover:bg-black/5"
        >
          <span>Request Scope Document</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Services Grid (6 services presented with minimal elegance) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group flex flex-col justify-between p-7 rounded-2xl sm:rounded-3xl border border-black/10 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              {/* Service Visual Preview */}
              <div className="w-full h-48 rounded-xl overflow-hidden mb-6 bg-[#ECE8E1] relative shadow-2xs">
                <LuxuryImage
                  src={service.imageUrl}
                  alt={service.title}
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs text-[11px] font-mono font-medium text-[#1A1614] shadow-xs">
                  {service.number}
                </div>
              </div>

              <div className="text-[11px] uppercase tracking-wider text-[#78716C] font-mono mb-1">
                {service.category}
              </div>
              
              <h3 className="font-serif text-xl sm:text-2xl text-[#1A1614] font-normal mb-2">
                {service.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#57534E] font-light leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Scope Checklist */}
              <div className="space-y-2 pt-4 border-t border-black/5">
                {service.scope.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#333333]">
                    <Check className="w-3.5 h-3.5 text-[#2D221C] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-black/5 flex items-center justify-between">
              <button
                onClick={onOpenQuote}
                className="text-xs font-semibold text-[#1A1614] group-hover:text-[#2D221C] flex items-center gap-1.5 transition-colors"
              >
                <span>Consult On This Service</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

import React from 'react';
import { Eye, Compass, Hammer, Sparkles, CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Spatial Audit & Vision',
      subtitle: 'The Architectural Brief',
      description: 'We meet in your Doha residence to analyze natural lighting, structural possibilities, and family privacy flow. We define aesthetic boundaries before drafting a single line.',
      icon: Eye
    },
    {
      number: '02',
      title: '8K Photoreal & Materiality',
      subtitle: 'Virtual Pre-Construction',
      description: 'Experience your future Majlis or villa in photorealistic visualizations. Hand-select vein-matched marble slabs, timber fluting species, and lighting systems.',
      icon: Compass
    },
    {
      number: '03',
      title: 'In-House Joinery & Build',
      subtitle: 'Master Craftsmanship',
      description: 'Our in-house artisans fabricate bespoke cabinetry, architectural wall panelling, and custom furniture. Full site management under European tolerance standards.',
      icon: Hammer
    },
    {
      number: '04',
      title: 'White-Glove Handover',
      subtitle: 'Turnkey Living',
      description: 'We deliver your finished villa thoroughly cleaned, styled, and audited down to millimetric tolerances, backed by our 12-month craftsmanship guarantee.',
      icon: Sparkles
    }
  ];

  return (
    <section id="process" className="py-24 sm:py-36 px-4 sm:px-8 max-w-[1340px] mx-auto border-t border-black/5">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
        <div className="text-xs uppercase tracking-widest text-[#78716C] font-medium mb-3 flex items-center justify-center gap-1.5">
          <span className="text-[#2D221C]">•</span>
          <span>THE METHODOLOGY</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1614] font-normal leading-[1.14] tracking-tight">
          "Trust the Process."
        </h2>
        <p className="text-sm sm:text-base text-[#57534E] font-light mt-3 leading-relaxed">
          How Fenix Renovations eliminates renovation friction and delivers predictable architectural perfection in Qatar.
        </p>
      </div>

      {/* 4 Process Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.number}
              className="p-7 rounded-2xl sm:rounded-3xl bg-white border border-black/10 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-black/10 flex items-center justify-center text-[#1A1614] shadow-2xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-serif text-2xl font-light text-[#1A1614]/30 tabular-nums">
                    {step.number}
                  </span>
                </div>

                <div className="text-[11px] uppercase tracking-wider text-[#78716C] font-mono mb-1">
                  {step.subtitle}
                </div>
                <h3 className="font-serif text-xl font-normal text-[#1A1614] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-black/5 flex items-center gap-1.5 text-[11px] text-[#78716C] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2D221C]" />
                <span>Audited Milestone</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

import React from 'react';
import { ArrowRight, Hammer, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { LuxuryImage } from './LuxuryImage';

interface AtelierSectionProps {
  onOpenQuote: () => void;
}

export const AtelierSection: React.FC<AtelierSectionProps> = ({ onOpenQuote }) => {
  const craftFeatures = [
    {
      title: 'Bespoke Joinery & Furniture',
      subtitle: 'In-House Workshop · @fenixfurniture.qa',
      description: 'Custom curved bouclé sofas, sculptural teak and walnut armchairs, and monolithic vanities handcrafted exclusively to your villa dimensions.',
      imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Architectural Gypsum & Wall Art',
      subtitle: 'Hand-Carved Botanical Bas-Relief',
      description: 'Artisanal three-dimensional gypsum plaster reliefs with concealed warm 2700K perimeter lighting, inspired by organic flora and geometry.',
      imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Italian Stone & Monolithic Marble',
      subtitle: 'Precision Vein-Matching',
      description: 'Direct procurement of Italian Calacatta Gold and Roman Navona Travertine slabs, precision mitered with recessed brass plinths.',
      imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="atelier" className="py-24 sm:py-36 px-4 sm:px-8 max-w-[1340px] mx-auto border-t border-black/5">
      {/* Kicker */}
      <div className="text-xs uppercase tracking-widest text-[#78716C] font-medium mb-3 flex items-center gap-1.5">
        <span className="text-[#2D221C]">•</span>
        <span>THE DOHA ATELIER</span>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-20">
        <div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1614] font-normal leading-[1.14] tracking-tight">
            Artisanal Precision, In-House
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] font-light max-w-xl mt-3 leading-relaxed">
            We don't buy from standard catalogs. Every piece of millwork, stone surface, and curved upholstery is custom fabricated in Qatar.
          </p>
        </div>

        <button
          onClick={onOpenQuote}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-black/25 hover:border-black text-[#1A1614] text-xs font-semibold tracking-tight transition-all self-start lg:self-auto hover:bg-black/5"
        >
          <span>Commission Custom Pieces</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 3 Craft Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {craftFeatures.map((craft, idx) => (
          <div key={idx} className="group flex flex-col">
            <div className="w-full h-72 sm:h-80 rounded-2xl overflow-hidden bg-[#ECE8E1] mb-5 relative shadow-xs">
              <LuxuryImage
                src={craft.imageUrl}
                alt={craft.title}
                containerClassName="w-full h-full"
                className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </div>

            <span className="text-[11px] uppercase tracking-wider text-[#78716C] font-mono mb-1">
              {craft.subtitle}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#1A1614] font-normal mb-2">
              {craft.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#57534E] font-light leading-relaxed">
              {craft.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Sparkles, Layers, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { LuxuryImage } from './LuxuryImage';

interface MaterialItem {
  id: string;
  name: string;
  category: string;
  origin: string;
  finish: string;
  application: string;
  description: string;
  imageUrl: string;
}

export const MaterialsShowcase: React.FC = () => {
  const materials: MaterialItem[] = [
    {
      id: 'marble',
      name: 'Calacatta Gold Marble',
      category: 'Natural Stone',
      origin: 'Carrara, Italy',
      finish: 'Honed Silk Matte',
      application: 'Monolithic Kitchen Waterfall Islands & Majlis Gathering Tables',
      description: 'Hand-selected slabs featuring dramatic taupe and golden veining across a warm milky white field, bookmatched down to the millimeter.',
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'oak',
      name: 'Smoked European Oak',
      category: 'Engineered Hardwood',
      origin: 'Bavaria, Germany',
      finish: 'Zero-VOC Matte Hardwax',
      application: 'Acoustic Wall Fluting, Cantilevered Vanities & Pocket Cabinetry',
      description: 'Acoustically tuned vertical timber reeds with organic wire-brushed grain, providing subtle thermal warmth and resonance dampening.',
      imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'travertine',
      name: 'Roman Navona Travertine',
      category: 'Sedimentary Limestone',
      origin: 'Tivoli, Italy',
      finish: 'Cross-Cut Open Pore Honed',
      application: 'Grand Salon Floor Slabs & Sculptural Arched Portals',
      description: 'Warm sandy beige stone with delicate natural horizontal striations that reflect Doha’s natural sunlight without high glare.',
      imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'brass',
      name: 'Living Champagne Brass',
      category: 'Architectural Hardware',
      origin: 'Bespoke In-House Casting',
      finish: 'Hand-Brushed Knurled',
      application: 'Custom Door Pulls, Portal Reveals & Recessed Plinths',
      description: 'Solid forged brass hand-finished with knurled geometric grips that naturally develop a subtle, dignified patina over time.',
      imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const [selectedMaterial, setSelectedMaterial] = useState<MaterialItem>(materials[0]);

  return (
    <section id="materials" className="py-24 sm:py-36 px-4 sm:px-8 max-w-[1340px] mx-auto border-t border-black/5">
      {/* Kicker */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xs uppercase tracking-widest text-[#78716C] font-medium mb-3 flex items-center gap-1.5"
      >
        <span className="text-[#2D221C]">•</span>
        <span>MATERIALITY ARCHIVE</span>
      </motion.div>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 sm:mb-18">
        <div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#111111] font-normal leading-[1.15] tracking-tight">
            Tactile Luxury & Pure Finishes
          </h2>
          <p className="text-sm sm:text-base text-[#555555] font-light max-w-xl mt-3">
            We exclusively specify noble materials that improve with age, calibrated for Qatar’s climate and timeless villa aesthetics.
          </p>
        </div>
        <div className="text-xs text-[#777777] flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#332620]" />
          <span>Sustainably Sourced & Verified Provenance</span>
        </div>
      </div>

      {/* Materials Grid / Selector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAFAFA] rounded-3xl p-6 sm:p-10 border border-black/5">
        
        {/* Left Side: Material List */}
        <div className="lg:col-span-6 space-y-3">
          {materials.map((mat) => {
            const isSelected = selectedMaterial.id === mat.id;
            return (
              <div
                key={mat.id}
                onClick={() => setSelectedMaterial(mat)}
                className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  isSelected
                    ? 'bg-white border-[#111111] shadow-sm -translate-y-0.5'
                    : 'bg-white/60 hover:bg-white border-transparent hover:border-black/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#777777] font-mono block">
                      {mat.category} · {mat.origin}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-normal text-[#111111] mt-0.5">
                      {mat.name}
                    </h3>
                  </div>
                  <div className={`w-3 h-3 rounded-full border ${
                    isSelected ? 'bg-[#332620] border-[#332620]' : 'border-black/20'
                  }`} />
                </div>
                {isSelected && (
                  <p className="mt-2.5 text-xs text-[#666666] font-light leading-relaxed">
                    {mat.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Side: Active Material Spec Card */}
        <div className="lg:col-span-6 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-black/10 shadow-xs space-y-5">
          <div className="h-64 sm:h-72 rounded-2xl overflow-hidden relative shadow-inner bg-[#F0EDE8]">
            <LuxuryImage
              src={selectedMaterial.imageUrl}
              alt={selectedMaterial.name}
              containerClassName="w-full h-full"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[11px] uppercase tracking-widest text-white/80 font-mono">
                {selectedMaterial.origin}
              </span>
              <h4 className="font-serif text-2xl font-normal">{selectedMaterial.name}</h4>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs pt-2">
            <div className="p-3 bg-[#F9F9F9] rounded-xl border border-black/5">
              <span className="text-[#888888] block text-[10px] uppercase tracking-wider">Surface Finish</span>
              <span className="font-medium text-[#111111] mt-0.5 block">{selectedMaterial.finish}</span>
            </div>
            <div className="p-3 bg-[#F9F9F9] rounded-xl border border-black/5">
              <span className="text-[#888888] block text-[10px] uppercase tracking-wider">Category</span>
              <span className="font-medium text-[#111111] mt-0.5 block">{selectedMaterial.category}</span>
            </div>
          </div>

          <div className="p-3.5 bg-[#F9F9F9] rounded-xl border border-black/5 text-xs">
            <span className="text-[#888888] block text-[10px] uppercase tracking-wider mb-1">Architectural Application</span>
            <span className="text-[#222222] font-medium leading-relaxed">{selectedMaterial.application}</span>
          </div>
        </div>

      </div>
    </section>
  );
};

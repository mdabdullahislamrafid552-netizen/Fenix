import React, { useState } from 'react';
import { Calculator, ArrowRight, Clock, ShieldCheck, MessageSquare, Sparkles } from 'lucide-react';

interface CostEstimatorProps {
  onOpenQuote: () => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onOpenQuote }) => {
  const [scope, setScope] = useState<'villa' | 'majlis' | 'kitchen' | 'master'>('villa');
  const [area, setArea] = useState<number>(600);
  const [tier, setTier] = useState<'refined' | 'palatial'>('palatial');

  const baseRates = {
    villa: { refined: 1400, palatial: 2200, timeWeeks: '16 - 22' },
    majlis: { refined: 1600, palatial: 2600, timeWeeks: '8 - 12' },
    kitchen: { refined: 2200, palatial: 3800, timeWeeks: '6 - 10' },
    master: { refined: 1500, palatial: 2400, timeWeeks: '7 - 11' },
  };

  const selectedRate = baseRates[scope][tier];
  const estimatedTotalQar = Math.round(area * selectedRate);
  const estimatedDuration = baseRates[scope].timeWeeks;

  const scopeTitles = {
    villa: 'Full Villa Turnkey Renovation',
    majlis: 'Royal & Contemporary Majlis',
    kitchen: 'Monolithic Italian Kitchen Suite',
    master: 'Master Suite & Spa Bath Sanctuary',
  };

  const formattedTotal = new Intl.NumberFormat('en-QA', {
    maximumFractionDigits: 0,
  }).format(estimatedTotalQar);

  const whatsappMessage = encodeURIComponent(
    `Hello Fenix Renovations, I calculated an estimate for a ${scopeTitles[scope]} (${area} m² - ${tier === 'palatial' ? 'Palatial Bespoke' : 'Contemporary Refined'} tier) in Doha. I would like to schedule an on-site feasibility evaluation.`
  );

  return (
    <section id="estimator" className="py-24 sm:py-36 px-4 sm:px-8 max-w-[1340px] mx-auto border-t border-black/5">
      {/* Kicker */}
      <div className="text-xs uppercase tracking-widest text-[#78716C] font-medium mb-3 flex items-center gap-1.5">
        <span className="text-[#2D221C]">•</span>
        <span>ARCHITECTURAL FEASIBILITY</span>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 sm:mb-16">
        <div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1614] font-normal leading-[1.14] tracking-tight">
            Estimate Your Villa Transformation
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] font-light max-w-xl mt-3 leading-relaxed">
            A transparent architectural guide designed for Qatar villa owners planning bespoke renovations.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-[#78716C]">
          <ShieldCheck className="w-4 h-4 text-[#2D221C]" />
          <span>Transparent Qatar Municipality Compliant Pricing</span>
        </div>
      </div>

      {/* Interactive Estimator Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start bg-white rounded-3xl p-6 sm:p-10 border border-black/10 shadow-sm">
        
        {/* Left Side: Controls */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* 1. Scope Selector */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#78716C] mb-3">
              1. Select Renovation Scope
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { key: 'villa', label: 'Full Villa' },
                { key: 'majlis', label: 'Grand Majlis' },
                { key: 'kitchen', label: 'Gourmet Kitchen' },
                { key: 'master', label: 'Master Suite' },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setScope(item.key as any)}
                  className={`py-3 px-3 text-xs font-medium rounded-xl border text-center transition-all ${
                    scope === item.key
                      ? 'bg-[#1A1614] text-white border-[#1A1614] shadow-xs'
                      : 'bg-[#FAF8F5] text-[#57534E] border-black/10 hover:border-black/30'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Area Slider */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#78716C]">
                2. Approximate Floor Area
              </label>
              <span className="font-serif text-lg font-normal text-[#1A1614] tabular-nums">
                {area} m²
              </span>
            </div>
            <input
              type="range"
              min={100}
              max={1500}
              step={50}
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full h-1.5 bg-black/10 rounded-lg appearance-none cursor-pointer accent-[#2D221C]"
            />
            <div className="flex justify-between text-[11px] text-[#78716C] mt-1 font-mono">
              <span>100 m² (Suite)</span>
              <span>600 m² (Villa Ground)</span>
              <span>1,500+ m² (Palatial Estate)</span>
            </div>
          </div>

          {/* 3. Finishing Tier */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#78716C] mb-3">
              3. Specification & Material Standard
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => setTier('refined')}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  tier === 'refined'
                    ? 'bg-white border-[#1A1614] shadow-sm ring-1 ring-[#1A1614]'
                    : 'bg-[#FAF8F5] border-black/10 hover:border-black/25'
                }`}
              >
                <div className="font-serif text-base text-[#1A1614] font-medium">
                  Contemporary Refined
                </div>
                <p className="text-xs text-[#78716C] mt-1">
                  Engineered hardwoods, large-format European porcelain, designer magnetic track lighting, and architectural joinery.
                </p>
              </button>

              <button
                onClick={() => setTier('palatial')}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  tier === 'palatial'
                    ? 'bg-white border-[#1A1614] shadow-sm ring-1 ring-[#1A1614]'
                    : 'bg-[#FAF8F5] border-black/10 hover:border-black/25'
                }`}
              >
                <div className="font-serif text-base text-[#1A1614] font-medium flex items-center justify-between">
                  <span>Palatial Bespoke</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#2D221C]" />
                </div>
                <p className="text-xs text-[#78716C] mt-1">
                  Bookmatched Italian Calacatta/travertine slabs, in-house custom furniture (@fenixfurniture.qa), and smart automation.
                </p>
              </button>
            </div>
          </div>

        </div>

        {/* Right Side: Architectural Feasibility Card */}
        <div className="lg:col-span-5 bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 border border-black/10 shadow-xs space-y-6">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#78716C] font-mono block mb-1">
              Estimated Investment Guide
            </span>
            <div className="font-serif text-3xl sm:text-4xl text-[#1A1614] font-normal tabular-nums">
              ~ {formattedTotal} <span className="text-sm font-sans font-medium text-[#78716C]">QAR</span>
            </div>
            <div className="text-xs text-[#78716C] mt-1">
              Inclusive of 3D engineering, demolition, materials, and turnkey installation.
            </div>
          </div>

          <div className="pt-4 border-t border-black/5 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#78716C]">Selected Project:</span>
              <span className="font-medium text-[#1A1614]">{scopeTitles[scope]}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#78716C]">Floor Dimensions:</span>
              <span className="font-medium text-[#1A1614] tabular-nums">{area} m²</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#78716C] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#2D221C]" />
                <span>Estimated Duration:</span>
              </span>
              <span className="font-medium text-[#1A1614]">{estimatedDuration} Weeks</span>
            </div>
          </div>

          <div className="pt-2 space-y-2.5">
            <button
              onClick={onOpenQuote}
              className="w-full py-3 bg-[#2D221C] hover:bg-[#1E1713] text-white text-xs font-semibold rounded-full transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <span>Book On-Site Feasibility Assessment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={`https://wa.me/97451828555?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-white hover:bg-black/5 text-[#1A1614] border border-black/15 text-xs font-medium rounded-full transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Discuss via WhatsApp Direct</span>
            </a>
          </div>

          <p className="text-[11px] text-[#78716C] text-center leading-relaxed">
            *Final quote confirmed after complimentary site survey across Al Waab, The Pearl, West Bay, or Lusail.
          </p>
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../data/content';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 sm:py-36 px-4 sm:px-8 max-w-[1340px] mx-auto border-t border-black/5">
      {/* Kicker */}
      <div className="text-xs uppercase tracking-widest text-[#78716C] font-medium mb-3 flex items-center gap-1.5">
        <span className="text-[#2D221C]">•</span>
        <span>FREQUENTLY ASKED QUESTIONS</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* Left Column: Headline */}
        <div className="lg:col-span-5">
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1614] font-normal leading-[1.14] tracking-tight">
            Everything You Need to Know
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] font-light mt-4 leading-relaxed">
            Clear, upfront guidance on timelines, municipal approvals, bespoke joinery, and turnkey project accountability in Qatar.
          </p>
          <div className="mt-8 pt-6 border-t border-black/10">
            <span className="text-xs text-[#78716C] block">Have a unique architectural query?</span>
            <a
              href="mailto:hello@fenixreno.qa"
              className="text-xs font-semibold text-[#1A1614] hover:underline mt-1 inline-block"
            >
              Contact our Architectural Director →
            </a>
          </div>
        </div>

        {/* Right Column: Clean Accordion */}
        <div className="lg:col-span-7 divide-y divide-black/10">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="py-6 transition-colors">
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between gap-4 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl text-[#1A1614] font-normal group-hover:text-[#2D221C] transition-colors">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center shrink-0 text-[#1A1614] group-hover:border-black/30 transition-colors">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-4 pr-12 text-sm text-[#57534E] font-light leading-relaxed animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

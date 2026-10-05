import React, { useState, useRef, useCallback } from 'react';
import { MoveHorizontal } from 'lucide-react';
import { LuxuryImage } from './LuxuryImage';

export const TransformationSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section className="py-24 sm:py-36 px-4 sm:px-8 max-w-[1340px] mx-auto border-t border-black/5">
      {/* Kicker */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="text-xs uppercase tracking-widest text-[#78716C] font-medium mb-3 flex items-center justify-center gap-1.5">
          <span className="text-[#2D221C]">•</span>
          <span>THE TRANSFORMATION</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1614] font-normal leading-[1.14] tracking-tight">
          "Everything is About to Change."
        </h2>
        <p className="text-sm sm:text-base text-[#57534E] font-light mt-3 leading-relaxed">
          Drag the interactive slider to see how Fenix Renovations turns raw shells into warm, serene architectural sanctuaries in Doha.
        </p>
      </div>

      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative h-[380px] sm:h-[540px] w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-black/10 select-none shadow-sm cursor-ew-resize group bg-[#ECE8E1]"
      >
        {/* AFTER IMAGE (Underneath, Full Width) */}
        <div className="absolute inset-0 w-full h-full">
          <LuxuryImage
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
            alt="After Renovation - Finished Residence"
            containerClassName="w-full h-full"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-5 right-5 px-3.5 py-1.5 rounded-full bg-white/95 text-[#1A1614] text-[11px] font-semibold tracking-wider uppercase shadow-xs">
            After Fenix Renovation
          </div>
        </div>

        {/* BEFORE IMAGE (Clipped on the left) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full" style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100vw' }}>
            <LuxuryImage
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80"
              alt="Before Renovation - Raw Villa Shell"
              containerClassName="w-full h-full"
              className="w-full h-full object-cover filter grayscale contrast-110 brightness-95"
            />
            <div className="absolute bottom-5 left-5 px-3.5 py-1.5 rounded-full bg-black/80 text-white text-[11px] font-semibold tracking-wider uppercase shadow-xs">
              Before / Raw Shell
            </div>
          </div>
        </div>

        {/* DRAGGABLE DIVIDER LINE */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white shadow-2xl cursor-ew-resize flex items-center justify-center pointer-events-none"
          style={{ left: `calc(${sliderPosition}% - 1px)` }}
        >
          <div className="w-9 h-9 rounded-full bg-white shadow-md border border-black/15 flex items-center justify-center text-[#1A1614] group-hover:scale-110 transition-transform">
            <MoveHorizontal className="w-4 h-4 text-[#2D221C]" />
          </div>
        </div>
      </div>
    </section>
  );
};

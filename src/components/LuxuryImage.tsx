import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface LuxuryImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: string;
  priority?: boolean;
}

export const LuxuryImage: React.FC<LuxuryImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  aspectRatio = 'aspect-[4/3]',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#221C19]/10 ${containerClassName}`}>
      {/* Skeleton / Ambient backdrop */}
      <div 
        className={`absolute inset-0 bg-gradient-to-tr from-[#2A2421]/10 via-[#C29A6B]/5 to-[#F9F7F4] transition-opacity duration-700 ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`} 
      />

      {hasError ? (
        <div className={`w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#2A2421] text-[#F9F7F4] ${aspectRatio}`}>
          <div className="w-12 h-12 rounded-full border border-[#C29A6B]/40 flex items-center justify-center text-[#C29A6B] mb-3 bg-[#C29A6B]/10">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="font-serif text-lg tracking-wide text-[#E8D9C5]">{alt}</span>
          <span className="text-xs uppercase tracking-widest text-[#C29A6B] mt-1 font-sans">Fenix Renovations • Doha</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } ${className}`}
        />
      )}
    </div>
  );
};

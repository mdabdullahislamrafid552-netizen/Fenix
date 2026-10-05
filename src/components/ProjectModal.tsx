import React from 'react';
import { X, MapPin, Check, ArrowRight } from 'lucide-react';
import { Project } from '../types';
import { LuxuryImage } from './LuxuryImage';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenQuote }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs transition-all duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-black/10 overflow-hidden text-[#111111] max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/5 bg-white">
          <div className="flex items-center gap-2.5 text-xs text-[#777777]">
            <span className="font-semibold text-[#111111] uppercase tracking-wider">{project.category}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#332620]" />
              {project.location}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#777777] hover:text-[#111111] hover:bg-black/5 rounded-full transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-xs relative bg-[#F5F5F5]">
            <LuxuryImage
              src={project.imageUrl}
              alt={project.title}
              containerClassName="w-full h-full"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h2 className="font-serif text-2xl sm:text-3xl font-normal">{project.title}</h2>
              <p className="text-xs sm:text-sm text-white/90">{project.subtitle}</p>
            </div>
          </div>

          <p className="text-sm text-[#555555] font-light leading-relaxed">
            {project.description}
          </p>

          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#111111]">Key Details</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-[#F9F9F9] text-xs text-[#333333]">
                  <Check className="w-3.5 h-3.5 text-[#332620] mt-0.5 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-black/5 bg-[#FAFAFA] flex items-center justify-between">
          <span className="text-xs text-[#777777]">Fenix Renovations · Doha, Qatar</span>
          <button
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
            className="inline-flex items-center gap-1.5 px-5 py-2 bg-[#332620] hover:bg-[#1F1714] text-white text-xs font-medium rounded-full shadow-sm"
          >
            <span>Inquire About Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

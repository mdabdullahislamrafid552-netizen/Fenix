import React from 'react';
import { Project } from '../types';
import { LuxuryImage } from './LuxuryImage';

interface PortfolioGridProps {
  onSelectProject: (project: Project) => void;
  onOpenQuote: () => void;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ onSelectProject }) => {
  const showcaseProjects: Project[] = [
    {
      id: 'luxury-majlis-al-waab',
      title: 'Architectural Salon & Majlis',
      subtitle: 'Curved ceiling architecture & warm ambient fluting',
      category: 'Majlis',
      location: 'Al Waab, Doha',
      area: '240 m²',
      year: '2025',
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      description: 'A transformative redesign fusing organic ceiling curvature with subtle Arabesque warmth, bespoke curved seating, and integrated indirect lighting.',
      highlights: [
        'Curvilinear architectural ceiling with concealed 2700K lighting',
        'Custom acoustic oak wall paneling',
        'Travertine flooring with seamless book-matching',
        'Bespoke upholstery for royal gatherings'
      ],
      materials: ['Roman Travertine', 'White Oak Slats', 'Belgian Linen', 'Champagne Brass']
    },
    {
      id: 'modern-kitchen-pearl',
      title: 'Smoked Oak Culinary Suite',
      subtitle: 'Monolithic marble island & pendant illumination',
      category: 'Kitchen',
      location: 'The Pearl-Qatar',
      area: '95 m²',
      year: '2025',
      imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
      description: 'Clean architectural kitchen featuring vertical walnut reeding, Calacatta stone waterfall island, and flush integrated appliances.',
      highlights: [
        '4-meter monolithic marble island with recessed toe-kick',
        'Motorized handleless smoked cabinetry',
        'Architectural matte black and brass pendant fixtures',
        'Hidden butler pantry'
      ],
      materials: ['Calacatta Gold Marble', 'Smoked European Oak', 'Matte Black Aluminum', 'Fluted Glass']
    },
    {
      id: 'master-bath-west-bay',
      title: 'Serene Stone Sanctuary',
      subtitle: 'Minimalist freestanding bath & fluted wall tiles',
      category: 'Master Suite',
      location: 'West Bay Lagoon, Doha',
      area: '120 m²',
      year: '2024',
      imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
      description: 'Monochromatic retreat balancing handcrafted tactile wall tiles, organic solid-surface tub, and serene natural daylight.',
      highlights: [
        'Custom freestanding matte tub framed by floor-to-ceiling textured tiles',
        'Wall-mounted minimalist brushed nickel tapware',
        'Concealed linear floor drain and frameless glass partition',
        'Heated natural limestone floor slabs'
      ],
      materials: ['Handmade Zellige Tiles', 'Honed Limestone', 'Solid Matte Resin', 'Brushed Nickel']
    }
  ];

  return (
    <section id="projects" className="py-24 sm:py-36 px-4 sm:px-8 max-w-[1340px] mx-auto border-t border-black/5">
      {/* 3 Vertical Architectural Cards (Exact Match to Remodix Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {showcaseProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group cursor-pointer flex flex-col"
          >
            {/* Image card with rounded corners, no heavy borders */}
            <div className="relative w-full h-[440px] sm:h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#ECE8E1] shadow-xs group-hover:shadow-lg transition-all duration-300">
              <LuxuryImage
                src={project.imageUrl}
                alt={project.title}
                containerClassName="w-full h-full"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            </div>

            {/* Quiet metadata & title below card */}
            <div className="pt-4 flex items-center justify-between">
              <div>
                <h3 className="font-serif text-lg sm:text-xl text-[#1A1614] font-normal group-hover:text-[#2D221C] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-[#78716C] mt-0.5 font-light">
                  {project.subtitle} · {project.location}
                </p>
              </div>
              <span className="text-xs text-[#1A1614] font-medium group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

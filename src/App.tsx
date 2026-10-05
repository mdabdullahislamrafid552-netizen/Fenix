import React, { useState } from 'react';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PartnerTicker } from './components/PartnerTicker';
import { AboutVision } from './components/AboutVision';
import { PortfolioGrid } from './components/PortfolioGrid';
import { ServicesSection } from './components/ServicesSection';
import { AtelierSection } from './components/AtelierSection';
import { TransformationSlider } from './components/TransformationSlider';
import { MaterialsShowcase } from './components/MaterialsShowcase';
import { ProcessSection } from './components/ProcessSection';
import { CostEstimator } from './components/CostEstimator';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingConcierge } from './components/FloatingConcierge';
import { QuoteModal } from './components/QuoteModal';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1614] flex flex-col font-sans selection:bg-[#2D221C]/15 selection:text-[#1A1614] relative">
      {/* 1. Thin Elegant Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* 2. Transparent Floating Header (Exact Remodix clone) */}
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* 3. Hero Section (Full-bleed, calm, architectural, center-aligned) */}
        <Hero onOpenQuote={() => setIsQuoteOpen(true)} />

        {/* 4. Quiet Industry Partners Ticker */}
        <PartnerTicker />

        {/* 5. About Section (Remodix exact layout: left headline, right text, two asymmetric images, minimalist stats) */}
        <AboutVision onOpenQuote={() => setIsQuoteOpen(true)} />

        {/* 6. Portfolio (3 Monolithic Vertical Cards matching Remodix) */}
        <PortfolioGrid 
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenQuote={() => setIsQuoteOpen(true)}
        />

        {/* 7. Specialized Renovation Services (6 Core Practices) */}
        <ServicesSection onOpenQuote={() => setIsQuoteOpen(true)} />

        {/* 8. The Doha Atelier & Custom Joinery (@fenixfurniture.qa) */}
        <AtelierSection onOpenQuote={() => setIsQuoteOpen(true)} />

        {/* 9. Interactive Before & After Transformation Slider */}
        <TransformationSlider />

        {/* 10. Tactile Materiality Archive (Calacatta, Travertine, Smoked Oak, Brass) */}
        <MaterialsShowcase />

        {/* 11. The 4-Step Architectural Methodology ("Trust the Process") */}
        <ProcessSection />

        {/* 12. Interactive Villa Renovation Cost & Timeline Estimator (QAR) */}
        <CostEstimator onOpenQuote={() => setIsQuoteOpen(true)} />

        {/* 13. Client Testimonials & Social Proof in Qatar */}
        <Testimonials />

        {/* 14. Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* 15. Minimalist Dark Architectural Footer */}
      <Footer onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 16. Floating Studio Concierge */}
      <FloatingConcierge onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenQuote={() => {
          setSelectedProject(null);
          setIsQuoteOpen(true);
        }}
      />
    </div>
  );
}

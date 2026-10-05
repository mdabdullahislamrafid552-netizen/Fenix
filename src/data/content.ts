import { Project, Service, Testimonial, Partner } from '../types';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const PARTNERS: Partner[] = [
  { name: 'Northvale Architectural', category: 'Precision Hardware' },
  { name: 'Soltixi Panels', category: 'Acoustic Wood Engineering' },
  { name: 'Veritas Marmi', category: 'Italian Marble & Travertine' },
  { name: 'Omnira Lighting', category: 'Architectural Systems' },
  { name: 'Growthly Timber', category: 'Sustainable Hardwoods' },
  { name: 'Adverra Textiles', category: 'Belgian Bouclé & Velvet' },
  { name: 'Rimadesio Glass', category: 'Minimalist Partitions' },
];

export const PROJECTS: Project[] = [
  {
    id: 'luxury-majlis-al-waab',
    title: 'The Royal Majlis',
    subtitle: 'Contemporary architectural curves & warm travertine fluting',
    category: 'Majlis',
    location: 'Al Waab, Doha',
    area: '240 m²',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'A transformative redesign of a private Qatari family Majlis fusing sculptural ceiling architecture with subtle Arabesque warmth, custom curved taupe velvet modular lounges, and warm back-lit travertine feature walls.',
    highlights: [
      'Sculptural curved ceiling architecture with concealed 2700K indirect illumination',
      'Solid vein-matched Calacatta marble central gathering tables',
      'Bespoke hand-crafted modular seating designed exclusively for 30+ guests',
      'Architectural arched portals finished in brushed warm champagne brass'
    ],
    materials: ['Italian Calacatta Gold Marble', 'Natural White Oak Flutes', 'Champagne Brass Accents', 'Belgian Bouclé & Velvet']
  },
  {
    id: 'modern-kitchen-pearl',
    title: 'Smoked Oak Culinary Suite',
    subtitle: 'Monolithic Calacatta waterfall island & pendant lighting',
    category: 'Kitchen',
    location: 'Porto Arabia, The Pearl-Qatar',
    area: '95 m²',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    description: 'Monolithic kitchen transformation boasting continuous book-matched marble waterfalls, hidden pocket-door chef pantry, integrated Gaggenau appliances, and custom fluted dark smoked oak cabinetry.',
    highlights: [
      'Continuous 4.2m book-matched monolithic marble island with recessed brass plinth',
      'Handleless motorized touch-open smoked oak cabinetry',
      'Concealed back prep kitchen for high-heat cooking',
      'Architectural linear magnetic track illumination'
    ],
    materials: ['Statuario Honed Marble', 'Smoked European Oak', 'Brushed Bronze Hardware', 'Smoked Bronze Glass']
  },
  {
    id: 'master-bath-west-bay',
    title: 'Serene Stone Bath Sanctuary',
    subtitle: 'Minimalist freestanding bath & fluted tactile wall tiles',
    category: 'Master Suite',
    location: 'West Bay Lagoon, Doha',
    area: '140 m²',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    description: 'An oasis of tranquility engineered with floor-to-ceiling acoustic linen panels, integrated dressing suite, floating cantilevered bedside consoles, and a freestanding spa bath framed by natural limestone.',
    highlights: [
      'Custom curved upholstered bouclé headboard spanning the full feature wall',
      'Walk-through custom dressing gallery with smoked glass wardrobes and warm internal illumination',
      'Floating natural travertine vanity with brushed gold Vola fixtures',
      'Automated motorized Lutron blackout and sheer privacy drapery'
    ],
    materials: ['Organic Belgian Linen', 'Warm Beige Travertine', 'Natural Oak Veneer', 'Brushed Brass Knurled Handles']
  },
  {
    id: 'villa-living-lusail',
    title: 'Double-Height Grand Living Salon',
    subtitle: 'Architectural grandeur with warm travertine & vertical wood slats',
    category: 'Villa Living',
    location: 'Lusail Fox Hills, Qatar',
    area: '320 m²',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    description: 'A double-height living pavilion combining 6-meter vertical timber louvers, suspended architectural chandelier, and low-slung Italian furniture for an atmosphere of calm prestige.',
    highlights: [
      '6m custom vertical slatted wall masking integrated climate returns',
      'Large format 120x240cm warm beige travertine slab flooring',
      'Sculptural gypsum bas-relief wall art inspired by natural Qatari desert flora',
      'Seamless transition to private landscaped interior courtyard'
    ],
    materials: ['Warm Roman Travertine', 'American Walnut Ribs', 'Matte Plaster Finish', 'Textured Wool Rugs']
  },
  {
    id: 'bespoke-joinery-al-rayyan',
    title: 'Bespoke Millwork & Dressing Gallery',
    subtitle: 'Artisanal carpentry and custom furniture from @fenixfurniture.qa',
    category: 'Bespoke Joinery',
    location: 'Al Rayyan, Qatar',
    area: 'Full Villa Package',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    description: 'Custom furniture and artisanal millwork produced in-house by Fenix craftspeople, from sculptural velvet dining chairs to integrated arched library shelving with brass gallery rail.',
    highlights: [
      'In-house custom furniture fabrication using sustainably sourced hardwoods',
      'Hand-turned solid brass cabinet pulls and mortise hinges',
      'Custom curved dressing room vanity tables with fluted aprons',
      'Three-coat hand-applied micro-cement and natural wax finish'
    ],
    materials: ['Solid Teak & Oak', 'Cast Solid Brass', 'Hand-applied Micro-cement', 'Ultra-matte Lacquers']
  }
];

export const SERVICES: Service[] = [
  {
    id: 'full-villa',
    number: '01',
    title: 'Full-Villa Turnkey Overhaul',
    category: 'Architectural Renovation',
    tagline: 'Complete spatial re-engineering from demolition to white-glove handover.',
    description: 'We orchestrate every dimension of high-ticket villa transformations in Doha. Managing structural modifications, Qatar municipality permits, MEP upgrades, luxury marble flooring, bespoke millwork, and custom furnishings under one single accountable team.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    scope: ['Space Planning & 3D Photoreal Visualization', 'Structural Reconfiguration & Approvals', 'Luxury MEP & Smart Automation', 'Turnkey Furnishing & Styling']
  },
  {
    id: 'luxury-majlis',
    number: '02',
    title: 'Royal & Contemporary Majlis',
    category: 'Cultural Elegance',
    tagline: 'Honoring Qatari hospitality with bespoke contemporary grandeur.',
    description: 'The Majlis is the soul of Qatari home life. We craft spaces that reflect dignity, welcoming comfort, and prestige—balancing rich cultural traditions with contemporary lighting, acoustic refinement, and bespoke seating.',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
    scope: ['Custom VIP Seating Layouts (20-60+ Guests)', 'Gypsum & Acoustic Wall Art Features', 'Bespoke Marble & Brass Coffee Consoles', 'Concealed Presentation & Sound Systems']
  },
  {
    id: 'gourmet-kitchens',
    number: '03',
    title: 'Monolithic Italian Kitchens',
    category: 'Culinary Suites',
    tagline: 'Book-matched Italian stone, concealed pantries, and architectural joinery.',
    description: 'Engineering the heart of the modern villa with book-matched Italian marble waterfall islands, motorized concealed cabinetry, integrated European appliances, and dedicated heavy-cooking back kitchens.',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
    scope: ['Bookmatched Marble Waterfall Islands', 'Concealed Butler & Scullery Kitchens', 'Integrated Gaggenau / Miele Suites', 'Fluted Hardwood & Smoked Glass Cabinetry']
  },
  {
    id: 'master-suites',
    number: '04',
    title: 'Master Suite Sanctuaries',
    category: 'Private Living',
    tagline: 'Acoustic tranquility, dressing galleries, and spa bathroom design.',
    description: 'Private retreats engineered with bespoke curved upholstered headboards, walk-through dressing galleries with illuminated smoked glass wardrobes, and five-star spa bathrooms with freestanding limestone tubs.',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
    scope: ['Walk-in Dressing Galleries with Integrated Lighting', 'Spa Bathrooms with Freestanding Soaking Tubs', 'Acoustic Fabric & Wood Wall Paneling', 'Motorized Architectural Drapery']
  },
  {
    id: 'bespoke-millwork',
    number: '05',
    title: 'Bespoke Joinery & Furniture',
    category: 'In-House Workshop',
    tagline: 'Precision carpentry crafted specifically for your villa dimensions.',
    description: 'Through our dedicated furniture workshop (@fenixfurniture.qa), we craft architectural cabinetry, custom velvet and bouclé armchairs, hand-carved floral gypsum bas-relief, and knurled brass hardware tailored to your villa scale.',
    imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80',
    scope: ['Handmade Sculptural Dining & Lounge Chairs', 'Custom Arched Architectural Portals', 'Gypsum 3D Relief Botanical Wall Art', 'Solid Hardwood Cantilevered Consoles']
  },
  {
    id: 'turnkey-mep',
    number: '06',
    title: 'Smart Automation & MEP Engineering',
    category: 'Infrastructure',
    tagline: 'Silent climate control, Lutron architectural lighting, and acoustic tuning.',
    description: 'High-ticket villas require invisible infrastructure excellence: whisper-quiet concealed HVAC linear slot diffusers, automated scene lighting, whole-villa acoustic dampening, and advanced water purification systems.',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
    scope: ['Concealed Linear Architectural HVAC Diffusers', 'Lutron Homeworks Smart Lighting Systems', 'Acoustical Room Calibration', 'Whole-Home Water Filtration & Softening']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'Fenix Renovations completely transformed our 1,400 m² family villa in Al Waab. Their attention to custom woodwork, lighting design, and gypsum wall relief is unmatched in Qatar. They held the vision until the very last detail.',
    client: 'Sheikh Nasser Al-Thani',
    location: 'Al Waab Villa, Doha',
    projectType: 'Full Villa & Grand Majlis',
    rating: 5
  },
  {
    id: '2',
    quote: 'The Majlis they designed for our residence became the crown jewel of our home. Welcoming guests here is an absolute joy. Seamless execution, spotless finishing, and strict adherence to timelines.',
    client: 'Fatima Al-Kuwari',
    location: 'Porto Arabia, The Pearl-Qatar',
    projectType: 'Luxury Majlis & Living Salon',
    rating: 5
  },
  {
    id: '3',
    quote: 'Finding a renovation partner in Doha that understands both European minimalist refinement and local hospitality expectations is rare. Fenix exceeded all our standards on our West Bay residence.',
    client: 'Tariq Al-Mannai',
    location: 'West Bay Lagoon, Doha',
    projectType: 'Master Suite & Gourmet Kitchen',
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How long does a complete luxury villa renovation typically take in Doha?',
    answer: 'Typical timelines range from 12 to 24 weeks depending on the scope. A dedicated Majlis or master suite renovation is generally completed in 8 to 12 weeks, whereas a full 1,000+ m² turnkey villa overhaul takes 16 to 24 weeks. We establish fixed milestone dates prior to contract signing and provide weekly progress reporting.',
    category: 'Timeline'
  },
  {
    id: 'faq-2',
    question: 'Do you manage Qatar municipality permits and structural approvals?',
    answer: 'Yes. Our in-house engineering team handles all regulatory requirements with Qatar Municipality (Baladiya), Civil Defense (QCDD), and Kahramaa. We secure all necessary engineering approvals before commencing any structural or MEP work.',
    category: 'Approvals'
  },
  {
    id: 'faq-3',
    question: 'Can you manufacture custom furniture and cabinetry to fit our specific dimensions?',
    answer: 'Absolutely. Unlike traditional contractors who purchase standard catalog items, Fenix operates an in-house bespoke furniture and joinery workshop in Qatar (@fenixfurniture.qa). We design and build custom-sized Majlis sofas, curved bouclé armchairs, bookmatched marble tables, and walk-in dressing suites crafted specifically for your home.',
    category: 'Craftsmanship'
  },
  {
    id: 'faq-4',
    question: 'How are project payments and cost milestones structured?',
    answer: 'We utilize a transparent, progress-based payment schedule tied directly to verified construction milestones (Design Sign-off, Demolition & MEP Rough-in, Stone & Millwork Installation, Final White-Glove Handover). We provide detailed line-item bill of quantities (BOQ) with zero surprise costs.',
    category: 'Financial'
  },
  {
    id: 'faq-5',
    question: 'What warranty and aftercare support do you provide upon handover?',
    answer: 'Every Fenix Renovation includes our 12-Month Comprehensive Craftsmanship Guarantee covering all joinery, MEP fittings, finishes, and hardware. We also provide a dedicated concierge contact for ongoing maintenance and seasonal adjustments.',
    category: 'Warranty'
  }
];

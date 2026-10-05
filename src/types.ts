export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Majlis' | 'Kitchen' | 'Master Suite' | 'Villa Living' | 'Bespoke Joinery';
  location: string;
  area: string;
  year: string;
  imageUrl: string;
  description: string;
  highlights: string[];
  materials: string[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  imageUrl: string;
  scope: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  client: string;
  location: string;
  projectType: string;
  rating: number;
}

export interface Partner {
  name: string;
  category: string;
}

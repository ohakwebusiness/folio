
export interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  technologies: string[];
}

export interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  category: string;
  client: string;
  year: number;
  servicesProvided: string[];
  technologies: string[];
  keyFeatures: string[];
  description: string;
  challenge: string;
  solution: string;
  result: string;
}

export interface TeamMember {
  image: string;
  name: string;
  role: string;
  bio: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

export interface BlogPost {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
}

export interface Subscriber {
  name: string;
  email: string;
  phone: string;
}
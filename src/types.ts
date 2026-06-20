export type ActiveSection = 'home' | 'about' | 'programs' | 'gallery' | 'achievements' | 'events' | 'blueprint';

export interface CalligraphyProgram {
  id: string;
  title: string;
  description: string;
  type: 'offline' | 'online';
  level: 'Dasar' | 'Menengah' | 'Mahir';
  price: string;
  period: string;
  features: string[];
  instructor: string;
  schedule: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  content: string;
  program: string;
}

export interface CalligraphyArtwork {
  id: string;
  title: string;
  style: 'Naskhi' | 'Tsuluts' | 'Diwani' | 'Riq\'ah' | 'Kufi' | 'Farisi';
  artist: string;
  image: string;
  description: string;
  year: string;
}

export interface Achievement {
  id: string;
  title: string;
  studentName: string;
  rank: string;
  competition: string;
  year: string;
  image: string;
  description: string;
}

export interface PromoEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  badge: 'Promo' | 'Event' | 'Olimpiade';
  discountCode?: string;
  registrationOpen: boolean;
  ctaText: string;
}

export interface RegistrationForm {
  fullName: string;
  email: string;
  phone: string;
  programId: string;
  classType: 'offline' | 'online';
  notes?: string;
}

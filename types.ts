
export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  bio: string;
  image: string;
  education: string[];
}

export interface Department {
  id: string;
  name: string;
  description: string;
  icon: string;
  slug: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
}

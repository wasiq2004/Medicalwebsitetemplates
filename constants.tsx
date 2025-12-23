
import React from 'react';
import { 
  Heart, 
  Stethoscope, 
  Activity, 
  Brain, 
  Baby, 
  Bone, 
  Microscope,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  UserCheck,
  Zap
} from 'lucide-react';
import { Department, Doctor, Testimonial, BlogPost, FAQItem } from './types';

export const COLORS = {
  primary: '#0ea5e9', // Sky 500
  secondary: '#0c4a6e', // Sky 900
  accent: '#f97316', // Orange 500
};

export const CONTACT_INFO = {
  phone: '+1 (555) 000-1234',
  emergency: '+1 (555) 911-0000',
  email: 'info@medcarepro.com',
  address: '123 Medical Plaza Dr, Health City, HC 54321',
  hours: '24/7 Emergency Services | OPD: 9 AM - 8 PM',
};

export const DEPARTMENTS: Department[] = [
  { id: '1', name: 'Cardiology', description: 'Comprehensive heart care using advanced diagnostic and treatment tools.', icon: 'Heart', slug: 'cardiology' },
  { id: '2', name: 'Neurology', description: 'Expert treatment for disorders of the nervous system and brain.', icon: 'Brain', slug: 'neurology' },
  { id: '3', name: 'Orthopedics', description: 'Specialized care for bones, joints, and musculoskeletal issues.', icon: 'Bone', slug: 'orthopedics' },
  { id: '4', name: 'Pediatrics', description: 'Compassionate medical care for infants, children, and adolescents.', icon: 'Baby', slug: 'pediatrics' },
  { id: '5', name: 'Oncology', description: 'Personalized cancer treatment and multidisciplinary support.', icon: 'Activity', slug: 'oncology' },
  { id: '6', name: 'Diagnostics', description: 'State-of-the-art laboratory and imaging services for accurate results.', icon: 'Microscope', slug: 'diagnostics' },
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr1',
    name: 'Dr. Sarah Mitchell',
    title: 'Senior Cardiologist',
    specialty: 'Cardiology',
    bio: 'With over 15 years of experience, Dr. Mitchell specializes in interventional cardiology and heart failure management.',
    image: 'https://picsum.photos/seed/dr1/400/500',
    education: ['MD - Harvard Medical School', 'Residency - Mayo Clinic']
  },
  {
    id: 'dr2',
    name: 'Dr. James Chen',
    title: 'Chief Neurologist',
    specialty: 'Neurology',
    bio: 'Dr. Chen is a pioneer in minimally invasive neurosurgery and neurological rehabilitation.',
    image: 'https://picsum.photos/seed/dr2/400/500',
    education: ['MD - Stanford University', 'Fellowship - Johns Hopkins']
  },
  {
    id: 'dr3',
    name: 'Dr. Elena Rodriguez',
    title: 'Lead Pediatrician',
    specialty: 'Pediatrics',
    bio: 'Dedicated to child wellness, Dr. Rodriguez has published numerous papers on developmental pediatrics.',
    image: 'https://picsum.photos/seed/dr3/400/500',
    education: ['MD - Yale University', 'Board Certified Pediatrics']
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Michael Thompson',
    text: 'The cardiac team at MedCare Pro saved my life. Their professionalism and empathy were beyond my expectations.',
    rating: 5,
    image: 'https://picsum.photos/seed/p1/100/100'
  },
  {
    id: 't2',
    name: 'Linda Williams',
    text: 'Best pediatric care in the city. My kids actually enjoy going to the doctor now because of the friendly staff.',
    rating: 5,
    image: 'https://picsum.photos/seed/p2/100/100'
  },
];

export const FAQS: FAQItem[] = [
  { question: 'What are the visiting hours?', answer: 'General visiting hours are from 10:00 AM to 1:00 PM and 4:00 PM to 8:00 PM daily. Special care units may have different timings.' },
  { question: 'Do you accept international insurance?', answer: 'Yes, we work with most major international insurance providers. Please contact our billing department for a full list.' },
  { question: 'How can I book an appointment?', answer: 'You can book online through our portal, call our reception at +1 (555) 000-1234, or use our mobile app.' },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Understanding Heart Health: 5 Simple Tips',
    excerpt: 'Small lifestyle changes can make a massive difference in your cardiovascular health.',
    category: 'Wellness',
    author: 'Dr. Sarah Mitchell',
    date: 'Oct 12, 2023',
    image: 'https://picsum.photos/seed/heart/600/400'
  },
  {
    id: 'b2',
    title: 'The Future of Robotic Surgery',
    excerpt: 'How precision technology is reducing recovery times for complex procedures.',
    category: 'Technology',
    author: 'Dr. James Chen',
    date: 'Oct 15, 2023',
    image: 'https://picsum.photos/seed/robot/600/400'
  },
];

export const TRUST_FACTORS = [
  { title: '24/7 Emergency', desc: 'Ready for any medical crisis, any time.', icon: <Zap className="w-8 h-8 text-sky-600" /> },
  { title: 'Expert Doctors', desc: 'Board-certified specialists across all fields.', icon: <UserCheck className="w-8 h-8 text-sky-600" /> },
  { title: 'Modern Facilities', desc: 'Equipped with the latest medical technology.', icon: <Activity className="w-8 h-8 text-sky-600" /> },
  { title: 'Quality Certified', desc: 'Accredited by national healthcare boards.', icon: <ShieldCheck className="w-8 h-8 text-sky-600" /> },
];

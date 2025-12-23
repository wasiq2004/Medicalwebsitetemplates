
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Stethoscope, 
  Clock, 
  ShieldCheck, 
  Heart,
  Brain,
  Bone,
  Baby,
  Activity,
  Microscope,
  PhoneCall
} from 'lucide-react';
import { DEPARTMENTS, DOCTORS, TESTIMONIALS, TRUST_FACTORS, BLOG_POSTS } from '../constants';

const Hero = () => (
  <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
    {/* Background Image Overlay */}
    <div 
      className="absolute inset-0 z-0 bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/hosp/1920/1080)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-sky-950/90 to-sky-900/40"></div>
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-2xl text-white">
        <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-400/30 px-3 py-1 rounded-full mb-6 animate-bounce">
          <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
          <span className="text-sm font-semibold tracking-wide uppercase">Your Health, Our Priority</span>
        </div>
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          Compassionate Care, <br />
          <span className="text-sky-400">Advanced Medicine.</span>
        </h1>
        <p className="text-xl text-slate-200 mb-10 leading-relaxed max-w-xl">
          World-class healthcare services powered by cutting-edge technology and a team of board-certified specialists dedicated to your well-being.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/book-appointment" className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
            Book Your Visit <ArrowRight size={20} />
          </Link>
          <Link to="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center">
            Find Specialists
          </Link>
        </div>
      </div>
    </div>
  </section>
);

// Explicitly use React.FC to allow React internal props like 'key' when used in a list
const ServiceCard: React.FC<{ icon: any; name: string; desc: string }> = ({ icon, name, desc }) => {
  const Icon = icon;
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-sky-100 transition-all group">
      <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sky-500 group-hover:text-white transition-colors">
        <Icon size={28} className="text-sky-600 group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-900">{name}</h3>
      <p className="text-slate-600 mb-6 leading-relaxed">{desc}</p>
      <Link to="/services" className="text-sky-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
        Learn More <ArrowRight size={16} />
      </Link>
    </div>
  );
};

const Home = () => {
  const departmentIcons: Record<string, any> = { Heart, Brain, Bone, Baby, Activity, Microscope };

  return (
    <div className="space-y-32 pb-24">
      <Hero />

      {/* Trust Factors */}
      <section className="container mx-auto px-4">
        <div className="bg-white -mt-24 relative z-20 rounded-3xl shadow-2xl p-8 lg:p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST_FACTORS.map((factor, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="shrink-0 p-3 bg-sky-50 rounded-2xl">
                {factor.icon}
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-900">{factor.title}</h4>
                <p className="text-slate-500 text-sm">{factor.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sky-600 font-bold uppercase tracking-widest text-sm mb-4">Our Specialties</h2>
          <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">World-Class Medical Services</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            We offer comprehensive medical care across various departments, utilizing the latest diagnostic tools and treatment methodologies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEPARTMENTS.map((dept) => (
            <ServiceCard 
              key={dept.id} 
              name={dept.name} 
              desc={dept.description} 
              icon={departmentIcons[dept.icon] || Stethoscope} 
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-900 py-24 text-white overflow-hidden relative">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/seed/team/800/1000" alt="Medical Team" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-sky-500 p-8 rounded-3xl z-20 shadow-xl hidden md:block">
              <p className="text-4xl font-bold mb-1">25+</p>
              <p className="text-sky-100 font-semibold uppercase tracking-wider text-sm">Years of Excellence</p>
            </div>
          </div>
          <div>
            <h2 className="text-sky-400 font-bold uppercase tracking-widest text-sm mb-4">Why Choose Us</h2>
            <h3 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">We Are Committed To Your Better Health.</h3>
            <div className="space-y-6">
              {[
                { title: 'Personalized Care', text: 'Tailored treatment plans for every unique patient journey.' },
                { title: 'Board Certified Team', text: 'Access to top-tier medical experts and surgical specialists.' },
                { title: 'Modern Technology', text: 'Advanced robotic surgery and AI-powered diagnostic tools.' },
                { title: 'Affordable Services', text: 'Transparent pricing and partnership with major insurance providers.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-sky-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sky-600 font-bold uppercase tracking-widest text-sm mb-4">Our Specialists</h2>
            <h3 className="text-4xl font-extrabold text-slate-900">Meet Our Expert Doctors</h3>
          </div>
          <Link to="/doctors" className="bg-sky-50 text-sky-600 px-6 py-3 rounded-xl font-bold hover:bg-sky-600 hover:text-white transition-all flex items-center gap-2">
            View All Doctors <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCTORS.map((doc) => (
            <div key={doc.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group">
              <div className="h-80 overflow-hidden">
                <img src={doc.image} alt={doc.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <p className="text-sky-600 font-bold text-sm mb-2 uppercase tracking-wide">{doc.specialty}</p>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{doc.name}</h4>
                <p className="text-slate-500 mb-6 line-clamp-2">{doc.bio}</p>
                <Link to="/book-appointment" className="w-full py-3 border-2 border-slate-100 rounded-xl font-bold text-slate-900 flex items-center justify-center gap-2 hover:border-sky-500 hover:text-sky-600 transition-all">
                  Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="container mx-auto px-4">
        <div className="bg-sky-600 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
          
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl lg:text-5xl font-extrabold text-white mb-8">Ready to get started? Book your appointment today.</h3>
            <p className="text-sky-100 text-lg mb-10">We are here to help you live a healthier life. Schedule a consultation with our experts in just a few clicks.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-appointment" className="bg-white text-sky-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all">
                Schedule Appointment
              </Link>
              <a href="tel:+15550001234" className="bg-sky-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 border border-sky-400/30">
                <PhoneCall size={20} /> Call Reception
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

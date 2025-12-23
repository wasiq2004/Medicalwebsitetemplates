
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Award, ShieldCheck, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Successful Surgeries', value: '15k+' },
    { label: 'Happy Patients', value: '100k+' },
    { label: 'Expert Doctors', value: '250+' },
    { label: 'Medical Awards', value: '45+' },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="bg-sky-900 py-24 text-white relative">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-extrabold mb-6"
          >
            Pioneering The Future <br /> of <span className="text-sky-400">Healthcare</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-sky-200 max-w-3xl mx-auto"
          >
            Founded in 1998, MedCare Pro has evolved from a local clinic into a nationally recognized center of medical excellence.
          </motion.p>
        </div>
        <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 -mt-12 mb-24 relative z-20">
        <div className="bg-white p-12 rounded-[3rem] shadow-2xl grid grid-cols-2 lg:grid-cols-4 gap-8 text-center border border-sky-50">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-4xl lg:text-5xl font-black text-sky-600 mb-2">{stat.value}</h3>
              <p className="text-slate-500 font-semibold tracking-wide uppercase text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="space-y-8"
          >
            <div className="bg-sky-50 p-8 rounded-3xl border-l-8 border-sky-500">
              <div className="flex items-center gap-4 mb-4">
                <Target className="text-sky-600" size={32} />
                <h3 className="text-3xl font-bold text-slate-900">Our Mission</h3>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed">
                To provide accessible, high-quality, and cost-effective healthcare to our community through medical research, innovative technology, and compassionate care.
              </p>
            </div>
            <div className="bg-slate-900 p-8 rounded-3xl border-l-8 border-sky-400 text-white">
              <div className="flex items-center gap-4 mb-4">
                <Eye className="text-sky-400" size={32} />
                <h3 className="text-3xl font-bold">Our Vision</h3>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                To be the global leader in patient-centric healthcare, recognized for medical innovation and excellence in clinical outcomes.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000" 
              alt="Hospital Interior" 
              className="rounded-[3rem] shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-slate-50 py-32">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">Our Leadership</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Guided by experts with decades of experience in medical management and clinical research.
          </p>
        </div>
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
          {[
            { name: 'Dr. Robert Sullivan', role: 'Chief Medical Officer', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400' },
            { name: 'Dr. Alicia Valez', role: 'Director of Research', img: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=400' },
            { name: 'John Peterson', role: 'CEO', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
          ].map((leader, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100"
            >
              <img src={leader.img} alt={leader.name} className="w-full h-80 object-cover" />
              <div className="p-8">
                <h4 className="text-2xl font-bold text-slate-900">{leader.name}</h4>
                <p className="text-sky-600 font-semibold">{leader.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;

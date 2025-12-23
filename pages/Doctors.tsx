
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Mail, Phone, Calendar, ArrowRight } from 'lucide-react';
import { DOCTORS, DEPARTMENTS } from '../constants';
import { Link } from 'react-router-dom';

const Doctors = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDoctors = DOCTORS.filter(doc => {
    const matchesFilter = filter === 'All' || doc.specialty === filter;
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-32">
      <section className="bg-sky-900 py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6">Our Specialists</h1>
          <p className="text-sky-200 text-xl max-w-2xl mx-auto">
            A diverse team of world-class medical professionals dedicated to your health.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-12">
        {/* Search & Filter Bar */}
        <div className="bg-white p-6 rounded-3xl shadow-2xl border border-sky-50 flex flex-col md:flex-row gap-6 mb-16">
          <div className="flex-grow relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-sky-500 transition-all font-medium"
            />
          </div>
          <div className="flex items-center gap-4 bg-slate-50 px-6 rounded-2xl border border-slate-100 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <Filter size={18} className="text-slate-400 shrink-0" />
            <button 
              onClick={() => setFilter('All')}
              className={`px-4 py-3 rounded-xl font-bold transition-all ${filter === 'All' ? 'text-sky-600' : 'text-slate-500 hover:text-slate-800'}`}
            >
              All
            </button>
            {DEPARTMENTS.map(dept => (
              <button
                key={dept.id}
                onClick={() => setFilter(dept.name)}
                className={`px-4 py-3 rounded-xl font-bold transition-all ${filter === dept.name ? 'text-sky-600' : 'text-slate-500 hover:text-slate-800'}`}
              >
                {dept.name}
              </button>
            ))}
          </div>
        </div>

        {/* Doctor Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredDoctors.map((doc, i) => (
            <motion.div 
              key={doc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 group"
            >
              <div className="relative h-96 overflow-hidden">
                <img src={doc.image} alt={doc.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 left-6">
                  <span className="bg-sky-500 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    {doc.specialty}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{doc.name}</h3>
                <p className="text-sky-600 font-bold mb-4">{doc.title}</p>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed line-clamp-3">{doc.bio}</p>
                
                <div className="space-y-4 mb-8">
                  {doc.education.map((edu, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs font-bold text-slate-400">
                      <div className="w-1.5 h-1.5 bg-sky-400 rounded-full"></div>
                      {edu}
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link 
                    to="/book-appointment" 
                    className="flex-grow bg-sky-600 text-white text-center py-4 rounded-2xl font-bold hover:bg-sky-700 transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar size={18} /> Appointment
                  </Link>
                  <button className="p-4 rounded-2xl bg-sky-50 text-sky-600 hover:bg-sky-600 hover:text-white transition-all">
                    <Mail size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;

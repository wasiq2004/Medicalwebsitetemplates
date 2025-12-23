
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Brain, Bone, Baby, Activity, Microscope, ArrowRight, Shield, Zap, User } from 'lucide-react';
import { DEPARTMENTS } from '../constants';

const Services = () => {
  const [searchParams] = useSearchParams();
  const [activeId, setActiveId] = useState(searchParams.get('id') || DEPARTMENTS[0].id);

  useEffect(() => {
    const id = searchParams.get('id');
    if (id) setActiveId(id);
  }, [searchParams]);

  const activeDept = DEPARTMENTS.find(d => d.id === activeId) || DEPARTMENTS[0];
  const icons: Record<string, any> = { Heart, Brain, Bone, Baby, Activity, Microscope };
  const ActiveIcon = icons[activeDept.icon] || Heart;

  return (
    <div className="bg-slate-50 min-h-screen pb-32">
      <section className="bg-sky-900 py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6">Medical Departments</h1>
          <p className="text-sky-200 text-xl max-w-2xl mx-auto">
            World-class specialization and specialized equipment for every medical need.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Nav */}
          <div className="lg:col-span-1 space-y-3">
            {DEPARTMENTS.map(dept => {
              const Icon = icons[dept.icon] || Heart;
              return (
                <button
                  key={dept.id}
                  onClick={() => setActiveId(dept.id)}
                  className={`w-full flex items-center gap-4 p-5 rounded-2xl transition-all border-2 text-left ${
                    activeId === dept.id 
                    ? 'bg-white border-sky-500 shadow-xl text-sky-600' 
                    : 'bg-white/80 border-transparent text-slate-600 hover:border-sky-200'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-bold">{dept.name}</span>
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100"
              >
                <div className="grid lg:grid-cols-2">
                  <div className="p-12 space-y-8">
                    <div className="inline-block p-4 bg-sky-50 rounded-2xl text-sky-600">
                      <ActiveIcon size={40} />
                    </div>
                    <div>
                      <h2 className="text-4xl font-extrabold text-slate-900 mb-4">{activeDept.name}</h2>
                      <p className="text-slate-600 text-lg leading-relaxed">{activeDept.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div className="flex gap-3 items-start">
                        <Shield className="text-sky-500 shrink-0" size={20} />
                        <p className="text-sm font-semibold text-slate-700">ISO Certified Lab</p>
                      </div>
                      <div className="flex gap-3 items-start">
                        <Zap className="text-sky-500 shrink-0" size={20} />
                        <p className="text-sm font-semibold text-slate-700">24/7 Support</p>
                      </div>
                      <div className="flex gap-3 items-start">
                        <User className="text-sky-500 shrink-0" size={20} />
                        <p className="text-sm font-semibold text-slate-700">Expert Team</p>
                      </div>
                      <div className="flex gap-3 items-start">
                        <Activity className="text-sky-500 shrink-0" size={20} />
                        <p className="text-sm font-semibold text-slate-700">Digital Reports</p>
                      </div>
                    </div>

                    <div className="pt-8 flex gap-4">
                      <button className="bg-sky-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-sky-700 transition-all">
                        Book Consultation <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                  <div className="relative min-h-[400px]">
                    <img 
                      src={`https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800&sig=${activeId}`} 
                      className="absolute inset-0 w-full h-full object-cover" 
                      alt={activeDept.name} 
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;


import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-32">
      <section className="bg-sky-900 py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6">Get In Touch</h1>
          <p className="text-sky-200 text-xl max-w-2xl mx-auto">
            Have questions about our services or need medical assistance? We are here to help.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Info Panels */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div 
              whileHover={{ x: 10 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-sky-50 flex items-start gap-6"
            >
              <div className="bg-sky-50 p-4 rounded-2xl text-sky-600 shrink-0">
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Our Location</h4>
                <p className="text-slate-500 leading-relaxed">{CONTACT_INFO.address}</p>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ x: 10 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-sky-50 flex items-start gap-6"
            >
              <div className="bg-green-50 p-4 rounded-2xl text-green-600 shrink-0">
                <Phone size={28} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Call Us</h4>
                <p className="text-slate-500 leading-relaxed">Admin: {CONTACT_INFO.phone}</p>
                <p className="text-red-500 font-bold">ER: {CONTACT_INFO.emergency}</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ x: 10 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-sky-50 flex items-start gap-6"
            >
              <div className="bg-purple-50 p-4 rounded-2xl text-purple-600 shrink-0">
                <Mail size={28} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Email Support</h4>
                <p className="text-slate-500 leading-relaxed">{CONTACT_INFO.email}</p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-100"
            >
              <h2 className="text-3xl font-extrabold text-slate-900 mb-8 flex items-center gap-4">
                <MessageCircle className="text-sky-600" size={32} /> Send a Message
              </h2>
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600">Your Name</label>
                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-sky-500 transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600">Email Address</label>
                    <input type="email" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-sky-500 transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600">Subject</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-sky-500 transition-all appearance-none">
                    <option>General Inquiry</option>
                    <option>Billing Question</option>
                    <option>Insurance Feedback</option>
                    <option>Medical Records</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600">Your Message</label>
                  <textarea rows={5} className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-sky-500 transition-all resize-none" placeholder="How can we help you today?"></textarea>
                </div>
                <button type="button" className="w-full bg-sky-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-sky-700 transition-all shadow-xl flex items-center justify-center gap-3">
                  Send Message <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Map Embed */}
        <section className="mt-24">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[500px] border-8 border-white bg-slate-200">
             {/* Placeholder for real Google Map embed */}
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215152834001!2d-73.987844123423!3d40.7579899713866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480293%3A0x51f01444d0590483!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Hospital Location"
              ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;

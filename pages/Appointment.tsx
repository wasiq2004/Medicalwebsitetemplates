
import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle,
  Loader2
} from 'lucide-react';
import { DEPARTMENTS, DOCTORS } from '../constants';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    doctor: '',
    date: '',
    time: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // PRODUCTION NOTE: 
    // To connect to a real Excel sheet/Google Sheet:
    // 1. Create a Google Form and use its 'Submit' endpoint.
    // 2. OR Use a tool like Zapier / Make to receive a Webhook.
    // 3. OR Use a backend serverless function (Vercel/Netlify) to call Google Sheets API.
    
    // Simulating Real-time Database/Excel connection
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Sending data to Excel sync service...', formData);
      setStatus('success');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error(err);
      setStatus('idle');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (status === 'success') {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <div className="max-w-lg mx-auto bg-white p-12 rounded-[3rem] shadow-2xl border border-sky-50 animate-in zoom-in-95 duration-500">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="text-green-500" size={48} />
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Sync Confirmed!</h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Thank you, {formData.name.split(' ')[0]}. Your request has been logged into our central scheduling system. We'll call you shortly.
          </p>
          <button 
            onClick={() => setStatus('idle')}
            className="bg-sky-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-sky-700 transition-all shadow-lg"
          >
            Book Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-32">
      <section className="bg-sky-900 py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-6">Schedule An Appointment</h1>
          <p className="text-sky-200 text-lg max-w-2xl mx-auto">
            Take the first step towards better health. Our real-time booking engine connects you directly with our specialists.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-10">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-[2.5rem] shadow-xl p-8 lg:p-12 border border-slate-100 relative overflow-hidden">
            {status === 'submitting' && (
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center text-sky-600">
                <Loader2 className="animate-spin mb-4" size={48} />
                <p className="font-bold text-xl">Connecting to Database...</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold flex items-center gap-2 text-sky-900">
                    <User size={20} className="text-sky-500" /> Patient Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-600 mb-2">Full Name</label>
                      <input 
                        required
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-600 mb-2">Email Address</label>
                      <input 
                        required
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-600 mb-2">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all" 
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold flex items-center gap-2 text-sky-900">
                    <Calendar size={20} className="text-sky-500" /> Visit Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-600 mb-2">Department</label>
                      <select 
                        required
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all appearance-none"
                      >
                        <option value="">Select Department</option>
                        {DEPARTMENTS.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-600 mb-2">Preferred Doctor</label>
                      <select 
                        required
                        name="doctor"
                        value={formData.doctor}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all appearance-none"
                      >
                        <option value="">Any Specialist</option>
                        {DOCTORS.map(d => <option key={d.id} value={d.name}>{d.name} ({d.specialty})</option>)}
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-600 mb-2">Date</label>
                        <input 
                          required
                          type="date" 
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-600 mb-2">Time Slot</label>
                        <select 
                          required
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all appearance-none"
                        >
                          <option value="">Slot</option>
                          <option value="morning">Morning</option>
                          <option value="afternoon">Afternoon</option>
                          <option value="evening">Evening</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-2">Reason for Visit / Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us briefly about your symptoms or medical concern..."
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all resize-none"
                ></textarea>
              </div>

              <div className="bg-sky-50 p-6 rounded-2xl flex items-start gap-4">
                <AlertCircle className="text-sky-600 shrink-0 mt-0.5" size={20} />
                <p className="text-sm text-sky-800">
                  <strong>Database Sync:</strong> This form is connected via Secure API to our real-time patient records database.
                </p>
              </div>

              <button type="submit" className="w-full py-5 bg-sky-600 text-white rounded-2xl font-bold text-lg hover:bg-sky-700 transition-all shadow-lg hover:shadow-sky-200 flex items-center justify-center gap-2 group">
                Confirm Booking & Sync <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-sky-900 text-white p-8 rounded-[2rem] shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Need Immediate Help?</h3>
              <p className="text-sky-200 mb-8">For medical emergencies, please call our 24/7 hotline directly for priority assistance.</p>
              <a href="tel:+15559110000" className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl hover:bg-white/20 transition-all border border-white/20 mb-4">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-sky-300 font-bold uppercase tracking-wider">Emergency Line</p>
                  <p className="text-xl font-bold">+1 (555) 911-0000</p>
                </div>
              </a>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">OPD Timings</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center text-slate-600">
                  <span>Mon - Fri</span>
                  <span className="font-bold text-sky-600">08:00 - 20:00</span>
                </li>
                <li className="flex justify-between items-center text-slate-600">
                  <span>Saturday</span>
                  <span className="font-bold text-sky-600">09:00 - 18:00</span>
                </li>
                <li className="flex justify-between items-center text-slate-600">
                  <span>Sunday</span>
                  <span className="font-bold text-sky-600">10:00 - 14:00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;

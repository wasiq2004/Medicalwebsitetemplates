
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Clock,
  ExternalLink,
  Plus,
  ChevronDown
} from 'lucide-react';
import { CONTACT_INFO, DEPARTMENTS } from '../constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', isDropdown: true },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className="hidden lg:block bg-sky-900 text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1"><Phone size={14} className="text-sky-300" /> Emergency: {CONTACT_INFO.emergency}</span>
            <span className="flex items-center gap-1"><Clock size={14} className="text-sky-300" /> {CONTACT_INFO.hours}</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/contact" className="hover:text-sky-300">Careers</Link>
            <span className="h-3 w-px bg-sky-700"></span>
            <a href="#" className="hover:text-sky-300 flex items-center gap-1">Patient Portal <ExternalLink size={12} /></a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-md py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-sky-600 p-2 rounded-lg group-hover:bg-sky-700 transition-colors">
              <Plus className="text-white" size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-sky-900 tracking-tight leading-none">MEDCARE</span>
              <span className="text-xs font-semibold text-sky-600 uppercase tracking-widest">Advanced Medical Center</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group dropdown">
                <Link
                  to={link.path}
                  className={`font-medium flex items-center gap-1 transition-colors hover:text-sky-600 ${location.pathname === link.path ? 'text-sky-600' : 'text-slate-600'}`}
                >
                  {link.name}
                  {link.isDropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                </Link>
                {link.isDropdown && (
                  <div className="dropdown-menu hidden absolute top-full left-0 pt-4 animate-in fade-in slide-in-from-top-2">
                    <div className="bg-white shadow-2xl rounded-2xl p-4 border border-slate-100 min-w-[220px]">
                      {DEPARTMENTS.map(dept => (
                        <Link 
                          key={dept.id} 
                          to={`/services?id=${dept.id}`}
                          className="block px-4 py-3 text-slate-600 hover:bg-sky-50 hover:text-sky-600 rounded-xl transition-all font-medium"
                        >
                          {dept.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link to="/book-appointment" className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Book Appointment
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2 text-sky-900" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t shadow-xl animate-in fade-in slide-in-from-top-4 overflow-y-auto max-h-[80vh]">
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.path}>
                  <Link
                    to={link.path}
                    className="text-lg font-bold text-slate-800 flex justify-between items-center"
                    onClick={() => !link.isDropdown && setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.isDropdown && (
                    <div className="pl-4 mt-2 space-y-2 border-l-2 border-sky-100">
                      {DEPARTMENTS.map(dept => (
                        <Link
                          key={dept.id}
                          to={`/services?id=${dept.id}`}
                          className="block py-2 text-slate-500 font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          {dept.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/book-appointment"
                className="bg-sky-600 text-white px-6 py-3 rounded-xl text-center font-bold"
                onClick={() => setIsOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="bg-sky-600 p-2 rounded-lg">
                <Plus className="text-white" size={20} />
              </div>
              <span className="text-2xl font-bold tracking-tight">MEDCARE</span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Committed to providing world-class healthcare with a human touch. Our mission is to improve life through compassionate medical services.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6 border-l-4 border-sky-500 pl-4">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Our Hospital</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Medical Departments</Link></li>
              <li><Link to="/doctors" className="hover:text-white transition-colors">Find a Specialist</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Health Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6 border-l-4 border-sky-500 pl-4">Our Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/services" className="hover:text-white transition-colors">Cardiology Center</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Neurology Clinic</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Orthopedics & Sports</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">24/7 Emergency Care</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6 border-l-4 border-sky-500 pl-4">Contact Us</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex gap-3">
                <MapPin className="text-sky-500 shrink-0" size={20} />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-sky-500 shrink-0" size={20} />
                <span>Reception: {CONTACT_INFO.phone}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-sky-500 shrink-0" size={20} />
                <span className="text-red-400 font-bold">Emergency: {CONTACT_INFO.emergency}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-sky-500 shrink-0" size={20} />
                <span>{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 flex flex-col md:row justify-between items-center text-slate-500 text-sm gap-4 text-center">
          <p>© {new Date().getFullYear()} MedCare Pro Hospital. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20 lg:pt-32">
        {children}
      </main>
      <Footer />
    </div>
  );
};

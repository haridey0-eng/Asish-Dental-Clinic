import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Moon, Sun, MapPin, Clock } from 'lucide-react';
import { CLINIC_INFO } from '../data';

interface NavbarProps {
  onBookClick: (treatmentId?: string) => void;
  isDark: boolean;
  onToggleDark: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick, isDark, onToggleDark }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Treatments', href: '#services' },
    { name: 'Why Choose Us', href: '#why-choose' },
    { name: 'Testimonials', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans">
      {/* Top Banner for Trust & Quick Contact */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 text-white text-xs sm:text-sm py-2 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 sm:gap-6">
            <a href={`tel:${CLINIC_INFO.phone}`} className="flex items-center gap-1.5 hover:text-cyan-200 transition">
              <Phone className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
              <span className="font-medium">Emergency Care: {CLINIC_INFO.formattedPhone}</span>
            </a>
            <span className="hidden md:flex items-center gap-1.5 text-blue-100">
              <MapPin className="w-3.5 h-3.5 text-cyan-300" />
              <span>Hirapur, Dhanbad (Madhav Apartment)</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:flex items-center gap-1 text-blue-100">
              <Clock className="w-3.5 h-3.5 text-cyan-300" />
              <span>Mon-Sat: 10 AM – 8 PM</span>
            </span>
            <span className="bg-emerald-500/90 text-white px-2.5 py-0.5 rounded-full font-semibold text-xs tracking-wide shadow-sm flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
              4.7★ Google Rated
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg py-3 border-b border-slate-100 dark:border-slate-800' 
          : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md py-4 border-b border-slate-100/80 dark:border-slate-800/80'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0A74DA] flex items-center justify-center text-white shadow-lg shadow-blue-200 dark:shadow-none group-hover:scale-105 transition duration-300">
                <span className="text-xl sm:text-2xl font-bold tracking-tight">🦷</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold tracking-tighter text-[#0A74DA] dark:text-white font-serif-title">
                  Asish <span className="text-[#00BCD4] italic">Dental</span> Clinic
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-medium opacity-70 text-slate-600 dark:text-slate-400">
                  {CLINIC_INFO.nameHindi} • DHANBAD
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6 text-[13px] font-medium uppercase tracking-wider">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-colors duration-200 ${
                    idx === 0
                      ? 'text-[#0A74DA] dark:text-[#00BCD4] font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:text-[#0A74DA] dark:hover:text-[#00BCD4]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA & Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onToggleDark}
                aria-label="Toggle Dark Mode"
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
              </button>

              <button
                onClick={() => onBookClick()}
                className="px-6 py-2.5 bg-[#0A74DA] text-white text-[12px] font-bold uppercase tracking-widest rounded-full shadow-lg shadow-blue-200 dark:shadow-none hover:bg-blue-700 active:scale-95 transition-all duration-200 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#00BCD4]" />
                <span>Book Now</span>
              </button>
            </div>

            {/* Mobile Menu Button & Dark Toggle */}
            <div className="flex items-center gap-2 sm:hidden">
              <button
                onClick={onToggleDark}
                aria-label="Toggle Dark Mode"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
                className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-2 gap-2 pt-1 pb-3 border-b border-slate-100 dark:border-slate-800">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-cyan-400"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium py-3 rounded-xl shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment Online</span>
              </button>
              
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="w-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white font-medium py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm border border-slate-200 dark:border-slate-700"
              >
                <Phone className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                <span>Call Clinic: {CLINIC_INFO.formattedPhone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

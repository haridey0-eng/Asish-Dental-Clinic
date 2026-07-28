import React from 'react';
import { Star, MapPin, Phone, Mail, Clock, ShieldCheck, Heart } from 'lucide-react';
import { CLINIC_INFO, TREATMENTS } from '../data';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const seoKeywords = [
    'Dentist in Dhanbad',
    'Dental Clinic Dhanbad',
    'Best Dentist in Dhanbad',
    'Root Canal Treatment Dhanbad',
    'Dental Implant Dhanbad',
    'Teeth Cleaning Dhanbad',
    'Smile Makeover Dhanbad',
    'Dental Clinic Near Me',
    'Invisible Aligners Dhanbad',
    'Hirapur Dhanbad Dentist',
    'Dr. Asish Kumar Dhanbad',
    'Painless Dental Clinic Jharkhand'
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 font-sans border-t border-slate-800 pt-16 pb-12 relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & About (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0A74DA] flex items-center justify-center text-white text-2xl shadow-md">
                <span>🦷</span>
              </div>
              <div>
                <h3 className="font-bold text-xl text-white tracking-tighter font-serif-title">
                  Asish <span className="italic text-[#00BCD4]">Dental</span> Clinic
                </h3>
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#00BCD4]">{CLINIC_INFO.nameHindi}</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {CLINIC_INFO.subTagline} Delivering ethical, world-class dental healthcare with compassionate hospitality.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <div className="p-2 rounded-xl bg-amber-500/15 text-amber-400 shrink-0">
                <Star className="w-5 h-5 fill-amber-400" />
              </div>
              <div>
                <div className="font-bold text-white text-sm">Rated 4.7/5.0 Stars</div>
                <div className="text-[11px] text-slate-400">Verified Patient Google Reviews in Dhanbad</div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider text-cyan-400">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition">About Clinic</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition">All Treatments</a></li>
              <li><a href="#why-choose" className="hover:text-cyan-400 transition">Why Choose Us</a></li>
              <li><a href="#reviews" className="hover:text-cyan-400 transition">Testimonials</a></li>
              <li><a href="#gallery" className="hover:text-cyan-400 transition">Before & After</a></li>
              <li><a href="#faqs" className="hover:text-cyan-400 transition">FAQs</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition">Location Map</a></li>
            </ul>
          </div>

          {/* Column 3: Specialized Treatments (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider text-cyan-400">Our Treatments</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {TREATMENTS.slice(0, 7).map((t) => (
                <li key={t.id}>
                  <a href="#services" className="hover:text-cyan-400 transition truncate block">
                    {t.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#services" className="text-cyan-400 font-semibold hover:underline block pt-1">
                  + View all 15 Treatments →
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours (Span 3) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider text-cyan-400">Contact & Hours</h4>
            
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address} ({CLINIC_INFO.landmark})</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`tel:${CLINIC_INFO.phone}`} className="font-bold text-white hover:text-cyan-400">{CLINIC_INFO.formattedPhone}</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{CLINIC_INFO.email}</span>
              </div>
              <div className="flex items-start gap-2.5 pt-1 text-slate-400">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Mon–Sat: 10 AM – 8 PM <br />Sunday: Closed (Emergency Call)</span>
              </div>
            </div>
          </div>

        </div>

        {/* SEO Keywords Tag Cloud Section */}
        <div className="py-8 border-b border-slate-800/80">
          <div className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 mb-3">
            Popular Searches in Dhanbad (SEO & Local Guidance)
          </div>
          <div className="flex flex-wrap gap-2">
            {seoKeywords.map((kw, idx) => (
              <span
                key={idx}
                className="text-[11px] bg-slate-900 text-slate-400 px-3 py-1 rounded-lg border border-slate-800 hover:border-slate-700 hover:text-slate-200 transition select-none"
              >
                #{kw}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright and Legal Modal links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {CLINIC_INFO.name} ({CLINIC_INFO.nameHindi}). All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <button onClick={onOpenPrivacy} className="hover:text-slate-300 transition">Privacy Policy</button>
            <button onClick={onOpenTerms} className="hover:text-slate-300 transition">Terms of Use</button>
            <a href="https://maps.google.com/?q=Asish+Dental+Clinic+Hirapur+Dhanbad" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition">Sitemap</a>
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for Dhanbad Smiles</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

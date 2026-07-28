import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar, ArrowUp } from 'lucide-react';
import { CLINIC_INFO } from '../data';

interface FloatingButtonsProps {
  onBookClick: () => void;
}

export const FloatingButtons: React.FC<FloatingButtonsProps> = ({ onBookClick }) => {
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackTop(true);
      } else {
        setShowBackTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 font-sans pointer-events-none">
      
      {/* Back To Top Button */}
      {showBackTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="pointer-events-auto p-3 rounded-2xl bg-slate-800/90 dark:bg-slate-700/90 hover:bg-slate-900 text-white shadow-lg backdrop-blur-sm border border-slate-700 transition transform hover:-translate-y-1 active:scale-95"
          title="Scroll Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Action Bar Container */}
      <div className="pointer-events-auto flex items-center gap-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-2 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 animate-in slide-in-from-bottom duration-300">
        
        {/* Call Now */}
        <a
          href={`tel:${CLINIC_INFO.phone}`}
          className="p-3 sm:px-4 sm:py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-blue-600/25 transition transform hover:scale-105 active:scale-95"
          title="Call Emergency & Help Desk"
        >
          <Phone className="w-4 h-4 animate-pulse" />
          <span className="hidden sm:inline">Call Clinic</span>
        </a>

        {/* WhatsApp */}
        <a
          href={CLINIC_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 sm:px-4 sm:py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-emerald-600/25 transition transform hover:scale-105 active:scale-95"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>

        {/* Quick Book Appointment CTA */}
        <button
          onClick={onBookClick}
          className="p-3 sm:px-5 sm:py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition transform hover:scale-105 active:scale-95"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Now</span>
        </button>

      </div>

    </div>
  );
};

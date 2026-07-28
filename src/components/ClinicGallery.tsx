import React, { useState } from 'react';
import { Eye, MapPin, X, ZoomIn } from 'lucide-react';
import { CLINIC_GALLERY } from '../data';
import { ClinicImage } from '../types';

export const ClinicGallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<ClinicImage | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="h-[1px] w-8 bg-[#0A74DA] dark:bg-[#00BCD4]"></div>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0A74DA] dark:text-[#00BCD4]">
              Inside Madhav Apartment, Hirapur
            </span>
            <div className="h-[1px] w-8 bg-[#0A74DA] dark:bg-[#00BCD4]"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 dark:text-white tracking-tight font-serif-title">
            Our Modern <span className="italic text-[#00BCD4]">Clinic Ambiance</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Take a virtual tour of our state-of-the-art dental facility in Dhanbad. We combine ergonomic luxury with uncompromising medical cleanliness.
          </p>
        </div>

        {/* 6 Image Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CLINIC_GALLERY.map((img) => (
            <div
              key={img.id}
              onClick={() => setActiveImage(img)}
              className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-200/80 dark:border-slate-800 aspect-[4/3] cursor-pointer bg-slate-900"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 opacity-95 group-hover:opacity-100"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400 font-heading">
                  {img.category}
                </span>
                <h3 className="font-bold text-lg sm:text-xl mt-0.5">{img.title}</h3>
                <p className="text-xs text-slate-300 line-clamp-2 mt-1 opacity-90 group-hover:opacity-100 transition">
                  {img.description}
                </p>
              </div>

              {/* Zoom badge icon in top right */}
              <div className="absolute top-4 right-4 p-2.5 rounded-full bg-white/20 dark:bg-slate-900/40 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition duration-300">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom hygienic reassurance banner */}
        <div className="mt-14 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">Strict Air-Conditioned & Sanitized Environment</h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">All operatories undergo continuous UV sanitization and surface disinfection between patient consultations.</p>
          </div>
          <div className="shrink-0 bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-cyan-300 px-4 py-2 rounded-xl text-xs font-bold border border-blue-200 dark:border-slate-700">
            🛡️ 100% Sterile Operatories
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-4xl w-full p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-2xl relative">
            
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 transition"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="rounded-2xl overflow-hidden max-h-[70vh] w-full bg-slate-950">
              <img
                src={activeImage.url}
                alt={activeImage.title}
                className="w-full h-full object-contain mx-auto max-h-[70vh]"
              />
            </div>

            <div className="mt-4 px-2">
              <span className="text-xs font-bold uppercase text-blue-600 dark:text-cyan-400">{activeImage.category}</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">{activeImage.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{activeImage.description}</p>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

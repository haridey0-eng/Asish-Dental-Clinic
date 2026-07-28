import React from 'react';
import { Award, CheckCircle, GraduationCap, Calendar, ShieldCheck, Heart, Stethoscope } from 'lucide-react';
import { DOCTOR_PROFILE } from '../data';

interface DoctorProfileProps {
  onBookClick: () => void;
}

export const DoctorProfile: React.FC<DoctorProfileProps> = ({ onBookClick }) => {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-slate-900 font-sans relative overflow-hidden">
      
      {/* Decorative Glows */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Doctor Photo Card */}
          <div className="lg:col-span-5 relative">
            
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 dark:border-slate-800 aspect-[4/5] bg-gradient-to-t from-blue-900 to-slate-900">
                <img
                  src={DOCTOR_PROFILE.photo}
                  alt="Dr. Asish Kumar - Chief Dental Surgeon Dhanbad"
                  className="w-full h-full object-cover object-top filter brightness-95"
                />
                
                {/* Overlay Badge inside image */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                  <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-heading">Lead Endodontist & Surgeon</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold">{DOCTOR_PROFILE.name}</h3>
                  <p className="text-sm text-slate-300 font-semibold mt-0.5">{DOCTOR_PROFILE.qualifications}</p>
                </div>
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -top-5 -right-4 sm:-right-6 bg-gradient-to-br from-blue-600 to-cyan-500 text-white p-4 sm:p-5 rounded-2xl shadow-xl border border-blue-400/30 text-center animate-float max-w-[160px]">
                <div className="font-extrabold text-2xl sm:text-3xl font-heading">12+</div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-blue-100">Years Experience</div>
              </div>

              {/* Verified Medical Specialty pill */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white dark:bg-slate-800 p-3.5 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">IDA Certified</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Indian Dental Association</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Bio, Qualifications & Certifications */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <Stethoscope className="w-3.5 h-3.5" />
                <span>Meet Your Treating Specialist</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {DOCTOR_PROFILE.name}
              </h2>
              
              <div className="text-base sm:text-lg font-semibold text-blue-600 dark:text-cyan-400 font-heading">
                {DOCTOR_PROFILE.nameHindi} • {DOCTOR_PROFILE.designation}
              </div>
            </div>

            {/* Friendly Introduction Bio */}
            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {DOCTOR_PROFILE.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Specialization List */}
            <div className="space-y-3 pt-2">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                <span>Core Clinical Specializations:</span>
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {DOCTOR_PROFILE.specialization.map((spec, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="font-medium">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Box */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-800/80 rounded-2xl p-5 border border-blue-100 dark:border-slate-700/80">
              <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm uppercase tracking-wider mb-3 flex items-center gap-2 text-blue-800 dark:text-cyan-300">
                <Award className="w-4 h-4" />
                <span>Professional Certifications & Fellowships:</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {DOCTOR_PROFILE.certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400"></span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onBookClick}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md shadow-blue-600/25 flex items-center gap-2 text-sm transition"
              >
                <Calendar className="w-4 h-4" />
                <span>Consult Dr. Asish Kumar</span>
              </button>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                <span>Compassionate & Gentle Chairside Manner</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

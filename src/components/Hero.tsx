import React from 'react';
import { Calendar, Phone, Star, ShieldCheck, Award, Smile, ArrowRight, Sparkles, HeartPulse, Stethoscope } from 'lucide-react';
import { CLINIC_INFO } from '../data';

interface HeroProps {
  onBookClick: () => void;
  onOpenSymptomChecker: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onOpenSymptomChecker }) => {
  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-16 md:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 font-sans">
      
      {/* Decorative Background Glows */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/15 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-400/15 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subheading & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Trust Pill / Location Badge */}
            <div className="flex items-center space-x-2 mb-2 animate-fade-in">
              <div className="h-[1px] w-8 bg-[#0A74DA] dark:bg-[#00BCD4]"></div>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0A74DA] dark:text-[#00BCD4]">
                Trusted Dental Care in Dhanbad
              </span>
            </div>

            {/* Large Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-900 dark:text-white tracking-tight leading-[1.1] font-serif-title">
                Creating Healthy <span className="italic text-[#00BCD4] font-normal">Smiles</span> with Advanced Care in Dhanbad.
              </h1>
              <p className="text-xs sm:text-sm font-medium text-[#0A74DA] dark:text-[#00BCD4] tracking-wider uppercase">
                {CLINIC_INFO.nameHindi} • उन्नत एवं दर्दरहित दंत चिकित्सा
              </p>
            </div>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Providing <strong className="text-slate-900 dark:text-white font-medium">painless, affordable, and high-tech dental treatments</strong> with compassionate care for your entire family. Experience world-class dental hygiene and modern digital diagnosis right in your city.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto px-8 py-4 bg-[#1E293B] dark:bg-[#0A74DA] hover:bg-[#0A74DA] dark:hover:bg-blue-600 text-white rounded-xl font-semibold shadow-xl active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3 text-base group"
              >
                <Calendar className="w-5 h-5 text-[#00BCD4] group-hover:scale-110 transition" />
                <span>Start Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </button>

              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="w-full sm:w-auto px-8 py-4 border-2 border-slate-200 dark:border-slate-700 rounded-xl font-semibold hover:bg-white dark:hover:bg-slate-800 text-slate-800 dark:text-white transition-all duration-200 flex items-center justify-center gap-3 text-base group"
              >
                <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-[#0A74DA] dark:text-[#00BCD4] group-hover:scale-110 transition">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Emergency Care</div>
                  <div className="font-bold text-sm sm:text-base leading-tight">{CLINIC_INFO.formattedPhone}</div>
                </div>
              </a>
            </div>

            {/* Interactive Value-Add Trigger: AI Symptom Checker */}
            <div className="pt-2 flex items-center justify-center lg:justify-start">
              <button
                onClick={onOpenSymptomChecker}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#0A74DA] dark:text-[#00BCD4] bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 transition shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-amber-500 animate-spin" style={{ animationDuration: '6s' }} />
                <span>Experiencing tooth pain or stains? Take the 1-Minute Symptom Checker & Cost Guide →</span>
              </button>
            </div>

            {/* Trust Badges Inline */}
            <div className="pt-8 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center lg:text-left">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-[#0A74DA] dark:text-[#00BCD4] shrink-0">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white text-sm">4.7★ Rating</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-tighter font-medium">Google Reviews</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-[#0A74DA] dark:text-[#00BCD4] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white text-sm">15+ Years</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-tighter font-medium">Experience</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-[#0A74DA] dark:text-[#00BCD4] shrink-0">
                  <Smile className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white text-sm">100% Gentle</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-tighter font-medium">Painless Care</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-[#0A74DA] dark:text-[#00BCD4] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white text-sm">24/7 Support</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-tighter font-medium">Emergency Care</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase & Floating Cards */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            
            {/* Main Visual Composition */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image: Professional Dentist Treating Patient */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 aspect-[4/5] sm:aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85"
                  alt="Asish Dental Clinic modern treatment room and smiling patient"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition duration-700"
                />
                
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs uppercase tracking-wider font-bold text-cyan-300">Hirapur, Dhanbad</span>
                  <h3 className="text-lg sm:text-xl font-bold">Ultra-Clean & Comfortable Environment</h3>
                  <p className="text-xs text-slate-200 mt-1">International sterilization standards for your family's safety.</p>
                </div>
              </div>

              {/* Floating Badge 1: Top Google Rating */}
              <div className="absolute -top-6 -left-4 sm:-left-8 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3 animate-float max-w-[210px] z-20">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-500 shrink-0">
                  <Star className="w-6 h-6 fill-amber-500" />
                </div>
                <div>
                  <div className="flex items-center gap-1 font-extrabold text-slate-900 dark:text-white text-base">
                    <span>4.7</span>
                    <span className="text-amber-500 text-xs">★★★★★</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Google Reviews in Dhanbad</p>
                </div>
              </div>

              {/* Floating Badge 2: Painless RCT */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3 animate-float max-w-[230px] z-20" style={{ animationDelay: '1.5s' }}>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white text-sm">Painless RCT & Implants</div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Single-sitting precision care</p>
                </div>
              </div>

              {/* Small Secondary Circular Image Overlay: Modern Chair */}
              <div className="hidden sm:block absolute top-1/2 -left-12 -translate-y-1/2 w-28 h-28 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl z-20">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=300&q=80"
                  alt="Modern computerized dental equipment"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

          </div>

        </div>

        {/* Quick Statistics Banner at Bottom of Hero */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-slate-100 dark:border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-100 dark:border-slate-800 shadow-sm">
              <div className="text-3xl sm:text-4xl font-bold text-[#0A74DA] dark:text-[#00BCD4] font-serif-title">10,000+</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1 uppercase tracking-wide">Happy Patients</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Across Dhanbad & Jharkhand</div>
            </div>

            <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-100 dark:border-slate-800 shadow-sm">
              <div className="text-3xl sm:text-4xl font-bold text-[#0A74DA] dark:text-[#00BCD4] font-serif-title">12+ Years</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1 uppercase tracking-wide">Clinical Excellence</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Dr. Asish Kumar (M.D.S.)</div>
            </div>

            <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-100 dark:border-slate-800 shadow-sm">
              <div className="text-3xl sm:text-4xl font-bold text-[#0A74DA] dark:text-[#00BCD4] font-serif-title">100%</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1 uppercase tracking-wide">Painless Anesthesia</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Computerized & Rotary Tech</div>
            </div>

            <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-100 dark:border-slate-800 shadow-sm">
              <div className="text-3xl sm:text-4xl font-bold text-[#0A74DA] dark:text-[#00BCD4] font-serif-title">15+</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1 uppercase tracking-wide">Advanced Treatments</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">RCT, Implants, Aligners & more</div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

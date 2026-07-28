import React from 'react';
import { MessageSquareText, ScanLine, FileSpreadsheet, Sparkles, HeartPulse, ArrowRight } from 'lucide-react';
import { TREATMENT_TIMELINE } from '../data';

export const TreatmentProcess: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquareText': return <MessageSquareText className="w-6 h-6" />;
      case 'ScanLine': return <ScanLine className="w-6 h-6" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'HeartCheck': return <HeartPulse className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 font-sans relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="h-[1px] w-8 bg-[#0A74DA] dark:bg-[#00BCD4]"></div>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0A74DA] dark:text-[#00BCD4]">
              Step-by-Step Patient Journey
            </span>
            <div className="h-[1px] w-8 bg-[#0A74DA] dark:bg-[#00BCD4]"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 dark:text-white tracking-tight font-serif-title">
            Our Seamless <span className="italic text-[#00BCD4]">Treatment Process</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            From your very first visit at Madhav Apartment to lifelong aftercare, here is what you can expect during your personalized dental journey with us.
          </p>
        </div>

        {/* Horizontal Timeline Grid */}
        <div className="mt-16 relative">
          
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-14 left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-cyan-300 dark:from-slate-800 dark:via-blue-800 dark:to-cyan-800 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
            {TREATMENT_TIMELINE.map((step, idx) => (
              <div
                key={step.step}
                className="group relative bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center"
              >
                {/* Step Number Circle */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center font-extrabold text-xl shadow-lg shadow-blue-500/25 mb-5 group-hover:scale-110 transition duration-300">
                  {getStepIcon(step.iconName)}
                </div>

                {/* Step Label */}
                <span className="text-xs font-extrabold text-blue-600 dark:text-cyan-400 uppercase tracking-widest font-heading mb-1">
                  Step {step.step}
                </span>

                {/* Title */}
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow indicator for mobile/tablet */}
                {idx < TREATMENT_TIMELINE.length - 1 && (
                  <div className="lg:hidden mt-4 text-blue-400 dark:text-slate-700">
                    <ArrowRight className="w-5 h-5 rotate-90 md:rotate-0" />
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Assurance Banner */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
            💡 All consultations include digital screening and a printed cost breakdown before any procedure starts.
          </p>
        </div>

      </div>
    </section>
  );
};

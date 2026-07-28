import React from 'react';
import { Award, Microscope, SmilePlus, ShieldCheck, Wallet, HeartHandshake, Users, Clock, CheckCircle2, Shield } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-6 h-6" />;
      case 'Microscope': return <Microscope className="w-6 h-6" />;
      case 'SmilePlus': return <SmilePlus className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'Wallet': return <Wallet className="w-6 h-6" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      case 'Clock': return <Clock className="w-6 h-6" />;
      default: return <Shield className="w-6 h-6" />;
    }
  };

  return (
    <section id="why-choose" className="py-20 md:py-28 bg-white dark:bg-slate-900 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="h-[1px] w-8 bg-[#0A74DA] dark:bg-[#00BCD4]"></div>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0A74DA] dark:text-[#00BCD4]">
              The Asish Dental Advantage
            </span>
            <div className="h-[1px] w-8 bg-[#0A74DA] dark:bg-[#00BCD4]"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 dark:text-white tracking-tight font-serif-title">
            Why Patients Choose <span className="italic text-[#00BCD4]">Us</span> in Dhanbad
          </h2>
          
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            We bridge the gap between world-class international dental technology and compassionate local care. Here is how we make every visit safe, painless, and rewarding.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="group bg-[#F8FAFC] dark:bg-slate-800/50 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 hover:border-[#0A74DA] dark:hover:border-[#00BCD4] hover:bg-white dark:hover:bg-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Icon & Highlight */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300">
                    {getIcon(item.iconName)}
                  </div>
                  {item.highlight && (
                    <span className="text-[11px] font-bold uppercase px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-cyan-300">
                      {item.highlight}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Verified Clinic Protocol</span>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Comparison Table Box: Asish Dental vs Ordinary Clinics */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-blue-500/30 overflow-hidden relative">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl mx-auto text-center space-y-3 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Clinical Standards Comparison</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">How We Set a Higher Standard in Dhanbad</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="border-b border-slate-800 text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  <th className="py-3 px-4">Feature / Protocol</th>
                  <th className="py-3 px-4 text-cyan-400 font-extrabold bg-blue-900/40 rounded-t-xl">🦷 Asish Dental Clinic</th>
                  <th className="py-3 px-4 text-slate-400">Standard / Older Clinics</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm">
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-200">Sterilization Standard</td>
                  <td className="py-3.5 px-4 bg-blue-900/40 font-bold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>4-Step Class-B Autoclave & Sealed Pouches</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-400">Basic boiling or dry heat oven</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-200">Root Canal Procedure</td>
                  <td className="py-3.5 px-4 bg-blue-900/40 font-bold text-cyan-300">
                    <span>⚡ Single-Sitting Computerized Rotary RCT</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-400">Multiple sittings (4-6 visits) with manual files</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-200">X-Ray Technology</td>
                  <td className="py-3.5 px-4 bg-blue-900/40 font-bold text-cyan-300">
                    <span>🛡️ Low-Radiation Digital RVG Sensors (On-screen)</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-400">Traditional film X-rays with higher exposure</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-200">Pricing & Transparency</td>
                  <td className="py-3.5 px-4 bg-blue-900/40 font-bold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Upfront printed cost estimate before starting</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-400">Vague oral quotes changing mid-treatment</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-200">Emergency Access</td>
                  <td className="py-3.5 px-4 bg-blue-900/40 font-bold text-cyan-300 rounded-b-xl">
                    <span>🚨 Priority Same-Day Pain Relief Slots</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-400">Long queue waiting times</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};

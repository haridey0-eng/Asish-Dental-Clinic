import React, { useState } from 'react';
import { 
  Stethoscope, 
  ShieldAlert, 
  Sparkles, 
  Scissors, 
  Droplets, 
  Sun, 
  Crown, 
  Anchor, 
  Smile, 
  Layers, 
  HeartHandshake, 
  Sparkle, 
  Users, 
  Baby, 
  Ambulance, 
  ArrowRight, 
  Check, 
  Clock, 
  Wallet, 
  ShieldCheck,
  Search,
  X,
  Calendar
} from 'lucide-react';
import { TREATMENTS } from '../data';
import { Treatment } from '../types';

interface ServicesProps {
  onBookClick: (treatmentId?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onBookClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalTreatment, setActiveModalTreatment] = useState<Treatment | null>(null);

  const categories = [
    { id: 'all', label: 'All 15 Treatments' },
    { id: 'general', label: 'General & Preventive' },
    { id: 'restorative', label: 'RCT & Restorative' },
    { id: 'cosmetic', label: 'Cosmetic & Makeover' },
    { id: 'orthodontics', label: 'Braces & Aligners' },
    { id: 'surgical', label: 'Implants & Surgery' },
    { id: 'pediatric', label: 'Pediatric Care' },
  ];

  const filteredTreatments = TREATMENTS.filter(t => {
    const matchesCategory = selectedCategory === 'all' || t.category === selectedCategory;
    const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          t.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (t.titleHindi && t.titleHindi.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope className="w-6 h-6" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Scissors': return <Scissors className="w-6 h-6" />;
      case 'Droplets': return <Droplets className="w-6 h-6" />;
      case 'Sun': return <Sun className="w-6 h-6" />;
      case 'Crown': return <Crown className="w-6 h-6" />;
      case 'Anchor': return <Anchor className="w-6 h-6" />;
      case 'Smile': return <Smile className="w-6 h-6" />;
      case 'Layers': return <Layers className="w-6 h-6" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6" />;
      case 'Sparkle': return <Sparkle className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      case 'Baby': return <Baby className="w-6 h-6" />;
      case 'Ambulance': return <Ambulance className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="h-[1px] w-8 bg-[#0A74DA] dark:bg-[#00BCD4]"></div>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0A74DA] dark:text-[#00BCD4]">
              Comprehensive Dental Care
            </span>
            <div className="h-[1px] w-8 bg-[#0A74DA] dark:bg-[#00BCD4]"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 dark:text-white tracking-tight font-serif-title">
            Our Specialized <span className="italic text-[#00BCD4]">Treatments</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            From routine checkups to painless single-sitting root canals and invisible aligners, explore our complete spectrum of world-class dental procedures in Dhanbad.
          </p>
        </div>

        {/* Search and Category Filters */}
        <div className="mt-10 space-y-6">
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search treatment (e.g., Root Canal, Scaling, Braces...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#0A74DA] dark:focus:border-[#00BCD4] shadow-sm text-sm sm:text-base transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-[#0A74DA] dark:bg-[#00BCD4] text-white shadow-md shadow-blue-200 dark:shadow-none scale-105'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-[#0A74DA] dark:hover:border-[#00BCD4]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* 15 Treatments Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTreatments.length === 0 ? (
            <div className="col-span-full text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
              <p className="text-lg font-medium text-slate-600 dark:text-slate-400">No treatments found matching your search.</p>
              <button
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className="mt-4 text-sm font-semibold text-blue-600 dark:text-cyan-400 hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredTreatments.map((treatment) => (
              <div
                key={treatment.id}
                onClick={() => setActiveModalTreatment(treatment)}
                className="group relative bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden"
              >
                {/* Popular Badge */}
                {treatment.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                    Popular
                  </div>
                )}

                <div>
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/60 dark:to-cyan-950/60 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center text-blue-600 dark:text-cyan-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm mb-5">
                    {getIconComponent(treatment.iconName)}
                  </div>

                  {/* Title & Hindi Subtitle */}
                  <h3 className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition">
                    {treatment.title}
                  </h3>
                  {treatment.titleHindi && (
                    <div className="text-xs font-semibold text-blue-600 dark:text-cyan-400 mt-0.5 mb-3 font-heading">
                      {treatment.titleHindi}
                    </div>
                  )}

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-6">
                    {treatment.shortDesc}
                  </p>
                </div>

                {/* Footer Info & Learn More Button */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-blue-500" />
                    <span>{treatment.duration.split('(')[0]}</span>
                  </div>

                  <button
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-cyan-400 group-hover:translate-x-1 transition"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>

      {/* Treatment Detail Modal */}
      {activeModalTreatment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl relative">
            
            {/* Close button */}
            <button
              onClick={() => setActiveModalTreatment(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-start gap-4 pr-12">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shrink-0 shadow-md">
                {getIconComponent(activeModalTreatment.iconName)}
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  {activeModalTreatment.title}
                </h3>
                {activeModalTreatment.titleHindi && (
                  <div className="text-sm font-semibold text-blue-600 dark:text-cyan-400 font-heading">
                    {activeModalTreatment.titleHindi}
                  </div>
                )}
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-cyan-300 text-xs font-semibold">
                    <Clock className="w-3 h-3" />
                    <span>Duration: {activeModalTreatment.duration}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
                    <ShieldCheck className="w-3 h-3" />
                    <span>{activeModalTreatment.painLevel}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Full Description */}
            <div className="mt-6 space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>{activeModalTreatment.fullDesc}</p>
            </div>

            {/* Key Benefits Checklist */}
            <div className="mt-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 border border-slate-200/60 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                <span>Why choose this treatment at Asish Dental Clinic:</span>
              </h4>
              <ul className="space-y-2.5">
                {activeModalTreatment.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing Box & CTA */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Estimated Dhanbad Benchmark:</div>
                <div className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Wallet className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span>{activeModalTreatment.estimatedCost}</span>
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">Exact estimate after digital RVG diagnosis</div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    const id = activeModalTreatment.id;
                    setActiveModalTreatment(null);
                    onBookClick(id);
                  }}
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 transition"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book for {activeModalTreatment.title.split(' ')[0]}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

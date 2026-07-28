import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS } from '../data';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCat, setSelectedCat] = useState<string>('All');

  const categories = ['All', 'General', 'Treatments', 'Emergency', 'Pricing'];

  const filteredFaqs = selectedCat === 'All'
    ? FAQS
    : FAQS.filter(f => f.category === selectedCat);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 md:py-28 bg-white dark:bg-slate-900 font-sans relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>❓ Frequently Asked Questions</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Got Questions? <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">We Have Answers</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Everything you need to know about our clinical procedures, painless dentistry, sterilization, and Dhanbad appointment bookings.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-10 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setSelectedCat(cat); setOpenIndex(0); }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCat === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 scale-105'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-blue-50/50 dark:bg-slate-800/80 border-blue-300 dark:border-cyan-700 shadow-md'
                    : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200/80 dark:border-slate-800 hover:border-blue-200'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-bold text-base sm:text-lg text-slate-900 dark:text-white flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400 shrink-0"></span>
                    <span>{faq.question}</span>
                  </span>
                  <div className={`p-1.5 rounded-full bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-300 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-blue-600 text-white' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/50 dark:border-slate-700/50 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-14 text-center p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="font-bold text-lg">Still have a specific dental question?</h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">Speak directly with our clinic assistance team on WhatsApp or telephone.</p>
          </div>
          <a
            href="https://wa.me/917033266117?text=Hello%20Asish%20Dental%20Clinic,%20I%20have%20a%20question..."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl shadow-md text-sm shrink-0 transition"
          >
            💬 Ask on WhatsApp Now
          </a>
        </div>

      </div>
    </section>
  );
};

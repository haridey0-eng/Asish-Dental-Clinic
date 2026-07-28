import React, { useState } from 'react';
import { Star, CheckCircle, ExternalLink, MessageSquarePlus, ShieldCheck, ThumbsUp } from 'lucide-react';
import { REVIEWS, CLINIC_INFO } from '../data';

interface ReviewsProps {
  onOpenReviewModal: () => void;
}

export const Reviews: React.FC<ReviewsProps> = ({ onOpenReviewModal }) => {
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const categories = ['All', 'RCT', 'General', 'Cosmetic', 'Implants', 'Braces'];

  const filteredReviews = selectedCat === 'All'
    ? REVIEWS
    : REVIEWS.filter(r => r.category === selectedCat || (selectedCat === 'General' && r.category === 'General'));

  return (
    <section id="reviews" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Rating Overview Banner */}
        <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-blue-500/30 mb-14 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="md:col-span-7 space-y-3 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-1">
                <div className="h-[1px] w-8 bg-[#00BCD4]"></div>
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#00BCD4]">
                  Patient Trust in Dhanbad
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight font-serif-title">
                Real Patient Stories & <span className="italic text-[#00BCD4]">Google Reviews</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl font-light">
                We are proud to be consistently rated among the top dental clinics in Jharkhand for our painless root canals, hygiene, and ethical patient communication.
              </p>
            </div>

            <div className="md:col-span-5 flex flex-col sm:flex-row items-center justify-center md:justify-end gap-6 border-t md:border-t-0 md:border-l border-slate-700/80 pt-6 md:pt-0 md:pl-8 text-center sm:text-left">
              
              <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 text-center shrink-0 min-w-[150px]">
                <div className="text-4xl sm:text-5xl font-extrabold text-cyan-300 font-heading">
                  {CLINIC_INFO.rating}
                </div>
                <div className="flex items-center justify-center gap-1 my-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-xs text-slate-300 font-semibold">Out of 5.0 Stars</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Based on 134+ Google Reviews</div>
              </div>

              <div className="flex flex-col gap-3 w-full sm:w-auto">
                <a
                  href="https://maps.google.com/?q=Asish+Dental+Clinic+Hirapur+Dhanbad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-slate-100 text-slate-900 font-bold px-5 py-3 rounded-xl shadow-md flex items-center justify-center gap-2 text-xs sm:text-sm transition duration-200"
                >
                  <span>Verify on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={onOpenReviewModal}
                  className="bg-blue-600/80 hover:bg-blue-600 text-white font-bold px-5 py-3 rounded-xl border border-blue-400/30 flex items-center justify-center gap-2 text-xs sm:text-sm transition duration-200"
                >
                  <MessageSquarePlus className="w-4 h-4 text-cyan-300" />
                  <span>Write a Review</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setSelectedCat(cat); setVisibleCount(6); }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-200 ${
                selectedCat === cat
                  ? 'bg-[#0A74DA] dark:bg-[#00BCD4] text-white shadow-md shadow-blue-200 dark:shadow-none scale-105'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-[#0A74DA] dark:hover:border-[#00BCD4]'
              }`}
            >
              {cat === 'All' ? 'All Reviews (13)' : `${cat} Stories`}
            </button>
          ))}
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredReviews.slice(0, visibleCount).map((review) => (
            <div
              key={review.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Top Info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-950/40 px-2.5 py-1 rounded-full border border-amber-200/50 dark:border-amber-900/40">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="text-xs font-medium text-slate-400">
                    {review.date}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed italic mb-6">
                  "{review.text}"
                </p>
              </div>

              {/* Author & Treatment Footer */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                      <span>{review.author}</span>
                      {review.verified && (
                        <CheckCircle className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400 shrink-0" title="Verified Patient" />
                      )}
                    </div>
                    <div className="text-[11px] font-medium text-blue-600 dark:text-cyan-400">
                      Treated: {review.treatmentText}
                    </div>
                  </div>
                </div>

                <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400" title="Verified Google Review">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredReviews.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-white font-semibold px-8 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition duration-200"
            >
              Load More Reviews ({filteredReviews.length - visibleCount} remaining)
            </button>
          </div>
        )}

        {/* Bottom CTA to write review */}
        <div className="mt-16 bg-blue-50/60 dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-blue-200/60 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <ThumbsUp className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">Are you an existing patient of Dr. Asish Kumar?</h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Your valuable feedback helps other families in Dhanbad discover painless dental care.</p>
            </div>
          </div>

          <button
            onClick={onOpenReviewModal}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md shrink-0 text-sm transition"
          >
            Leave Your Feedback Now
          </button>
        </div>

      </div>
    </section>
  );
};

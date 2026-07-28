import React, { useState } from 'react';
import { Eye, Sparkles, Check, ArrowLeftRight, X } from 'lucide-react';
import { BEFORE_AFTER_GALLERY } from '../data';
import { GalleryItem } from '../types';

export const BeforeAfterGallery: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);
  const [sliderPos, setSliderPos] = useState<{ [key: string]: number }>({});

  const categories = ['All', 'Smile Makeover', 'Whitening', 'RCT', 'Braces', 'Cleaning'];

  const filteredItems = selectedCat === 'All'
    ? BEFORE_AFTER_GALLERY
    : BEFORE_AFTER_GALLERY.filter(item => item.category === selectedCat);

  const handleSliderChange = (id: string, value: number) => {
    setSliderPos(prev => ({ ...prev, [id]: value }));
  };

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-slate-900 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <span>✨ Smile Transformations</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Before & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">After Gallery</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Witness the life-changing results of precision dentistry. Slide to compare before and after clinical results treated at our Dhanbad clinic.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-10 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCat === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 scale-105'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const currentPos = sliderPos[item.id] ?? 50;

            return (
              <div
                key={item.id}
                className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Interactive Comparison Container */}
                <div className="relative aspect-[4/3] w-full select-none overflow-hidden bg-slate-950">
                  
                  {/* After Image (Background / Full) */}
                  <img
                    src={item.afterImg}
                    alt={`${item.title} - After Treatment`}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />

                  {/* Before Image (Clipping Overlay) */}
                  <div
                    className="absolute inset-0 overflow-hidden pointer-events-none"
                    style={{ width: `${currentPos}%` }}
                  >
                    <img
                      src={item.beforeImg}
                      alt={`${item.title} - Before Treatment`}
                      className="absolute inset-0 w-full h-full object-cover max-w-none"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  {/* Slider Dividing Line & Knob */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10 shadow-lg flex items-center justify-center pointer-events-none"
                    style={{ left: `${currentPos}%` }}
                  >
                    <div className="w-8 h-8 rounded-full bg-white shadow-xl text-blue-600 flex items-center justify-center border-2 border-blue-600 transform -translate-x-1/2">
                      <ArrowLeftRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Hidden Range Input for Touch & Mouse dragging */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={currentPos}
                    onChange={(e) => handleSliderChange(item.id, Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                    aria-label="Compare before and after images"
                  />

                  {/* Labels */}
                  <div className="absolute top-3 left-3 bg-slate-900/80 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md backdrop-blur-sm pointer-events-none z-10">
                    Before
                  </div>
                  <div className="absolute top-3 right-3 bg-blue-600/90 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md backdrop-blur-sm pointer-events-none z-10">
                    After
                  </div>

                  {/* Lightbox Zoom trigger */}
                  <button
                    onClick={() => setActiveLightbox(item)}
                    className="absolute bottom-3 right-3 p-2 rounded-xl bg-white/80 dark:bg-slate-900/80 hover:bg-white text-slate-800 dark:text-white backdrop-blur-sm shadow-md transition z-20 group-hover:scale-105"
                    title="View Full Size Lightbox"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Content Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase text-blue-600 dark:text-cyan-400 font-heading">
                      {item.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                      <Check className="w-3.5 h-3.5" />
                      <span>100% Painless</span>
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-4xl w-full p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl relative">
            
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-left mb-6">
              <span className="text-xs font-bold uppercase text-blue-600 dark:text-cyan-400">{activeLightbox.category}</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">{activeLightbox.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">{activeLightbox.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="text-xs font-extrabold uppercase text-slate-500 text-center">Before Treatment</div>
                <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 aspect-[4/3]">
                  <img src={activeLightbox.beforeImg} alt="Before" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-xs font-extrabold uppercase text-blue-600 dark:text-cyan-400 text-center">After Treatment ✨</div>
                <div className="rounded-2xl overflow-hidden border-2 border-blue-500 aspect-[4/3] shadow-lg shadow-blue-500/20">
                  <img src={activeLightbox.afterImg} alt="After" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => setActiveLightbox(null)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl shadow-md text-sm"
              >
                Close Comparison
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

import React, { useState } from 'react';
import { Calculator, Wallet, Check, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';
import { TREATMENTS } from '../data';

interface CostCalculatorProps {
  onBookClick: (treatmentId?: string) => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ onBookClick }) => {
  const [selectedTreatments, setSelectedTreatments] = useState<string[]>(['rct', 'crowns']);
  const [emiMonths, setEmiMonths] = useState<number>(6);

  const toggleTreatment = (id: string) => {
    if (selectedTreatments.includes(id)) {
      setSelectedTreatments(selectedTreatments.filter(tId => tId !== id));
    } else {
      setSelectedTreatments([...selectedTreatments, id]);
    }
  };

  // Calculate roughly average estimated numeric total
  const calculateTotalNumeric = () => {
    let minTotal = 0;
    let maxTotal = 0;
    selectedTreatments.forEach(id => {
      const treatment = TREATMENTS.find(t => t.id === id);
      if (treatment) {
        // Parse simple range from string e.g. "₹3,000 – ₹5,500"
        const numbers = treatment.estimatedCost.replace(/[^0-9–]/g, '').split('–');
        if (numbers.length >= 2) {
          minTotal += parseInt(numbers[0], 10) || 0;
          maxTotal += parseInt(numbers[1], 10) || 0;
        } else if (numbers.length === 1 && numbers[0]) {
          const val = parseInt(numbers[0], 10) || 0;
          minTotal += val;
          maxTotal += val;
        }
      }
    });
    return { min: minTotal, max: maxTotal };
  };

  const totals = calculateTotalNumeric();
  const avgTotal = Math.round((totals.min + totals.max) / 2);
  const emiPerMonth = Math.round(avgTotal / emiMonths);

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-slate-900 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Wallet className="w-3.5 h-3.5" />
            <span>💰 100% Transparent Pricing</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Transparent Dhanbad <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Price Estimator</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Select the treatments you are considering to view estimated benchmark costs and convenient monthly EMI breakdowns. No surprise bills ever.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Treatment Checklist */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-800/40 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800">
            <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white mb-4 flex items-center justify-between">
              <span>Select Treatments to Estimate:</span>
              <span className="text-xs font-semibold text-blue-600 dark:text-cyan-400">{selectedTreatments.length} selected</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[420px] overflow-y-auto pr-2">
              {TREATMENTS.slice(0, 12).map((t) => {
                const isSelected = selectedTreatments.includes(t.id);
                return (
                  <div
                    key={t.id}
                    onClick={() => toggleTreatment(t.id)}
                    className={`p-4 rounded-2xl border transition cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20'
                        : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-blue-400'
                    }`}
                  >
                    <div className="space-y-0.5">
                      <div className="font-bold text-xs sm:text-sm">{t.title}</div>
                      <div className={`text-[11px] font-semibold ${isSelected ? 'text-blue-100' : 'text-emerald-600 dark:text-emerald-400'}`}>
                        {t.estimatedCost}
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-white text-blue-600' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                    }`}>
                      <Check className={`w-4 h-4 ${isSelected ? 'opacity-100' : 'opacity-0'}`} />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 text-center">
              <span className="text-xs text-slate-400">Showing top standard procedures. Custom treatment packages also available.</span>
            </div>
          </div>

          {/* Right Column: Estimated Summary Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-blue-500/30 sticky top-28 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Cost Breakdown Estimate</span>
              <Calculator className="w-5 h-5 text-cyan-400" />
            </div>

            {selectedTreatments.length === 0 ? (
              <div className="py-8 text-center text-slate-400 text-sm">
                Please select at least one treatment from the list to view cost estimation.
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Estimated Benchmark Range:</div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 mt-1 font-heading">
                    ₹{totals.min.toLocaleString()} – ₹{totals.max.toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-300 mt-1">Includes consultation, anesthesia, and disposable sterilization kits.</div>
                </div>

                {/* EMI Estimator Slider */}
                <div className="bg-white/10 rounded-2xl p-4 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span>Flexible EMI Option:</span>
                    <span className="text-cyan-300 font-bold">{emiMonths} Months Tenure</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="12"
                    step="3"
                    value={emiMonths}
                    onChange={(e) => setEmiMonths(Number(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                  <div className="flex items-center justify-between text-sm pt-1">
                    <span className="text-slate-300">Estimated Monthly EMI:</span>
                    <span className="font-extrabold text-lg text-white">~ ₹{emiPerMonth.toLocaleString()}/mo*</span>
                  </div>
                  <div className="text-[10px] text-slate-400">*0% interest EMI options available with Bajaj Finserv & major credit cards.</div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => onBookClick(selectedTreatments[0])}
                    className="w-full bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 text-base transition"
                  >
                    <span>Lock in This Estimate & Book</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <p className="text-[11px] text-slate-400 text-center leading-normal">
                    Note: Exact treatment fees are finalized after digital X-ray screening and clinical examination by Dr. Asish Kumar.
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

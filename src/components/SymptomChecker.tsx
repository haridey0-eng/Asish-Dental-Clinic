import React, { useState } from 'react';
import { Sparkles, AlertCircle, ShieldAlert, CheckCircle2, ArrowRight, X, HeartPulse, HelpCircle } from 'lucide-react';
import { SYMPTOM_QUESTIONS, TREATMENTS } from '../data';
import { SymptomQuestion } from '../types';

interface SymptomCheckerProps {
  isOpen: boolean;
  onClose: () => void;
  onBookForTreatment: (treatmentId: string) => void;
}

export const SymptomChecker: React.FC<SymptomCheckerProps> = ({ isOpen, onClose, onBookForTreatment }) => {
  const [selectedQuestion, setSelectedQuestion] = useState<SymptomQuestion | null>(null);

  if (!isOpen) return null;

  const recommendedTreatment = selectedQuestion
    ? TREATMENTS.find(t => t.id === selectedQuestion.recommendedTreatmentId)
    : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 font-sans">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={() => { setSelectedQuestion(null); onClose(); }}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 pr-12 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white flex items-center justify-center shrink-0 shadow-md">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-500">Interactive Diagnosis Helper</span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">What are you experiencing today?</h3>
          </div>
        </div>

        {!selectedQuestion ? (
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Select the dental symptom or concern that matches your condition for an instant recommendation and pricing guide from Dr. Asish Kumar:
            </p>

            <div className="grid grid-cols-1 gap-3 mt-4">
              {SYMPTOM_QUESTIONS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedQuestion(item)}
                  className="w-full text-left p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-blue-50 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 hover:border-blue-300 dark:hover:border-cyan-600 transition flex items-start justify-between group"
                >
                  <div className="space-y-1 pr-4">
                    <div className="font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition">
                      {item.symptom}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                      {item.description}
                    </div>
                  </div>
                  <div className="p-2 rounded-xl bg-white dark:bg-slate-900 text-blue-600 dark:text-cyan-400 group-hover:translate-x-1 transition shrink-0 shadow-sm">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
              <span className="text-xs text-slate-400">Not sure? You can also book a general consultation for a full digital checkup.</span>
            </div>
          </div>
        ) : (
          <div className="space-y-6 animate-in fade-in duration-300">
            
            {/* Selected Symptom Recap */}
            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 flex items-start justify-between">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-600 dark:text-amber-400">Your Selected Concern:</span>
                <div className="font-bold text-slate-900 dark:text-white text-base mt-0.5">{selectedQuestion.symptom}</div>
              </div>
              <button
                onClick={() => setSelectedQuestion(null)}
                className="text-xs font-semibold text-blue-600 dark:text-cyan-400 underline shrink-0 mt-1"
              >
                Change
              </button>
            </div>

            {/* Urgency Badge */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Clinical Urgency:</span>
              <span className={`px-3 py-1 rounded-full text-xs font-extrabold ${
                selectedQuestion.urgency === 'Prompt Attention'
                  ? 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300'
                  : 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300'
              }`}>
                {selectedQuestion.urgency}
              </span>
            </div>

            {/* Doctor Advice */}
            <div className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-5 border border-slate-200 dark:border-slate-700">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2 mb-2">
                <HeartPulse className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                <span>Dr. Asish's Clinical Advice:</span>
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                {selectedQuestion.advice}
              </p>
            </div>

            {/* Recommended Treatment Box */}
            {recommendedTreatment && (
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/40 dark:to-cyan-950/40 rounded-3xl p-6 border-2 border-blue-200 dark:border-blue-800 shadow-md">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-1">
                  ⭐ Recommended Procedure
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  {recommendedTreatment.title}
                </h3>
                {recommendedTreatment.titleHindi && (
                  <div className="text-xs font-semibold text-blue-600 dark:text-cyan-400 mb-3">
                    {recommendedTreatment.titleHindi}
                  </div>
                )}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4">
                  {recommendedTreatment.shortDesc}
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-slate-700 dark:text-slate-200 mb-6">
                  <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Estimated Cost Range:</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">{recommendedTreatment.estimatedCost}</span>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Comfort Protocol:</span>
                    <span className="text-blue-600 dark:text-cyan-400 font-bold text-sm">{recommendedTreatment.painLevel}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    const id = recommendedTreatment.id;
                    setSelectedQuestion(null);
                    onClose();
                    onBookForTreatment(id);
                  }}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 text-base transition"
                >
                  <span>Book Appointment for {recommendedTreatment.title.split(' ')[0]}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}

            <div className="text-center pt-2">
              <button
                onClick={() => setSelectedQuestion(null)}
                className="text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 underline"
              >
                ← Check another symptom
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

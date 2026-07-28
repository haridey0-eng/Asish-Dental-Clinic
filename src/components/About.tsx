import React from 'react';
import { Award, ShieldCheck, Wallet, Smile, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutProps {
  onBookClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onBookClick }) => {
  const cards = [
    {
      title: 'Experienced Care',
      titleHindi: 'अनुभवी विशेषज्ञ',
      desc: 'Led by Dr. Asish Kumar (M.D.S.) with 12+ years of specialized experience in painless root canal treatments, implants, and aesthetic smile transformations.',
      icon: <Award className="w-8 h-8 text-blue-600 dark:text-cyan-400" />,
      color: 'from-blue-500/10 to-transparent border-blue-200 dark:border-blue-800'
    },
    {
      title: 'Sterilized Equipment',
      titleHindi: '100% स्वच्छ एवं सुरक्षित',
      desc: 'We follow stringent international 4-step sterilization protocols with Class-B autoclaves and individual sterile packaging opened right in front of you.',
      icon: <ShieldCheck className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />,
      color: 'from-cyan-500/10 to-transparent border-cyan-200 dark:border-cyan-800'
    },
    {
      title: 'Affordable Treatment',
      titleHindi: 'उचित एवं पारदर्शी शुल्क',
      desc: 'High-quality dental procedures at transparent and accessible Dhanbad pricing. No hidden costs, detailed treatment plans, and flexible EMI options.',
      icon: <Wallet className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />,
      color: 'from-emerald-500/10 to-transparent border-emerald-200 dark:border-emerald-800'
    },
    {
      title: 'Friendly Environment',
      titleHindi: 'आरामदायक एवं भयमुक्त माहौल',
      desc: 'A calming, ergonomic clinic setup designed to eliminate dental anxiety. We treat children, senior citizens, and anxious patients with supreme patience.',
      icon: <Smile className="w-8 h-8 text-amber-500" />,
      color: 'from-amber-500/10 to-transparent border-amber-200 dark:border-amber-800'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-slate-900 font-sans relative overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Story & Doctor Image */}
          <div className="lg:col-span-5 relative">
            
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-slate-100 dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80"
                alt="Asish Dental Clinic Clean Patient Treatment Chair"
                className="w-full h-[420px] sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-heading">Hirapur, Dhanbad</span>
                <h3 className="text-xl sm:text-2xl font-bold mt-1">Where Precision Meets Compassion</h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  Every instrument is sterilized to hospital standards to ensure zero cross-infection for your loved ones.
                </p>
              </div>
            </div>

            {/* Floating Highlight Box */}
            <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-gradient-to-br from-blue-600 to-cyan-600 text-white p-5 rounded-2xl shadow-xl max-w-[240px] border border-blue-400/30">
              <div className="font-extrabold text-3xl font-heading">100%</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-100 mt-0.5">Painless Guarantee</div>
              <p className="text-[11px] text-blue-100/90 mt-1">Computerized local anesthesia for a stress-free dental sitting.</p>
            </div>

          </div>

          {/* Right Column: About Content & Elegant Cards */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <span>✨ About Our Clinic</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Asish Dental Clinic</span>
              </h2>
              
              <p className="text-sm font-semibold text-blue-600 dark:text-cyan-400 font-heading">
                आशीष दंत चिकित्सा क्लिनिक — धनबाद का भरोसा
              </p>
            </div>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                <strong className="text-slate-900 dark:text-white font-semibold">Asish Dental Clinic</strong> is committed to delivering high-quality dental care with modern technology and personalized treatment. Our focus is on <span className="text-blue-600 dark:text-cyan-400 font-semibold">patient comfort, hygiene, precision, and long-lasting results</span>.
              </p>
              <p>
                Whether you need a routine check-up or advanced dental procedures like single-sitting root canals, dental implants, or invisible aligners, we ensure a <strong className="text-slate-900 dark:text-white font-semibold">painless and comfortable experience</strong> tailored to your unique smile goals.
              </p>
            </div>

            {/* 4 Elegant Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl bg-gradient-to-br ${card.color} border bg-white/60 dark:bg-slate-800/60 shadow-sm hover:shadow-md transition duration-200 flex flex-col justify-between`}
                >
                  <div>
                    <div className="p-3 rounded-xl bg-white dark:bg-slate-900 shadow-sm w-fit mb-4">
                      {card.icon}
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center justify-between">
                      <span>{card.title}</span>
                    </h3>
                    <div className="text-xs font-medium text-blue-600 dark:text-cyan-400 mb-2 font-heading">
                      {card.titleHindi}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Call to Action */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onBookClick}
                className="bg-slate-900 hover:bg-blue-600 dark:bg-slate-800 dark:hover:bg-cyan-600 text-white font-medium px-6 py-3 rounded-xl transition duration-200 flex items-center gap-2 text-sm shadow-sm"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Located in Madhav Apartment, Hirapur</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

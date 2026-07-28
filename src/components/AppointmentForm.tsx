import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2, AlertCircle, Send, Sparkles, ShieldCheck, HelpCircle } from 'lucide-react';
import { TREATMENTS, CLINIC_INFO } from '../data';
import { AppointmentFormData } from '../types';

interface AppointmentFormProps {
  initialTreatmentId?: string;
  onSuccessBooking: (data: AppointmentFormData, refCode: string) => void;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({ initialTreatmentId, onSuccessBooking }) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: '',
    phone: '',
    email: '',
    treatment: initialTreatmentId || TREATMENTS[0].id,
    preferredDate: new Date().toISOString().split('T')[0],
    preferredTime: '11:00 AM – 1:00 PM (Morning Slot)',
    message: '',
    isEmergency: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialTreatmentId) {
      setFormData(prev => ({ ...prev, treatment: initialTreatmentId }));
    }
  }, [initialTreatmentId]);

  const timeSlots = [
    '10:00 AM – 12:00 PM (Morning Slot)',
    '12:00 PM – 2:00 PM (Noon Slot)',
    '3:00 PM – 5:00 PM (Afternoon Slot)',
    '5:00 PM – 8:00 PM (Evening Slot)',
    'Priority Emergency Slot (Immediate)'
  ];

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim() || formData.name.length < 3) {
      errs.name = 'Please enter your full patient name.';
    }
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      errs.phone = 'Please enter a valid 10-digit mobile number.';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select your preferred visit date.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate instant clinical reservation processing
    setTimeout(() => {
      setIsSubmitting(false);
      const refCode = `ADC-${Math.floor(100000 + Math.random() * 900000)}`;
      onSuccessBooking(formData, refCode);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="book" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-blue-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Box: Clinic Benefits & Emergency Info */}
            <div className="lg:col-span-5 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-600 text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Instant Clinical Appointment</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                  Schedule Your Visit at Asish Dental Clinic
                </h3>

                <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                  Book your consultation online with Dr. Asish Kumar. Our reception team will confirm your slot and ensure a prompt, zero-waiting checkup.
                </p>

                <div className="space-y-4 pt-4 border-t border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 text-cyan-300" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold">100% Painless Anesthesia & Sterile Tools</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-cyan-300" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold">Open Mon–Sat: 10:00 AM to 8:00 PM</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-cyan-300" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold">Instant Helpline: {CLINIC_INFO.formattedPhone}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Address snippet */}
              <div className="mt-12 pt-6 border-t border-white/20 text-xs text-blue-100/90 relative z-10">
                <strong>📍 Clinic Address:</strong> Durga Mandir Road, Baba Colony, Hirapur, Pandey Muhalla, Dhanbad – 826007 (Inside Madhav Apartment).
              </div>
            </div>

            {/* Right Box: Interactive Form */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12">
              
              <div className="mb-8">
                <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white">Patient Appointment Form</h4>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Fill out the details below to receive instant confirmation via WhatsApp or SMS.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Emergency Checkbox Alert */}
                <div className="bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 rounded-2xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 animate-bounce" />
                    <div>
                      <label htmlFor="isEmergency" className="font-bold text-xs sm:text-sm text-rose-900 dark:text-rose-200 cursor-pointer block">
                        Is this an Urgent Dental Emergency? (Severe pain / bleeding)
                      </label>
                      <span className="text-[11px] text-rose-700 dark:text-rose-300">We allocate same-day priority emergency chairs.</span>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    id="isEmergency"
                    name="isEmergency"
                    checked={formData.isEmergency}
                    onChange={handleChange}
                    className="w-5 h-5 accent-rose-600 rounded cursor-pointer shrink-0"
                  />
                </div>

                {/* Name & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Patient Full Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border ${
                          errors.name ? 'border-rose-500' : 'border-slate-200 dark:border-slate-700'
                        } text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-600`}
                      />
                    </div>
                    {errors.name && <span className="text-xs text-rose-500 mt-1 block">{errors.name}</span>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9876543210"
                        maxLength={10}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border ${
                          errors.phone ? 'border-rose-500' : 'border-slate-200 dark:border-slate-700'
                        } text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-600`}
                      />
                    </div>
                    {errors.phone && <span className="text-xs text-rose-500 mt-1 block">{errors.phone}</span>}
                  </div>

                </div>

                {/* Email & Treatment Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. patient@email.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                    {errors.email && <span className="text-xs text-rose-500 mt-1 block">{errors.email}</span>}
                  </div>

                  <div>
                    <label htmlFor="treatment" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Treatment Required <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        id="treatment"
                        name="treatment"
                        value={formData.treatment}
                        onChange={handleChange}
                        className="w-full pl-10 pr-8 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
                      >
                        {TREATMENTS.map((t) => (
                          <option key={t.id} value={t.id}>
                            {t.title} ({t.estimatedCost})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                </div>

                {/* Date & Time Slot Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  <div>
                    <label htmlFor="preferredDate" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Preferred Date <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Preferred Time Slot <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full pl-10 pr-8 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
                      >
                        {timeSlots.map((slot, idx) => (
                          <option key={idx} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                </div>

                {/* Message / Symptoms */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Any specific symptoms or questions for Dr. Asish? <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="e.g. I have sensitivity in my left lower molar while drinking cold water..."
                    className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-extrabold py-4 rounded-2xl shadow-lg shadow-blue-600/30 active:scale-[0.98] transition duration-200 flex items-center justify-center gap-2 text-base disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Confirming Appointment Slot...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Confirm & Book Appointment Now</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  🔒 Your medical privacy is strictly protected under clinical confidentiality standards.
                </p>

              </form>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

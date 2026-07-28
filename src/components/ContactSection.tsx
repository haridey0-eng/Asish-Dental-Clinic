import React from 'react';
import { MapPin, Phone, Clock, Mail, Navigation, MessageCircle, ExternalLink, ShieldAlert } from 'lucide-react';
import { CLINIC_INFO } from '../data';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>📍 Visit Our Clinic</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How to Reach <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Asish Dental Clinic</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Conveniently located in the heart of Hirapur, Dhanbad. Ample parking available for two-wheelers and cars at Madhav Apartment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards & Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">Clinic Location</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Durga Mandir Road, Baba Colony, <br />
                  <strong>Hirapur, Pandey Muhalla</strong>, <br />
                  Dhanbad, Jharkhand – 826007
                </p>
                <div className="inline-block mt-2 bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-cyan-300 text-xs font-semibold px-3 py-1 rounded-lg border border-blue-200 dark:border-slate-700">
                  🏢 Located in: Madhav Apartment
                </div>
              </div>
            </div>

            {/* Phone & Emergency Card */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-1 w-full">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">Phone & WhatsApp</h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Direct helpline for appointment reservations and urgent inquiries:</p>
                <div className="text-xl font-extrabold text-blue-600 dark:text-cyan-400 font-heading pt-1">
                  {CLINIC_INFO.formattedPhone}
                </div>
                <div className="flex flex-wrap items-center gap-2 pt-3">
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 px-4 rounded-xl text-center transition flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={CLINIC_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2.5 px-4 rounded-xl text-center transition flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div className="space-y-2 w-full">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">Clinic Working Hours</h3>
                
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
                    <span className="font-medium text-slate-700 dark:text-slate-300">Monday – Saturday</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">10:00 AM – 8:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span className="font-medium text-slate-700 dark:text-slate-300">Sunday</span>
                    <span className="font-semibold text-rose-500">Closed (Emergency On-Call)</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-2 mt-2">
                  <ShieldAlert className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>For acute dental emergencies on Sundays or late evenings, please WhatsApp first.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Google Map Embed & Action Buttons */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-6 border border-slate-200/80 dark:border-slate-800 shadow-lg space-y-4">
            
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-bold text-sm text-slate-900 dark:text-white">Google Maps Interactive Location</span>
              </div>
              <a
                href="https://maps.google.com/?q=Asish+Dental+Clinic+Hirapur+Dhanbad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-cyan-400 hover:underline"
              >
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Iframe Map */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 aspect-[16/10] w-full shadow-inner bg-slate-100 dark:bg-slate-800">
              <iframe
                src={CLINIC_INFO.googleMapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Asish Dental Clinic Google Map Dhanbad"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Navigation & Directions Bar */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Asish+Dental+Clinic+Hirapur+Dhanbad"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-3.5 px-6 rounded-2xl shadow-md flex items-center justify-center gap-2 text-sm transition"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Driving Directions</span>
              </a>

              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold py-3.5 px-6 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-2 text-sm transition"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Send WhatsApp Message</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

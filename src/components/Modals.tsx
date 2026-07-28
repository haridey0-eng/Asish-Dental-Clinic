import React, { useState } from 'react';
import { CheckCircle, X, Send, Star, ShieldCheck, ExternalLink, MessageCircle, Phone, Calendar, Heart } from 'lucide-react';
import { AppointmentFormData } from '../types';
import { CLINIC_INFO, TREATMENTS } from '../data';

interface BookingConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: AppointmentFormData | null;
  refCode: string;
}

export const BookingConfirmationModal: React.FC<BookingConfirmationModalProps> = ({ isOpen, onClose, data, refCode }) => {
  if (!isOpen || !data) return null;

  const treatmentObj = TREATMENTS.find(t => t.id === data.treatment);
  const treatmentName = treatmentObj ? treatmentObj.title : data.treatment;

  const whatsappMsg = encodeURIComponent(
    `Hello Asish Dental Clinic, I have booked an appointment online.\n\n` +
    `*Ref Code:* ${refCode}\n` +
    `*Patient Name:* ${data.name}\n` +
    `*Phone:* ${data.phone}\n` +
    `*Treatment:* ${treatmentName}\n` +
    `*Preferred Date:* ${data.preferredDate}\n` +
    `*Time Slot:* ${data.preferredTime}\n` +
    (data.isEmergency ? `*EMERGENCY:* Yes\n` : '') +
    `\nPlease confirm my slot. Thank you!`
  );

  const whatsappLink = `https://wa.me/917033266117?text=${whatsappMsg}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 font-sans">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl relative text-center">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center shadow-md mb-4">
          <CheckCircle className="w-10 h-10 animate-bounce" />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Appointment Request Received</span>
        <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">Thank You, {data.name}!</h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2">
          Your dental consultation slot has been reserved. Please save your reference code below.
        </p>

        {/* Reference Code Box */}
        <div className="my-6 bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-4 border border-slate-200 dark:border-slate-700">
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Booking Reference Number:</div>
          <div className="text-2xl font-extrabold text-blue-600 dark:text-cyan-400 tracking-wider my-1 font-heading">
            {refCode}
          </div>
          <div className="text-xs font-medium text-slate-600 dark:text-slate-300">
            {treatmentName} • {data.preferredDate}
          </div>
          <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold mt-1">
            Slot: {data.preferredTime}
          </div>
        </div>

        <div className="space-y-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3.5 rounded-xl shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 text-sm transition"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Send Slip to Clinic WhatsApp for Instant Confirmation</span>
          </a>

          <button
            onClick={onClose}
            className="w-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-white font-bold py-3.5 rounded-xl text-sm transition"
          >
            Done & Back to Website
          </button>
        </div>

        <div className="mt-6 text-[11px] text-slate-400">
          📍 Address: Madhav Apartment, Durga Mandir Road, Hirapur, Dhanbad. Please arrive 5 minutes before your time slot.
        </div>

      </div>
    </div>
  );
};

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState(5);
  const [name, setName] = useState('');
  const [treatment, setTreatment] = useState('Root Canal Treatment');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 font-sans">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl relative">
        
        <button
          onClick={() => { setSubmitted(false); onClose(); }}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div className="text-center mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400">Patient Feedback</span>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">Rate Your Experience</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">We value your review for Dr. Asish Kumar in Dhanbad.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="text-center">
                <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-2">Tap to select star rating</label>
                <div className="flex items-center justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setRating(star)}
                      className="p-1 focus:outline-none transition transform hover:scale-125"
                    >
                      <Star className={`w-8 h-8 ${star <= rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300 dark:text-slate-700'}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priya Banerjee"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-1">Treatment Received</label>
                <select
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white"
                >
                  <option>Root Canal Treatment (RCT)</option>
                  <option>Dental Implants</option>
                  <option>Invisible Aligners / Braces</option>
                  <option>Teeth Cleaning / Scaling</option>
                  <option>Dental Checkup & Consultation</option>
                  <option>Smile Makeover / Veneers</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-1">Your Review</label>
                <textarea
                  rows={3}
                  required
                  placeholder="e.g. Very polite doctor, painless root canal procedure. Highly recommended in Dhanbad!"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-md text-sm transition"
              >
                Submit Feedback
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-cyan-400 mx-auto flex items-center justify-center shadow-md">
              <Star className="w-8 h-8 fill-amber-400 text-amber-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Thank You for Your Review!</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              We appreciate you taking the time to share your 5-star experience with Dr. Asish Kumar.
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300">
              💡 Would you also like to post this review directly on our verified Google Maps business listing in Dhanbad?
            </div>

            <div className="space-y-2 pt-2">
              <a
                href="https://maps.google.com/?q=Asish+Dental+Clinic+Hirapur+Dhanbad"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 text-white font-bold py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 text-sm transition"
              >
                <span>Post on Google Reviews</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="w-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-white font-bold py-3 rounded-xl text-sm transition"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string[];
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 font-sans">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4">{title}</h3>

        <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {content.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        <div className="mt-8 text-center pt-4 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-xl text-sm"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

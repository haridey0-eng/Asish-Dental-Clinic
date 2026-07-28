/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TreatmentProcess } from './components/TreatmentProcess';
import { DoctorProfile } from './components/DoctorProfile';
import { Reviews } from './components/Reviews';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { ClinicGallery } from './components/ClinicGallery';
import { SymptomChecker } from './components/SymptomChecker';
import { CostCalculator } from './components/CostCalculator';
import { AppointmentForm } from './components/AppointmentForm';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { FloatingButtons } from './components/FloatingButtons';
import { Footer } from './components/Footer';
import { BookingConfirmationModal, ReviewModal, LegalModal } from './components/Modals';
import { AppointmentFormData } from './types';
import { CLINIC_INFO } from './data';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string | undefined>(undefined);
  const [symptomCheckerOpen, setSymptomCheckerOpen] = useState<boolean>(false);
  const [reviewModalOpen, setReviewModalOpen] = useState<boolean>(false);
  const [privacyOpen, setPrivacyOpen] = useState<boolean>(false);
  const [termsOpen, setTermsOpen] = useState<boolean>(false);
  
  const [bookingSuccess, setBookingSuccess] = useState<{ data: AppointmentFormData | null; refCode: string }>({
    data: null,
    refCode: ''
  });

  // Handle dark mode toggle
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDark = () => {
    setIsDark(prev => !prev);
  };

  const handleBookClick = (treatmentId?: string) => {
    if (treatmentId) {
      setSelectedTreatmentId(treatmentId);
    }
    const bookEl = document.getElementById('book');
    if (bookEl) {
      bookEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookingSuccess = (data: AppointmentFormData, refCode: string) => {
    setBookingSuccess({ data, refCode });
  };

  const privacyText = [
    `At Asish Dental Clinic (${CLINIC_INFO.nameHindi}), maintaining the privacy and confidentiality of our patients is our ethical duty and priority.`,
    `We collect personal information such as name, contact number, email, and medical dental history solely for diagnostic and appointment reservation purposes.`,
    `Your digital X-rays (RVG), intraoral scans, and consultation records are securely stored and will never be shared with third parties or advertisers without your explicit consent.`,
    `You have the right to request access to your dental health records or ask for deletion of your online booking data at any time by contacting care@asishdentalclinic.com.`
  ];

  const termsText = [
    `Welcome to the official website of Asish Dental Clinic Dhanbad. By accessing our website or booking an online appointment, you agree to comply with our clinical terms.`,
    `All treatment estimates displayed on our pricing calculator are indicative Dhanbad benchmarks. Final clinical fees are determined strictly after comprehensive intraoral examination and digital X-ray screening by Dr. Asish Kumar.`,
    `For priority emergency appointments, please arrive at least 10 minutes prior to your time slot at Madhav Apartment, Hirapur. We reserve the right to reschedule non-emergency appointments in case of urgent surgical cases.`
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 selection:bg-blue-600 selection:text-white transition-colors duration-300 font-sans">
      
      {/* Sticky Navigation */}
      <Navbar
        onBookClick={handleBookClick}
        isDark={isDark}
        onToggleDark={toggleDark}
      />

      {/* Hero Section */}
      <Hero
        onBookClick={() => handleBookClick()}
        onOpenSymptomChecker={() => setSymptomCheckerOpen(true)}
      />

      {/* About Section */}
      <About onBookClick={() => handleBookClick()} />

      {/* Interactive Symptom Checker Diagnostic Advisor */}
      <SymptomChecker
        isOpen={symptomCheckerOpen}
        onClose={() => setSymptomCheckerOpen(false)}
        onBookForTreatment={(id) => handleBookClick(id)}
      />

      {/* Services Section (15 Treatments with Tabs & Modal) */}
      <Services onBookClick={handleBookClick} />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Treatment Process Timeline */}
      <TreatmentProcess />

      {/* Transparent Price & EMI Estimator */}
      <CostCalculator onBookClick={handleBookClick} />

      {/* Meet the Doctor */}
      <DoctorProfile onBookClick={() => handleBookClick()} />

      {/* Google Reviews & Testimonials */}
      <Reviews onOpenReviewModal={() => setReviewModalOpen(true)} />

      {/* Before & After Gallery */}
      <BeforeAfterGallery />

      {/* Clinic Gallery */}
      <ClinicGallery />

      {/* Appointment Booking Form */}
      <AppointmentForm
        initialTreatmentId={selectedTreatmentId}
        onSuccessBooking={handleBookingSuccess}
      />

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Contact & Location Map */}
      <ContactSection />

      {/* Floating Action Buttons */}
      <FloatingButtons onBookClick={() => handleBookClick()} />

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenTerms={() => setTermsOpen(true)}
      />

      {/* Modals */}
      <BookingConfirmationModal
        isOpen={Boolean(bookingSuccess.data)}
        onClose={() => setBookingSuccess({ data: null, refCode: '' })}
        data={bookingSuccess.data}
        refCode={bookingSuccess.refCode}
      />

      <ReviewModal
        isOpen={reviewModalOpen}
        onClose={() => setReviewModalOpen(false)}
      />

      <LegalModal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
        title="Patient Privacy Policy"
        content={privacyText}
      />

      <LegalModal
        isOpen={termsOpen}
        onClose={() => setTermsOpen(false)}
        title="Terms of Clinical Care"
        content={termsText}
      />

    </div>
  );
}


export interface Treatment {
  id: string;
  title: string;
  titleHindi?: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  category: 'general' | 'restorative' | 'cosmetic' | 'orthodontics' | 'surgical' | 'pediatric';
  duration: string;
  painLevel: 'Painless (Anesthesia)' | 'Zero Discomfort' | 'Mild Sensation' | 'Non-Invasive' | 'Painless (Instant Relief)';
  estimatedCost: string;
  benefits: string[];
  popular?: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  treatmentText: string;
  category: 'RCT' | 'Braces' | 'General' | 'Cosmetic' | 'Implants';
  avatar?: string;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Smile Makeover' | 'Whitening' | 'RCT' | 'Braces' | 'Cleaning';
  beforeImg: string;
  afterImg: string;
  description: string;
}

export interface ClinicImage {
  id: string;
  title: string;
  category: 'Reception' | 'Treatment Room' | 'Dental Chair' | 'Equipment' | 'Waiting Area' | 'Exterior';
  url: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Treatments' | 'Emergency' | 'Pricing';
}

export interface Doctor {
  name: string;
  nameHindi: string;
  qualifications: string;
  designation: string;
  experience: string;
  specialization: string[];
  bio: string[];
  certifications: string[];
  photo: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  iconName: string;
  highlight?: string;
}

export interface TimelineStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
}

export interface SymptomQuestion {
  id: string;
  symptom: string;
  description: string;
  recommendedTreatmentId: string;
  urgency: 'Routine' | 'Prompt Attention' | 'Immediate / Emergency';
  advice: string;
}

export interface AppointmentFormData {
  name: string;
  phone: string;
  email: string;
  treatment: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
  isEmergency: boolean;
}

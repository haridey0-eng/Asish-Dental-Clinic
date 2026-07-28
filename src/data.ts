import { 
  Treatment, 
  Review, 
  GalleryItem, 
  ClinicImage, 
  FAQItem, 
  Doctor, 
  WhyChooseItem, 
  TimelineStep, 
  SymptomQuestion 
} from './types';

export const CLINIC_INFO = {
  name: "Asish Dental Clinic",
  nameHindi: "आशीष दंत चिकित्सा क्लिनिक",
  tagline: "Creating Healthy Smiles with Advanced Dental Care",
  subTagline: "Providing painless, affordable, and advanced dental treatments with compassionate care for the entire family in Dhanbad.",
  phone: "7033266117",
  formattedPhone: "+91 70332 66117",
  whatsappUrl: "https://wa.me/917033266117?text=Hello%20Asish%20Dental%20Clinic,%20I%20would%20like%20to%20book%20an%20appointment.",
  email: "care@asishdentalclinic.com",
  address: "Durga Mandir Road, Baba Colony, Hirapur, Pandey Muhalla, Dhanbad, Jharkhand – 826007",
  landmark: "Located in: Madhav Apartment, Hirapur",
  googleMapsUrl: "https://maps.google.com/?q=Asish+Dental+Clinic+Hirapur+Dhanbad",
  googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.323385731776!2d86.4282121!3d23.8143212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bc9fd8c322ab%3A0x8e8e7c10d3f28357!2sHirapur%2C%20Dhanbad%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
  rating: "4.7",
  reviewCount: "134",
  workingHours: {
    weekdays: "10:00 AM – 8:00 PM (Monday – Saturday)",
    sunday: "Closed (Available for Emergency Calls)"
  }
};

export const TREATMENTS: Treatment[] = [
  {
    id: "checkup",
    title: "Dental Checkup & Consultation",
    titleHindi: "दंत जांच और परामर्श",
    shortDesc: "Comprehensive oral examination using intraoral cameras and digital X-rays to detect issues early.",
    fullDesc: "A routine checkup is the foundation of lifelong oral health. At Asish Dental Clinic, we perform a thorough 360-degree examination of your teeth, gums, and jawbone using high-definition intraoral sensors and low-radiation digital radiography. We provide a complete treatment plan with clear visual explanations and upfront pricing.",
    iconName: "Stethoscope",
    category: "general",
    duration: "20–30 Mins",
    painLevel: "Non-Invasive",
    estimatedCost: "₹300 – ₹500",
    benefits: ["Early detection of cavities and gum disease", "Complete oral cancer screening", "Digital X-ray diagnosis with zero discomfort", "Personalized oral hygiene counseling"],
    popular: true
  },
  {
    id: "rct",
    title: "Root Canal Treatment (RCT)",
    titleHindi: "रूट कैनाल ट्रीटमेंट (RCT)",
    shortDesc: "Painless single-sitting root canal treatment using advanced rotary endodontic technology to save infected teeth.",
    fullDesc: "Forget the old dread of root canals! Our clinic specializes in painless, precision-guided RCT using world-class rotary instruments, apex locators, and biocompatible obturation materials. We effectively remove tooth infection, seal the canals, and restore your natural tooth in just 1 to 2 painless sessions.",
    iconName: "ShieldAlert",
    category: "restorative",
    duration: "45–60 Mins (Single / 2-Sitting)",
    painLevel: "Painless (Anesthesia)",
    estimatedCost: "₹3,000 – ₹5,500",
    benefits: ["100% painless under computerized local anesthesia", "Saves your natural tooth from extraction", "Advanced rotary endodontic precision", "Eliminates severe toothache and swelling instantly"],
    popular: true
  },
  {
    id: "fillings",
    title: "Dental Fillings (Composite)",
    titleHindi: "दांतों में मसाला भरना (Fillings)",
    shortDesc: "Tooth-colored, UV-cured composite restorations that seamlessly blend with your natural enamel.",
    fullDesc: "We use high-grade nanohybrid composite resins that match the exact color and translucency of your natural teeth. Whether repairing cavities, chipped edges, or worn enamel, our aesthetic fillings restore full strength and a natural smile without unsightly silver or dark marks.",
    iconName: "Sparkles",
    category: "restorative",
    duration: "30–45 Mins",
    painLevel: "Zero Discomfort",
    estimatedCost: "₹800 – ₹2,000",
    benefits: ["Invisible tooth-colored aesthetic finish", "Mercury-free and biocompatible materials", "Instant light-curing for immediate chewing capability", "Prevents further decay and strengthens tooth structure"]
  },
  {
    id: "extraction",
    title: "Tooth Extraction & Wisdom Teeth",
    titleHindi: "दांत निकालना (Extraction)",
    shortDesc: "Gentle, atraumatic removal of severely damaged teeth or problematic wisdom teeth with rapid healing protocols.",
    fullDesc: "When a tooth is beyond saving or wisdom teeth cause crowding and pain, our surgical team ensures a calm, completely painless extraction. We utilize atraumatic surgical techniques to preserve bone and gum architecture for future implants or replacements.",
    iconName: "Scissors",
    category: "surgical",
    duration: "30–60 Mins",
    painLevel: "Painless (Anesthesia)",
    estimatedCost: "₹1,000 – ₹4,500",
    benefits: ["Painless extraction under local anesthesia", "Specialized care for impacted wisdom teeth", "Minimal post-operative swelling with gentle tissue handling", "Detailed aftercare guidance and follow-up"]
  },
  {
    id: "cleaning",
    title: "Dental Cleaning & Prophylaxis",
    titleHindi: "दांतों की सफाई (Dental Cleaning)",
    shortDesc: "Ultrasonic scaling to remove stubborn plaque, tartar, and bacteria from teeth and gumlines.",
    fullDesc: "Daily brushing cannot reach hardened plaque (calculus) along the gumline. Our ultrasonic cleaning uses gentle, high-frequency water vibrations to effortlessly wash away tartar, stains from tea, coffee, or tobacco, preventing bleeding gums and bad breath.",
    iconName: "Droplets",
    category: "general",
    duration: "30–40 Mins",
    painLevel: "Non-Invasive",
    estimatedCost: "₹800 – ₹1,500",
    benefits: ["Removes persistent plaque and tartar buildup", "Stops gum bleeding and bad breath (halitosis)", "Smooths tooth surfaces to prevent future bacterial attachment", "Leaves your mouth feeling ultra-fresh and clean"],
    popular: true
  },
  {
    id: "scaling",
    title: "Scaling & Polishing",
    titleHindi: "स्केलिंग और पॉलिशिंग",
    shortDesc: "Deep periodontal scaling followed by high-gloss enamel polishing for a radiant, stain-free smile.",
    fullDesc: "Taking dental cleaning a step further, our scaling and polishing procedure removes deep extrinsic stains and smooths the enamel surface using specialized prophylaxis paste and rotary cups. It instantly brightens your teeth by 1-2 shades and restores natural luster.",
    iconName: "Sun",
    category: "general",
    duration: "40–50 Mins",
    painLevel: "Zero Discomfort",
    estimatedCost: "₹1,000 – ₹2,000",
    benefits: ["Eliminates surface stains from tobacco, tea, and coffee", "Protects tooth enamel with fluoride-rich polish", "Improves gum attachment and overall periodontal health", "Immediate shine and clean feeling"]
  },
  {
    id: "crowns",
    title: "Dental Crown & Bridge",
    titleHindi: "दांतों पर कैप व ब्रिज (Crowns & Bridge)",
    shortDesc: "Custom-crafted Zirconia and Ceramic crowns to strengthen RCT-treated teeth and replace missing spaces.",
    fullDesc: "Restore chewing efficiency and smile aesthetics with our precision CAD/CAM designed crowns and bridges. We offer world-class Metal-Free Zirconia and E-max ceramic crowns that possess superior durability, biocompatibility, and a lifelike translucency backed by warranties up to 15 years.",
    iconName: "Crown",
    category: "restorative",
    duration: "2 Sittings (3-5 Days)",
    painLevel: "Zero Discomfort",
    estimatedCost: "₹3,500 – ₹12,000 per unit",
    benefits: ["CAD/CAM precision fit with no food lodgement", "Metal-free Zirconia options with up to 15-year warranty", "Protects fragile root canal treated teeth from fracture", "Restores 100% natural chewing force and smile beauty"],
    popular: true
  },
  {
    id: "implants",
    title: "Dental Implants",
    titleHindi: "डेंटल इम्प्लांट (Permanent Teeth)",
    shortDesc: "The gold-standard permanent replacement for missing teeth using biocompatible titanium artificial roots.",
    fullDesc: "Dental implants look, feel, and function just like your natural teeth! A medical-grade titanium screw is placed into the jawbone to serve as a sturdy root, topped with a custom Zirconia crown. It prevents jawbone shrinkage and does not require grinding adjacent healthy teeth.",
    iconName: "Anchor",
    category: "surgical",
    duration: "Surgical step 45 mins + Healing",
    painLevel: "Painless (Anesthesia)",
    estimatedCost: "₹22,000 – ₹45,000 per implant",
    benefits: ["Permanent, lifelong solution for missing teeth", "Preserves jawbone density and facial structure", "No need to alter or grind adjacent healthy teeth", "Natural chewing, speech, and confidence restored"],
    popular: true
  },
  {
    id: "braces",
    title: "Braces & Orthodontics",
    titleHindi: "दांत सीधे करने के ब्रेसिज़ (Braces)",
    shortDesc: "Metal, ceramic, and self-ligating braces to align crooked, overcrowded, or protruding teeth.",
    fullDesc: "Achieve a perfectly aligned smile at any age! We offer traditional metal braces, discreet tooth-colored ceramic braces, and advanced self-ligating systems that straighten teeth faster with fewer dental visits and superior comfort.",
    iconName: "Smile",
    category: "orthodontics",
    duration: "12–18 Months (Monthly adjustments)",
    painLevel: "Mild Sensation",
    estimatedCost: "₹25,000 – ₹55,000 complete",
    benefits: ["Corrects crooked, spaced, and overlapping teeth", "Improves bite alignment and prevents TMJ jaw pain", "Choice of discreet ceramic or rapid metal systems", "Boosts facial aesthetics and self-confidence"]
  },
  {
    id: "aligners",
    title: "Invisible Aligners (Clear Braces)",
    titleHindi: "इनविजिबल अलाइनर (बिना तार के ब्रेसिज़)",
    shortDesc: "Transparent, removable, and comfortable clear aligners for modern, wire-free teeth straightening.",
    fullDesc: "Straighten your teeth invisibly! Custom 3D-printed transparent trays gently shift your teeth into ideal alignment. They are completely removable while eating and brushing, making them the preferred choice for working professionals and teens seeking discreet orthodontics.",
    iconName: "Layers",
    category: "orthodontics",
    duration: "6–14 Months",
    painLevel: "Zero Discomfort",
    estimatedCost: "₹45,000 – ₹1,20,000 complete",
    benefits: ["Virtually invisible to others during daily conversation", "100% removable for comfortable eating and brushing", "No metal wires, brackets, or mouth sores", "Custom 3D digital smile simulation before treatment starts"],
    popular: true
  },
  {
    id: "makeover",
    title: "Smile Makeover (Veneers & Laminates)",
    titleHindi: "स्माइल मेकओवर (बॉलीवुड स्माइल)",
    shortDesc: "Custom porcelain veneers and smile design to transform chipped, stained, or gapped front teeth.",
    fullDesc: "Unlock your dream Hollywood or Bollywood smile! Our digital smile design combines ultra-thin ceramic veneers, gum recontouring, and aesthetic bonding to correct discolorations, gaps, and minor misalignments in as little as two appointments.",
    iconName: "HeartHandshake",
    category: "cosmetic",
    duration: "2–3 Sittings",
    painLevel: "Zero Discomfort",
    estimatedCost: "₹8,000 – ₹18,000 per tooth",
    benefits: ["Customized shape, shade, and symmetry for your face", "Stain-resistant porcelain laminates that last for decades", "Minimal enamel preparation required", "Instant dramatic transformation of your smile"],
    popular: true
  },
  {
    id: "whitening",
    title: "Teeth Whitening (Bleaching)",
    titleHindi: "दांतों की सफेदी (Teeth Whitening)",
    shortDesc: "Advanced LED laser teeth whitening for up to 8 shades brighter teeth in a single 45-minute session.",
    fullDesc: "Erase years of yellowing caused by aging, coffee, tea, and smoking. Our professional clinic-based LED laser bleaching system uses safe, enamel-protecting whitening gel that activates rapidly without causing sensitivity.",
    iconName: "Sparkle",
    category: "cosmetic",
    duration: "45–60 Mins (Instant Result)",
    painLevel: "Non-Invasive",
    estimatedCost: "₹4,000 – ₹8,500",
    benefits: ["Up to 8 shades whiter teeth in just one hour", "Safe, FDA-approved whitening gel with desensitizers", "Long-lasting brilliant brightness for weddings & events", "Eliminates deep yellow intrinsic discoloration"]
  },
  {
    id: "dentures",
    title: "Dentures (Complete & Partial)",
    titleHindi: "नकली दांतों का सेट (Dentures)",
    shortDesc: "High-comfort acrylic, flexible BPS, and implant-supported dentures for replacing multiple missing teeth.",
    fullDesc: "We restore complete dental function for our senior citizens and patients with missing teeth using lightweight, high-impact BPS and flexible Lucitone dentures. For ultimate stability, we also offer implant-supported overdentures that never slip while eating.",
    iconName: "Users",
    category: "restorative",
    duration: "3–4 Sittings over 10 Days",
    painLevel: "Non-Invasive",
    estimatedCost: "₹8,000 – ₹35,000 per arch",
    benefits: ["Custom jaw recording for natural facial support", "Flexible and lightweight materials that prevent sore spots", "Restores clear speech and ability to chew nutritious food", "Implant-supported snap-on options available"]
  },
  {
    id: "pediatric",
    title: "Pediatric Dentistry (Children's Care)",
    titleHindi: "बच्चों के दांतों का इलाज (Pediatric Care)",
    shortDesc: "Friendly, gentle dental care for children including fluoride treatments, pit & fissure sealants, and painless fillings.",
    fullDesc: "We create a fun, fear-free dental experience for your little ones! From painless milk tooth fillings and decay-preventing fluoride varnishes to space maintainers and habit-breaking appliances, Dr. Asish and team ensure positive dental visits for kids.",
    iconName: "Baby",
    category: "pediatric",
    duration: "20–40 Mins",
    painLevel: "Non-Invasive",
    estimatedCost: "₹500 – ₹2,500",
    benefits: ["Child-friendly, patient, and playful clinical atmosphere", "Preventive pit and fissure sealants to block future decay", "Painless treatment for milk tooth infections and cavities", "Guidance on healthy brushing habits and nutrition"]
  },
  {
    id: "emergency",
    title: "Emergency Dental Care",
    titleHindi: "इमरजेंसी दंत चिकित्सा (Emergency Care)",
    shortDesc: "Immediate attention for severe toothaches, knocked-out teeth, broken dentures, and dental trauma.",
    fullDesc: "Dental emergencies don't wait, and neither do we! Whether you are experiencing agonizing tooth throbbing, facial swelling, a broken sports injury tooth, or a lost crown, our clinic provides priority emergency slots and instant pain relief.",
    iconName: "Ambulance",
    category: "general",
    duration: "Immediate / Priority Slot",
    painLevel: "Painless (Instant Relief)",
    estimatedCost: "Consultation + Procedure",
    benefits: ["Same-day priority appointments for urgent pain relief", "Immediate nerve desensitization and abscess drainage", "Management of sports accidents and dental trauma", "Available on standby for urgent calls in Dhanbad"],
    popular: true
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Rahul Kumar Sharma",
    rating: 5,
    date: "2 weeks ago",
    text: "I got my teeth fixed, very happy with the treatment. Dr. Asish is extremely polite and explained the entire procedure before starting. The clinic is ultra-clean and modern.",
    treatmentText: "Dental Crown & Fillings",
    category: "General",
    verified: true
  },
  {
    id: "rev-2",
    author: "Priya Banerjee",
    rating: 5,
    date: "1 month ago",
    text: "The best Dentist in Dhanbad! Very happy with my RCT treatment. I was terribly scared of root canals, but Dr. Asish did it in a single sitting with absolutely zero pain. Highly recommend!",
    treatmentText: "Painless Root Canal (RCT)",
    category: "RCT",
    verified: true
  },
  {
    id: "rev-3",
    author: "Amitesh Verma",
    rating: 5,
    date: "3 weeks ago",
    text: "Doctor has very good skills. My father needed complete dentures and we visited Asish Dental Clinic in Hirapur. The fitting is perfect and my father is able to chew comfortably after years.",
    treatmentText: "BPS Complete Dentures",
    category: "General",
    verified: true
  },
  {
    id: "rev-4",
    author: "Sneh Lata Singh",
    rating: 5,
    date: "1 month ago",
    text: "Very good doctor with excellent treatment. I got teeth whitening and scaling done for my wedding reception. The difference was amazing—at least 5 shades whiter in just 45 minutes!",
    treatmentText: "Laser Teeth Whitening",
    category: "Cosmetic",
    verified: true
  },
  {
    id: "rev-5",
    author: "Vikash Kumar Gupta",
    rating: 5,
    date: "2 months ago",
    text: "Got a dental implant done here for my missing molar tooth. The procedure was smooth, sterile, and very reasonably priced compared to other clinics in Dhanbad. 5 stars for the hygiene!",
    treatmentText: "Titanium Dental Implant",
    category: "Implants",
    verified: true
  },
  {
    id: "rev-6",
    author: "Ananya Mukherjee",
    rating: 5,
    date: "3 weeks ago",
    text: "I am taking braces treatment under Dr. Asish. He is very patient during every monthly checkup. Already seeing huge improvement in my teeth alignment in just 6 months!",
    treatmentText: "Ceramic Braces",
    category: "Braces",
    verified: true
  },
  {
    id: "rev-7",
    author: "Rajeshwar Prasad",
    rating: 5,
    date: "2 months ago",
    text: "Visited for severe wisdom tooth pain at 7 PM. They accommodated me immediately. The extraction was painless and healing was quick. Best emergency dental care in Hirapur Dhanbad.",
    treatmentText: "Wisdom Tooth Extraction",
    category: "General",
    verified: true
  },
  {
    id: "rev-8",
    author: "Meenakshi Devi",
    rating: 5,
    date: "1 month ago",
    text: "Cleanest dental clinic in Dhanbad! All instruments are opened from sterile pouches right in front of the patient. Very transparent pricing with no hidden charges.",
    treatmentText: "Dental Checkup & Scaling",
    category: "General",
    verified: true
  },
  {
    id: "rev-9",
    author: "Sunil K. Agarwal",
    rating: 5,
    date: "3 months ago",
    text: "Dr. Asish fixed my chipped front teeth with composite bonding. It looks so natural that nobody can tell it was ever broken. A true artist and wonderful human being.",
    treatmentText: "Smile Makeover & Bonding",
    category: "Cosmetic",
    verified: true
  },
  {
    id: "rev-10",
    author: "Kavita R. Bhattacharya",
    rating: 5,
    date: "2 months ago",
    text: "Took my 6-year-old son for cavity treatment. Dr. Asish made him laugh and comfort him so well that my son didn't cry even once! Wonderful pediatric dental care.",
    treatmentText: "Pediatric Painless Filling",
    category: "General",
    verified: true
  },
  {
    id: "rev-11",
    author: "Deepak Choudhary",
    rating: 5,
    date: "4 months ago",
    text: "Opted for invisible clear aligners here. Very convenient as I work in a bank and didn't want metal wires. Great follow-up and digital 3D planning.",
    treatmentText: "Invisible Aligners",
    category: "Braces",
    verified: true
  },
  {
    id: "rev-12",
    author: "Dr. Sanjay Mandal",
    rating: 5,
    date: "3 months ago",
    text: "Being a medical professional myself, I appreciate Dr. Asish Kumar's strict adherence to international sterilization and autoclave protocols. Excellent endodontic work.",
    treatmentText: "Advanced Rotary RCT",
    category: "RCT",
    verified: true
  },
  {
    id: "rev-13",
    author: "Aditi Ghosh",
    rating: 5,
    date: "1 month ago",
    text: "The ambiance of Asish Dental Clinic is so calming. From reception to the treatment chair, everything feels premium and comforting. Highly recommended to everyone in Dhanbad!",
    treatmentText: "Comprehensive Dental Checkup",
    category: "General",
    verified: true
  }
];

export const DOCTOR_PROFILE: Doctor = {
  name: "Dr. Asish Kumar",
  nameHindi: "डॉ. आशीष कुमार",
  qualifications: "B.D.S., M.D.S. (Conservative Dentistry & Endodontics)",
  designation: "Chief Dental Surgeon & Root Canal Specialist",
  experience: "12+ Years of Clinical Excellence",
  specialization: [
    "Painless Single-Sitting Root Canal Treatment (RCT)",
    "Advanced Dental Implantology & Bone Grafting",
    "Digital Smile Design & Aesthetic Laminate Veneers",
    "Full Mouth Rehabilitation & Ceramic Restorations",
    "Painless Rotary Endodontics & Laser Dentistry"
  ],
  bio: [
    "Dr. Asish Kumar is one of the most trusted and celebrated dental surgeons in Dhanbad, known for his gentle touch, meticulous precision, and patient-first clinical philosophy.",
    "After completing his BDS and specializing in Conservative Dentistry and Endodontics (MDS), he has dedicated over 12 years to bringing painless, international-grade dental treatments to the people of Dhanbad and surrounding regions.",
    "Dr. Asish believes that no patient should ever fear a dental visit. He utilizes computerized local anesthesia, rotary endodontic instruments, and 3D digital imaging to ensure that every procedure—from routine cleanings to complex implants—is performed with maximum comfort and lasting success."
  ],
  certifications: [
    "Certified Specialist in Rotary Endodontics (IDA)",
    "Fellowship in Advanced Oral Implantology",
    "Certified Digital Smile Designer",
    "Member of Indian Dental Association (IDA Jharkhand State Branch)",
    "Certified in Dental Laser Therapy & Micro-Endodontics"
  ],
  photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80"
};

export const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    title: "12+ Years Experienced Doctor",
    description: "Led by Dr. Asish Kumar (MDS), possessing master's level expertise in painless root canals, implants, and aesthetic smile rehabilitation.",
    iconName: "Award",
    highlight: "10,000+ Smiles Treated"
  },
  {
    title: "Advanced Digital Equipment",
    description: "Equipped with low-radiation Digital RVG X-rays, intraoral HD cameras, rotary endodontic motors, and LED apex locators.",
    iconName: "Microscope",
    highlight: "World-Class Tech"
  },
  {
    title: "100% Pain-Free Treatment",
    description: "We use computerized local anesthesia and gentle tissue handling techniques so you experience zero discomfort during procedures.",
    iconName: "SmilePlus",
    highlight: "Gentle Care Guaranteed"
  },
  {
    title: "4-Step Sterilization Protocol",
    description: "Uncompromising hygiene with Class-B autoclaving, ultrasonic cleaning, UV chamber storage, and individual sterile pouches.",
    iconName: "ShieldCheck",
    highlight: "Hospital-Grade Hygiene"
  },
  {
    title: "Affordable & Transparent Pricing",
    description: "Upfront cost estimates before any procedure begins. Premium dental care at fair, accessible Dhanbad rates with EMI options.",
    iconName: "Wallet",
    highlight: "No Hidden Charges"
  },
  {
    title: "Personalized Patient Care",
    description: "We take time to explain your X-rays and treatment options visually, empowering you to make informed decisions for your health.",
    iconName: "HeartHandshake",
    highlight: "Compassionate Approach"
  },
  {
    title: "Family-Friendly Environment",
    description: "A soothing, modern, and welcoming clinic atmosphere that puts children, anxious adults, and senior citizens at complete ease.",
    iconName: "Users",
    highlight: "All Ages Welcome"
  },
  {
    title: "Emergency Dental Support",
    description: "Priority same-day appointment slots for urgent toothaches, broken teeth, facial swelling, or dental trauma.",
    iconName: "Clock",
    highlight: "Quick Pain Relief"
  }
];

export const TREATMENT_TIMELINE: TimelineStep[] = [
  {
    step: 1,
    title: "Detailed Consultation",
    description: "Friendly one-on-one discussion with Dr. Asish to understand your dental symptoms, cosmetic goals, and medical history.",
    iconName: "MessageSquareText"
  },
  {
    step: 2,
    title: "Digital 3D Diagnosis",
    description: "Low-radiation digital X-ray and intraoral camera screening to visualize the exact condition of teeth, roots, and gums on screen.",
    iconName: "ScanLine"
  },
  {
    step: 3,
    title: "Personalized Treatment Plan",
    description: "We provide a customized roadmap explaining procedure options, exact timelines, and transparent pricing before starting.",
    iconName: "FileSpreadsheet"
  },
  {
    step: 4,
    title: "Comfortable Procedure",
    description: "Painless treatment execution in our ergonomic dental chairs using gentle rotary instruments and local anesthesia.",
    iconName: "Sparkles"
  },
  {
    step: 5,
    title: "Aftercare & Smile Maintenance",
    description: "Comprehensive post-treatment guidance, prescription support, and scheduled follow-up visits to ensure lasting oral health.",
    iconName: "HeartCheck"
  }
];

export const BEFORE_AFTER_GALLERY: GalleryItem[] = [
  {
    id: "ba-1",
    title: "Complete Smile Makeover & Veneers",
    category: "Smile Makeover",
    beforeImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
    description: "Transformation of stained, slightly gapped front teeth using 6 custom ceramic veneers for a radiant, natural finish."
  },
  {
    id: "ba-2",
    title: "1-Hour LED Laser Teeth Whitening",
    category: "Whitening",
    beforeImg: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
    description: "Removal of deep tea and coffee stains resulting in a 7-shade whiter, luminous smile in just one 45-minute sitting."
  },
  {
    id: "ba-3",
    title: "Painless RCT & Zirconia Crown",
    category: "RCT",
    beforeImg: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80",
    description: "Restoration of a severely decayed molar tooth using precision rotary RCT and a lifelike CAD/CAM Zirconia crown."
  },
  {
    id: "ba-4",
    title: "Orthodontic Alignment with Clear Aligners",
    category: "Braces",
    beforeImg: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80",
    description: "Correction of crowded and overlapping front teeth over 9 months using comfortable, invisible clear aligners."
  },
  {
    id: "ba-5",
    title: "Deep Scaling & Gum Stain Removal",
    category: "Cleaning",
    beforeImg: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80",
    description: "Elimination of heavy calculus and tobacco stains along the gumline, restoring healthy pink gums and clean enamel."
  },
  {
    id: "ba-6",
    title: "Front Tooth Gap Closure (Bonding)",
    category: "Smile Makeover",
    beforeImg: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
    description: "Single-sitting aesthetic composite bonding to seamlessly close midline diastema (gap between front teeth)."
  }
];

export const CLINIC_GALLERY: ClinicImage[] = [
  {
    id: "gal-1",
    title: "Modern Reception Desk",
    category: "Reception",
    url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    description: "Welcoming reception and patient assistance counter at our Hirapur clinic."
  },
  {
    id: "gal-2",
    title: "Ergonomic Treatment Room",
    category: "Treatment Room",
    url: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80",
    description: "Spacious, spotless, and sanitized treatment operative suite designed for patient relaxation."
  },
  {
    id: "gal-3",
    title: "Advanced Dental Chair Suite",
    category: "Dental Chair",
    url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    description: "Imported computerized dental chair with ultra-soft upholstery and integrated LED lighting."
  },
  {
    id: "gal-4",
    title: "Digital RVG & Diagnostic Suite",
    category: "Equipment",
    url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    description: "High-precision diagnostic equipment enabling instant digital X-ray viewing with 90% less radiation."
  },
  {
    id: "gal-5",
    title: "Patient Waiting Lounge",
    category: "Waiting Area",
    url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    description: "Air-conditioned, comfortable waiting lounge with soothing ambient music and dental literature."
  },
  {
    id: "gal-6",
    title: "Clinic Exterior & Entrance",
    category: "Exterior",
    url: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80",
    description: "Easy-to-locate entrance at Madhav Apartment, Durga Mandir Road, Hirapur, Dhanbad."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How often should I visit a dentist?",
    answer: "We recommend visiting our dental clinic at least twice a year (every 6 months) for a routine check-up and professional scaling. Regular checkups help detect cavities when they are tiny and painless, prevent gum infections, and save you from expensive procedures later.",
    category: "General"
  },
  {
    question: "Is Root Canal Treatment (RCT) painful?",
    answer: "Not at all! At Asish Dental Clinic, Root Canal Treatment is completely painless. We use advanced computerized local anesthesia and modern rotary endodontic instruments. Most patients feel zero pain during the procedure and report immediate relief from their throbbing toothache.",
    category: "Treatments"
  },
  {
    question: "Do you provide children's dental care?",
    answer: "Yes, absolutely! We specialize in Pediatric Dentistry. Dr. Asish and our staff are trained in gentle, child-friendly behavior management. We provide painless cavity fillings, preventive fluoride treatments, pit & fissure sealants, and habit-breaking appliances in a fun, fear-free environment.",
    category: "Treatments"
  },
  {
    question: "How long does teeth whitening last?",
    answer: "Professional LED laser teeth whitening at our clinic typically lasts between 1 to 3 years depending on your oral hygiene and dietary habits. Avoiding excessive tea, coffee, turmeric, and smoking, along with using maintenance toothpaste, will keep your smile sparkling bright for longer.",
    category: "Treatments"
  },
  {
    question: "Do you accept emergency dental patients?",
    answer: "Yes! We prioritize dental emergencies such as acute toothaches, facial swelling, broken dentures, bleeding gums, or knocked-out teeth from accidents. During working hours (10 AM to 8 PM), we provide immediate priority slots. For urgent situations, you can call or WhatsApp us on 7033266117.",
    category: "Emergency"
  },
  {
    question: "What is the cost of Root Canal Treatment and Crowns in Dhanbad?",
    answer: "We maintain very transparent and fair pricing. A single-sitting painless RCT typically ranges from ₹3,000 to ₹5,500 depending on the tooth (front vs molar). High-strength Zirconia and Ceramic crowns range from ₹3,500 to ₹12,000 with warranties up to 15 years. We provide exact estimates after digital X-ray evaluation.",
    category: "Pricing"
  },
  {
    question: "What is the difference between metal braces and invisible aligners?",
    answer: "Traditional metal or ceramic braces use brackets and wires to move teeth over 12-18 months. Invisible Aligners are transparent, removable 3D-printed plastic trays that straighten teeth without any wires. Aligners are virtually invisible, more comfortable, and can be removed while eating and brushing.",
    category: "Treatments"
  },
  {
    question: "Where exactly is Asish Dental Clinic located in Dhanbad?",
    answer: "We are centrally located at Durga Mandir Road, Baba Colony, Hirapur, Pandey Muhalla, Dhanbad – 826007. The clinic is situated inside Madhav Apartment, making it easily accessible from Bank More, Court More, Police Line, and Saraidhella.",
    category: "General"
  }
];

export const SYMPTOM_QUESTIONS: SymptomQuestion[] = [
  {
    id: "sym-1",
    symptom: "Severe, throbbing pain or sensitivity to hot/cold drinks",
    description: "The pain often lingers even after drinking water and may disturb your sleep at night.",
    recommendedTreatmentId: "rct",
    urgency: "Prompt Attention",
    advice: "This indicates the infection has reached the tooth nerve (pulp). A painless Root Canal Treatment (RCT) will save the tooth immediately."
  },
  {
    id: "sym-2",
    symptom: "Bleeding gums while brushing or persistent bad breath",
    description: "Gums appear reddish, swollen, or tender, with occasional metallic taste in the mouth.",
    recommendedTreatmentId: "cleaning",
    urgency: "Routine",
    advice: "This is a sign of gingivitis caused by tartar buildup along the gumline. Ultrasonic scaling and polishing will restore healthy pink gums."
  },
  {
    id: "sym-3",
    symptom: "Missing one or more teeth making chewing difficult",
    description: "Empty space in jaw causing adjacent teeth to tilt or food getting trapped while eating.",
    recommendedTreatmentId: "implants",
    urgency: "Routine",
    advice: "Dental Implants or fixed Zirconia bridges are ideal to restore natural chewing power and prevent jawbone shrinkage."
  },
  {
    id: "sym-4",
    symptom: "Crooked, overlapping, or protruding front teeth",
    description: "Difficulty cleaning between overlapping teeth or dissatisfaction with smile alignment in photos.",
    recommendedTreatmentId: "aligners",
    urgency: "Routine",
    advice: "Invisible Clear Aligners or Ceramic Braces can straighten your smile comfortably without altering your daily lifestyle."
  },
  {
    id: "sym-5",
    symptom: "Yellowish or stained teeth from tea, coffee, or smoking",
    description: "Teeth appear discolored, dimming your facial brightness and smile confidence.",
    recommendedTreatmentId: "whitening",
    urgency: "Routine",
    advice: "Our 45-minute clinic LED laser teeth whitening can brighten your smile by up to 8 shades safely and instantly."
  },
  {
    id: "sym-6",
    symptom: "Broken, chipped, or fractured tooth from injury or biting",
    description: "Sharp rough edge on tooth tongue feels, or visible crack on front tooth.",
    recommendedTreatmentId: "makeover",
    urgency: "Prompt Attention",
    advice: "We can restore chipped front teeth seamlessly in a single sitting using aesthetic composite bonding or ceramic veneers."
  }
];

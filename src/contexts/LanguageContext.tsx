import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "hi" | "bho";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    home: "Home",
    about: "About",
    services: "Services",
    doctors: "Doctors",
    gallery: "Gallery",
    contact: "Contact",
    bookAppointment: "Book Appointment",
    learnMore: "Learn More",
    
    // Hero
    tagline: "Your Health, Our Priority",
    heroTitle: "Excellence in",
    heroSubtitle: "Healthcare Services",
    heroDescription: "Experience world-class medical care with our team of expert doctors, state-of-the-art facilities, and compassionate approach to your wellbeing.",
    emergency: "Emergency",
    yearsExperience: "Years Experience",
    expertDoctors: "Expert Doctors",
    happyPatients: "Happy Patients",
    
    // Hospital Name
    hospitalName: "Aadhunik Lakava Polio Hospital",
    hospitalLocation: "Geeta Nagar Basahi, Buxar",
    
    // Appointment Dialog
    appointmentTitle: "Book Your Appointment",
    appointmentDescription: "Fill in your details and we'll get back to you shortly",
    fullName: "Full Name",
    phoneNumber: "Phone Number",
    email: "Email",
    selectDate: "Select Date",
    selectTime: "Select Time",
    selectDoctor: "Select Doctor",
    symptoms: "Symptoms / Reason for Visit",
    submit: "Submit Appointment",
    cancel: "Cancel",
    
    // Doctors
    ourDoctors: "Our Doctors",
    meetOurTeam: "Meet Our Expert Team",
    doctorsDescription: "Experienced healthcare professionals dedicated to your wellbeing",
    experience: "Experience",
    patientsTreated: "Patients Treated",
    rating: "Rating",
    
    // Services
    ourServices: "Our Services",
    servicesTitle: "Comprehensive Healthcare Solutions",
    servicesDescription: "From preventive care to specialized treatments",
    
    // Testimonials
    testimonials: "Testimonials",
    patientSays: "What Our Patients Say",
    testimonialsDescription: "Real stories from real people who trusted us with their health",
    
    // Contact
    contactUs: "Contact Us",
    address: "Address",
    phone: "Phone",
    timing: "Timing",
    nearestCities: "Nearest Cities",
    getDirections: "Get Directions",
    
    // Footer
    quickLinks: "Quick Links",
    contactInfo: "Contact Information",
    followUs: "Follow Us",
    allRightsReserved: "All rights reserved",
    
    // Map & Location
    directions: "Hospital Directions",
    nearbyLocations: "Nearby Locations",
    
    // Services
    cardiology: "Cardiology",
    cardiologyDesc: "Advanced cardiac care with state-of-the-art technology and experienced cardiologists.",
    neurology: "Neurology",
    neurologyDesc: "Comprehensive neurological services for brain and nervous system disorders.",
    orthopedics: "Orthopedics",
    orthopedicsDesc: "Expert treatment for bone, joint, and musculoskeletal conditions.",
    pediatrics: "Pediatrics",
    pediatricsDesc: "Specialized care for infants, children, and adolescents with compassion.",
    ophthalmology: "Ophthalmology",
    ophthalmologyDesc: "Complete eye care services from routine exams to advanced surgeries.",
    emergencyCare: "Emergency Care",
    emergencyCareDesc: "24/7 emergency services with rapid response and critical care.",
    
    // Testimonials content
    testimonialsPatient: "Patient",
    testimonial1: "The care I received was exceptional. The doctors were attentive, professional, and truly cared about my recovery. I'm grateful for the amazing team!",
    testimonial2: "From the moment I walked in, I felt welcomed and cared for. The facilities are modern, and the staff is incredibly knowledgeable. Highly recommend!",
    testimonial3: "Outstanding medical care! The doctors took the time to explain everything clearly. The follow-up care was excellent too. Thank you!",
    testimonialName1: "John Anderson",
    testimonialName2: "Maria Garcia",
    testimonialName3: "David Thompson",
  },
  hi: {
    // Navbar
    home: "होम",
    about: "हमारे बारे में",
    services: "सेवाएं",
    doctors: "डॉक्टर",
    gallery: "गैलरी",
    contact: "संपर्क करें",
    bookAppointment: "अपॉइंटमेंट बुक करें",
    learnMore: "और जानें",
    
    // Hero
    tagline: "आपका स्वास्थ्य, हमारी प्राथमिकता",
    heroTitle: "उत्कृष्टता",
    heroSubtitle: "स्वास्थ्य सेवाओं में",
    heroDescription: "हमारे विशेषज्ञ डॉक्टरों की टीम, अत्याधुनिक सुविधाओं और आपकी भलाई के प्रति दयालु दृष्टिकोण के साथ विश्व स्तरीय चिकित्सा देखभाल का अनुभव करें।",
    emergency: "आपातकाल",
    yearsExperience: "वर्ष का अनुभव",
    expertDoctors: "विशेषज्ञ डॉक्टर",
    happyPatients: "संतुष्ट मरीज",
    
    // Hospital Name
    hospitalName: "आधुनिक लकवा पोलियो अस्पताल",
    hospitalLocation: "गीता नगर बसाही, बक्सर",
    
    // Appointment Dialog
    appointmentTitle: "अपना अपॉइंटमेंट बुक करें",
    appointmentDescription: "अपना विवरण भरें और हम जल्द ही आपसे संपर्क करेंगे",
    fullName: "पूरा नाम",
    phoneNumber: "फोन नंबर",
    email: "ईमेल",
    selectDate: "तारीख चुनें",
    selectTime: "समय चुनें",
    selectDoctor: "डॉक्टर चुनें",
    symptoms: "लक्षण / आने का कारण",
    submit: "अपॉइंटमेंट सबमिट करें",
    cancel: "रद्द करें",
    
    // Doctors
    ourDoctors: "हमारे डॉक्टर",
    meetOurTeam: "हमारी विशेषज्ञ टीम से मिलें",
    doctorsDescription: "आपकी भलाई के लिए समर्पित अनुभवी स्वास्थ्य पेशेवर",
    experience: "अनुभव",
    patientsTreated: "इलाज किए गए मरीज",
    rating: "रेटिंग",
    
    // Services
    ourServices: "हमारी सेवाएं",
    servicesTitle: "व्यापक स्वास्थ्य समाधान",
    servicesDescription: "निवारक देखभाल से लेकर विशेष उपचार तक",
    
    // Testimonials
    testimonials: "प्रशंसापत्र",
    patientSays: "हमारे मरीज क्या कहते हैं",
    testimonialsDescription: "वास्तविक लोगों की वास्तविक कहानियां जिन्होंने हम पर भरोसा किया",
    
    // Contact
    contactUs: "संपर्क करें",
    address: "पता",
    phone: "फोन",
    timing: "समय",
    nearestCities: "निकटतम शहर",
    getDirections: "दिशा निर्देश प्राप्त करें",
    
    // Footer
    quickLinks: "त्वरित लिंक",
    contactInfo: "संपर्क जानकारी",
    followUs: "हमें फॉलो करें",
    allRightsReserved: "सर्वाधिकार सुरक्षित",
    
    // Map & Location
    directions: "अस्पताल की दिशा",
    nearbyLocations: "आस-पास के स्थान",
    
    // Services
    cardiology: "हृदय रोग विज्ञान",
    cardiologyDesc: "अत्याधुनिक तकनीक और अनुभवी हृदय रोग विशेषज्ञों के साथ उन्नत हृदय देखभाल।",
    neurology: "तंत्रिका विज्ञान",
    neurologyDesc: "मस्तिष्क और तंत्रिका तंत्र विकारों के लिए व्यापक तंत्रिका विज्ञान सेवाएं।",
    orthopedics: "हड्डी रोग",
    orthopedicsDesc: "हड्डी, जोड़ों और मस्कुलोस्केलेटल स्थितियों के लिए विशेषज्ञ उपचार।",
    pediatrics: "बाल रोग",
    pediatricsDesc: "शिशुओं, बच्चों और किशोरों के लिए दयालुता के साथ विशेष देखभाल।",
    ophthalmology: "नेत्र विज्ञान",
    ophthalmologyDesc: "नियमित परीक्षाओं से लेकर उन्नत सर्जरी तक पूर्ण नेत्र देखभाल सेवाएं।",
    emergencyCare: "आपातकालीन देखभाल",
    emergencyCareDesc: "तेज प्रतिक्रिया और गंभीर देखभाल के साथ 24/7 आपातकालीन सेवाएं।",
    
    // Testimonials content
    testimonialsPatient: "मरीज",
    testimonial1: "मुझे जो देखभाल मिली वह असाधारण थी। डॉक्टर सचेत, पेशेवर थे और वास्तव में मेरे ठीक होने की परवाह करते थे। मैं अद्भुत टीम के लिए आभारी हूं!",
    testimonial2: "जिस क्षण मैं अंदर गया, मुझे स्वागत और देखभाल महसूस हुई। सुविधाएं आधुनिक हैं, और स्टाफ अविश्वसनीय रूप से जानकार है। अत्यधिक सिफारिश!",
    testimonial3: "उत्कृष्ट चिकित्सा देखभाल! डॉक्टरों ने सब कुछ स्पष्ट रूप से समझाने के लिए समय लिया। अनुवर्ती देखभाल भी उत्कृष्ट थी। धन्यवाद!",
    testimonialName1: "जॉन एंडरसन",
    testimonialName2: "मारिया गार्सिया",
    testimonialName3: "डेविड थॉम्पसन",
  },
  bho: {
    // Navbar
    home: "होम",
    about: "हमरा बारे में",
    services: "सेवा सभ",
    doctors: "डॉक्टर सभ",
    gallery: "गैलरी",
    contact: "संपर्क करीं",
    bookAppointment: "अपॉइंटमेंट बुक करीं",
    learnMore: "अउर जानीं",
    
    // Hero
    tagline: "रउआ स्वास्थ्य, हमार प्राथमिकता",
    heroTitle: "उत्कृष्टता",
    heroSubtitle: "स्वास्थ्य सेवा में",
    heroDescription: "हमार विशेषज्ञ डॉक्टर के टीम, अत्याधुनिक सुविधा अउर रउआ भलाई के प्रति दयालु दृष्टिकोण के साथ विश्व स्तरीय चिकित्सा देखभाल के अनुभव करीं।",
    emergency: "आपातकाल",
    yearsExperience: "साल के अनुभव",
    expertDoctors: "विशेषज्ञ डॉक्टर",
    happyPatients: "संतुष्ट मरीज",
    
    // Hospital Name
    hospitalName: "आधुनिक लकवा पोलियो अस्पताल",
    hospitalLocation: "गीता नगर बसाही, बक्सर",
    
    // Appointment Dialog
    appointmentTitle: "अपना अपॉइंटमेंट बुक करीं",
    appointmentDescription: "अपना विवरण भरीं अउर हम जल्दिए रउआ से संपर्क करब",
    fullName: "पूरा नाम",
    phoneNumber: "फोन नंबर",
    email: "ईमेल",
    selectDate: "तारीख चुनीं",
    selectTime: "समय चुनीं",
    selectDoctor: "डॉक्टर चुनीं",
    symptoms: "लक्षण / आवे के कारण",
    submit: "अपॉइंटमेंट सबमिट करीं",
    cancel: "रद्द करीं",
    
    // Doctors
    ourDoctors: "हमार डॉक्टर",
    meetOurTeam: "हमार विशेषज्ञ टीम से मिलीं",
    doctorsDescription: "रउआ भलाई खातिर समर्पित अनुभवी स्वास्थ्य पेशेवर",
    experience: "अनुभव",
    patientsTreated: "इलाज कइल गइल मरीज",
    rating: "रेटिंग",
    
    // Services
    ourServices: "हमार सेवा",
    servicesTitle: "व्यापक स्वास्थ्य समाधान",
    servicesDescription: "निवारक देखभाल से लेके विशेष उपचार तक",
    cardiology: "हृदय रोग विज्ञान",
    cardiologyDesc: "अत्याधुनिक तकनीक अउर अनुभवी हृदय रोग विशेषज्ञ के साथ उन्नत हृदय देखभाल।",
    neurology: "तंत्रिका विज्ञान",
    neurologyDesc: "दिमाग अउर तंत्रिका तंत्र विकार खातिर व्यापक तंत्रिका विज्ञान सेवा।",
    orthopedics: "हड्डी रोग",
    orthopedicsDesc: "हड्डी, जोड़ अउर मस्कुलोस्केलेटल स्थिति खातिर विशेषज्ञ उपचार।",
    pediatrics: "बाल रोग",
    pediatricsDesc: "शिशु, बच्चा अउर किशोर खातिर दयालुता के साथ विशेष देखभाल।",
    ophthalmology: "आँख के विज्ञान",
    ophthalmologyDesc: "नियमित परीक्षा से लेके उन्नत सर्जरी तक पूर्ण आँख देखभाल सेवा।",
    emergencyCare: "आपातकालीन देखभाल",
    emergencyCareDesc: "तेज प्रतिक्रिया अउर गंभीर देखभाल के साथ 24/7 आपातकालीन सेवा।",
    
    // Testimonials
    testimonials: "प्रशंसापत्र",
    patientSays: "हमार मरीज का कहत बाड़े",
    testimonialsDescription: "असली लोग के असली कहानी जे हम पर भरोसा कइलें",
    testimonialsPatient: "मरीज",
    testimonial1: "हमका जवन देखभाल मिलल ऊ असाधारण रहे। डॉक्टर सचेत, पेशेवर रहलें अउर वास्तव में हमार ठीक होखे के परवाह करत रहलें। हम अद्भुत टीम खातिर आभारी बानी!",
    testimonial2: "जवन क्षण हम अंदर गइनी, हमका स्वागत अउर देखभाल महसूस भइल। सुविधा आधुनिक बा, अउर स्टाफ अविश्वसनीय रूप से जानकार बा। अत्यधिक सिफारिश!",
    testimonial3: "उत्कृष्ट चिकित्सा देखभाल! डॉक्टर सभ सब कुछ स्पष्ट रूप से समझावे खातिर समय लिहलें। अनुवर्ती देखभाल भी उत्कृष्ट रहल। धन्यवाद!",
    testimonialName1: "जॉन एंडरसन",
    testimonialName2: "मारिया गार्सिया",
    testimonialName3: "डेविड थॉम्पसन",
    
    // Contact
    contactUs: "संपर्क करीं",
    address: "पता",
    phone: "फोन",
    timing: "समय",
    nearestCities: "निकटतम शहर",
    getDirections: "दिशा निर्देश प्राप्त करीं",
    
    // Footer
    quickLinks: "त्वरित लिंक",
    contactInfo: "संपर्क जानकारी",
    followUs: "हमका फॉलो करीं",
    allRightsReserved: "सर्वाधिकार सुरक्षित",
    
    // Map & Location
    directions: "अस्पताल के दिशा",
    nearbyLocations: "आस-पास के जगह",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("hi");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations["en"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};

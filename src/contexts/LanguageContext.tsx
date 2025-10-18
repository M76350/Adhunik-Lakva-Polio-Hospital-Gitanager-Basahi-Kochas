import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "hi";

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
  },
  hi: {
    // Navbar
    home: "होम",
    about: "हमारे बारे में",
    services: "सेवाएं",
    doctors: "डॉक्टर",
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

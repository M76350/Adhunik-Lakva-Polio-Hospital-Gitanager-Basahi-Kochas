import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import Services from "@/components/Services";

import ContentSlider from "@/components/ContentSlider";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle, Heart, Activity, Brain, Bone, Eye, Stethoscope, Syringe, Award, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import contentData from "@/data/content.json";
import serviceCardiology from "@/assets/service-cardiology.jpg";
import serviceNeurology from "@/assets/service-neurology.jpg";
import serviceOrthopedics from "@/assets/service-orthopedics.jpg";
import heroHospital from "@/assets/hero-hospital.jpg";

const ServicesPage = () => {
  const { language } = useLanguage();

  const heroSlides = [
    {
      image: serviceCardiology,
      title: language === "en" ? "Comprehensive Healthcare Services" : "व्यापक स्वास्थ्य सेवाएं",
      subtitle: language === "en" ? "Our Services" : "हमारी सेवाएं",
      description: language === "en"
        ? "From routine check-ups to specialized treatments, we offer a complete range of medical services."
        : "नियमित जांच से लेकर विशेष उपचार तक, हम चिकित्सा सेवाओं की पूरी श्रृंखला प्रदान करते हैं।",
    },
    {
      image: serviceNeurology,
      title: language === "en" ? "Advanced Medical Care" : "उन्नत चिकित्सा देखभाल",
      subtitle: language === "en" ? "Expert Treatment" : "विशेषज्ञ उपचार",
      description: language === "en"
        ? "We offer the latest treatment methods and technologies for better patient outcomes."
        : "हम बेहतर रोगी परिणामों के लिए नवीनतम उपचार विधियां और प्रौद्योगिकियां प्रदान करते हैं।",
    },
  ];

  const slides = [
    {
      title: language === "en" ? "Comprehensive Care" : "व्यापक देखभाल",
      description: language === "en"
        ? "From diagnosis to treatment and rehabilitation, we provide complete healthcare solutions under one roof."
        : "निदान से लेकर उपचार और पुनर्वास तक, हम एक छत के नीचे पूर्ण स्वास्थ्य समाधान प्रदान करते हैं।",
      image: serviceCardiology,
      gradient: "from-primary to-secondary",
    },
    {
      title: language === "en" ? "Specialized Departments" : "विशेष विभाग",
      description: language === "en"
        ? "Our hospital has dedicated departments for various medical specialties with expert doctors."
        : "हमारे अस्पताल में विशेषज्ञ डॉक्टरों के साथ विभिन्न चिकित्सा विशेषताओं के लिए समर्पित विभाग हैं।",
      image: serviceNeurology,
      gradient: "from-secondary to-accent",
    },
    {
      title: language === "en" ? "Advanced Treatments" : "उन्नत उपचार",
      description: language === "en"
        ? "We offer the latest treatment methods and technologies for better patient outcomes."
        : "हम बेहतर रोगी परिणामों के लिए नवीनतम उपचार विधियां और प्रौद्योगिकियां प्रदान करते हैं।",
      image: serviceOrthopedics,
      gradient: "from-accent to-primary",
    },
  ];

  const whyChooseData = language === "en" 
    ? contentData.en.services.whyChoose 
    : contentData.hi.services.whyChoose;

  const departments = [
    { name: language === "en" ? "Cardiology" : "हृदय रोग विभाग", desc: language === "en" ? "Heart care specialists" : "हृदय देखभाल विशेषज्ञ" },
    { name: language === "en" ? "Neurology" : "तंत्रिका विज्ञान", desc: language === "en" ? "Brain & nerve specialists" : "मस्तिष्क और तंत्रिका विशेषज्ञ" },
    { name: language === "en" ? "Orthopedics" : "आर्थोपेडिक्स", desc: language === "en" ? "Bone & joint experts" : "हड्डी और जोड़ों के विशेषज्ञ" },
    { name: language === "en" ? "Pediatrics" : "बाल रोग", desc: language === "en" ? "Child healthcare" : "बाल स्वास्थ्य देखभाल" },
    { name: language === "en" ? "General Medicine" : "सामान्य चिकित्सा", desc: language === "en" ? "Primary healthcare" : "प्राथमिक स्वास्थ्य देखभाल" },
    { name: language === "en" ? "Emergency Care" : "आपातकालीन देखभाल", desc: language === "en" ? "24/7 urgent care" : "24/7 तत्काल देखभाल" },
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      <Navbar />
      
      <main>
        {/* Section 1: Hero Slider */}
        <HeroSlider slides={heroSlides} />

        {/* Section 2: Content Slider */}
        <ContentSlider slides={slides} />

        {/* Section 3: Comprehensive Healthcare Content */}
        <section className="container mx-auto px-4 mb-20 mt-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                {language === "en" ? "Our Services" : "हमारी सेवाएं"}
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                {contentData[language].comprehensiveHealthcare.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {contentData[language].comprehensiveHealthcare.description}
              </p>
            </div>
            
            {/* Highlights Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {contentData[language].comprehensiveHealthcare.highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-2xl">{highlight.split(' ')[0]}</span>
                  <p className="text-foreground text-sm leading-relaxed flex-1">
                    {highlight.substring(highlight.indexOf(' ') + 1)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Services Grid */}
        <Services />

        {/* Section 4: Why Choose Us - Accordion with Images and Icons */}
        <section className="container mx-auto px-4 py-20 bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center animate-fade-in">
              {language === "en" ? "Why Choose Our Services?" : "हमारी सेवाएं क्यों चुनें?"}
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-6">
              {whyChooseData.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-background rounded-xl border-0 shadow-lg hover:shadow-xl transition-all overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <AccordionTrigger className="text-left hover:no-underline px-6 py-5">
                    <span className="text-foreground font-bold text-lg flex items-center gap-2">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="grid md:grid-cols-3 gap-6 items-start">
                      {/* Image */}
                      <div className="md:col-span-1">
                        <img 
                          src={item.image} 
                          alt={item.question}
                          className="w-full h-48 object-cover rounded-lg shadow-md"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="md:col-span-2 space-y-4">
                        <p className="text-muted-foreground leading-relaxed text-base">
                          {item.answer}
                        </p>
                        
                        {/* Gradient decoration */}
                        <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Section 5: Departments */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">
            {language === "en" ? "Our Departments" : "हमारे विभाग"}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {departments.map((dept, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">{dept.name}</h3>
                  <p className="text-sm text-muted-foreground">{dept.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Section 6: Treatment Process */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">
              {language === "en" ? "Our Treatment Process" : "हमारी उपचार प्रक्रिया"}
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-6">
              <Card className="hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white mx-auto mb-4 flex items-center justify-center text-xl font-bold">1</div>
                  <h3 className="font-bold mb-2">{language === "en" ? "Consultation" : "परामर्श"}</h3>
                  <p className="text-sm text-muted-foreground">{language === "en" ? "Initial assessment" : "प्रारंभिक मूल्यांकन"}</p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-secondary text-white mx-auto mb-4 flex items-center justify-center text-xl font-bold">2</div>
                  <h3 className="font-bold mb-2">{language === "en" ? "Diagnosis" : "निदान"}</h3>
                  <p className="text-sm text-muted-foreground">{language === "en" ? "Advanced testing" : "उन्नत परीक्षण"}</p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent text-white mx-auto mb-4 flex items-center justify-center text-xl font-bold">3</div>
                  <h3 className="font-bold mb-2">{language === "en" ? "Treatment" : "उपचार"}</h3>
                  <p className="text-sm text-muted-foreground">{language === "en" ? "Expert care" : "विशेषज्ञ देखभाल"}</p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white mx-auto mb-4 flex items-center justify-center text-xl font-bold">4</div>
                  <h3 className="font-bold mb-2">{language === "en" ? "Follow-up" : "अनुवर्ती"}</h3>
                  <p className="text-sm text-muted-foreground">{language === "en" ? "Continued support" : "निरंतर समर्थन"}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 7: Emergency Services */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              {language === "en" ? "24/7 Emergency Services" : "24/7 आपातकालीन सेवाएं"}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {language === "en"
                ? "Our emergency department is always ready to provide immediate medical attention when you need it most."
                : "हमारा आपातकालीन विभाग हमेशा तत्काल चिकित्सा ध्यान प्रदान करने के लिए तैयार है जब आपको इसकी सबसे अधिक आवश्यकता होती है।"}
            </p>
          </div>
        </section>

        {/* Section 8: Diagnostic Services */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">
              {language === "en" ? "Diagnostic Services" : "नैदानिक सेवाएं"}
            </h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground">
                {language === "en"
                  ? "Advanced laboratory and imaging services including X-Ray, Ultrasound, ECG, and pathology tests."
                  : "एक्स-रे, अल्ट्रासाउंड, ईसीजी और पैथोलॉजी परीक्षणों सहित उन्नत प्रयोगशाला और इमेजिंग सेवाएं।"}
              </p>
            </div>
          </div>
        </section>

        {/* Section 9: Preventive Care */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">
            {language === "en" ? "Preventive Care Programs" : "निवारक देखभाल कार्यक्रम"}
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground">
              {language === "en"
                ? "Regular health screenings, vaccination drives, and health education programs to keep you healthy."
                : "नियमित स्वास्थ्य जांच, टीकाकरण अभियान और स्वास्थ्य शिक्षा कार्यक्रम आपको स्वस्थ रखने के लिए।"}
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;

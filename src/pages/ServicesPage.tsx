import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import ContentSlider from "@/components/ContentSlider";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle, Heart, Activity, Brain, Bone, Eye, Stethoscope, Syringe, Award, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesPage = () => {
  const { language } = useLanguage();

  const heroSlides = [
    {
      image: "/src/assets/service-cardiology.jpg",
      title: language === "en" ? "Comprehensive Healthcare Services" : "व्यापक स्वास्थ्य सेवाएं",
      subtitle: language === "en" ? "Our Services" : "हमारी सेवाएं",
      description: language === "en"
        ? "From routine check-ups to specialized treatments, we offer a complete range of medical services."
        : "नियमित जांच से लेकर विशेष उपचार तक, हम चिकित्सा सेवाओं की पूरी श्रृंखला प्रदान करते हैं।",
    },
    {
      image: "/src/assets/service-neurology.jpg",
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
      gradient: "from-primary to-secondary",
    },
    {
      title: language === "en" ? "Specialized Departments" : "विशेष विभाग",
      description: language === "en"
        ? "Our hospital has dedicated departments for various medical specialties with expert doctors."
        : "हमारे अस्पताल में विशेषज्ञ डॉक्टरों के साथ विभिन्न चिकित्सा विशेषताओं के लिए समर्पित विभाग हैं।",
      gradient: "from-secondary to-accent",
    },
    {
      title: language === "en" ? "Advanced Treatments" : "उन्नत उपचार",
      description: language === "en"
        ? "We offer the latest treatment methods and technologies for better patient outcomes."
        : "हम बेहतर रोगी परिणामों के लिए नवीनतम उपचार विधियां और प्रौद्योगिकियां प्रदान करते हैं।",
      gradient: "from-accent to-primary",
    },
  ];

  const features = [
    { icon: Heart, text: language === "en" ? "State-of-the-art Medical Equipment" : "अत्याधुनिक चिकित्सा उपकरण" },
    { icon: Clock, text: language === "en" ? "24/7 Emergency Services" : "24/7 आपातकालीन सेवाएं" },
    { icon: Award, text: language === "en" ? "Experienced Medical Professionals" : "अनुभवी चिकित्सा पेशेवर" },
    { icon: Activity, text: language === "en" ? "Comfortable Patient Rooms" : "आरामदायक रोगी कक्ष" },
    { icon: Brain, text: language === "en" ? "Advanced Diagnostic Facilities" : "उन्नत नैदानिक सुविधाएं" },
    { icon: Bone, text: language === "en" ? "Personalized Treatment Plans" : "व्यक्तिगत उपचार योजनाएं" },
    { icon: Eye, text: language === "en" ? "Regular Health Checkups" : "नियमित स्वास्थ्य जांच" },
    { icon: Stethoscope, text: language === "en" ? "Expert Consultations" : "विशेषज्ञ परामर्श" },
    { icon: Syringe, text: language === "en" ? "Vaccination Programs" : "टीकाकरण कार्यक्रम" },
    { icon: CheckCircle, text: language === "en" ? "Post-Treatment Care" : "उपचार के बाद देखभाल" },
  ];

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

        {/* Section 3: Services Grid */}
        <section className="container mx-auto px-4 mb-20 mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              {language === "en" ? "Our Services" : "हमारी सेवाएं"}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              {language === "en" ? "Comprehensive Healthcare Services" : "व्यापक स्वास्थ्य सेवाएं"}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {language === "en"
                ? "From routine check-ups to specialized treatments, we offer a complete range of medical services."
                : "नियमित जांच से लेकर विशेष उपचार तक, हम चिकित्सा सेवाओं की पूरी श्रृंखला प्रदान करते हैं।"}
            </p>
          </div>
        </section>

        {/* Section 3: Services Grid */}
        <Services />

        {/* Section 4: Features */}
        <section className="container mx-auto px-4 py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              {language === "en" ? "Why Choose Our Services?" : "हमारी सेवाएं क्यों चुनें?"}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 rounded-lg bg-background hover:bg-muted/50 transition-colors hover-lift"
                >
                  <feature.icon className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
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

        {/* Section 10: Gallery */}
        <Gallery />
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;

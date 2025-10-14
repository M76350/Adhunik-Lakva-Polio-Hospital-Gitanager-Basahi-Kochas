import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import DoctorsGallery from "@/components/DoctorsGallery";
import Testimonials from "@/components/Testimonials";
import HospitalMap from "@/components/HospitalMap";
import NearestLocations from "@/components/NearestLocations";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import Gallery from "@/components/Gallery";
import ContentSlider from "@/components/ContentSlider";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Clock, Shield, Users, Activity } from "lucide-react";

const Index = () => {
  const { language } = useLanguage();

  const sliderContent = [
    {
      title: language === "en" ? "Welcome to Aadhunik Lakava Polio Hospital" : "आधुनिक लकवा पोलियो अस्पताल में आपका स्वागत है",
      description: language === "en" 
        ? "We have been serving the Buxar community for over 25 years with specialized care in polio treatment and rehabilitation."
        : "हम 25 से अधिक वर्षों से बक्सर समुदाय को पोलियो उपचार और पुनर्वास में विशेष देखभाल प्रदान कर रहे हैं।",
      gradient: "from-primary to-secondary",
    },
    {
      title: language === "en" ? "Advanced Treatment Facilities" : "उन्नत उपचार सुविधाएं",
      description: language === "en"
        ? "State-of-the-art equipment and experienced medical professionals dedicated to your recovery."
        : "आपकी रिकवरी के लिए समर्पित अत्याधुनिक उपकरण और अनुभवी चिकित्सा पेशेवर।",
      gradient: "from-secondary to-accent",
    },
    {
      title: language === "en" ? "Patient-Centered Care" : "रोगी-केंद्रित देखभाल",
      description: language === "en"
        ? "Compassionate care tailored to each patient's unique needs and circumstances."
        : "प्रत्येक रोगी की अनूठी जरूरतों और परिस्थितियों के अनुरूप दयालु देखभाल।",
      gradient: "from-accent to-primary",
    },
  ];

  const features = [
    {
      icon: Award,
      title: language === "en" ? "Excellence in Care" : "देखभाल में उत्कृष्टता",
      description: language === "en" ? "Award-winning medical services" : "पुरस्कार विजेता चिकित्सा सेवाएं",
    },
    {
      icon: Heart,
      title: language === "en" ? "Compassionate" : "दयालु",
      description: language === "en" ? "Treating patients like family" : "मरीजों को परिवार की तरह मानना",
    },
    {
      icon: Clock,
      title: language === "en" ? "24/7 Emergency" : "24/7 आपातकाल",
      description: language === "en" ? "Round-the-clock emergency care" : "चौबीसों घंटे आपातकालीन देखभाल",
    },
    {
      icon: Shield,
      title: language === "en" ? "Safety First" : "सुरक्षा पहले",
      description: language === "en" ? "Highest safety standards" : "उच्चतम सुरक्षा मानक",
    },
    {
      icon: Users,
      title: language === "en" ? "Expert Team" : "विशेषज्ञ टीम",
      description: language === "en" ? "Highly qualified professionals" : "उच्च योग्य पेशेवर",
    },
    {
      icon: Activity,
      title: language === "en" ? "Modern Equipment" : "आधुनिक उपकरण",
      description: language === "en" ? "Latest medical technology" : "नवीनतम चिकित्सा प्रौद्योगिकी",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Content Slider */}
        <ContentSlider slides={sliderContent} />

        {/* Section 3: Features */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                {language === "en" ? "Why Choose Us" : "हमें क्यों चुनें"}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <Card key={index} className="hover-lift border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Services */}
        <Services />

        {/* Section 5: Doctors Gallery */}
        <DoctorsGallery />

        {/* Section 6: Gallery */}
        <Gallery />

        {/* Section 7: Testimonials */}
        <Testimonials />

        {/* Section 8: Hospital Map */}
        <HospitalMap />

        {/* Section 9: Nearest Locations */}
        <NearestLocations />

        {/* Section 10: CTA */}
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Index;

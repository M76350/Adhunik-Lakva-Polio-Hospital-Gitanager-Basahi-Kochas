import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";

import ContentSlider from "@/components/ContentSlider";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation, Building, Users, Calendar, Shield } from "lucide-react";
import contentData from "@/data/content.json";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import heroHospital from "@/assets/hero-hospital.jpg";
import serviceCardiology from "@/assets/service-cardiology.jpg";
import serviceNeurology from "@/assets/service-neurology.jpg";

const Contact = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const contactContent = language === "en" ? contentData.en.contact : contentData.hi.contact;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: language === "en" ? "Message Sent!" : "संदेश भेजा गया!",
      description: language === "en" 
        ? "We'll get back to you soon." 
        : "हम जल्द ही आपसे संपर्क करेंगे।",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const heroSlides = [
    {
      image: heroHospital,
      title: language === "en" ? "Get in Touch" : "संपर्क में रहें",
      subtitle: language === "en" ? "Contact Us" : "संपर्क करें",
      description: language === "en" 
        ? "We're here to help with all your healthcare needs. Reach out to us anytime."
        : "हम आपकी सभी स्वास्थ्य देखभाल जरूरतों में मदद के लिए यहां हैं। किसी भी समय हमसे संपर्क करें।",
    },
    {
      image: serviceCardiology,
      title: language === "en" ? "24/7 Support" : "24/7 सहायता",
      subtitle: language === "en" ? "Always Available" : "हमेशा उपलब्ध",
      description: language === "en" 
        ? "Round-the-clock emergency services and support available for you."
        : "चौबीसों घंटे आपातकालीन सेवाएं और सहायता आपके लिए उपलब्ध।",
    },
  ];

  const slides = [
    {
      title: language === "en" ? "Get in Touch" : "संपर्क में रहें",
      description: language === "en" ? "We're here to help with all your healthcare needs" : "हम आपकी सभी स्वास्थ्य देखभाल जरूरतों में मदद के लिए यहां हैं",
      image: heroHospital,
      gradient: "from-primary to-secondary",
    },
    {
      title: language === "en" ? "24/7 Support" : "24/7 सहायता",
      description: language === "en" ? "Round-the-clock emergency services available" : "चौबीसों घंटे आपातकालीन सेवाएं उपलब्ध",
      image: serviceCardiology,
      gradient: "from-secondary to-accent",
    },
    {
      title: language === "en" ? "Easy Access" : "आसान पहुंच",
      description: language === "en" ? "Multiple ways to reach us for your convenience" : "आपकी सुविधा के लिए हमसे संपर्क करने के कई तरीके",
      image: serviceNeurology,
      gradient: "from-accent to-primary",
    },
  ];

  const contactInfo = [
    { 
      icon: MapPin, 
      title: language === "en" ? "Address" : "पता", 
      content: language === "en" ? "Geeta Nagar Basahi, Buxar" : "गीता नगर बसाही, बक्सर",
      detail: contactContent.sections.address
    },
    { 
      icon: Phone, 
      title: language === "en" ? "Phone" : "फोन", 
      content: "+91 XXXXX-XXXXX",
      detail: contactContent.sections.phone
    },
    { 
      icon: Mail, 
      title: language === "en" ? "Email" : "ईमेल", 
      content: "info@aadhunikhospital.com",
      detail: contactContent.sections.email
    },
    { 
      icon: Clock, 
      title: language === "en" ? "Hours" : "समय", 
      content: language === "en" ? "24/7 Emergency Services" : "24/7 आपातकालीन सेवाएं",
      detail: contactContent.sections.hours
    },
    { 
      icon: MessageCircle, 
      title: language === "en" ? "WhatsApp" : "व्हाट्सएप", 
      content: "+91 XXXXX-XXXXX",
      detail: contactContent.sections.whatsapp
    },
    { 
      icon: Navigation, 
      title: language === "en" ? "Directions" : "दिशा-निर्देश", 
      content: language === "en" ? "Get Directions" : "दिशा निर्देश प्राप्त करें",
      detail: contactContent.sections.directions
    },
  ];

  const features = [
    { icon: Building, title: contactContent.features[0].title, description: contactContent.features[0].description },
    { icon: Users, title: contactContent.features[1].title, description: contactContent.features[1].description },
    { icon: Calendar, title: contactContent.features[2].title, description: contactContent.features[2].description },
    { icon: Shield, title: contactContent.features[3].title, description: contactContent.features[3].description },
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      <Navbar />
      
      <main>
        {/* Section 1: Hero Slider */}
        <HeroSlider slides={heroSlides} />

        {/* Section 2: Content Slider */}
        <ContentSlider slides={slides} />

        {/* Section 3: Contact Cards */}
        <section className="container mx-auto px-4 mb-20 mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              {language === "en" ? "Contact Us" : "संपर्क करें"}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              {language === "en" ? "Get in Touch" : "संपर्क में रहें"}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {language === "en" ? "We're here to help with all your healthcare needs" : "हम आपकी सभी स्वास्थ्य देखभाल जरूरतों में मदद के लिए यहां हैं"}
            </p>
          </div>
        </section>

        {/* Section 3: Contact Cards with Blog-style Content */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-primary p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mx-auto mb-4 flex items-center justify-center">
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                    <p className="text-sm text-white/90 font-medium">{info.content}</p>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-foreground mb-3">{info.detail.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {info.detail.content}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Section 4: Contact Form */}
        <section className="container mx-auto px-4 py-20 bg-muted/30">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  {language === "en" ? "Send Message" : "संदेश भेजें"}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input 
                    placeholder={language === "en" ? "Full Name" : "पूरा नाम"} 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                  <Input 
                    type="email" 
                    placeholder={language === "en" ? "Email" : "ईमेल"} 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                  <Input 
                    type="tel" 
                    placeholder={language === "en" ? "Phone" : "फोन"} 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                  <Textarea 
                    placeholder={language === "en" ? "Message" : "संदेश"} 
                    rows={5} 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                  <Button type="submit" className="w-full gradient-primary text-white py-6">
                    {language === "en" ? "Send Message" : "संदेश भेजें"}
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <Card key={index} className="hover-lift border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-foreground mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sections 5-10: Additional sections */}
        <section className="container mx-auto px-4 py-20"><h2 className="text-4xl font-bold text-center mb-8">{language === "en" ? "Visit Us" : "हमें मिलें"}</h2></section>
        <section className="bg-muted/30 py-20"><h2 className="text-4xl font-bold text-center">{language === "en" ? "Emergency Contact" : "आपातकालीन संपर्क"}</h2></section>
        <section className="container mx-auto px-4 py-20"><h2 className="text-4xl font-bold text-center">{language === "en" ? "Feedback" : "प्रतिक्रिया"}</h2></section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

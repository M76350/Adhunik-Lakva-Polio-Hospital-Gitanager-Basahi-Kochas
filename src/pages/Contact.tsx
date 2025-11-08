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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');

      toast({
        title: language === "en" ? "Message Sent!" : "संदेश भेजा गया!",
        description: language === "en" 
          ? "We'll get back to you soon." 
          : "हम जल्द ही आपसे संपर्क करेंगे।",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast({
        title: language === "en" ? "Error" : "त्रुटि",
        description: language === "en" 
          ? "Failed to send message. Please try again." 
          : "संदेश भेजने में विफल। कृपया पुनः प्रयास करें।",
        variant: "destructive",
      });
    }
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
      content: "+91 9110142755",
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
      content: "+91 9110142755",
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
                      <info.icon className="w-10 h-10 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-green-600 mb-2">{info.title}</h3>
                    <p className="text-lg text-primary font-medium">{info.content}</p>
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
                  <Button type="submit" className="w-full bg-primary text-primary-foreground py-6 hover:bg-primary/90">
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

        {/* Section 5: Visit Us */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              {language === "en" ? "Visit Us" : "हमें मिलें"}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "Located in Geetanagar Basahi, Buxar district, near Kochas and just 2km from Rohtas border, we are easily accessible from surrounding areas."
                  : "गीता नगर बसाही, बक्सर जिले में स्थित, कोचास के पास और रोहतास सीमा से केवल 2 किमी दूर, हम आसपास के क्षेत्रों से आसानी से सुलभ हैं।"}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "Our hospital is well-connected by road and public transport. Ample parking space is available for patients and visitors."
                  : "हमारा अस्पताल सड़क और सार्वजनिक परिवहन द्वारा अच्छी तरह से जुड़ा हुआ है। मरीजों और आगंतुकों के लिए पर्याप्त पार्किंग स्थान उपलब्ध है।"}
              </p>
            </div>
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&auto=format&fit=crop"
                alt="Hospital location"
                className="rounded-2xl shadow-2xl transition-all duration-700 ease-in-out group-hover:scale-105 animate-float"
              />
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 blur-sm"></div>
            </div>
          </div>
        </section>

        {/* Section 6: Emergency Contact */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                {language === "en" ? "Emergency Contact" : "आपातकालीन संपर्क"}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="relative group order-2 md:order-1">
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop"
                  alt="Emergency services"
                  className="rounded-2xl shadow-2xl transition-all duration-700 ease-in-out group-hover:scale-105 animate-pulse-glow"
                />
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tl from-accent/30 via-primary/20 to-secondary/30 blur-sm"></div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {language === "en"
                    ? "For medical emergencies, call our 24/7 emergency hotline. Our team is always ready to provide immediate assistance and care."
                    : "चिकित्सा आपात स्थितियों के लिए, हमारी 24/7 आपातकालीन हॉटलाइन पर कॉल करें। हमारी टीम हमेशा तत्काल सहायता और देखभाल प्रदान करने के लिए तैयार है।"}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {language === "en"
                    ? "We have a dedicated emergency department equipped with modern facilities to handle all types of medical emergencies."
                    : "हमारे पास सभी प्रकार की चिकित्सा आपात स्थितियों को संभालने के लिए आधुनिक सुविधाओं से सुसज्जित एक समर्पित आपातकालीन विभाग है।"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Feedback */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              {language === "en" ? "Feedback" : "प्रतिक्रिया"}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "Your feedback helps us improve our services. We value your opinion and encourage you to share your experience with us."
                  : "आपकी प्रतिक्रिया हमें अपनी सेवाओं में सुधार करने में मदद करती है। हम आपकी राय को महत्व देते हैं और आपको हमारे साथ अपना अनुभव साझा करने के लिए प्रोत्साहित करते हैं।"}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "Whether it's a compliment, suggestion, or concern, we're here to listen and take action to serve you better."
                  : "चाहे वह प्रशंसा हो, सुझाव हो, या चिंता हो, हम आपकी बेहतर सेवा के लिए सुनने और कार्रवाई करने के लिए यहां हैं।"}
              </p>
            </div>
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop"
                alt="Patient feedback"
                className="rounded-2xl shadow-2xl transition-all duration-700 ease-in-out group-hover:scale-105 animate-zoom-in-out"
              />
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-secondary/30 via-accent/20 to-primary/30 blur-sm"></div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

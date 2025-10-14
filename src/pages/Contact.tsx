import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import ContentSlider from "@/components/ContentSlider";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation, Building, Users, Calendar, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const { language } = useLanguage();

  const slides = [
    {
      title: language === "en" ? "Get in Touch" : "संपर्क में रहें",
      description: language === "en" ? "We're here to help with all your healthcare needs" : "हम आपकी सभी स्वास्थ्य देखभाल जरूरतों में मदद के लिए यहां हैं",
      gradient: "from-primary to-secondary",
    },
    {
      title: language === "en" ? "24/7 Support" : "24/7 सहायता",
      description: language === "en" ? "Round-the-clock emergency services available" : "चौबीसों घंटे आपातकालीन सेवाएं उपलब्ध",
      gradient: "from-secondary to-accent",
    },
    {
      title: language === "en" ? "Easy Access" : "आसान पहुंच",
      description: language === "en" ? "Multiple ways to reach us for your convenience" : "आपकी सुविधा के लिए हमसे संपर्क करने के कई तरीके",
      gradient: "from-accent to-primary",
    },
  ];

  const contactInfo = [
    { icon: MapPin, title: language === "en" ? "Address" : "पता", content: language === "en" ? "Geeta Nagar Basahi, Buxar" : "गीता नगर बसाही, बक्सर" },
    { icon: Phone, title: language === "en" ? "Phone" : "फोन", content: "+91 XXXXX-XXXXX" },
    { icon: Mail, title: language === "en" ? "Email" : "ईमेल", content: "info@aadhunikhospital.com" },
    { icon: Clock, title: language === "en" ? "Hours" : "समय", content: language === "en" ? "24/7 Emergency Services" : "24/7 आपातकालीन सेवाएं" },
    { icon: MessageCircle, title: language === "en" ? "WhatsApp" : "व्हाट्सएप", content: "+91 XXXXX-XXXXX" },
    { icon: Navigation, title: language === "en" ? "Directions" : "दिशा-निर्देश", content: language === "en" ? "Get Directions" : "दिशा निर्देश प्राप्त करें" },
  ];

  const features = [
    { icon: Building, text: language === "en" ? "Modern Facilities" : "आधुनिक सुविधाएं" },
    { icon: Users, text: language === "en" ? "Experienced Staff" : "अनुभवी स्टाफ" },
    { icon: Calendar, text: language === "en" ? "Easy Appointments" : "आसान अपॉइंटमेंट" },
    { icon: Shield, text: language === "en" ? "Safe & Secure" : "सुरक्षित और संरक्षित" },
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Section 1: Hero */}
        <section className="container mx-auto px-4 mb-20">
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

        {/* Section 2: Slider */}
        <ContentSlider slides={slides} />

        {/* Section 3: Contact Cards */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{info.title}</h3>
                  <p className="text-sm text-muted-foreground">{info.content}</p>
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
                <form className="space-y-6">
                  <Input placeholder={language === "en" ? "Full Name" : "पूरा नाम"} />
                  <Input type="email" placeholder={language === "en" ? "Email" : "ईमेल"} />
                  <Input type="tel" placeholder={language === "en" ? "Phone" : "फोन"} />
                  <Textarea placeholder={language === "en" ? "Message" : "संदेश"} rows={5} />
                  <Button className="w-full gradient-primary text-white py-6">
                    {language === "en" ? "Send Message" : "संदेश भेजें"}
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6 flex items-center gap-4">
                    <feature.icon className="w-12 h-12 text-primary" />
                    <p className="font-semibold text-lg">{feature.text}</p>
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
        <Gallery />
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

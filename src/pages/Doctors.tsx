import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DoctorsSlider from "@/components/DoctorsSlider";
import ContentSlider from "@/components/ContentSlider";
import Gallery from "@/components/Gallery";
import { useLanguage } from "@/contexts/LanguageContext";
import { Award, GraduationCap, Users, Heart, Trophy, BookOpen, Clock, Globe, Star, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Doctors = () => {
  const { language } = useLanguage();

  const slides = [
    {
      title: language === "en" ? "Expert Medical Team" : "विशेषज्ञ चिकित्सा टीम",
      description: language === "en"
        ? "Our doctors are highly qualified professionals with years of experience in their respective fields."
        : "हमारे डॉक्टर अपने-अपने क्षेत्रों में वर्षों के अनुभव वाले उच्च योग्य पेशेवर हैं।",
      gradient: "from-primary to-secondary",
    },
    {
      title: language === "en" ? "Specialized Care" : "विशेष देखभाल",
      description: language === "en"
        ? "Each doctor specializes in specific areas of medicine, ensuring expert treatment tailored to your needs."
        : "प्रत्येक डॉक्टर चिकित्सा के विशिष्ट क्षेत्रों में विशेषज्ञता रखता है, जो आपकी जरूरतों के अनुरूप विशेषज्ञ उपचार सुनिश्चित करता है।",
      gradient: "from-secondary to-accent",
    },
    {
      title: language === "en" ? "Patient-Centered Approach" : "रोगी-केंद्रित दृष्टिकोण",
      description: language === "en"
        ? "Our doctors believe in treating patients with compassion and respect, taking time to listen to your concerns."
        : "हमारे डॉक्टर करुणा और सम्मान के साथ मरीजों का इलाज करने में विश्वास करते हैं, आपकी चिंताओं को सुनने के लिए समय निकालते हैं।",
      gradient: "from-accent to-primary",
    },
  ];

  const highlights = [
    { icon: Award, title: language === "en" ? "Board Certified" : "बोर्ड प्रमाणित", description: language === "en" ? "All doctors are board-certified" : "सभी डॉक्टर बोर्ड प्रमाणित हैं" },
    { icon: GraduationCap, title: language === "en" ? "Highly Qualified" : "उच्च योग्य", description: language === "en" ? "Top medical school graduates" : "शीर्ष मेडिकल स्कूल स्नातक" },
    { icon: Users, title: language === "en" ? "Patient Focused" : "रोगी केंद्रित", description: language === "en" ? "Personalized care approach" : "व्यक्तिगत देखभाल दृष्टिकोण" },
    { icon: Heart, title: language === "en" ? "Compassionate" : "दयालु", description: language === "en" ? "Caring and empathetic" : "देखभाल और सहानुभूति" },
    { icon: Trophy, title: language === "en" ? "Award Winners" : "पुरस्कार विजेता", description: language === "en" ? "Recognized excellence" : "मान्यता प्राप्त उत्कृष्टता" },
    { icon: BookOpen, title: language === "en" ? "Continuous Learning" : "निरंतर सीखना", description: language === "en" ? "Updated with latest research" : "नवीनतम शोध से अपडेट" },
    { icon: Clock, title: language === "en" ? "Always Available" : "हमेशा उपलब्ध", description: language === "en" ? "24/7 emergency coverage" : "24/7 आपातकालीन कवरेज" },
    { icon: Globe, title: language === "en" ? "International Training" : "अंतर्राष्ट्रीय प्रशिक्षण", description: language === "en" ? "Global medical expertise" : "वैश्विक चिकित्सा विशेषज्ञता" },
    { icon: Star, title: language === "en" ? "Patient Satisfaction" : "रोगी संतुष्टि", description: language === "en" ? "Highest ratings" : "उच्चतम रेटिंग" },
    { icon: Target, title: language === "en" ? "Result-Oriented" : "परिणाम-उन्मुख", description: language === "en" ? "Focused on outcomes" : "परिणामों पर केंद्रित" },
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      <Navbar />
      
      <main className="pt-20 pb-20">
        {/* Section 1: Slider */}
        <ContentSlider slides={slides} />

        {/* Section 2: Hero */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              {language === "en" ? "Our Doctors" : "हमारे डॉक्टर"}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              {language === "en" ? "Meet Our Expert Medical Team" : "हमारी विशेषज्ञ चिकित्सा टीम से मिलें"}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {language === "en"
                ? "Our team of highly qualified and experienced doctors is committed to providing you with the best possible care."
                : "हमारी उच्च योग्य और अनुभवी डॉक्टरों की टीम आपको सर्वोत्तम संभव देखभाल प्रदान करने के लिए प्रतिबद्ध है।"}
            </p>
          </div>
        </section>

        {/* Section 2: Slider */}
        <ContentSlider slides={slides} />

        {/* Section 3: Highlights */}
        <section className="container mx-auto px-4 py-20 bg-muted/30">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-0 shadow-lg hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                    <highlight.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{highlight.title}</h3>
                  <p className="text-xs text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Section 4: Doctors Slider */}
        <DoctorsSlider />

        {/* Section 5: Specializations */}
        <section className="container mx-auto px-4 py-20 bg-muted/30">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">
            {language === "en" ? "Our Specializations" : "हमारी विशेषज्ञताएं"}
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {["Cardiology", "Neurology", "Orthopedics", "Pediatrics", "General Medicine", "Physiotherapy", "Radiology", "Emergency Care"].map((spec, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6 text-center">
                  <p className="font-semibold text-foreground">
                    {language === "en" ? spec : spec === "Cardiology" ? "हृदय रोग" : spec === "Neurology" ? "तंत्रिका विज्ञान" : spec === "Orthopedics" ? "आर्थोपेडिक्स" : spec === "Pediatrics" ? "बाल रोग" : spec === "General Medicine" ? "सामान्य चिकित्सा" : spec === "Physiotherapy" ? "फिजियोथेरेपी" : spec === "Radiology" ? "रेडियोलॉजी" : "आपातकालीन देखभाल"}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Section 6: Training & Education */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">
            {language === "en" ? "Training & Education" : "प्रशिक्षण और शिक्षा"}
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {language === "en"
                ? "Our doctors regularly participate in continuing medical education programs to stay updated with the latest advancements in their fields."
                : "हमारे डॉक्टर अपने क्षेत्रों में नवीनतम प्रगति से अपडेट रहने के लिए निरंतर चिकित्सा शिक्षा कार्यक्रमों में नियमित रूप से भाग लेते हैं।"}
            </p>
          </div>
        </section>

        {/* Section 7: Patient Care Philosophy */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">
              {language === "en" ? "Our Care Philosophy" : "हमारी देखभाल दर्शन"}
            </h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "We believe in holistic patient care that addresses not just the physical symptoms but also the emotional and psychological well-being of our patients."
                  : "हम समग्र रोगी देखभाल में विश्वास करते हैं जो केवल शारीरिक लक्षणों को ही नहीं बल्कि हमारे रोगियों की भावनात्मक और मनोवैज्ञानिक कल्याण को भी संबोधित करती है।"}
              </p>
            </div>
          </div>
        </section>

        {/* Section 8: Consultation Process */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">
            {language === "en" ? "Consultation Process" : "परामर्श प्रक्रिया"}
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              {language === "en"
                ? "Book an appointment, meet our expert doctors, get comprehensive diagnosis, and receive personalized treatment plans."
                : "अपॉइंटमेंट बुक करें, हमारे विशेषज्ञ डॉक्टरों से मिलें, व्यापक निदान प्राप्त करें, और व्यक्तिगत उपचार योजनाएं प्राप्त करें।"}
            </p>
          </div>
        </section>

        {/* Section 9: Success Stories */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">
              {language === "en" ? "Success Stories" : "सफलता की कहानियां"}
            </h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground">
                {language === "en"
                  ? "Thousands of patients have recovered and returned to healthy lives under the care of our expert medical team."
                  : "हजारों मरीज हमारी विशेषज्ञ चिकित्सा टीम की देखभाल में ठीक हो गए हैं और स्वस्थ जीवन में लौट आए हैं।"}
              </p>
            </div>
          </div>
        </section>

        {/* Section 10: Gallery */}
        <Gallery />

        {/* CTA Section */}
        <section className="container mx-auto px-4 mt-20">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {language === "en" ? "Schedule a Consultation" : "परामर्श निर्धारित करें"}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {language === "en" ? "Book an appointment with one of our expert doctors today" : "आज ही हमारे विशेषज्ञ डॉक्टरों में से एक के साथ अपॉइंटमेंट बुक करें"}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Doctors;

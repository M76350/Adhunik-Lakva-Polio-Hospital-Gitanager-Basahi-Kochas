import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import ContentSlider from "@/components/ContentSlider";

import { useLanguage } from "@/contexts/LanguageContext";
import { Award, Users, Heart, Shield, Target, Eye, Lightbulb, TrendingUp, Globe, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import heroHospital from "@/assets/hero-hospital.jpg";
import serviceOrthopedics from "@/assets/service-orthopedics.jpg";
import ExactCube from "@/components/ExactCube";

const About = () => {
  const { language } = useLanguage();

  const heroSlides = [
    {
      image: heroHospital,
      title: language === "en" ? "Caring for Your Health Since 1998" : "1998 से आपके स्वास्थ्य की देखभाल",
      subtitle: language === "en" ? "About Us" : "हमारे बारे में",
      description: language === "en"
        ? "Aadhunik Lakava Polio Hospital has been a trusted healthcare provider for over 25 years."
        : "आधुनिक लकवा पोलियो अस्पताल 25 से अधिक वर्षों से एक विश्वसनीय स्वास्थ्य सेवा प्रदाता रहा है।",
    },
    {
      image: serviceOrthopedics,
      title: language === "en" ? "Excellence in Medical Care" : "चिकित्सा देखभाल में उत्कृष्टता",
      subtitle: language === "en" ? "Our Mission" : "हमारा मिशन",
      description: language === "en"
        ? "Providing accessible, compassionate, and innovative healthcare services to our community."
        : "हमारे समुदाय को सुलभ, दयालु और अभिन्न स्वास्थ्य सेवाएं प्रदान करना।",
    },
  ];

  const slides = [
    {
      title: language === "en" ? "Our Journey" : "हमारी यात्रा",
      description: language === "en"
        ? "Founded in 1998, Aadhunik Lakava Polio Hospital has been serving the Buxar community for over 25 years with dedication and compassion."
        : "1998 में स्थापित, आधुनिक लकवा पोलियो अस्पताल 25 से अधिक वर्षों से समर्पण और करुणा के साथ बक्सर समुदाय की सेवा कर रहा है।",
      gradient: "from-primary to-secondary",
    },
    {
      title: language === "en" ? "Our Vision" : "हमारी दृष्टि",
      description: language === "en"
        ? "To be the leading healthcare provider in the region, known for excellence in medical care and patient satisfaction."
        : "चिकित्सा देखभाल और रोगी संतुष्टि में उत्कृष्टता के लिए जाना जाने वाला क्षेत्र का अग्रणी स्वास्थ्य सेवा प्रदाता बनना।",
      gradient: "from-secondary to-accent",
    },
    {
      title: language === "en" ? "Our Commitment" : "हमारी प्रतिबद्धता",
      description: language === "en"
        ? "Providing accessible, affordable, and high-quality healthcare to all members of our community."
        : "हमारे समुदाय के सभी सदस्यों को सुलभ, किफायती और उच्च गुणवत्ता वाली स्वास्थ्य सेवा प्रदान करना।",
      gradient: "from-accent to-primary",
    },
  ];

  const values = [
    { icon: Heart, title: language === "en" ? "Compassionate Care" : "दयालु देखभाल", description: language === "en" ? "Treating every patient with empathy" : "प्रत्येक रोगी का सहानुभूति से इलाज" },
    { icon: Award, title: language === "en" ? "Excellence" : "उत्कृष्टता", description: language === "en" ? "Highest standards of medical practice" : "चिकित्सा अभ्यास के उच्चतम मानक" },
    { icon: Users, title: language === "en" ? "Patient-Centered" : "रोगी-केंद्रित", description: language === "en" ? "Your health is our priority" : "आपका स्वास्थ्य हमारी प्राथमिकता है" },
    { icon: Shield, title: language === "en" ? "Safety First" : "सुरक्षा पहले", description: language === "en" ? "Rigorous safety protocols" : "कठोर सुरक्षा प्रोटोकॉल" },
    { icon: Target, title: language === "en" ? "Goal-Oriented" : "लक्ष्य-उन्मुख", description: language === "en" ? "Focused on patient recovery" : "रोगी रिकवरी पर केंद्रित" },
    { icon: Eye, title: language === "en" ? "Transparency" : "पारदर्शिता", description: language === "en" ? "Clear communication always" : "हमेशा स्पष्ट संचार" },
    { icon: Lightbulb, title: language === "en" ? "Innovation" : "नवाचार", description: language === "en" ? "Latest medical advancements" : "नवीनतम चिकित्सा प्रगति" },
    { icon: TrendingUp, title: language === "en" ? "Continuous Improvement" : "निरंतर सुधार", description: language === "en" ? "Always evolving care" : "हमेशा विकसित देखभाल" },
    { icon: Globe, title: language === "en" ? "Community Focus" : "समुदाय फोकस", description: language === "en" ? "Serving the local community" : "स्थानीय समुदाय की सेवा" },
    { icon: Clock, title: language === "en" ? "24/7 Availability" : "24/7 उपलब्धता", description: language === "en" ? "Always here when you need us" : "जब आपको हमारी ज़रूरत हो, हम यहाँ हैं" },
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      <Navbar />

      <main>
        {/* Section 1: Hero Slider */}
        <HeroSlider slides={heroSlides} />

        {/* Section 2: Content Slider */}
        <ContentSlider slides={slides} />

        {/* Section 3: Story */}
        <section className="container mx-auto px-4 mb-20 mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              {language === "en" ? "About Us" : "हमारे बारे में"}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              {language === "en" ? "Caring for Your Health Since 1998" : "1998 से आपके स्वास्थ्य की देखभाल"}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {language === "en"
                ? "Aadhunik Lakava Polio Hospital has been a trusted healthcare provider for over 25 years."
                : "आधुनिक लकवा पोलियो अस्पताल 25 से अधिक वर्षों से एक विश्वसनीय स्वास्थ्य सेवा प्रदाता रहा है।"}
            </p>
          </div>
        </section>

        {/* Section 2: Story */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6 md:order-1">
              <h2 className="text-4xl font-bold text-foreground">{language === "en" ? "Our Story" : "हमारी कहानी"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "Founded with a vision to provide accessible healthcare, we have grown from a small clinic to a full-service hospital."
                  : "सुलभ स्वास्थ्य सेवा प्रदान करने की दृष्टि से स्थापित, हम एक छोटे क्लिनिक से एक पूर्ण-सेवा अस्पताल तक बढ़े हैं।"}
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <div className="text-sm text-muted-foreground">{language === "en" ? "Years" : "वर्ष"}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">{language === "en" ? "Doctors" : "डॉक्टर"}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">10K+</div>
                  <div className="text-sm text-muted-foreground">{language === "en" ? "Patients" : "मरीज"}</div>
                </div>
              </div>
            </div>
            <div className="relative md:order-2 pt-36">
              <ExactCube />
            </div>
          </div>
        </section>

        {/* Section 3: Our Core Values (separate section below story) */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-foreground">
                {language === "en" ? "Our Core Values" : "हमारे मूल मूल्य"}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="hover-lift border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="group w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center transition-transform duration-500 ease-out hover:-translate-y-2 hover:shadow-lg">
                      <value.icon className="w-12 h-12 text-blue-500 transform transition-transform duration-700 [transition-timing-function:cubic-bezier(0.25,0.8,0.25,1)] group-hover:[transform:scaleY(-1)_translateY(-5px)]" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-xs text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Mission */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              {language === "en" ? "Our Mission" : "हमारा मिशन"}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "To provide accessible, compassionate, and innovative healthcare services that improve community health and wellbeing."
                  : "सुलभ, दयालु और अभिन्न स्वास्थ्य सेवाएं प्रदान करना जो समुदाय के स्वास्थ्य और कल्याण में सुधार करें।"}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "We strive to be a healthcare partner that patients can trust, delivering quality medical care through evidence-based practices and compassionate service."
                  : "हम एक ऐसा स्वास्थ्य सेवा साथी बनने का प्रयास करते हैं जिस पर मरीज भरोसा कर सकें, साक्ष्य-आधारित प्रथाओं और दयालु सेवा के माध्यम से गुणवत्तापूर्ण चिकित्सा देखभाल प्रदान करते हुए।"}
              </p>
            </div>
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop"
                alt="Healthcare mission"
                className="rounded-2xl shadow-2xl transition-all duration-700 ease-in-out group-hover:scale-105 animate-float"
              />
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-sm"></div>
            </div>
          </div>
        </section>

        {/* Section 7: Achievements */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">
              {language === "en" ? "Our Achievements" : "हमारी उपलब्धियां"}
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="hover-lift">
                <CardContent className="p-8 text-center">
                  <Award className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{language === "en" ? "Best Hospital 2023" : "सर्वश्रेष्ठ अस्पताल 2023"}</h3>
                  <p className="text-muted-foreground">{language === "en" ? "Regional Healthcare Award" : "क्षेत्रीय स्वास्थ्य पुरस्कार"}</p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="p-8 text-center">
                  <Users className="w-16 h-16 text-secondary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{language === "en" ? "12,000+" : "12,000+"}</h3>
                  <p className="text-muted-foreground">{language === "en" ? "Patients Treated Successfully" : "सफलतापूर्वक उपचारित मरीज"}</p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="p-8 text-center">
                  <Heart className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{language === "en" ? "95%" : "95%"}</h3>
                  <p className="text-muted-foreground">{language === "en" ? "Patient Satisfaction Rate" : "रोगी संतुष्टि दर"}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 8: Team Culture */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              {language === "en" ? "Our Team Culture" : "हमारी टीम संस्कृति"}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative group order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&auto=format&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl transition-all duration-700 ease-in-out group-hover:scale-105 animate-pulse-glow"
              />
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-bl from-accent/30 via-primary/20 to-secondary/30 blur-sm"></div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "We foster a collaborative environment where healthcare professionals work together to deliver the best possible patient care."
                  : "हम एक सहयोगी वातावरण को बढ़ावा देते हैं जहां स्वास्थ्य सेवा पेशेवर सर्वोत्तम संभव रोगी देखभाल प्रदान करने के लिए मिलकर काम करते हैं।"}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "Our team members are encouraged to share knowledge, learn from each other, and continuously improve their skills to serve our patients better."
                  : "हमारी टीम के सदस्यों को ज्ञान साझा करने, एक-दूसरे से सीखने और अपने मरीजों की बेहतर सेवा के लिए अपने कौशल में लगातार सुधार करने के लिए प्रोत्साहित किया जाता है।"}
              </p>
            </div>
          </div>
        </section>

        {/* Section 9: Community Impact */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                {language === "en" ? "Community Impact" : "सामुदायिक प्रभाव"}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {language === "en"
                    ? "Through health camps, awareness programs, and free consultations, we actively contribute to improving public health in Buxar and surrounding areas."
                    : "स्वास्थ्य शिविरों, जागरूकता कार्यक्रमों और मुफ्त परामर्श के माध्यम से, हम बक्सर और आसपास के क्षेत्रों में सार्वजनिक स्वास्थ्य में सुधार में सक्रिय रूप से योगदान करते हैं।"}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {language === "en"
                    ? "We believe in giving back to the community that has supported us for over 25 years by organizing regular health camps and educational programs."
                    : "हम नियमित स्वास्थ्य शिविरों और शैक्षिक कार्यक्रमों का आयोजन करके उस समुदाय को वापस देने में विश्वास करते हैं जिसने 25 से अधिक वर्षों से हमारा समर्थन किया है।"}
                </p>
              </div>
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&auto=format&fit=crop"
                  alt="Community health camp"
                  className="rounded-2xl shadow-2xl transition-all duration-700 ease-in-out group-hover:scale-105 animate-swing"
                />
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-secondary/30 via-accent/20 to-primary/30 blur-sm"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 10: Technology & Innovation */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              {language === "en" ? "Technology & Innovation" : "प्रौद्योगिकी और नवाचार"}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative group order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&auto=format&fit=crop"
                alt="Medical technology"
                className="rounded-2xl shadow-2xl transition-all duration-700 ease-in-out group-hover:scale-105 animate-zoom-in-out"
              />
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tl from-primary/30 via-accent/20 to-secondary/30 blur-sm"></div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "We continuously invest in the latest medical technology and equipment to provide cutting-edge treatment options."
                  : "हम अत्याधुनिक उपचार विकल्प प्रदान करने के लिए नवीनतम चिकित्सा प्रौद्योगिकी और उपकरणों में लगातार निवेश करते हैं।"}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "From advanced diagnostic equipment to modern treatment facilities, we ensure our patients have access to the best medical technology available."
                  : "उन्नत निदान उपकरण से लेकर आधुनिक उपचार सुविधाओं तक, हम सुनिश्चित करते हैं कि हमारे मरीजों को उपलब्ध सर्वोत्तम चिकित्सा प्रौद्योगिकी तक पहुंच हो।"}
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default About;

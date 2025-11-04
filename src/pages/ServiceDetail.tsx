import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Heart, Brain, Bone, Baby, Eye, Activity, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import cardiologyImg from "@/assets/service-cardiology.jpg";
import neurologyImg from "@/assets/service-neurology.jpg";
import orthopedicsImg from "@/assets/service-orthopedics.jpg";
import AppointmentDialog from "@/components/AppointmentDialog";
import { useLanguage } from "@/contexts/LanguageContext";

const serviceDetails: Record<string, any> = {
  cardiology: {
    icon: Heart,
    title: "Cardiology",
    titleHi: "हृदय रोग विभाग",
    description: "Advanced cardiac care with state-of-the-art technology and experienced cardiologists.",
    descriptionHi: "अत्याधुनिक तकनीक और अनुभवी हृदय रोग विशेषज्ञों के साथ उन्नत हृदय देखभाल।",
    image: cardiologyImg,
    color: "from-red-500 to-pink-500",
    fullDescription: "Our Cardiology department provides comprehensive cardiac care including diagnosis, treatment, and prevention of heart diseases. We use the latest technology and treatment methods to ensure the best outcomes for our patients.",
    fullDescriptionHi: "हमारा हृदय रोग विभाग हृदय रोगों के निदान, उपचार और रोकथाम सहित व्यापक हृदय देखभाल प्रदान करता है। हम अपने रोगियों के लिए सर्वोत्तम परिणाम सुनिश्चित करने के लिए नवीनतम तकनीक और उपचार विधियों का उपयोग करते हैं।",
    features: [
      "24/7 Emergency Cardiac Care",
      "Advanced ECG & Echo Services",
      "Cardiac Catheterization",
      "Preventive Cardiology",
      "Heart Failure Management",
      "Arrhythmia Treatment"
    ],
    featuresHi: [
      "24/7 आपातकालीन हृदय देखभाल",
      "उन्नत ईसीजी और इको सेवाएं",
      "कार्डियक कैथेटराइजेशन",
      "निवारक हृदय रोग विज्ञान",
      "हृदय विफलता प्रबंधन",
      "अतालता उपचार"
    ]
  },
  neurology: {
    icon: Brain,
    title: "Neurology",
    titleHi: "तंत्रिका विज्ञान विभाग",
    description: "Comprehensive neurological services for brain and nervous system disorders.",
    descriptionHi: "मस्तिष्क और तंत्रिका तंत्र विकारों के लिए व्यापक न्यूरोलॉजिकल सेवाएं।",
    image: neurologyImg,
    color: "from-purple-500 to-indigo-500",
    fullDescription: "Our Neurology department specializes in the diagnosis and treatment of disorders affecting the brain, spinal cord, and nervous system. We offer advanced diagnostic facilities and personalized treatment plans.",
    fullDescriptionHi: "हमारा न्यूरोलॉजी विभाग मस्तिष्क, रीढ़ की हड्डी और तंत्रिका तंत्र को प्रभावित करने वाले विकारों के निदान और उपचार में विशेषज्ञता रखता है। हम उन्नत नैदानिक ​​सुविधाएं और व्यक्तिगत उपचार योजनाएं प्रदान करते हैं।",
    features: [
      "Stroke Care & Prevention",
      "Epilepsy Management",
      "Headache & Migraine Treatment",
      "Movement Disorders",
      "Neuromuscular Disorders",
      "Advanced Brain Imaging"
    ],
    featuresHi: [
      "स्ट्रोक देखभाल और रोकथाम",
      "मिर्गी प्रबंधन",
      "सिरदर्द और माइग्रेन उपचार",
      "गति विकार",
      "न्यूरोमस्कुलर विकार",
      "उन्नत मस्तिष्क इमेजिंग"
    ]
  },
  orthopedics: {
    icon: Bone,
    title: "Orthopedics",
    titleHi: "आर्थोपेडिक्स विभाग",
    description: "Expert treatment for bone, joint, and musculoskeletal conditions.",
    descriptionHi: "हड्डी, जोड़ और मस्कुलोस्केलेटल स्थितियों के लिए विशेषज्ञ उपचार।",
    image: orthopedicsImg,
    color: "from-blue-500 to-cyan-500",
    fullDescription: "Our Orthopedics department offers comprehensive care for all bone and joint problems. From fractures to joint replacements, our experienced team ensures the best treatment outcomes.",
    fullDescriptionHi: "हमारा ऑर्थोपेडिक्स विभाग सभी हड्डी और जोड़ों की समस्याओं के लिए व्यापक देखभाल प्रदान करता है। फ्रैक्चर से लेकर जोड़ों के प्रतिस्थापन तक, हमारी अनुभवी टीम सर्वोत्तम उपचार परिणाम सुनिश्चित करती है।",
    features: [
      "Joint Replacement Surgery",
      "Fracture Management",
      "Sports Injury Treatment",
      "Arthritis Care",
      "Spine Surgery",
      "Pediatric Orthopedics"
    ],
    featuresHi: [
      "संयुक्त प्रतिस्थापन सर्जरी",
      "फ्रैक्चर प्रबंधन",
      "खेल चोट उपचार",
      "गठिया देखभाल",
      "स्पाइन सर्जरी",
      "बाल चिकित्सा आर्थोपेडिक्स"
    ]
  },
  pediatrics: {
    icon: Baby,
    title: "Pediatrics",
    titleHi: "बाल रोग विभाग",
    description: "Specialized care for infants, children, and adolescents with compassion.",
    descriptionHi: "करुणा के साथ शिशुओं, बच्चों और किशोरों के लिए विशेष देखभाल।",
    image: null,
    color: "from-green-500 to-emerald-500",
    fullDescription: "Our Pediatrics department provides specialized medical care for children from birth through adolescence. We create a child-friendly environment to ensure comfort and effective treatment.",
    fullDescriptionHi: "हमारा बाल रोग विभाग जन्म से किशोरावस्था तक बच्चों के लिए विशेष चिकित्सा देखभाल प्रदान करता है। हम आराम और प्रभावी उपचार सुनिश्चित करने के लिए बाल-अनुकूल वातावरण बनाते हैं।",
    features: [
      "Newborn Care",
      "Vaccination Services",
      "Growth & Development Monitoring",
      "Pediatric Emergency Care",
      "Nutritional Counseling",
      "Child Psychology Services"
    ],
    featuresHi: [
      "नवजात शिशु देखभाल",
      "टीकाकरण सेवाएं",
      "विकास और वृद्धि निगरानी",
      "बाल चिकित्सा आपातकालीन देखभाल",
      "पोषण परामर्श",
      "बाल मनोविज्ञान सेवाएं"
    ]
  },
  ophthalmology: {
    icon: Eye,
    title: "Ophthalmology",
    titleHi: "नेत्र विज्ञान विभाग",
    description: "Complete eye care services from routine exams to advanced surgeries.",
    descriptionHi: "नियमित परीक्षाओं से लेकर उन्नत सर्जरी तक पूर्ण नेत्र देखभाल सेवाएं।",
    image: null,
    color: "from-amber-500 to-orange-500",
    fullDescription: "Our Ophthalmology department offers comprehensive eye care services including diagnosis, treatment, and surgery for all types of eye conditions using modern technology.",
    fullDescriptionHi: "हमारा नेत्र विज्ञान विभाग आधुनिक तकनीक का उपयोग करते हुए सभी प्रकार की नेत्र स्थितियों के लिए निदान, उपचार और सर्जरी सहित व्यापक नेत्र देखभाल सेवाएं प्रदान करता है।",
    features: [
      "Cataract Surgery",
      "LASIK & Refractive Surgery",
      "Glaucoma Treatment",
      "Retinal Disorders Care",
      "Pediatric Ophthalmology",
      "Contact Lens Services"
    ],
    featuresHi: [
      "मोतियाबिंद सर्जरी",
      "लेसिक और अपवर्तक सर्जरी",
      "ग्लूकोमा उपचार",
      "रेटिना विकार देखभाल",
      "बाल चिकित्सा नेत्र विज्ञान",
      "कॉन्टैक्ट लेंस सेवाएं"
    ]
  },
  "emergency-care": {
    icon: Activity,
    title: "Emergency Care",
    titleHi: "आपातकालीन देखभाल",
    description: "24/7 emergency services with rapid response and critical care.",
    descriptionHi: "तेज़ प्रतिक्रिया और गंभीर देखभाल के साथ 24/7 आपातकालीन सेवाएं।",
    image: null,
    color: "from-rose-500 to-red-500",
    fullDescription: "Our Emergency Care department operates 24/7 to provide immediate medical attention for critical conditions. Our trained staff ensures rapid assessment and treatment.",
    fullDescriptionHi: "हमारा आपातकालीन देखभाल विभाग गंभीर स्थितियों के लिए तत्काल चिकित्सा सहायता प्रदान करने के लिए 24/7 संचालित होता है। हमारा प्रशिक्षित कर्मचारी तेजी से मूल्यांकन और उपचार सुनिश्चित करता है।",
    features: [
      "24/7 Emergency Services",
      "Trauma Care",
      "Critical Care Unit",
      "Ambulance Services",
      "Emergency Surgery",
      "Intensive Care Unit"
    ],
    featuresHi: [
      "24/7 आपातकालीन सेवाएं",
      "आघात देखभाल",
      "गंभीर देखभाल इकाई",
      "एम्बुलेंस सेवाएं",
      "आपातकालीन सर्जरी",
      "गहन देखभाल इकाई"
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  const service = serviceId ? serviceDetails[serviceId] : null;

  const serviceKeys = Object.keys(serviceDetails);
  const currentIndex = serviceKeys.indexOf(serviceId || "");
  const prevServiceKey = currentIndex > 0 ? serviceKeys[currentIndex - 1] : null;
  const nextServiceKey = currentIndex < serviceKeys.length - 1 ? serviceKeys[currentIndex + 1] : null;

  // Scroll to top when component mounts or serviceId changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <Button onClick={() => navigate("/services")}>
            Back to Services
          </Button>
        </div>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen animate-fade-in">
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Back Button & Navigation */}
        <div className="container mx-auto px-4 mb-8">
          <div className="flex justify-between items-center">
            <Button
              onClick={() => navigate("/services")}
              variant="outline"
              className="gap-2"
            >
              <span className="flex justify-center items-center gap-3">
                <ArrowLeft className="w-4 h-4" />
                {language === "en" ? "Back to Services" : language === "hi" ? "सेवाओं पर वापस जाएं" : "सेवा पर वापस जाईं"}
              </span>
            </Button>

            <div className="flex gap-2">
              {prevServiceKey && (
                <Button
                  onClick={() => navigate(`/services/${prevServiceKey}`)}
                  variant="outline"
                  className="gap-2"
                ><span className="flex justify-center items-center gap-3">
                    <ArrowLeft className="w-4 h-4" />
                    {language === "en" ? "Previous" : language === "hi" ? "पिछला" : "पिछला"}</span>
                </Button>
              )}
              {nextServiceKey && (
                <Button
                  onClick={() => navigate(`/services/${nextServiceKey}`)}
                  variant="outline"
                  className="gap-2"
                ><span className="flex justify-center items-center gap-3">
                    {language === "en" ? "Next" : language === "hi" ? "अगला" : "अगला"}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {service.image ? (
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ServiceIcon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className={`h-96 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center relative overflow-hidden shadow-2xl`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
                  <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ServiceIcon className="w-16 h-16 text-white" />
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                    {language === "en" ? "Our Service" : language === "hi" ? "हमारी सेवा" : "हमार सेवा"}
                  </span>
                  <h1 className="text-5xl font-bold text-foreground mb-4">
                    {language === "en" ? service.title : service.titleHi}
                  </h1>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {language === "en" ? service.fullDescription : service.fullDescriptionHi}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              {language === "en" ? "Our Services Include" : language === "hi" ? "हमारी सेवाओं में शामिल हैं" : "हमार सेवा में शामिल बा"}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.features.map((feature: string, index: number) => (
                <Card key={index} className="border-0 shadow-md hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-foreground mb-1">
                          {language === "en" ? feature : service.featuresHi[index]}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {language === "en" ? "Need This Service?" : language === "hi" ? "इस सेवा की आवश्यकता है?" : "ई सेवा के जरूरत बा?"}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {language === "en" ? "Book an appointment with our specialists today" : language === "hi" ? "आज ही हमारे विशेषज्ञों के साथ अपॉइंटमेंट बुक करें" : "आज हमार विशेषज्ञ लोग से अपॉइंटमेंट बुक करीं"}
            </p>
            <Button
              onClick={() => setAppointmentOpen(true)}
              className="gradient-primary text-white px-8 py-6 text-lg"
            >
              {language === "en" ? "Book Appointment" : language === "hi" ? "अपॉइंटमेंट बुक करें" : "अपॉइंटमेंट बुक करीं"}
            </Button>
          </div>
        </section>
      </main>

      <Footer />

      <AppointmentDialog
        open={appointmentOpen}
        onOpenChange={setAppointmentOpen}
      />
    </div>
  );
};

export default ServiceDetail;

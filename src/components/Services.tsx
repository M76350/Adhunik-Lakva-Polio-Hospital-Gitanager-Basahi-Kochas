import { Heart, Brain, Bone, Baby, Eye, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import cardiologyImg from "@/assets/service-cardiology.jpg";
import neurologyImg from "@/assets/service-neurology.jpg";
import orthopedicsImg from "@/assets/service-orthopedics.jpg";

const Services = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const services = [
    {
      id: "cardiology",
      icon: Heart,
      titleKey: "cardiology",
      descKey: "cardiologyDesc",
      image: cardiologyImg,
      color: "from-red-500 to-pink-500",
    },
    {
      id: "neurology",
      icon: Brain,
      titleKey: "neurology",
      descKey: "neurologyDesc",
      image: neurologyImg,
      color: "from-purple-500 to-indigo-500",
    },
    {
      id: "orthopedics",
      icon: Bone,
      titleKey: "orthopedics",
      descKey: "orthopedicsDesc",
      image: orthopedicsImg,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "pediatrics",
      icon: Baby,
      titleKey: "pediatrics",
      descKey: "pediatricsDesc",
      image: null,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "ophthalmology",
      icon: Eye,
      titleKey: "ophthalmology",
      descKey: "ophthalmologyDesc",
      image: null,
      color: "from-amber-500 to-orange-500",
    },
    {
      id: "emergency-care",
      icon: Activity,
      titleKey: "emergencyCare",
      descKey: "emergencyCareDesc",
      image: null,
      color: "from-rose-500 to-red-500",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            {t("ourServices")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("servicesTitle")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("servicesDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.id}
              onClick={() => navigate(`/services/${service.id}`)}
              className="group hover-lift border-0 shadow-lg bg-card overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                {service.image ? (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={t(service.titleKey)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80 group-hover:opacity-70 transition-opacity`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={`h-48 bg-gradient-to-br ${service.color} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(service.descKey)}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

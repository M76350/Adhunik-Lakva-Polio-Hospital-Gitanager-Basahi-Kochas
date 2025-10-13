import { Heart, Brain, Bone, Baby, Eye, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import cardiologyImg from "@/assets/service-cardiology.jpg";
import neurologyImg from "@/assets/service-neurology.jpg";
import orthopedicsImg from "@/assets/service-orthopedics.jpg";

const services = [
  {
    icon: Heart,
    title: "Cardiology",
    description: "Advanced cardiac care with state-of-the-art technology and experienced cardiologists.",
    image: cardiologyImg,
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Brain,
    title: "Neurology",
    description: "Comprehensive neurological services for brain and nervous system disorders.",
    image: neurologyImg,
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Bone,
    title: "Orthopedics",
    description: "Expert treatment for bone, joint, and musculoskeletal conditions.",
    image: orthopedicsImg,
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description: "Specialized care for infants, children, and adolescents with compassion.",
    image: null,
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Eye,
    title: "Ophthalmology",
    description: "Complete eye care services from routine exams to advanced surgeries.",
    image: null,
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Activity,
    title: "Emergency Care",
    description: "24/7 emergency services with rapid response and critical care.",
    image: null,
    color: "from-rose-500 to-red-500",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a wide range of medical services delivered by expert healthcare professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover-lift border-0 shadow-lg bg-card overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                {service.image ? (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
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
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
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

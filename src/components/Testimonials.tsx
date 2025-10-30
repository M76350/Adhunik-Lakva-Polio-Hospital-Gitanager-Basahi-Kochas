import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      nameKey: "testimonialName1",
      roleKey: "testimonialsPatient",
      contentKey: "testimonial1",
      rating: 5,
    },
    {
      nameKey: "testimonialName2",
      roleKey: "testimonialsPatient",
      contentKey: "testimonial2",
      rating: 5,
    },
    {
      nameKey: "testimonialName3",
      roleKey: "testimonialsPatient",
      contentKey: "testimonial3",
      rating: 5,
    },
  ];
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            {t("testimonials")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("patientSays")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("testimonialsDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover-lift border-0 shadow-lg bg-card relative overflow-hidden group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-20 h-20 text-primary" />
                </div>

                {/* Rating Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                  "{t(testimonial.contentKey)}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg">
                    {t(testimonial.nameKey).charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{t(testimonial.nameKey)}</div>
                    <div className="text-sm text-muted-foreground">{t(testimonial.roleKey)}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

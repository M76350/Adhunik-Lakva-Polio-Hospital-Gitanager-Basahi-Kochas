import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Ready to Take Care of Your Health?
          </h2>
          <p className="text-xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
            Book an appointment with our expert doctors today and experience world-class healthcare
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "200ms" }}>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-base font-semibold px-8 py-6 rounded-full group shadow-xl"
            >
              Book Appointment Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm text-base font-semibold px-8 py-6 rounded-full"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call: +1 (555) 123-4567
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/80 text-sm">
              Available 24/7 for emergencies • Walk-ins welcome
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

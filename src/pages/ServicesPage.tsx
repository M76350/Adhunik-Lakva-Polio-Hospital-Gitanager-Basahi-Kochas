import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import { CheckCircle } from "lucide-react";

const ServicesPage = () => {
  const features = [
    "State-of-the-art Medical Equipment",
    "24/7 Emergency Services",
    "Experienced Medical Professionals",
    "Comfortable Patient Rooms",
    "Advanced Diagnostic Facilities",
    "Personalized Treatment Plans",
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Our Services
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Comprehensive Healthcare Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From routine check-ups to specialized treatments, we offer a complete range 
              of medical services to keep you and your family healthy.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <Services />

        {/* Features Section */}
        <section className="container mx-auto px-4 mt-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Why Choose Our Services?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;

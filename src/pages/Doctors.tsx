import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DoctorsSlider from "@/components/DoctorsSlider";
import { Award, GraduationCap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Doctors = () => {
  const highlights = [
    {
      icon: Award,
      title: "Board Certified",
      description: "All our doctors are board-certified in their specialties",
    },
    {
      icon: GraduationCap,
      title: "Highly Qualified",
      description: "Graduates from top medical schools worldwide",
    },
    {
      icon: Users,
      title: "Patient Focused",
      description: "Dedicated to providing personalized care",
    },
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Our Doctors
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Meet Our Expert Medical Team
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our team of highly qualified and experienced doctors is committed to 
              providing you with the best possible care in their respective specialties.
            </p>
          </div>
        </section>

        {/* Highlights */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-0 shadow-lg hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                    <highlight.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Doctors Slider */}
        <DoctorsSlider />

        {/* CTA Section */}
        <section className="container mx-auto px-4 mt-20">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Schedule a Consultation
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Book an appointment with one of our expert doctors today
            </p>
            <button className="px-8 py-3 bg-gradient-primary text-white rounded-full font-semibold hover:opacity-90 transition-opacity">
              Book Appointment
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Doctors;

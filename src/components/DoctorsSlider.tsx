import { useState } from "react";
import { ChevronLeft, ChevronRight, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    experience: "15+ Years",
    image: doctor1,
    rating: 4.9,
    patients: "2000+",
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    experience: "12+ Years",
    image: doctor2,
    rating: 4.8,
    patients: "1800+",
  },
  {
    name: "Dr. Emily Williams",
    specialty: "Pediatrician",
    experience: "10+ Years",
    image: doctor3,
    rating: 5.0,
    patients: "2500+",
  },
];

const DoctorsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % doctors.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + doctors.length) % doctors.length);
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Our Doctors
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experienced healthcare professionals dedicated to your wellbeing
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {doctors.map((doctor, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="overflow-hidden border-0 shadow-xl bg-card">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-0">
                        {/* Image Side */}
                        <div className="relative h-96 md:h-auto overflow-hidden group">
                          <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          
                          {/* Floating Badge */}
                          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2 shadow-lg">
                            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                            <span className="font-bold text-foreground">{doctor.rating}</span>
                          </div>
                        </div>

                        {/* Info Side */}
                        <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
                          <div className="mb-6">
                            <h3 className="text-3xl font-bold text-foreground mb-2">
                              {doctor.name}
                            </h3>
                            <p className="text-primary text-lg font-semibold mb-4">
                              {doctor.specialty}
                            </p>
                            
                            <div className="flex items-center space-x-2 mb-6">
                              <Award className="w-5 h-5 text-accent" />
                              <span className="text-muted-foreground">{doctor.experience} Experience</span>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                              <div className="bg-white rounded-lg p-4 shadow-sm">
                                <div className="text-2xl font-bold text-primary">{doctor.patients}</div>
                                <div className="text-sm text-muted-foreground">Patients Treated</div>
                              </div>
                              <div className="bg-white rounded-lg p-4 shadow-sm">
                                <div className="text-2xl font-bold text-secondary">{doctor.rating}</div>
                                <div className="text-sm text-muted-foreground">Rating</div>
                              </div>
                            </div>

                            <Button className="w-full gradient-primary text-white hover:opacity-90">
                              Book Appointment
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg hover:bg-white hover:scale-110 transition-transform border-0"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg hover:bg-white hover:scale-110 transition-transform border-0"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {doctors.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSlider;

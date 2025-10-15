import { Award, Star, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import AppointmentDialog from "@/components/AppointmentDialog";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";

const doctors = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    nameHi: "डॉ. राजेश कुमार",
    specialty: "Orthopedic Specialist",
    specialtyHi: "आर्थोपेडिक विशेषज्ञ",
    experience: "18+ Years",
    experienceHi: "18+ वर्ष",
    image: doctor1,
    rating: 4.9,
    patients: "3000+",
    education: "MBBS, MS (Ortho)",
    educationHi: "एमबीबीएस, एमएस (आर्थो)",
    timings: "Mon-Sat: 10 AM - 4 PM",
    timingsHi: "सोम-शनि: सुबह 10 - शाम 4",
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    nameHi: "डॉ. प्रिया शर्मा",
    specialty: "Neurologist",
    specialtyHi: "न्यूरोलॉजिस्ट",
    experience: "15+ Years",
    experienceHi: "15+ वर्ष",
    image: doctor2,
    rating: 4.8,
    patients: "2500+",
    education: "MBBS, MD (Neuro)",
    educationHi: "एमबीबीएस, एमडी (न्यूरो)",
    timings: "Mon-Fri: 9 AM - 3 PM",
    timingsHi: "सोम-शुक्र: सुबह 9 - दोपहर 3",
  },
  {
    id: 3,
    name: "Dr. Amit Singh",
    nameHi: "डॉ. अमित सिंह",
    specialty: "Pediatrician",
    specialtyHi: "बाल रोग विशेषज्ञ",
    experience: "12+ Years",
    experienceHi: "12+ वर्ष",
    image: doctor3,
    rating: 5.0,
    patients: "3500+",
    education: "MBBS, MD (Pediatrics)",
    educationHi: "एमबीबीएस, एमडी (बाल रोग)",
    timings: "Mon-Sat: 11 AM - 5 PM",
    timingsHi: "सोम-शनि: सुबह 11 - शाम 5",
  },
  {
    id: 4,
    name: "Dr. Sunita Devi",
    nameHi: "डॉ. सुनीता देवी",
    specialty: "General Physician",
    specialtyHi: "सामान्य चिकित्सक",
    experience: "20+ Years",
    experienceHi: "20+ वर्ष",
    image: doctor1,
    rating: 4.7,
    patients: "4000+",
    education: "MBBS, MD (Medicine)",
    educationHi: "एमबीबीएस, एमडी (चिकित्सा)",
    timings: "Mon-Sat: 9 AM - 6 PM",
    timingsHi: "सोम-शनि: सुबह 9 - शाम 6",
  },
  {
    id: 5,
    name: "Dr. Manoj Verma",
    nameHi: "डॉ. मनोज वर्मा",
    specialty: "Physiotherapist",
    specialtyHi: "फिजियोथेरेपिस्ट",
    experience: "10+ Years",
    experienceHi: "10+ वर्ष",
    image: doctor2,
    rating: 4.9,
    patients: "2000+",
    education: "BPT, MPT",
    educationHi: "बीपीटी, एमपीटी",
    timings: "Mon-Sat: 10 AM - 5 PM",
    timingsHi: "सोम-शनि: सुबह 10 - शाम 5",
  },
  {
    id: 6,
    name: "Dr. Anjali Gupta",
    nameHi: "डॉ. अंजलि गुप्ता",
    specialty: "Gynecologist",
    specialtyHi: "स्त्री रोग विशेषज्ञ",
    experience: "14+ Years",
    experienceHi: "14+ वर्ष",
    image: doctor3,
    rating: 4.8,
    patients: "2800+",
    education: "MBBS, MD (Gynae)",
    educationHi: "एमबीबीएस, एमडी (स्त्री रोग)",
    timings: "Mon-Fri: 11 AM - 4 PM",
    timingsHi: "सोम-शुक्र: सुबह 11 - शाम 4",
  },
];

const DoctorsGallery = () => {
  const { t, language } = useLanguage();
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  const handleDoctorClick = (doctorId: number) => {
    setSelectedDoctor(doctorId);
    setAppointmentOpen(true);
  };

  const selectedDoctorData = doctors.find(d => d.id === selectedDoctor);

  return (
    <>
      <AppointmentDialog 
        open={appointmentOpen} 
        onOpenChange={setAppointmentOpen}
        preselectedDoctor={selectedDoctorData ? {
          id: selectedDoctorData.id.toString(),
          name: language === "en" ? selectedDoctorData.name : selectedDoctorData.nameHi,
          specialty: language === "en" ? selectedDoctorData.specialty : selectedDoctorData.specialtyHi
        } : undefined}
      />
      <section className="py-20 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            {t("ourDoctors")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("meetOurTeam")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("doctorsDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {doctors.map((doctor, index) => (
            <Card
              key={doctor.id}
              className="hover-lift border-0 shadow-xl bg-card overflow-hidden group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleDoctorClick(doctor.id)}
            >
              <CardContent className="p-0">
                {/* Doctor Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={language === "en" ? doctor.name : doctor.nameHi}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center space-x-1 shadow-lg">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span className="font-bold text-foreground text-sm">{doctor.rating}</span>
                  </div>

                  {/* Doctor Name on Image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">
                      {language === "en" ? doctor.name : doctor.nameHi}
                    </h3>
                    <p className="text-white/90 font-medium">
                      {language === "en" ? doctor.specialty : doctor.specialtyHi}
                    </p>
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">
                        {language === "en" ? doctor.education : doctor.educationHi}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className="w-4 h-4 text-secondary" />
                      <span className="text-muted-foreground">
                        {language === "en" ? doctor.experience : doctor.experienceHi}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm">
                      <Users className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">
                        {doctor.patients} {language === "en" ? "Patients" : "मरीज"}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2 text-sm pt-2 border-t border-border">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground font-medium">
                        {language === "en" ? doctor.timings : doctor.timingsHi}
                      </span>
                    </div>
                  </div>

                  <Button className="w-full gradient-primary text-white hover:opacity-90">
                    {t("bookAppointment")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default DoctorsGallery;

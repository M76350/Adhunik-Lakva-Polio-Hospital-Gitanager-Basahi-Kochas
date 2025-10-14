import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentSlider from "@/components/ContentSlider";
import { Award, Users, Heart, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const slides = [
    {
      title: "Our Journey",
      description: "Founded in 1998, Aadhunik Lakava Polio Hospital has been serving the Buxar community for over 25 years with dedication and compassion. We started as a small clinic and have grown into a trusted healthcare institution.",
      gradient: "from-primary to-secondary",
    },
    {
      title: "Our Vision",
      description: "To be the leading healthcare provider in the region, known for excellence in medical care, patient satisfaction, and innovative treatments that improve lives.",
      gradient: "from-secondary to-accent",
    },
    {
      title: "Our Commitment",
      description: "We are committed to providing accessible, affordable, and high-quality healthcare to all members of our community, regardless of their background or circumstances.",
      gradient: "from-accent to-primary",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with empathy, respect, and dignity",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to the highest standards of medical practice",
    },
    {
      icon: Users,
      title: "Patient-Centered",
      description: "Your health and comfort are our top priorities",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "State-of-the-art facilities and rigorous safety protocols",
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
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Caring for Your Health Since 1998
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              MediCare Plus has been a trusted healthcare provider for over 25 years, 
              delivering exceptional medical services with compassion and expertise.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded with a vision to provide accessible, high-quality healthcare, 
                MediCare Plus has grown from a small clinic to a full-service hospital 
                serving thousands of patients annually.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of dedicated healthcare professionals works tirelessly to ensure 
                that every patient receives personalized care tailored to their unique needs. 
                We combine cutting-edge medical technology with a warm, human touch.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <div className="text-sm text-muted-foreground">Years</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Doctors</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">10K+</div>
                  <div className="text-sm text-muted-foreground">Patients</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-primary" />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="hover-lift border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Slider Section */}
        <ContentSlider slides={slides} />

        {/* Mission Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              To provide accessible, compassionate, and innovative healthcare services 
              that improve the health and wellbeing of our community. We strive to be 
              the healthcare provider of choice through clinical excellence, cutting-edge 
              technology, and a patient-first approach.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import DoctorsGallery from "@/components/DoctorsGallery";
import Testimonials from "@/components/Testimonials";
import HospitalMap from "@/components/HospitalMap";
import NearestLocations from "@/components/NearestLocations";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Services />
        <DoctorsGallery />
        <Testimonials />
        <HospitalMap />
        <NearestLocations />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Index;

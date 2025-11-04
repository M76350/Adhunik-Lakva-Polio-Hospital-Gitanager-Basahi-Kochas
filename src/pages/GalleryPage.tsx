import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import ScrollToTop from "@/components/ScrollToTop";

const GalleryPage = () => {
  return (
    <div className="min-h-screen animate-fade-in">
      <Navbar />
      <main className="pt-24">
        <Gallery />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default GalleryPage;

import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  titleHi: string;
  category: string;
  categoryHi: string;
}

const Gallery = () => {
  const { t, language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const images: GalleryImage[] = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800",
      title: "Patient Recovery Success",
      titleHi: "मरीज की सफल रिकवरी",
      category: "patients",
      categoryHi: "मरीज",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800",
      title: "Medical Team Training",
      titleHi: "चिकित्सा टीम प्रशिक्षण",
      category: "activities",
      categoryHi: "गतिविधियां",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800",
      title: "State-of-art Equipment",
      titleHi: "अत्याधुनिक उपकरण",
      category: "facilities",
      categoryHi: "सुविधाएं",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800",
      title: "Happy Patient Testimonial",
      titleHi: "संतुष्ट मरीज",
      category: "patients",
      categoryHi: "मरीज",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800",
      title: "Health Camp 2024",
      titleHi: "स्वास्थ्य शिविर 2024",
      category: "events",
      categoryHi: "कार्यक्रम",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800",
      title: "Award Ceremony",
      titleHi: "पुरस्कार समारोह",
      category: "achievements",
      categoryHi: "उपलब्धियां",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
      title: "Physiotherapy Session",
      titleHi: "फिजियोथेरेपी सत्र",
      category: "activities",
      categoryHi: "गतिविधियां",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800",
      title: "Modern Operation Theater",
      titleHi: "आधुनिक ऑपरेशन थियेटर",
      category: "facilities",
      categoryHi: "सुविधाएं",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800",
      title: "Community Outreach Program",
      titleHi: "सामुदायिक कार्यक्रम",
      category: "events",
      categoryHi: "कार्यक्रम",
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=800",
      title: "Excellence Award 2024",
      titleHi: "उत्कृष्टता पुरस्कार 2024",
      category: "achievements",
      categoryHi: "उपलब्धियां",
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800",
      title: "Patient Care Excellence",
      titleHi: "मरीज देखभाल उत्कृष्टता",
      category: "patients",
      categoryHi: "मरीज",
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800",
      title: "Advanced Diagnostic Lab",
      titleHi: "उन्नत डायग्नोस्टिक लैब",
      category: "facilities",
      categoryHi: "सुविधाएं",
    },
  ];

  const categories = [
    { value: "all", label: "All", labelHi: "सभी" },
    { value: "patients", label: "Patients", labelHi: "मरीज" },
    { value: "activities", label: "Activities", labelHi: "गतिविधियां" },
    { value: "facilities", label: "Facilities", labelHi: "सुविधाएं" },
    { value: "events", label: "Events", labelHi: "कार्यक्रम" },
    { value: "achievements", label: "Achievements", labelHi: "उपलब्धियां" },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  const handleNext = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage);
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[nextIndex].id);
    }
  };

  const handlePrev = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage);
      const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
      setSelectedImage(filteredImages[prevIndex].id);
    }
  };

  const selectedImageData = images.find((img) => img.id === selectedImage);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            {language === "en" ? "Gallery" : "गैलरी"}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {language === "en" ? "Our Journey in Pictures" : "तस्वीरों में हमारी यात्रा"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === "en"
              ? "Explore our achievements, patient experiences, and hospital activities"
              : "हमारी उपलब्धियां, मरीजों के अनुभव और अस्पताल की गतिविधियां देखें"}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === cat.value
                  ? "bg-primary text-primary-foreground shadow-lg hover:bg-primary/90"
                  : "bg-background text-foreground hover:bg-muted border border-border"
              }`}
            >
              {language === "en" ? cat.label : cat.labelHi}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer hover-lift"
            >
              <img
                src={image.url}
                alt={language === "en" ? image.title : image.titleHi}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-sm mb-1">
                    {language === "en" ? image.title : image.titleHi}
                  </p>
                  <p className="text-white/80 text-xs">
                    {language === "en" ? image.category : image.categoryHi}
                  </p>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <ZoomIn className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && selectedImageData && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <div className="max-w-5xl max-h-[80vh] w-full">
              <img
                src={selectedImageData.url}
                alt={language === "en" ? selectedImageData.title : selectedImageData.titleHi}
                className="w-full h-full object-contain animate-scale-in"
              />
              <div className="text-center mt-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {language === "en" ? selectedImageData.title : selectedImageData.titleHi}
                </h3>
                <p className="text-white/70">
                  {language === "en" ? selectedImageData.category : selectedImageData.categoryHi}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;

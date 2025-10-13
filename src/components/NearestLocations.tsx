import { MapPin, Navigation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const locations = [
  {
    city: "Buxar",
    cityHi: "बक्सर",
    distance: "0 km",
    description: "City Center",
    descriptionHi: "शहर का केंद्र",
  },
  {
    city: "Ara",
    cityHi: "आरा",
    distance: "35 km",
    description: "District Headquarters",
    descriptionHi: "जिला मुख्यालय",
  },
  {
    city: "Ballia",
    cityHi: "बलिया",
    distance: "45 km",
    description: "Nearby District",
    descriptionHi: "निकटतम जिला",
  },
  {
    city: "Varanasi",
    cityHi: "वाराणसी",
    distance: "120 km",
    description: "Major City",
    descriptionHi: "प्रमुख शहर",
  },
  {
    city: "Patna",
    cityHi: "पटना",
    distance: "110 km",
    description: "State Capital",
    descriptionHi: "राज्य की राजधानी",
  },
  {
    city: "Ghazipur",
    cityHi: "गाजीपुर",
    distance: "60 km",
    description: "Nearby District",
    descriptionHi: "निकटतम जिला",
  },
];

const NearestLocations = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            {t("nearbyLocations")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("nearestCities")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === "en" 
              ? "Easily accessible from major cities and nearby areas"
              : "प्रमुख शहरों और आस-पास के क्षेत्रों से आसानी से पहुंचा जा सकता है"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {locations.map((location, index) => (
            <Card
              key={index}
              className="hover-lift border-0 shadow-lg bg-card overflow-hidden group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-bold text-foreground">
                        {language === "en" ? location.city : location.cityHi}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {language === "en" ? location.description : location.descriptionHi}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{location.distance}</div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                  onClick={() => {
                    const query = `${location.city} to Aadhunik Lakava Polio Hospital Geeta Nagar Basahi Buxar`;
                    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`, "_blank");
                  }}
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  {t("getDirections")}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NearestLocations;

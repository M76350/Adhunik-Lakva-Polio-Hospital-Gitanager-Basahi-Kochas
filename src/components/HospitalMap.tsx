import { MapPin, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const HospitalMap = () => {
  const { t, language } = useLanguage();
  const hospitalAddress = "Aadhunik Lakava Polio Hospital, Geeta Nagar Basahi, Buxar, Bihar";

  const openInMaps = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hospitalAddress)}`, "_blank");
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            {t("directions")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {language === "en" ? "Find Us" : "हमें खोजें"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === "en"
              ? "Visit us at our convenient location in Buxar"
              : "बक्सर में हमारे सुविधाजनक स्थान पर हमसे मिलें"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Map */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden border-0 shadow-xl"> 
              <CardContent className="p-0">
                <div className="relative w-full h-[500px] bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.9578702056656!2d83.89975749999999!3d25.305619500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398ded000dfefde3%3A0x4ecbf628ed53b76d!2sAadhunik%20Lakva%20polio%20hospital%20Dr%20vishesh%20kumar!5e0!3m2!1sen!2sin!4v1761998678952!5m2!1sen!2sin"

                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hospital Location"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3 mb-6">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t("address")}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {language === "en"
                        ? "Aadhunik Lakava Polio Hospital"
                        : "आधुनिक लकवा पोलियो अस्पताल"}
                      <br />
                      {language === "en"
                        ? "Geeta Nagar Basahi, Buxar"
                        : "गीता नगर बसाही, बक्सर"}
                      <br />
                      {language === "en" ? "Bihar, India" : "बिहार, भारत"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 mb-6">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t("phone")}</h3>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                    <p className="text-muted-foreground">+91 98765 43211</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 mb-6">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t("timing")}</h3>
                    <p className="text-muted-foreground">
                      {language === "en" ? "Mon - Sat: 9:00 AM - 5:00 PM" : "सोम - शनि: सुबह 9:00 - शाम 5:00"}
                    </p>
                    <p className="text-muted-foreground">
                      {language === "en" ? "Sunday: 9:00 AM - 1:00 PM" : "रविवार: सुबह 9:00 - दोपहर 1:00"}
                    </p>
                    <p className="text-sm text-primary font-semibold mt-1">
                      {language === "en" ? "Emergency: 24/7" : "आपातकाल: 24/7"}
                    </p>
                  </div>
                </div>

                <Button onClick={openInMaps} className="w-full gradient-primary text-white">
                  <Navigation className="w-4 h-4 mr-2" />
                  {t("getDirections")}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalMap;

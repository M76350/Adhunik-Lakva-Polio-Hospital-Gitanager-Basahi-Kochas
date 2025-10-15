import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Save, Settings, ExternalLink } from "lucide-react";

const AdminSettings = () => {
  const { language } = useLanguage();
  const [webhookUrl, setWebhookUrl] = useState("");

  useEffect(() => {
    const savedWebhook = localStorage.getItem('zapier_webhook_url');
    if (savedWebhook) {
      setWebhookUrl(savedWebhook);
    }
  }, []);

  const handleSave = () => {
    if (!webhookUrl.trim()) {
      toast({
        title: language === "en" ? "Error" : "त्रुटि",
        description: language === "en" ? "Please enter a webhook URL" : "कृपया वेबहुक URL दर्ज करें",
        variant: "destructive",
      });
      return;
    }

    localStorage.setItem('zapier_webhook_url', webhookUrl);
    toast({
      title: language === "en" ? "Success" : "सफलता",
      description: language === "en" ? "Webhook URL saved successfully" : "वेबहुक URL सफलतापूर्वक सहेजा गया",
    });
  };

  return (
    <div className="min-h-screen animate-fade-in">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {language === "en" ? "Admin Settings" : "व्यवस्थापक सेटिंग्स"}
            </h1>
            <p className="text-lg text-muted-foreground">
              {language === "en" ? "Configure Google Sheets integration" : "गूगल शीट्स एकीकरण कॉन्फ़िगर करें"}
            </p>
          </div>

          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ExternalLink className="w-5 h-5" />
                {language === "en" ? "Zapier Webhook Configuration" : "Zapier वेबहुक कॉन्फ़िगरेशन"}
              </CardTitle>
              <CardDescription>
                {language === "en" 
                  ? "Connect your appointment form to Google Sheets via Zapier"
                  : "Zapier के माध्यम से अपने अपॉइंटमेंट फॉर्म को गूगल शीट्स से कनेक्ट करें"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                  <h3 className="font-semibold text-foreground">
                    {language === "en" ? "Setup Instructions:" : "सेटअप निर्देश:"}
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                    <li>
                      {language === "en" 
                        ? "Go to " 
                        : "पर जाएं "}
                      <a 
                        href="https://zapier.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        zapier.com
                      </a>
                      {language === "en" ? " and create a free account" : " और एक मुफ्त खाता बनाएं"}
                    </li>
                    <li>{language === "en" ? "Create a new Zap" : "एक नया Zap बनाएं"}</li>
                    <li>{language === "en" ? "Choose 'Webhooks by Zapier' as the trigger" : "ट्रिगर के रूप में 'Webhooks by Zapier' चुनें"}</li>
                    <li>{language === "en" ? "Select 'Catch Hook' event" : "'Catch Hook' इवेंट चुनें"}</li>
                    <li>{language === "en" ? "Copy the webhook URL provided" : "प्रदान किया गया वेबहुक URL कॉपी करें"}</li>
                    <li>{language === "en" ? "Paste it below and click Save" : "इसे नीचे पेस्ट करें और सेव पर क्लिक करें"}</li>
                    <li>
                      {language === "en" 
                        ? "Add 'Google Sheets' as the action app" 
                        : "एक्शन ऐप के रूप में 'Google Sheets' जोड़ें"}
                    </li>
                    <li>
                      {language === "en" 
                        ? "Connect your Google account (mk2728447@gmail.com)" 
                        : "अपना गूगल खाता कनेक्ट करें (mk2728447@gmail.com)"}
                    </li>
                    <li>
                      {language === "en" 
                        ? "Choose 'Create Spreadsheet Row' and map the form fields" 
                        : "'Create Spreadsheet Row' चुनें और फॉर्म फील्ड मैप करें"}
                    </li>
                    <li>{language === "en" ? "Test and activate your Zap!" : "अपने Zap को टेस्ट करें और सक्रिय करें!"}</li>
                  </ol>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="webhook">
                    {language === "en" ? "Zapier Webhook URL" : "Zapier वेबहुक URL"}
                  </Label>
                  <Input
                    id="webhook"
                    type="url"
                    placeholder="https://hooks.zapier.com/hooks/catch/..."
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e.target.value)}
                    className="font-mono text-sm"
                  />
                  <p className="text-xs text-muted-foreground">
                    {language === "en" 
                      ? "Paste your Zapier webhook URL here to automatically send appointment data to Google Sheets"
                      : "अपॉइंटमेंट डेटा को स्वचालित रूप से गूगल शीट्स में भेजने के लिए अपना Zapier वेबहुक URL यहां पेस्ट करें"}
                  </p>
                </div>

                <Button onClick={handleSave} className="w-full gradient-primary text-white">
                  <Save className="w-4 h-4 mr-2" />
                  {language === "en" ? "Save Configuration" : "कॉन्फ़िगरेशन सहेजें"}
                </Button>
              </div>

              <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-foreground mb-2">
                  {language === "en" ? "Form Fields That Will Be Sent:" : "भेजे जाने वाले फॉर्म फील्ड:"}
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• {language === "en" ? "Full Name" : "पूरा नाम"}</li>
                  <li>• {language === "en" ? "Phone Number" : "फोन नंबर"}</li>
                  <li>• {language === "en" ? "Email Address" : "ईमेल पता"}</li>
                  <li>• {language === "en" ? "Appointment Date" : "अपॉइंटमेंट तिथि"}</li>
                  <li>• {language === "en" ? "Appointment Time" : "अपॉइंटमेंट समय"}</li>
                  <li>• {language === "en" ? "Doctor Name" : "डॉक्टर का नाम"}</li>
                  <li>• {language === "en" ? "Symptoms/Reason" : "लक्षण/कारण"}</li>
                  <li>• {language === "en" ? "Submission Timestamp" : "सबमिशन समय"}</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminSettings;

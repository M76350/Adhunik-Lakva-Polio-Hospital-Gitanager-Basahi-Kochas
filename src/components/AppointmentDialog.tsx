import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Clock, User } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface AppointmentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  preselectedDoctor?: {
    id: string;
    name: string;
    specialty: string;
  };
}

const doctors = [
  { id: "1", name: "Dr. Rajesh Kumar", nameHi: "डॉ. राजेश कुमार", specialty: "Orthopedics / आर्थोपेडिक्स" },
  { id: "2", name: "Dr. Priya Sharma", nameHi: "डॉ. प्रिया शर्मा", specialty: "Neurology / न्यूरोलॉजी" },
  { id: "3", name: "Dr. Amit Singh", nameHi: "डॉ. अमित सिंह", specialty: "Pediatrics / बाल रोग" },
  { id: "4", name: "Dr. Sunita Devi", nameHi: "डॉ. सुनीता देवी", specialty: "General Medicine / सामान्य चिकित्सा" },
  { id: "5", name: "Dr. Manoj Verma", nameHi: "डॉ. मनोज वर्मा", specialty: "Physiotherapy / फिजियोथेरेपी" },
  { id: "6", name: "Dr. Anjali Gupta", nameHi: "डॉ. अंजलि गुप्ता", specialty: "Gynecology / स्त्री रोग" },
];

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"
];

const AppointmentDialog = ({ open, onOpenChange, preselectedDoctor }: AppointmentDialogProps) => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    doctor: "",
    symptoms: "",
  });

  // Pre-fill doctor when dialog opens with preselected doctor
  useEffect(() => {
    if (preselectedDoctor && open) {
      setFormData(prev => ({ ...prev, doctor: preselectedDoctor.id }));
    }
  }, [preselectedDoctor, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.phone || !formData.date || !formData.time || !formData.doctor) {
      toast({
        title: language === "en" ? "Error" : "त्रुटि",
        description: language === "en" ? "Please fill all required fields" : "कृपया सभी आवश्यक फ़ील्ड भरें",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send this data to your backend
    console.log("Appointment Data:", formData);
    
    toast({
      title: language === "en" ? "Success!" : "सफलता!",
      description: language === "en" 
        ? "Your appointment has been booked successfully. We'll contact you shortly."
        : "आपकी अपॉइंटमेंट सफलतापूर्वक बुक हो गई है। हम जल्द ही आपसे संपर्क करेंगे।",
    });
    
    onOpenChange(false);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      doctor: "",
      symptoms: "",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{t("appointmentTitle")}</DialogTitle>
          <DialogDescription>{t("appointmentDescription")}</DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">{t("fullName")} *</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="fullName"
                placeholder={language === "en" ? "Enter your full name" : "अपना पूरा नाम दर्ज करें"}
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">{t("phoneNumber")} *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder={language === "en" ? "Enter your phone number" : "अपना फोन नंबर दर्ज करें"}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">{t("email")}</Label>
            <Input
              id="email"
              type="email"
              placeholder={language === "en" ? "Enter your email" : "अपना ईमेल दर्ज करें"}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">{t("selectDate")} *</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="pl-10"
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">{t("selectTime")} *</Label>
              <div className="relative">
                <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground z-10" />
                <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
                  <SelectTrigger className="pl-10">
                    <SelectValue placeholder={language === "en" ? "Time" : "समय"} />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="doctor">{t("selectDoctor")} *</Label>
            <Select value={formData.doctor} onValueChange={(value) => setFormData({ ...formData, doctor: value })}>
              <SelectTrigger>
                <SelectValue placeholder={language === "en" ? "Select a doctor" : "डॉक्टर चुनें"} />
              </SelectTrigger>
              <SelectContent>
                {doctors.map((doctor) => (
                  <SelectItem key={doctor.id} value={doctor.id}>
                    {language === "en" ? doctor.name : doctor.nameHi} - {doctor.specialty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="symptoms">{t("symptoms")}</Label>
            <Textarea
              id="symptoms"
              placeholder={language === "en" ? "Describe your symptoms..." : "अपने लक्षण बताएं..."}
              value={formData.symptoms}
              onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
              rows={3}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="submit" className="flex-1 gradient-primary text-white">
              {t("submit")}
            </Button>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
              {t("cancel")}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentDialog;

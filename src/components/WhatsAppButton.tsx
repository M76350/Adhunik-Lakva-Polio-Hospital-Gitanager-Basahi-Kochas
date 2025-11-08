import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "919110142755";
  const message = "Hello, I would like to inquire about your services.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-2xl animate-float p-0"
      size="icon"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </Button>
  );
};

export default WhatsAppButton;

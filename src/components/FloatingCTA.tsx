import { Phone, MessageCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FloatingCTA = () => {
  const navigate = useNavigate();
  
  const handleWhatsApp = () => {
    window.open("https://wa.me/916300110329?text=Hi! I'd like to know more about your floral decoration services.", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+916300110329";
  };
  
  const handleGetQuote = () => {
    navigate('/contact');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <Button
        onClick={handleWhatsApp}
        size="lg"
        className="rounded-full shadow-lg hover:scale-110 transition-transform duration-300 bg-secondary gap-2"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </Button>

      {/* Call */}
      <Button
        onClick={handleCall}
        size="lg"
        variant="outline"
        className="rounded-full shadow-lg hover:scale-110 transition-transform duration-300 gap-2"
      >
        <Phone className="h-5 w-5" />
        <span className="hidden sm:inline">Call</span>
      </Button>

      {/* Get Quote */}
      <Button
        onClick={handleGetQuote}
        size="lg"
        className="rounded-full shadow-lg hover:scale-110 transition-transform duration-300 gap-2"
      >
        <FileText className="h-5 w-5" />
        <span className="hidden sm:inline">Quote</span>
      </Button>
    </div>
  );
};

export default FloatingCTA;

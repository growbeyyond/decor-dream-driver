import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Calendar, MapPin, User, Sparkles } from "lucide-react";

const QuickQuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    eventType: "",
    date: "",
    city: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Quote request received! We'll contact you within 24 hours.", {
      description: "Check your WhatsApp for instant updates",
    });
    // Reset form
    setFormData({ name: "", eventType: "", date: "", city: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 shadow-lg border border-border space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="h-5 w-5 text-primary" />
        <h3 className="font-display font-semibold text-lg">Get Instant Quote</h3>
      </div>
      
      <div className="space-y-3">
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="pl-10"
            required
          />
        </div>

        <Select
          value={formData.eventType}
          onValueChange={(value) => setFormData({ ...formData, eventType: value })}
          required
        >
          <SelectTrigger>
            <SelectValue placeholder="Event Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="wedding">Wedding</SelectItem>
            <SelectItem value="haldi">Haldi Ceremony</SelectItem>
            <SelectItem value="reception">Reception</SelectItem>
            <SelectItem value="temple">Temple Event</SelectItem>
            <SelectItem value="corporate">Corporate Event</SelectItem>
            <SelectItem value="birthday">Birthday</SelectItem>
          </SelectContent>
        </Select>

        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="pl-10"
            required
          />
        </div>

        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="City"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="pl-10"
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Get My Floral Plan
        </Button>
      </div>

      <p className="text-xs text-muted-foreground text-center">
        Free consultation • No obligation • Quick response
      </p>
    </form>
  );
};

export default QuickQuoteForm;

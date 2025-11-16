import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { Calendar, MapPin, User, Sparkles } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  eventType: z.string().min(1, "Please select an event type"),
  date: z.string().min(1, "Please select a date"),
  city: z.string().min(2, "City must be at least 2 characters").max(100, "City name is too long"),
});

const QuickQuoteForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      eventType: "",
      date: "",
      city: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", values);
    
    // Create WhatsApp message with form data
    const message = encodeURIComponent(
      `Hi! I'd like to get a quote for my event:\n\nName: ${values.name}\nEvent Type: ${values.eventType}\nDate: ${values.date}\nCity: ${values.city}`
    );
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/916300110329?text=${message}`, "_blank");
    
    toast.success("Quote request sent! We'll contact you within 24 hours.", {
      description: "Check your WhatsApp for instant updates",
    });
    
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="bg-card rounded-2xl p-6 shadow-lg border border-border space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <h3 className="font-display font-semibold text-lg">Get Instant Quote</h3>
        </div>
        
        <div className="space-y-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Your Name"
                      className="pl-10"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="eventType"
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Event Type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="haldi">Haldi Ceremony</SelectItem>
                    <SelectItem value="reception">Reception</SelectItem>
                    <SelectItem value="temple">Temple Event</SelectItem>
                    <SelectItem value="corporate">Corporate Event</SelectItem>
                    <SelectItem value="birthday">Birthday</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="date"
                      className="pl-10"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="City"
                      className="pl-10"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Get My Floral Plan
          </Button>
        </div>

        <p className="text-xs text-muted-foreground text-center">
          Free consultation • No obligation • Quick response
        </p>
      </form>
    </Form>
  );
};

export default QuickQuoteForm;

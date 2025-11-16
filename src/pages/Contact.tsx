import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(15, "Phone number is too long"),
  email: z.string().email("Invalid email address").max(255, "Email is too long"),
  eventType: z.string().min(1, "Please select an event type"),
  date: z.string().min(1, "Please select a date"),
  city: z.string().min(2, "City must be at least 2 characters").max(100, "City name is too long"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      eventType: "",
      date: "",
      city: "",
      message: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", values);
    
    // Create WhatsApp message with form data
    const message = encodeURIComponent(
      `Hi! I'd like to get in touch:\n\nName: ${values.name}\nPhone: ${values.phone}\nEmail: ${values.email}\nEvent Type: ${values.eventType}\nDate: ${values.date}\nCity: ${values.city}\nMessage: ${values.message}`
    );
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/916300110329?text=${message}`, "_blank");
    
    toast.success("Message sent successfully!", {
      description: "We'll get back to you within 24 hours.",
    });
    
    form.reset();
  };

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-center mb-8">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-display font-semibold mb-6">Send Us a Message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="tel" placeholder="Phone Number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="email" placeholder="Email Address" {...field} />
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
                          <Input type="date" {...field} />
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
                          <Input placeholder="City" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your event..." 
                            rows={4}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </Form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-display font-semibold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+91 6300110329</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">sainathevents08@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-muted-foreground">Hyderabad, Telangana, India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office Hours</h3>
                      <p className="text-muted-foreground">Mon-Sat: 9:00 AM - 7:00 PM</p>
                      <p className="text-muted-foreground">Sunday: By Appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-2xl p-6">
                <h3 className="font-display font-semibold mb-3">Quick Response</h3>
                <p className="text-muted-foreground mb-4">
                  Need an immediate response? We typically reply to quotes within 2-4 hours during business hours.
                </p>
                <Button variant="outline" className="w-full">
                  WhatsApp Us Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

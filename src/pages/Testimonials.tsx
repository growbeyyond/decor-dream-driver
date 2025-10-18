import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya & Arun",
      event: "Wedding",
      text: "The floral decoration exceeded our expectations. Every detail was perfect and our guests couldn't stop talking about the beautiful mandap.",
      rating: 5,
    },
    {
      name: "Lakshmi Reddy",
      event: "Haldi Ceremony",
      text: "Absolutely stunning work! They transformed our venue into a magical space with vibrant marigolds and jasmine.",
      rating: 5,
    },
    {
      name: "Vikram & Sravya",
      event: "Reception",
      text: "Professional, creative, and timely. The team made our dream reception stage a reality.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-center mb-8">
            Client <span className="gradient-text">Testimonials</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 border border-border hover-lift">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;

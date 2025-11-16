import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import QuickQuoteForm from "@/components/QuickQuoteForm";
import { Button } from "@/components/ui/button";
import { Sparkles, Users, Award, Heart, Flower2, Church, Building2 } from "lucide-react";
import heroImage from "@/assets/hero-mandap.jpg";

const Index = () => {
  const navigate = useNavigate();
  const [beforeAfter, setBeforeAfter] = useState(50);

  const services = [
    { icon: <Flower2 />, name: "Mandap Decor", description: "Traditional temple-inspired designs" },
    { icon: <Sparkles />, name: "Haldi Ceremonies", description: "Vibrant yellow & orange themes" },
    { icon: <Heart />, name: "Reception Stages", description: "Grand elegant backdrops" },
    { icon: <Church />, name: "Temple Events", description: "Sacred space decoration" },
    { icon: <Users />, name: "Bridal Pathways", description: "Petal-strewn entrances" },
    { icon: <Building2 />, name: "Corporate Events", description: "Professional floral styling" },
  ];

  const testimonials = [
    {
      name: "Priya & Arun",
      text: "The floral decoration exceeded our expectations. Every detail was perfect!",
      event: "Wedding",
    },
    {
      name: "Lakshmi Reddy",
      text: "Absolutely stunning work! They transformed our venue into a magical space.",
      event: "Haldi",
    },
  ];

  const stats = [
    { number: "500+", label: "Events Decorated" },
    { number: "10+", label: "Years Experience" },
    { number: "98%", label: "Happy Clients" },
    { number: "50+", label: "Expert Team" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 kolam-pattern opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm bloom-in">
                🌸 Premium South Indian Floral Artistry
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
                Where Every Petal
                <span className="gradient-text block">Speaks Emotion</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                South Indian floral artistry for weddings, haldi, receptions & cultural events. Rooted in tradition, designed for today.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2" onClick={() => navigate('/contact')}>
                  <Sparkles className="h-5 w-5" />
                  Get My Floral Plan
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate('/gallery')}>
                  View Gallery
                </Button>
              </div>
            </div>

            {/* Quick Quote Form */}
            <div className="bloom-in">
              <QuickQuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={heroImage} 
              alt="Beautiful South Indian mandap decoration with marigold and jasmine flowers" 
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive floral decoration services for every celebration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card bg-card rounded-2xl p-8 border border-border hover-lift group"
              >
                <div className="p-4 bg-primary/10 rounded-2xl inline-block mb-4 text-primary group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">{service.name}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="gradient-text">Transformations</span> We Create
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-muted">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <div className="text-6xl mb-4">✨</div>
                  <p className="text-xl">Before & After Slider</p>
                  <p className="text-sm">Drag to see the transformation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Event Tracker */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 text-center">
            <div className="inline-block p-3 bg-primary/20 rounded-full mb-4 petal-float">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-2">
              Live Event Setup
            </h3>
            <p className="text-lg text-muted-foreground">
              Now setting up: <span className="font-semibold text-foreground">Sravya & Harsha</span> at Banjara Hills
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 border border-border hover-lift">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Create Your
            <span className="gradient-text block">Dream Decoration?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life with our expert floral artistry
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="gap-2">
              <Sparkles className="h-5 w-5" />
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline">
              View Our Packages
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

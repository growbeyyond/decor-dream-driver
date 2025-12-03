import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import QuickQuoteForm from "@/components/QuickQuoteForm";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Sparkles, Users, Award, Heart, Flower2, Church, Building2 } from "lucide-react";
import heroImage from "@/assets/hero-mandap.jpg";
import anniversaryDecor from "@/assets/gallery/anniversary-decor.jpeg";
import krishnaDecor from "@/assets/gallery/krishna-decor.jpeg";
import jungleBirthday from "@/assets/gallery/jungle-birthday.jpeg";
import teddyBirthday from "@/assets/gallery/teddy-birthday.jpeg";
import stageDecor from "@/assets/gallery/stage-decor.jpeg";
import butterflyDecor from "@/assets/gallery/butterfly-decor.jpeg";
import blueBirthday from "@/assets/gallery/blue-birthday.jpeg";
import balloonDecor from "@/assets/gallery/balloon-decor.jpeg";
import pinkBirthday from "@/assets/gallery/pink-birthday.jpeg";
import outdoorBirthday from "@/assets/gallery/outdoor-birthday.jpeg";
import Autoplay from "embla-carousel-autoplay";

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

      {/* Hero Image Carousel Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
              Our <span className="gradient-text">Recent Work</span>
            </h2>
            <p className="text-muted-foreground">Stunning decorations from our latest events</p>
          </div>
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {[
                { src: heroImage, alt: "Beautiful South Indian mandap decoration" },
                { src: anniversaryDecor, alt: "Anniversary balloon decoration" },
                { src: krishnaDecor, alt: "Traditional Krishna themed floral decoration" },
                { src: jungleBirthday, alt: "Jungle themed birthday decoration" },
                { src: teddyBirthday, alt: "Teddy bear themed birthday party" },
                { src: stageDecor, alt: "Stage balloon decoration" },
                { src: butterflyDecor, alt: "Butterfly themed outdoor decoration" },
                { src: blueBirthday, alt: "Blue themed birthday party" },
                { src: balloonDecor, alt: "Colorful balloon arch decoration" },
                { src: pinkBirthday, alt: "Pink themed birthday celebration" },
                { src: outdoorBirthday, alt: "Outdoor birthday event decoration" },
              ].map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="rounded-2xl overflow-hidden shadow-xl group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                      loading={index < 3 ? "eager" : "lazy"}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
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
              <article
                key={index}
                className="service-card bg-card rounded-2xl p-8 border border-border hover-lift group"
                aria-label={`${service.name} service`}
              >
                <div className="p-4 bg-primary/10 rounded-2xl inline-block mb-4 text-primary group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">{service.name}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </article>
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
            <p className="text-muted-foreground text-lg">Drag the slider to see our magic</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-gradient-to-br from-muted to-accent/5 select-none">
              {/* After Image (Full) */}
              <div className="absolute inset-0">
                <img 
                  src={heroImage} 
                  alt="Event space after decoration by Sainath Events" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Before Image (Clipped) */}
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - beforeAfter}% 0 0)` }}
              >
                <img 
                  src={heroImage} 
                  alt="Event space before decoration" 
                  className="w-full h-full object-cover brightness-50 saturate-50"
                  loading="lazy"
                />
              </div>
              
              {/* Slider Control */}
              <div 
                className="absolute inset-y-0 w-1 bg-primary cursor-ew-resize z-10 group"
                style={{ left: `${beforeAfter}%` }}
                onMouseDown={(e) => {
                  const slider = e.currentTarget.parentElement;
                  if (!slider) return;
                  
                  const handleMouseMove = (moveEvent: MouseEvent) => {
                    const rect = slider.getBoundingClientRect();
                    const x = moveEvent.clientX - rect.left;
                    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
                    setBeforeAfter(percentage);
                  };
                  
                  const handleMouseUp = () => {
                    document.removeEventListener('mousemove', handleMouseMove);
                    document.removeEventListener('mouseup', handleMouseUp);
                  };
                  
                  document.addEventListener('mousemove', handleMouseMove);
                  document.addEventListener('mouseup', handleMouseUp);
                }}
                onTouchStart={(e) => {
                  const slider = e.currentTarget.parentElement;
                  if (!slider) return;
                  
                  const handleTouchMove = (moveEvent: TouchEvent) => {
                    const rect = slider.getBoundingClientRect();
                    const x = moveEvent.touches[0].clientX - rect.left;
                    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
                    setBeforeAfter(percentage);
                  };
                  
                  const handleTouchEnd = () => {
                    document.removeEventListener('touchmove', handleTouchMove);
                    document.removeEventListener('touchend', handleTouchEnd);
                  };
                  
                  document.addEventListener('touchmove', handleTouchMove);
                  document.addEventListener('touchend', handleTouchEnd);
                }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="flex gap-1">
                    <div className="w-1 h-4 bg-primary-foreground rounded"></div>
                    <div className="w-1 h-4 bg-primary-foreground rounded"></div>
                  </div>
                </div>
              </div>
              
              {/* Labels */}
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur px-4 py-2 rounded-lg font-medium shadow-md">
                After ✨
              </div>
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur px-4 py-2 rounded-lg font-medium shadow-md">
                Before
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              💡 Tip: Drag the slider left or right to compare
            </p>
          </div>
        </div>
      </section>

      {/* Live Event Tracker */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-3xl p-8 md:p-12 text-center border border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 kolam-pattern opacity-20"></div>
            <div className="relative z-10">
              <div className="inline-block p-3 bg-primary/20 rounded-full mb-4 petal-float">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
                🎉 Currently Decorating Live Events
              </h3>
              <p className="text-lg text-muted-foreground mb-4">
                Right now, our team is creating magic at multiple venues across the city
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 max-w-3xl mx-auto">
                <div className="bg-background/60 backdrop-blur rounded-xl p-4 border border-border">
                  <p className="font-semibold text-foreground mb-1">Sravya & Harsha</p>
                  <p className="text-sm text-muted-foreground">Banjara Hills • Wedding</p>
                </div>
                <div className="bg-background/60 backdrop-blur rounded-xl p-4 border border-border">
                  <p className="font-semibold text-foreground mb-1">Lakshmi's Haldi</p>
                  <p className="text-sm text-muted-foreground">Jubilee Hills • Ceremony</p>
                </div>
                <div className="bg-background/60 backdrop-blur rounded-xl p-4 border border-border">
                  <p className="font-semibold text-foreground mb-1">Temple Festival</p>
                  <p className="text-sm text-muted-foreground">Secunderabad • Religious</p>
                </div>
              </div>
            </div>
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

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = ["all", "weddings", "haldi", "receptions", "temple", "corporate"];
  
  const galleryItems = [
    { id: 1, category: "weddings", title: "Traditional Wedding Mandap" },
    { id: 2, category: "haldi", title: "Haldi Ceremony Decoration" },
    { id: 3, category: "receptions", title: "Grand Reception Stage" },
    { id: 4, category: "temple", title: "Temple Event Decor" },
    { id: 5, category: "corporate", title: "Corporate Event Setup" },
    { id: 6, category: "weddings", title: "Bridal Entry Pathway" },
  ];
  
  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-center mb-8">
            Our <span className="gradient-text">Gallery</span>
          </h1>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className="capitalize"
              >
                {filter}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="aspect-square bg-muted rounded-2xl hover-lift overflow-hidden group cursor-pointer"
              >
                <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                  <Sparkles className="h-12 w-12 mb-2 text-primary" />
                  <p className="font-medium text-center px-4">{item.title}</p>
                  <p className="text-xs mt-1 capitalize">{item.category}</p>
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

export default Gallery;

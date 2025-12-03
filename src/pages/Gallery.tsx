import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Button } from "@/components/ui/button";

// Import all gallery images
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
import carsBirthday from "@/assets/gallery/cars-birthday.jpeg";
import blackGoldBirthday from "@/assets/gallery/black-gold-birthday.jpeg";
import whiteGoldBirthday from "@/assets/gallery/white-gold-birthday.jpeg";
import samyukthaEvent from "@/assets/gallery/samyuktha-event.jpeg";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = ["all", "birthday", "wedding", "religious", "corporate"];
  
  const galleryItems = [
    { id: 1, category: "wedding", title: "Traditional Wedding Mandap", image: heroImage },
    { id: 2, category: "birthday", title: "Anniversary Celebration", image: anniversaryDecor },
    { id: 3, category: "religious", title: "Krishna Themed Decoration", image: krishnaDecor },
    { id: 4, category: "birthday", title: "Jungle Theme Birthday", image: jungleBirthday },
    { id: 5, category: "birthday", title: "Teddy Bear Theme", image: teddyBirthday },
    { id: 6, category: "birthday", title: "Stage Decoration", image: stageDecor },
    { id: 7, category: "birthday", title: "Butterfly Garden Theme", image: butterflyDecor },
    { id: 8, category: "birthday", title: "Blue Theme Birthday", image: blueBirthday },
    { id: 9, category: "birthday", title: "Balloon Arch Setup", image: balloonDecor },
    { id: 10, category: "birthday", title: "Pink Theme Celebration", image: pinkBirthday },
    { id: 11, category: "birthday", title: "Outdoor Birthday Event", image: outdoorBirthday },
    { id: 12, category: "birthday", title: "Cars Theme First Birthday", image: carsBirthday },
    { id: 13, category: "birthday", title: "Black & Gold Elegant Setup", image: blackGoldBirthday },
    { id: 14, category: "birthday", title: "White & Gold Theme", image: whiteGoldBirthday },
    { id: 15, category: "birthday", title: "Grand First Birthday", image: samyukthaEvent },
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
                className="aspect-square bg-muted rounded-2xl hover-lift overflow-hidden group cursor-pointer relative"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="font-display font-semibold text-lg">{item.title}</p>
                    <p className="text-sm capitalize text-white/80">{item.category}</p>
                  </div>
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
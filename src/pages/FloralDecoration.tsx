import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const FloralDecoration = () => {
  const styles = [
    { name: "Temple Mandap", description: "Traditional South Indian temple-style mandaps with lotus motifs" },
    { name: "Haldi Ceremony", description: "Vibrant yellow and orange themed decorations" },
    { name: "Reception Stage", description: "Grand and elegant floral backdrops" },
    { name: "Entrance Arches", description: "Majestic floral welcome arches" },
    { name: "Bridal Pathways", description: "Petal-strewn pathways with hanging garlands" },
    { name: "Floral Garlands", description: "Fresh jasmine, roses, and marigold garlands" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Floral <span className="gradient-text">Decoration</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Rooted in tradition. Designed for today.
          </p>
        </div>
      </section>

      {/* Design Styles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Our Design Styles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {styles.map((style, index) => (
              <div key={index} className="service-card bg-card rounded-2xl p-8 border border-border hover-lift">
                <h3 className="text-xl font-display font-semibold mb-3">{style.name}</h3>
                <p className="text-muted-foreground">{style.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FloralDecoration;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Heart, Leaf, Trophy } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Tradition",
      description: "Preserving the rich heritage of South Indian floral artistry",
    },
    {
      icon: <Trophy className="h-8 w-8 text-primary" />,
      title: "Craft",
      description: "Meticulous attention to every petal and arrangement",
    },
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: "Sustainability",
      description: "Eco-friendly practices and locally sourced fresh flowers",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-center mb-8">
            Our <span className="gradient-text">Story</span>
          </h1>
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Sainath Events was born from a deep appreciation for South Indian cultural celebrations and the timeless beauty of floral decoration.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With over a decade of experience, our team has decorated hundreds of weddings, temple events, and celebrations, bringing joy and beauty to every occasion. We combine traditional techniques with modern design sensibilities to create unforgettable experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-display font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

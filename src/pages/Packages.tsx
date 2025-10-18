import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      name: "Classic",
      price: "₹25k - ₹50k",
      features: ["Basic Mandap Setup", "Entrance Decoration", "Fresh Flowers", "2-3 Hour Setup"],
    },
    {
      name: "Royal",
      price: "₹75k - ₹1.5L",
      features: ["Premium Mandap Design", "Stage Backdrop", "Haldi Decoration", "Bridal Pathway", "Full Day Setup"],
      popular: true,
    },
    {
      name: "Premium",
      price: "₹2L+",
      features: ["Luxury Mandap", "360° Decoration", "Floral Jewelry", "Car Decoration", "Lighting Design", "Full Event Management"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-center mb-8">
            <span className="gradient-text">Packages</span> & Pricing
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-card rounded-2xl p-8 border-2 ${
                  pkg.popular ? "border-primary shadow-glow" : "border-border"
                } hover-lift`}
              >
                {pkg.popular && (
                  <div className="text-primary text-sm font-semibold mb-2">MOST POPULAR</div>
                )}
                <h3 className="text-2xl font-display font-bold mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold gradient-text mb-6">{pkg.price}</div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Packages;

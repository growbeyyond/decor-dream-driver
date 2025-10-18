import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const EventManagement = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-center mb-8">
            Event <span className="gradient-text">Management</span>
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            Comprehensive event planning and management services for weddings, cultural events, and corporate gatherings.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventManagement;

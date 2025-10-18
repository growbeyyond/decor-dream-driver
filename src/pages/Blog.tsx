import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Calendar } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "Top 10 South Indian Mandap Styles for 2025",
      excerpt: "Discover the most trending mandap designs that blend tradition with contemporary elegance.",
      date: "March 15, 2025",
      category: "Trends",
    },
    {
      title: "Haldi Under ₹50k: 7 Beautiful Setups",
      excerpt: "Budget-friendly haldi decoration ideas that don't compromise on beauty and authenticity.",
      date: "March 10, 2025",
      category: "Budgets",
    },
    {
      title: "Fresh vs Artificial Flowers—When to Use What",
      excerpt: "A comprehensive guide to help you choose the right flowers for your special event.",
      date: "March 5, 2025",
      category: "Guides",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-center mb-8">
            Blog & <span className="gradient-text">Ideas</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {posts.map((post, index) => (
              <article key={index} className="bg-card rounded-2xl overflow-hidden border border-border hover-lift">
                <div className="aspect-video bg-muted"></div>
                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">{post.category}</div>
                  <h3 className="text-xl font-display font-semibold mb-3">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;

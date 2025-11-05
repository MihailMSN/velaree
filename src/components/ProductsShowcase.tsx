import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plane, Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    icon: Plane,
    badge: "Live Now",
    badgeVariant: "default" as const,
    title: "aRStool - Air Ticket Re-Shopping",
    description: "AI-powered B2B portal that automatically monitors bookings and finds cheaper alternatives across 50+ sources",
    metrics: [
      "Save 15-40% on airfares",
      "Monitor 50+ sources",
      "Automatic PNR updates"
    ],
    link: "/rstool",
    buttonText: "Learn More",
    gradient: "from-primary/10 via-accent/10 to-primary/5"
  },
  {
    icon: Building2,
    badge: "Coming Q2 2025",
    badgeVariant: "secondary" as const,
    title: "hRStool - Hotel Re-Shopping",
    description: "AI-powered platform that continuously monitors hotel bookings for better rates and free cancellation opportunities",
    metrics: [
      "Save 20-35% on hotels",
      "Free cancellation rates",
      "Real-time monitoring"
    ],
    link: "/hrstool",
    buttonText: "Join Waitlist",
    gradient: "from-accent/10 via-primary/5 to-accent/10"
  }
];

const ProductsShowcase = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-accent/5 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Two Powerful Re-Shopping Tools
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Automatically find better prices after booking and increase your profits
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card
                key={index}
                className={`p-8 bg-gradient-to-br ${product.gradient} border-border hover:border-accent/50 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-in group`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 border border-primary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  </div>
                  <Badge variant={product.badgeVariant} className="text-sm font-semibold">
                    {product.badge}
                  </Badge>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>

                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-3 mb-8">
                  {product.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      <span className="text-foreground font-medium">{metric}</span>
                    </div>
                  ))}
                </div>

                <Link to={product.link}>
                  <Button 
                    size="lg" 
                    className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 group-hover:shadow-lg"
                  >
                    {product.buttonText}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <p className="text-muted-foreground text-lg mb-4">
            Both tools work seamlessly with your existing booking systems
          </p>
          <Link 
            to="/integrations"
            className="inline-flex items-center text-foreground font-semibold hover:text-primary transition-colors border-b-2 border-accent hover:border-primary pb-1"
          >
            View All Integrations →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MultiProductComparison from "@/components/MultiProductComparison";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Package, Plane, Hotel, Car, DollarSign, Zap, Shield } from "lucide-react";

const BundlesPage = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Bundle Savings",
      description: "Customers save up to 35% when booking flight + hotel + car together"
    },
    {
      icon: Zap,
      title: "Single API Call",
      description: "Search and book all travel products in one unified API integration"
    },
    {
      icon: Shield,
      title: "Unified Management",
      description: "One PNR for all products. Synchronized cancellations and modifications"
    }
  ];

  const useCases = [
    {
      title: "Complete Vacation Package",
      description: "Round-trip flight + 7-night hotel + rental car",
      products: ["Flights", "Hotels", "Cars"],
      savings: "35%"
    },
    {
      title: "Business Travel Bundle",
      description: "One-way flight + 3-night hotel",
      products: ["Flights", "Hotels"],
      savings: "25%"
    },
    {
      title: "City Break",
      description: "Round-trip flight + 2-night hotel + airport transfers",
      products: ["Flights", "Hotels", "Ground Transport"],
      savings: "30%"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary to-primary/90">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="w-20 h-20 rounded-2xl bg-accent/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
              <Package className="w-10 h-10 text-primary-foreground" strokeWidth={1.5} />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
              Multi-Product Bundles
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8">
              Flight + Hotel + Car packages with up to 35% savings through one unified API
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full"
                >
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6 rounded-full border-2"
                >
                  View API Docs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Multi-Product Bundles?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Increase revenue and customer satisfaction with bundled travel products
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Popular Bundle Types
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pre-configured packages for common travel scenarios
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground">{useCase.title}</h3>
                  <div className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-bold">
                    Save {useCase.savings}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{useCase.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {useCase.products.map((product, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 rounded-full bg-accent/30 border border-accent/50 text-xs font-semibold text-foreground"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <MultiProductComparison />

      {/* Code Example */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Simple Bundle API
              </h2>
              <p className="text-xl text-muted-foreground">
                One API call to search and book complete travel packages
              </p>
            </div>

            <Card className="p-6 bg-card border-border">
              <pre className="bg-primary text-primary-foreground p-6 rounded-lg overflow-x-auto text-sm leading-relaxed">
{`// Search for complete travel bundle
const bundle = await velaree.bundles.search({
  origin: "LAX",
  destination: "JFK",
  checkIn: "2025-12-15",
  checkOut: "2025-12-18",
  products: ["flight", "hotel", "car"],
  travelers: { adults: 2 }
});

// Returns optimized packages
console.log(bundle.packages.length); // 87 options
console.log(bundle.packages[0].savings); // "35%"
console.log(bundle.packages[0].total); // $1,247

// Book entire package in one call
const booking = await velaree.bundles.book({
  packageId: bundle.packages[0].id,
  passengers: [...],
  payment: {...}
});

// Single PNR for all products
console.log(booking.pnr); // "XYZ789"
console.log(booking.products); // { flight, hotel, car }`}
              </pre>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Start Offering Bundle Packages
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Increase average booking value by 40% with multi-product bundles
          </p>
          <Link to="/contact">
            <Button 
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full"
            >
              Get API Keys
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BundlesPage;

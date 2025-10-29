import { Card } from "@/components/ui/card";
import { Hotel, Globe, DollarSign, Zap, Shield, TrendingUp } from "lucide-react";

const suppliers = [
  {
    name: "TBO Holidays",
    coverage: "700K+ Properties",
    regions: "Asia, Middle East, Europe",
    features: ["Instant confirmation", "Competitive rates", "XML & API", "24/7 support"]
  },
  {
    name: "RateHawk",
    coverage: "2.9M+ Accommodations",
    regions: "Global - 330+ Suppliers",
    features: ["Best rate technology", "Virtual cards", "Real-time availability", "Multi-currency"]
  },
  {
    name: "HotelBeds",
    coverage: "180K+ Hotels",
    regions: "Worldwide - B2B Leader",
    features: ["40+ years experience", "Exclusive contracts", "Pay at hotel option", "Content API"]
  },
  {
    name: "Additional Suppliers",
    coverage: "Expedia, Agoda, Booking.com",
    regions: "Global Coverage",
    features: ["Direct connect", "Dynamic pricing", "Loyalty programs", "Package deals"]
  }
];

const benefits = [
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Access 2.9M+ properties worldwide through 330+ suppliers in one API call"
  },
  {
    icon: DollarSign,
    title: "Best Rate Guarantee",
    description: "Automatic comparison across all suppliers ensures lowest prices for your customers"
  },
  {
    icon: Zap,
    title: "Instant Confirmation",
    description: "98% instant booking confirmation with automated voucher delivery"
  },
  {
    icon: Shield,
    title: "Multi-Supplier Fallback",
    description: "If one supplier fails, automatically route to next available supplier"
  },
  {
    icon: TrendingUp,
    title: "Dynamic Pricing",
    description: "Real-time rate updates with markup configuration and promotional pricing"
  },
  {
    icon: Hotel,
    title: "Rich Content",
    description: "High-res images, detailed descriptions, amenities, reviews, and ratings"
  }
];

const HotelSolutions = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Hotel Inventory Aggregation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            2.9M+ properties from TBO, RateHawk, HotelBeds, and 330+ suppliers through one unified API
          </p>
        </div>

        {/* Suppliers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {suppliers.map((supplier, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-accent/50 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-foreground mb-2">{supplier.name}</h3>
              <p className="text-accent font-semibold mb-2">{supplier.coverage}</p>
              <p className="text-sm text-muted-foreground mb-4">{supplier.regions}</p>
              <ul className="space-y-2">
                {supplier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2 mt-1.5 flex-shrink-0"></div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="flex gap-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HotelSolutions;

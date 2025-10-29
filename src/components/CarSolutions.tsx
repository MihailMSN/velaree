import { Card } from "@/components/ui/card";
import { Car, MapPin, Clock, Shield, DollarSign, Zap } from "lucide-react";

const suppliers = [
  {
    name: "Hertz",
    type: "Direct Connect",
    locations: "Global Leader",
    features: ["Real-time pricing", "Loyalty integration", "Premium fleet", "Airport locations"]
  },
  {
    name: "Avis & Budget",
    type: "Direct Connect",
    locations: "Worldwide Coverage",
    features: ["Instant confirmation", "Flexible cancellation", "Young driver options", "One-way rentals"]
  },
  {
    name: "Enterprise & National",
    type: "Direct Connect",
    locations: "North America + Europe",
    features: ["Neighborhood locations", "Weekend specials", "Long-term rates", "Business programs"]
  },
  {
    name: "CarTrawler",
    type: "Aggregator",
    locations: "30K+ Locations",
    features: ["Multi-supplier", "Best rate guarantee", "Dynamic pricing", "Global consolidation"]
  }
];

const benefits = [
  {
    icon: MapPin,
    title: "10K+ Locations",
    description: "Coverage across airports, city centers, and neighborhood locations worldwide"
  },
  {
    icon: Clock,
    title: "Instant Confirmation",
    description: "Real-time availability and immediate booking confirmation"
  },
  {
    icon: Shield,
    title: "Flexible Policies",
    description: "Free cancellation, modification support, and insurance options"
  },
  {
    icon: DollarSign,
    title: "Competitive Rates",
    description: "Access to negotiated rates and promotional pricing across all brands"
  },
  {
    icon: Zap,
    title: "Fast Integration",
    description: "Single API for all suppliers with standardized response format"
  },
  {
    icon: Car,
    title: "Vehicle Selection",
    description: "Economy to luxury, SUVs, vans, and specialty vehicles"
  }
];

const CarSolutions = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Car Rental Network
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            10K+ locations from 20+ major brands through direct connections and aggregators
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
              <div className="inline-block px-3 py-1 rounded-full bg-accent/30 border border-accent/50 text-xs font-semibold text-foreground mb-3">
                {supplier.type}
              </div>
              <p className="text-sm text-muted-foreground mb-4">{supplier.locations}</p>
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

export default CarSolutions;

import { Card } from "@/components/ui/card";
import { Plane, DollarSign, Zap, Hotel, Car, Package } from "lucide-react";

const solutions = [
  {
    icon: Plane,
    title: "Flight Aggregation",
    subtitle: "200+ Airlines",
    description: "GDS + Direct Connect + Private Consolidator Fares",
    features: [
      "Real-time availability across 200+ airlines in one search",
      "Private consolidator fares (20-30% savings)",
      "Sub-500ms response times globally",
      "Automatic ticketing & PNR management"
    ]
  },
  {
    icon: Zap,
    title: "Smart Flight Booking",
    subtitle: "60-sec booking",
    description: "Complete end-to-end booking flow from search to confirmation",
    features: [
      "One-click booking with instant confirmation",
      "Dynamic pricing with full fare rules",
      "Mobile-optimized checkout experience",
      "Multi-payment gateway integration"
    ]
  },
  {
    icon: Hotel,
    title: "Global Hotel Inventory",
    subtitle: "2.9M+ Properties",
    description: "TBO, RateHawk, HotelBeds & 330+ suppliers aggregated",
    features: [
      "Best rate guarantee across all suppliers",
      "98% instant booking confirmation",
      "Multi-currency & global coverage",
      "Rich content with images & reviews"
    ]
  },
  {
    icon: DollarSign,
    title: "Best Rate Guarantee",
    subtitle: "Save 20-35%",
    description: "Automatic comparison across 330+ hotel suppliers",
    features: [
      "Real-time rate comparison engine",
      "Private consolidator hotel rates",
      "Dynamic markup configuration",
      "Bundle discounts & promotions"
    ]
  },
  {
    icon: Car,
    title: "Car Rental Network",
    subtitle: "10K+ Locations",
    description: "Hertz, Avis, Enterprise, Budget & 20+ brands",
    features: [
      "Direct connect + aggregator access",
      "Real-time availability & pricing",
      "Flexible cancellation policies",
      "Airport & city center locations"
    ]
  },
  {
    icon: Package,
    title: "Unified Automation",
    subtitle: "70% Less Work",
    description: "Intelligent automation for all travel products",
    features: [
      "Cross-product booking management",
      "Automated schedule change handling",
      "Multi-product cancellation processing",
      "Unified customer notification system"
    ]
  }
];

const Solutions = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Complete Travel Product Suite
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flights, hotels, cars — all through one unified API platform
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card 
                key={index} 
                className="p-8 bg-card border-border hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-2 cursor-pointer group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent/30 border border-accent/50">
                    <span className="text-sm font-semibold text-foreground">{solution.subtitle}</span>
                  </div>
                </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {solution.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {solution.description}
              </p>
              
              <ul className="space-y-3">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3 mt-2 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plane, Hotel, Car, Package } from "lucide-react";
import { Card } from "@/components/ui/card";

const products = {
  flights: {
    icon: Plane,
    title: "Flight APIs",
    description: "200+ Airlines | GDS + Direct Connect",
    features: [
      "Real-time availability & pricing",
      "Private consolidator fares (20-30% savings)",
      "Sub-500ms response times",
      "Automatic ticketing & PNR management"
    ],
    metrics: {
      inventory: "200+ Airlines",
      speed: "347ms avg",
      uptime: "99.9%"
    }
  },
  hotels: {
    icon: Hotel,
    title: "Hotel APIs",
    description: "2.9M+ Properties | 330+ Suppliers",
    features: [
      "TBO, RateHawk, HotelBeds integration",
      "Best rate guarantee across suppliers",
      "Instant booking confirmation (98%)",
      "Multi-currency & global coverage"
    ],
    metrics: {
      inventory: "2.9M+ Hotels",
      speed: "612ms avg",
      confirmation: "98% instant"
    }
  },
  cars: {
    icon: Car,
    title: "Car Rental APIs",
    description: "10K+ Locations | 20+ Major Brands",
    features: [
      "Hertz, Avis, Enterprise, Budget direct",
      "CarTrawler aggregation",
      "Real-time availability & pricing",
      "Automatic cancellation handling"
    ],
    metrics: {
      inventory: "10K+ Locations",
      speed: "423ms avg",
      brands: "20+ Brands"
    }
  },
  bundles: {
    icon: Package,
    title: "Multi-Product Bundles",
    description: "Flight + Hotel + Car in One API",
    features: [
      "Dynamic package pricing",
      "Synchronized booking confirmation",
      "Bundle discounts & promotions",
      "Unified cancellation & modification"
    ],
    metrics: {
      savings: "Up to 35%",
      confirmation: "Single PNR",
      support: "24/7"
    }
  }
};

const ProductSelector = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Complete Travel API Suite
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            One API. Unlimited Travel Products. Instant Integration.
          </p>
        </div>

        <Tabs defaultValue="flights" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-card border border-border">
            {Object.entries(products).map(([key, product]) => {
              const Icon = product.icon;
              return (
                <TabsTrigger 
                  key={key} 
                  value={key}
                  className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground py-4"
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {product.title.split(' ')[0]}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {Object.entries(products).map(([key, product]) => {
            const Icon = product.icon;
            return (
              <TabsContent key={key} value={key} className="animate-fade-in">
                <Card className="p-8 bg-card border-border">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{product.title}</h3>
                          <p className="text-muted-foreground">{product.description}</p>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-4">Key Metrics</h4>
                      <div className="space-y-4">
                        {Object.entries(product.metrics).map(([label, value]) => (
                          <div key={label} className="flex justify-between items-center p-4 bg-secondary/30 rounded-lg">
                            <span className="text-muted-foreground capitalize">{label}</span>
                            <span className="text-lg font-bold text-foreground">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default ProductSelector;

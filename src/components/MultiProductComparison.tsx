import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const MultiProductComparison = () => {
  const features = [
    { name: "Multi-Product Search (Flight + Hotel + Car)", velaree: true, traditional: false },
    { name: "Single API Integration", velaree: true, traditional: false },
    { name: "Unified Response Format", velaree: true, traditional: false },
    { name: "Best Rate Comparison Across Suppliers", velaree: true, traditional: "Partial" },
    { name: "Automatic Supplier Fallback", velaree: true, traditional: false },
    { name: "Bundle Discounts & Packages", velaree: true, traditional: false },
    { name: "Synchronized Booking Confirmation", velaree: true, traditional: false },
    { name: "Multi-Product Cancellation", velaree: true, traditional: false },
    { name: "Integration Time", velaree: "10 minutes", traditional: "12+ months" },
    { name: "Maintenance Complexity", velaree: "Low - One API", traditional: "High - Multiple APIs" },
    { name: "Response Time", velaree: "<800ms average", traditional: "2-5 seconds" },
    { name: "Support", velaree: "24/7 Dedicated", traditional: "Business hours" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Velaree vs. Traditional Integration
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            One API for everything vs. managing multiple integrations
          </p>
        </div>

        <Card className="max-w-5xl mx-auto overflow-hidden border-border animate-scale-in">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-accent/20">
                <tr>
                  <th className="text-left p-4 font-bold text-foreground">Feature</th>
                  <th className="text-center p-4 font-bold text-foreground">Velaree Platform</th>
                  <th className="text-center p-4 font-bold text-foreground">Traditional Approach</th>
                </tr>
              </thead>
              <tbody className="bg-card">
                {features.map((feature, index) => (
                  <tr key={index} className="border-t border-border hover:bg-accent/5 transition-colors">
                    <td className="p-4 text-foreground">{feature.name}</td>
                    <td className="p-4 text-center">
                      {typeof feature.velaree === 'boolean' ? (
                        feature.velaree ? (
                          <Check className="w-5 h-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-500 mx-auto" />
                        )
                      ) : (
                        <span className="font-semibold text-foreground">{feature.velaree}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof feature.traditional === 'boolean' ? (
                        feature.traditional ? (
                          <Check className="w-5 h-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-500 mx-auto" />
                        )
                      ) : (
                        <span className="font-semibold text-muted-foreground">{feature.traditional}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-accent/10 border-t border-border">
            <div className="text-center">
              <p className="text-foreground font-bold mb-2">
                Result: 90% faster integration, 70% lower maintenance costs
              </p>
              <p className="text-muted-foreground text-sm">
                Velaree handles complexity so you can focus on growing your business
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default MultiProductComparison;

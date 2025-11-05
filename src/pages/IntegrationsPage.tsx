import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import ApiFlowDiagram from "@/components/ApiFlowDiagram";

const integrations = [
  {
    category: "Global Distribution Systems (GDS)",
    partners: [
      { name: "Amadeus", description: "Real-time booking and inventory management" },
      { name: "Sabre", description: "Advanced fare shopping and ticketing" },
      { name: "Travelport", description: "Multi-source content aggregation" }
    ]
  },
  {
    category: "Metasearch Platforms",
    partners: [
      { name: "Google Flights", description: "Direct API integration for price comparison" },
      { name: "Skyscanner", description: "Live pricing feed and deep linking" },
      { name: "Kayak", description: "Inventory distribution and analytics" }
    ]
  },
  {
    category: "Direct Airline Connections",
    partners: [
      { name: "Low-Cost Carriers", description: "50+ LCC direct connect APIs" },
      { name: "Full-Service Airlines", description: "NDC and traditional EDIFACT" },
      { name: "Regional Carriers", description: "Custom integration frameworks" }
    ]
  },
  {
    category: "Payment & Processing",
    partners: [
      { name: "Stripe", description: "Global payment processing" },
      { name: "BSP/ARC", description: "Industry settlement systems" },
      { name: "Multi-currency", description: "150+ currencies supported" }
    ]
  }
];

const IntegrationsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary to-primary/90">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
              Global Connectivity
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8">
              Seamless integrations through our modular API architecture
            </p>
          </div>
        </div>
      </section>

      {/* API Architecture */}
      <section className="py-24 bg-gradient-to-b from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our API Architecture
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A single integration point to access the entire travel ecosystem
            </p>
          </div>
          <ApiFlowDiagram />
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {integrations.map((category, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <h2 className="text-3xl font-bold text-foreground mb-8 border-b border-border pb-4">
                  {category.category}
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {category.partners.map((partner, idx) => (
                    <Card 
                      key={idx}
                      className="p-6 bg-card border-border hover:border-accent/50 transition-all duration-300 hover:scale-105 group"
                    >
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                        {partner.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {partner.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="p-8 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 border border-primary/20 inline-block">
              <p className="text-foreground text-2xl font-bold">
                + 50 more airline and consolidator direct connections
              </p>
              <p className="text-muted-foreground mt-2">
                Custom integration capabilities for enterprise partners
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 bg-gradient-to-b from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Technical Specifications
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-card border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Response Time</h3>
                <p className="text-3xl font-bold text-accent mb-2">&lt; 500ms</p>
                <p className="text-muted-foreground">Average API response time globally</p>
              </Card>
              <Card className="p-6 bg-card border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Uptime SLA</h3>
                <p className="text-3xl font-bold text-accent mb-2">99.9%</p>
                <p className="text-muted-foreground">Guaranteed availability year-round</p>
              </Card>
              <Card className="p-6 bg-card border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">API Format</h3>
                <p className="text-3xl font-bold text-accent mb-2">REST</p>
                <p className="text-muted-foreground">JSON responses with GraphQL option</p>
              </Card>
              <Card className="p-6 bg-card border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Rate Limits</h3>
                <p className="text-3xl font-bold text-accent mb-2">Custom</p>
                <p className="text-muted-foreground">Scalable based on your volume</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IntegrationsPage;

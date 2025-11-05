import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import ApiFlowDiagram from "@/components/ApiFlowDiagram";

const integrations = [
  {
    category: "GDS & Traditional Sources",
    description: "Core distribution systems for comprehensive fare monitoring",
    partners: [
      { name: "Amadeus", description: "Real-time fare monitoring and re-booking" },
      { name: "Sabre", description: "Advanced price tracking and inventory" },
      { name: "Travelport", description: "Multi-GDS fare comparison" }
    ]
  },
  {
    category: "Airlines Direct (aRStool)",
    description: "200+ airline connections for direct fare monitoring",
    partners: [
      { name: "Low-Cost Carriers", description: "50+ LCC APIs for best price tracking" },
      { name: "Full-Service Airlines", description: "NDC connections for private fares" },
      { name: "Consolidator Fares", description: "Exclusive wholesale pricing access" }
    ]
  },
  {
    category: "Metasearch Engines (aRStool)",
    description: "Public fare comparison for comprehensive monitoring",
    partners: [
      { name: "Google Flights", description: "Real-time public fare comparison" },
      { name: "Skyscanner", description: "Multi-source price monitoring" },
      { name: "Kayak", description: "Fare trend analysis and alerts" }
    ]
  },
  {
    category: "OTA Partners (hRStool)",
    description: "Leading online travel agencies for hotel rate monitoring",
    partners: [
      { name: "Booking.com", description: "Global hotel inventory monitoring" },
      { name: "Expedia", description: "Comprehensive rate tracking" },
      { name: "Hotels.com", description: "Loyalty program integration" }
    ]
  },
  {
    category: "Hotel Direct (hRStool)",
    description: "Direct connections to major hotel chains",
    partners: [
      { name: "Major Chains", description: "Marriott, Hilton, IHG direct rates" },
      { name: "Boutique Hotels", description: "Independent property monitoring" },
      { name: "Wholesalers", description: "Exclusive contract rate access" }
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
              50+ Data Sources for Re-Shopping
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8">
              Our AI monitors fares and rates across the world's leading GDSs, airlines, OTAs, and consolidators
            </p>
          </div>
        </div>
      </section>

      {/* API Architecture */}
      <section className="py-24 bg-gradient-to-b from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How We Monitor All Sources
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI continuously checks these data sources to find the best savings opportunities
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
                <div className="mb-4">
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    {category.category}
                  </h2>
                  <p className="text-muted-foreground text-lg">{category.description}</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mb-8 pb-8 border-b border-border">
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

          <div className="text-center">
            <Card className="p-8 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 border border-primary/20 inline-block">
              <h3 className="text-foreground text-2xl font-bold mb-2">
                How We Use These Integrations
              </h3>
              <p className="text-muted-foreground mt-2 max-w-3xl">
                <strong className="text-foreground">For aRStool:</strong> We monitor all these sources simultaneously to find cheaper alternatives to your clients' booked flights
              </p>
              <p className="text-muted-foreground mt-2 max-w-3xl">
                <strong className="text-foreground">For hRStool:</strong> We continuously check rates across all platforms to identify savings opportunities for hotel bookings
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

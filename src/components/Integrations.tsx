import { Card } from "@/components/ui/card";

const partners = [
  { name: "Amadeus", type: "GDS" },
  { name: "Sabre", type: "GDS" },
  { name: "Travelport", type: "GDS" },
  { name: "Google Flights", type: "Metasearch" },
  { name: "Skyscanner", type: "Metasearch" },
  { name: "Kayak", type: "Metasearch" },
];

const Integrations = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-primary/5 via-accent/5 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Global Connectivity
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seamlessly integrated with leading GDSs, airlines, and distribution platforms worldwide
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card border-border hover:bg-accent/10 transition-all duration-300 hover:scale-105 cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {partner.name}
                </h3>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  {partner.type}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-lg">
            + 50 more airline and consolidator direct connections
          </p>
        </div>
      </div>
    </section>
  );
};

export default Integrations;

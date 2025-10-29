import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const integrations = {
  flights: [
    { name: "Amadeus", type: "GDS" },
    { name: "Sabre", type: "GDS" },
    { name: "Travelport", type: "GDS" },
    { name: "Google Flights", type: "Metasearch" },
    { name: "200+ Airlines", type: "Direct Connect" }
  ],
  hotels: [
    { name: "TBO Holidays", type: "700K+ Properties" },
    { name: "RateHawk", type: "2.9M+ Accommodations" },
    { name: "HotelBeds", type: "180K+ Hotels" },
    { name: "Expedia", type: "Global Inventory" },
    { name: "Agoda", type: "Asia-Pacific Focus" },
    { name: "Booking.com", type: "Direct Connect" }
  ],
  cars: [
    { name: "Hertz", type: "Direct Connect" },
    { name: "Avis & Budget", type: "Direct Connect" },
    { name: "Enterprise", type: "Direct Connect" },
    { name: "Sixt", type: "Direct Connect" },
    { name: "CarTrawler", type: "30K+ Locations" },
    { name: "20+ Brands", type: "Aggregated" }
  ]
};

const Integrations = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            450+ Global Integrations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flights, hotels, cars — all major suppliers through one unified API
          </p>
        </div>
        
        <Tabs defaultValue="flights" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-card border border-border">
            <TabsTrigger value="flights">Flights (200+)</TabsTrigger>
            <TabsTrigger value="hotels">Hotels (330+)</TabsTrigger>
            <TabsTrigger value="cars">Cars (20+)</TabsTrigger>
          </TabsList>

          {Object.entries(integrations).map(([category, partners]) => (
            <TabsContent key={category} value={category} className="animate-fade-in">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partners.map((partner, index) => (
                  <Card 
                    key={index} 
                    className="p-8 bg-card border-border hover:bg-accent/10 transition-all duration-300 hover:scale-105 cursor-pointer"
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
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-lg">
            + Hundreds more direct connections across all travel products
          </p>
        </div>
      </div>
    </section>
  );
};

export default Integrations;

import ValuePillars from "./ValuePillars";
import ClickToBookMockup from "./mockups/ClickToBookMockup";

const Mission = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Why Velaree?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade technology powering next-generation travel infrastructure
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="animate-fade-in">
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Built for Scale
            </h3>
            
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              We're transforming the travel industry through advanced automation and intelligent data connectivity. Our mission is to empower travel businesses with the technology they need to compete and scale in the modern era.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              From OTAs and TMCs to airlines and consolidators, we provide the infrastructure that makes complex travel operations simple, efficient, and profitable.
            </p>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <ClickToBookMockup />
          </div>
        </div>

        <div className="mt-16">
          <ValuePillars />
        </div>
      </div>
    </section>
  );
};

export default Mission;

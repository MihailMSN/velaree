import { Globe2 } from "lucide-react";
import ValuePillars from "./ValuePillars";

const Mission = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Why Velaree
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We empower travel businesses to scale, automate, and deliver exceptional experiences to millions of travelers worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Powering Digital Transformation
            </h3>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Velaree is on a mission to revolutionize the travel industry through cutting-edge technology. Our platform connects the global travel ecosystem — from airlines and hotels to agencies and consolidators — creating seamless workflows that drive growth and efficiency.
            </p>
          </div>
          
          <div className="relative flex items-center justify-center animate-float">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center shadow-2xl">
              <Globe2 className="w-40 h-40 text-primary" strokeWidth={1} />
            </div>
            
            <div className="absolute inset-0 rounded-full bg-accent/20 animate-network-pulse blur-2xl"></div>
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

import { Globe2 } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground">
              Powering Digital Transformation
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Velaree is on a mission to revolutionize the travel industry through cutting-edge technology. We empower travel businesses to scale, automate, and deliver exceptional experiences to millions of travelers worldwide.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our platform connects the global travel ecosystem — from airlines and hotels to agencies and consolidators — creating seamless workflows that drive growth and efficiency.
            </p>
          </div>
          
          <div className="relative flex items-center justify-center animate-float">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center shadow-2xl">
              <Globe2 className="w-40 h-40 text-primary" strokeWidth={1} />
            </div>
            
            <div className="absolute inset-0 rounded-full bg-accent/20 animate-network-pulse blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;

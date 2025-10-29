import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import NetworkBackground from "./NetworkBackground";
import ScrollIndicator from "./ScrollIndicator";
import TrustBar from "./TrustBar";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      <NetworkBackground />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
            The Complete Travel API Platform
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto font-light">
            Flights, Hotels & Cars. One API. Instant Booking.
          </p>

          <p className="text-lg md:text-xl text-primary-foreground/70 mb-12 max-w-2xl mx-auto">
            200+ airlines | 2.9M+ hotels | 10K+ car locations — All integrated in 10 minutes
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6 rounded-full transition-all duration-300 group"
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Schedule Demo
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/60">
            <span>✓ No credit card required</span>
            <span>✓ 10-minute setup</span>
            <span>✓ Full API access</span>
          </div>
        </div>
      </div>

      <ScrollIndicator />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      
      <TrustBar />
    </section>
  );
};

export default Hero;

import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import ScrollIndicator from "./ScrollIndicator";
import TrustBar from "./TrustBar";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary mb-6 leading-tight">
            AI-Powered Re-Shopping Tools for Travel Agencies
          </h1>
          
          <p className="text-xl md:text-2xl text-primary/80 mb-8 max-w-3xl mx-auto font-light">
            Automatically find better fares and rates after booking. Save your clients money while earning more commission.
          </p>

          <p className="text-lg md:text-xl text-primary/70 mb-12 max-w-2xl mx-auto">
            Trusted by leading travel agencies worldwide
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/rstool">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                Explore aRStool
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            
            <a href="/hrstool">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 rounded-full transition-all duration-300 group"
              >
                Explore hRStool
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>

            <a href="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 rounded-full transition-all duration-300 group"
              >
                <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Schedule Demo
              </Button>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-primary/60">
            <span>✓ Save 15-40% on airfares</span>
            <span>✓ Automatic monitoring</span>
            <span>✓ Increase your commissions</span>
          </div>
        </div>
      </div>

      <ScrollIndicator />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      
      <TrustBar />
    </section>
  );
};

export default Hero;

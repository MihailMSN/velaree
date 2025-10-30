import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import ScrollIndicator from "./ScrollIndicator";
import TrustBar from "./TrustBar";
import MockupPhone from "./mockups/MockupPhone";
import FlightSearchScreen from "./mockups/screens/FlightSearchScreen";
import FlightResultsScreen from "./mockups/screens/FlightResultsScreen";
import BookingConfirmScreen from "./mockups/screens/BookingConfirmScreen";
import DashboardScreen from "./mockups/screens/DashboardScreen";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      
      {/* Background Phone Mockups */}
      <div className="hidden lg:block absolute left-[2%] top-[20%] opacity-40 blur-[1px] animate-float" aria-hidden="true">
        <div className="transform rotate-[-8deg]">
          <MockupPhone>
            <FlightSearchScreen />
          </MockupPhone>
        </div>
      </div>
      
      <div className="hidden lg:block absolute right-[2%] top-[25%] opacity-40 blur-[1px] animate-float" style={{ animationDelay: '2s' }} aria-hidden="true">
        <div className="transform rotate-[8deg]">
          <MockupPhone>
            <FlightResultsScreen />
          </MockupPhone>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl font-bold text-primary mb-6 leading-tight">
            The Travel API That <span className="italic">Delivers</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary/80 mb-8 max-w-3xl mx-auto font-light">
            Book flights from 200+ airlines with sub-500ms response times. Private fares, intelligent automation, and enterprise-grade reliability.
          </p>

          <p className="text-lg md:text-xl text-primary/70 mb-12 max-w-2xl mx-auto">
            Trusted by leading travel platforms worldwide
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
              className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 rounded-full transition-all duration-300 group"
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Schedule Demo
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-primary/60">
            <span>✓ No credit card required</span>
            <span>✓ 10-minute setup</span>
            <span>✓ Full API access</span>
          </div>
        </div>
      </div>

      <ScrollIndicator />
      <TrustBar />
    </section>
  );
};

export default Hero;

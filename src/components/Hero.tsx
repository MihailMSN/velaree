import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Presentation, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollIndicator from "./ScrollIndicator";
import HeroCardShowcase from "./HeroCardShowcase";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
          {/* Left Column - Text Content */}
          <div className="max-w-2xl text-center lg:text-left animate-fade-in lg:w-1/2 pt-20 lg:pt-0">
            {/* rsTool Launch Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-sm font-medium mb-6 animate-pulse">
              <Sparkles className="w-4 h-4" />
              <span>rsTool launching Q3-Q4 2026 • Our flagship AI repricing platform</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
              The Travel API That Delivers
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-primary/80 mb-6 sm:mb-8 font-light">
              200+ airlines. Sub-500ms response. 99.9% uptime. Process millions of bookings with private fares, intelligent automation, and enterprise-grade infrastructure.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-primary/70 mb-8 sm:mb-12">
              Trusted by leading OTAs, TMCs, and travel platforms worldwide
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center">
              <Link to="/rstool" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-6 min-h-[52px] rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group text-white bg-emerald-600 hover:bg-emerald-700">
                  Explore rsTool
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base sm:text-lg px-6 sm:px-8 py-6 min-h-[52px] rounded-full transition-all duration-300 group">
                  <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Schedule Demo
                </Button>
              </Link>
              
              <Link to="/pitch-deck" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-2 border-primary/50 text-primary hover:bg-primary/5 text-base sm:text-lg px-6 sm:px-8 py-6 min-h-[52px] rounded-full transition-all duration-300 group">
                  <Presentation className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  View Pitch Deck
                </Button>
              </Link>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 text-xs sm:text-sm text-primary/60">
              <span>✓ No credit card required</span>
              <span>✓ 10-minute setup</span>
              <span>✓ Full API access</span>
            </div>

            {/* Partner Logos */}
            <div className="mt-8 sm:mt-10">
              <p className="text-xs text-primary/50 mb-4 text-center lg:text-left uppercase tracking-wider">
                Integrated with leading GDS providers
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 sm:gap-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-500">
                <img src="/logos/amadeus.png" alt="Amadeus" className="h-6 sm:h-7 object-contain" />
                <img src="/logos/sabre.png" alt="Sabre" className="h-6 sm:h-7 object-contain" />
                <img src="/logos/travelport.png" alt="Travelport" className="h-6 sm:h-7 object-contain" />
                <img src="/logos/iata.png" alt="IATA" className="h-6 sm:h-7 object-contain" />
                <img alt="BCD Travel" className="h-5 sm:h-6 object-contain" src="/lovable-uploads/0a00545d-d519-4e5d-a008-1539582f5321.png" />
                <img src="/logos/mystifly.png" alt="Mystifly" className="h-5 sm:h-6 object-contain" />
              </div>
            </div>
          </div>

          {/* Right Column - Card Showcase */}
          <div className="hidden lg:flex lg:w-1/2 justify-center items-end">
            <HeroCardShowcase className="px-px my-0 py-0 pb-px pr-[120px] pl-0 border-primary pt-[111px]" />
          </div>
        </div>
      </div>

      <ScrollIndicator />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
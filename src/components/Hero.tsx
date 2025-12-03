import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollIndicator from "./ScrollIndicator";
import HeroCardShowcase from "./HeroCardShowcase";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Column - Text Content */}
          <div className="max-w-2xl text-center lg:text-left animate-fade-in-up lg:w-1/2">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
              The Travel API That Delivers
            </h1>
            
            <p className="text-xl md:text-2xl text-primary/80 mb-8 font-light">
              200+ airlines. Sub-500ms response. 99.9% uptime. Process millions of bookings with private fares, intelligent automation, and enterprise-grade infrastructure.
            </p>

            <p className="text-lg md:text-xl text-primary/70 mb-12">
              Trusted by leading OTAs, TMCs, and travel platforms worldwide
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Link to="/auth">
                <Button size="lg" className="text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group text-white bg-stone-950 hover:bg-stone-800">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 rounded-full transition-all duration-300 group">
                  <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Schedule Demo
                </Button>
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-primary/60">
              <span>✓ No credit card required</span>
              <span>✓ 10-minute setup</span>
              <span>✓ Full API access</span>
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
    </section>;
};
export default Hero;
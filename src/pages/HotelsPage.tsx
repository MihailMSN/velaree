import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HotelSolutions from "@/components/HotelSolutions";
import HotelSearchMockup from "@/components/mockups/HotelSearchMockup";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Hotel, Globe, Zap, Shield } from "lucide-react";

const HotelsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary to-primary/90">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="w-20 h-20 rounded-2xl bg-accent/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
              <Hotel className="w-10 h-10 text-primary-foreground" strokeWidth={1.5} />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
              Hotel API Platform
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8">
              2.9M+ properties from TBO, RateHawk, HotelBeds, and 330+ suppliers in one unified API
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full"
                >
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6 rounded-full border-2"
                >
                  View API Docs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">2.9M+</div>
              <div className="text-muted-foreground">Properties Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">330+</div>
              <div className="text-muted-foreground">Supplier Integrations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-muted-foreground">Instant Confirmation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">&lt;800ms</div>
              <div className="text-muted-foreground">Avg Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mockup */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto animate-scale-in">
            <HotelSearchMockup />
          </div>
        </div>
      </section>

      {/* Hotel Solutions */}
      <HotelSolutions />

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Add Hotels to Your Platform?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Integration takes 10 minutes. Start accessing 2.9M+ properties today.
          </p>
          <Link to="/contact">
            <Button 
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full"
            >
              Get API Keys
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HotelsPage;

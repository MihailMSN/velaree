import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CarSolutions from "@/components/CarSolutions";
import CarRentalMockup from "@/components/mockups/CarRentalMockup";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Car } from "lucide-react";

const CarsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary to-primary/90">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="w-20 h-20 rounded-2xl bg-accent/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
              <Car className="w-10 h-10 text-primary-foreground" strokeWidth={1.5} />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
              Car Rental API
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8">
              10K+ locations from Hertz, Avis, Enterprise, Budget and 20+ brands through one API
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
              <div className="text-4xl font-bold text-accent mb-2">10K+</div>
              <div className="text-muted-foreground">Rental Locations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">20+</div>
              <div className="text-muted-foreground">Major Brands</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">Real-Time Availability</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">&lt;600ms</div>
              <div className="text-muted-foreground">Avg Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mockup */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto animate-scale-in">
            <CarRentalMockup />
          </div>
        </div>
      </section>

      {/* Car Solutions */}
      <CarSolutions />

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Add Car Rentals?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            One API integration. Access to 10K+ locations worldwide.
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

export default CarsPage;

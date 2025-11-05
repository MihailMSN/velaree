import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RStoolDemoDashboard from "@/components/rstool/RStoolDemoDashboard";
import RStoolFeatures from "@/components/rstool/RStoolFeatures";
import RStoolHowItWorks from "@/components/rstool/RStoolHowItWorks";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const RSTool = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              AI-Powered B2B Re-Shopping Portal
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
              RSTool Demo
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Experience the future of airline ticket re-shopping. Our AI-powered platform monitors PNRs 24/7, 
              checks pricing across all major GDSs, and automatically finds better fares through multiple re-booking scenarios.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="rounded-full">
                  Request B2B Access <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="rounded-full">
                Watch Demo Video
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Dashboard */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interactive Demo Dashboard
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how RSTool analyzes PNRs and finds savings opportunities across multiple GDS platforms
            </p>
          </div>
          <RStoolDemoDashboard />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <RStoolHowItWorks />
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features for B2B Travel Agencies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to maximize savings and optimize your airline bookings
            </p>
          </div>
          <RStoolFeatures />
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your B2B Travel Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join leading travel agencies already saving millions with RSTool's AI-powered re-shopping platform
          </p>
          <Link to="/contact">
            <Button size="lg" className="rounded-full">
              Schedule a Demo <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RSTool;

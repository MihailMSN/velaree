import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Zap, FileCode, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import ApiFlowDiagram from "@/components/ApiFlowDiagram";
import TechnicalSpecs from "@/components/TechnicalSpecs";
import ApiPreview from "@/components/ApiPreview";
import ValuePillars from "@/components/ValuePillars";
import TrustBar from "@/components/TrustBar";
import SolutionTabs from "@/components/technology/SolutionTabs";
import SolutionComparisonTable from "@/components/technology/SolutionComparisonTable";
import TechTestimonials from "@/components/technology/TechTestimonials";

const heroStats = [
  { value: "200+", label: "Airlines" },
  { value: "50+", label: "Suppliers" },
  { value: "<500ms", label: "Response" },
  { value: "99.9%", label: "Uptime" }
];

const Technology = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Travel Technology Solutions | Velaree Tech Stack</title>
        <meta 
          name="description" 
          content="Explore Velaree's powerful travel technology: Click-to-Book Platform, Private Fare API, Automation Suite, and Re-Shopping Engine for OTAs, TMCs, and airlines." 
        />
        <meta 
          name="keywords" 
          content="travel technology, OTA platform, TMC software, airline booking system, private fare API, travel automation, re-shopping engine" 
        />
        <link rel="canonical" href="https://velaree.com/technology" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Travel Technology Solutions | Velaree Tech Stack" />
        <meta property="og:description" content="Powerful travel technology tools for OTAs, TMCs, and airlines - instant booking, private fares, automation, and re-shopping." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://velaree.com/technology" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Travel Technology Solutions | Velaree Tech Stack" />
        <meta name="twitter:description" content="Powerful travel technology tools for OTAs, TMCs, and airlines - instant booking, private fares, automation, and re-shopping." />
      </Helmet>
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-background via-background to-muted/20 relative overflow-hidden pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Zap className="w-4 h-4" />
            Powerful Travel Technology Stack
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Technology
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Powerful tools built for modern travel businesses
          </p>
          
          {/* Hero Stats Bar */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {heroStats.map((stat, index) => (
              <div 
                key={index}
                className="flex flex-col items-center px-6 py-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50"
              >
                <span className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</span>
                <span className="text-xs md:text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link to="/contact">
              <Button size="lg" className="rounded-full px-8 py-6 text-lg">
                <FileCode className="w-5 h-5 mr-2" />
                Get API Keys
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg">
                <BookOpen className="w-5 h-5 mr-2" />
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* API Flow Diagram Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
              One unified API connecting you to the entire travel ecosystem
            </p>
          </div>
          <ApiFlowDiagram />
        </div>
      </section>

      {/* Value Pillars Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">
              Built for Scale
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Enterprise-grade infrastructure that grows with your business
            </p>
          </div>
          <ValuePillars />
        </div>
      </section>

      {/* Solutions Section with Tabs */}
      <SolutionTabs />

      {/* Feature Comparison Table */}
      <SolutionComparisonTable />

      {/* Technical Specs Section */}
      <TechnicalSpecs />

      {/* API Preview Section */}
      <ApiPreview />

      {/* Tech Testimonials */}
      <TechTestimonials />

      {/* Integration Partners Trust Bar */}
      <TrustBar />

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Schedule a personalized demo to see how Velaree can transform your operations
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Link to="/contact">
              <Button 
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
              >
                Book a Demo
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 rounded-full bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
              >
                Get API Keys
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Technology;

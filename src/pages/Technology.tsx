import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, DollarSign, Zap, RefreshCw, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ClickToBookMockup from "@/components/mockups/ClickToBookMockup";
import PrivateFareMockup from "@/components/mockups/PrivateFareMockup";
import AutomationMockup from "@/components/mockups/AutomationMockup";
import RStoolDemoDashboard from "@/components/rstool/RStoolDemoDashboard";

const solutions = [
  {
    icon: Plane,
    title: "Click-to-Book Platform",
    description: "Instant booking for OTAs and TMCs with real-time availability and pricing",
    features: [
      "Multi-source aggregation from 50+ suppliers",
      "Sub-second search response times",
      "Automated ticketing and confirmation",
      "Mobile-optimized booking flow",
      "Payment gateway integration",
      "24/7 uptime guarantee"
    ],
    benefits: "Reduce booking time from minutes to seconds while improving conversion rates by up to 40%",
    gradient: "from-blue-50 via-cyan-50 to-slate-50",
    hoverGradient: "group-hover:from-blue-100 group-hover:via-cyan-100 group-hover:to-slate-100",
    link: "/technology"
  },
  {
    icon: DollarSign,
    title: "Private Fare API",
    description: "Connect with global consolidators and airlines for exclusive rates",
    features: [
      "Access to 100+ consolidator networks",
      "Negotiated private fares and net rates",
      "Real-time fare comparison engine",
      "Automated markup configuration",
      "Multi-currency support",
      "Fare rules and restrictions API"
    ],
    benefits: "Increase profit margins by 25-35% with access to exclusive consolidator inventory",
    gradient: "from-emerald-50 via-green-50 to-slate-50",
    hoverGradient: "group-hover:from-emerald-100 group-hover:via-green-100 group-hover:to-slate-100",
    link: "/technology"
  },
  {
    icon: Zap,
    title: "Automation Suite",
    description: "Manage ticketing, pricing, and servicing effortlessly with intelligent automation",
    features: [
      "Auto-ticketing with PNR management",
      "Dynamic pricing engine",
      "Queue monitoring and alerts",
      "Schedule change automation",
      "Refund and exchange processing",
      "Customer notification system"
    ],
    benefits: "Reduce manual operations by 70% and eliminate human errors in routine tasks",
    gradient: "from-amber-50 via-orange-50 to-slate-50",
    hoverGradient: "group-hover:from-amber-100 group-hover:via-orange-100 group-hover:to-slate-100",
    link: "/asuite"
  },
  {
    icon: RefreshCw,
    title: "Re-Shopping Engine",
    description: "Maximize post-sale revenue with continuous fare monitoring and automated re-booking",
    features: [
      "Real-time PNR monitoring across all bookings",
      "Automated price drop detection every 60 seconds",
      "Cross-content availability comparison",
      "Private fare re-shopping with live consolidator rates",
      "One-click re-booking with automatic ticketing",
      "Revenue recovery alerts and reporting"
    ],
    benefits: "Capture 15-20% additional revenue post-sale by identifying and acting on price drops and availability changes",
    gradient: "from-violet-50 via-purple-50 to-slate-50",
    hoverGradient: "group-hover:from-violet-100 group-hover:via-purple-100 group-hover:to-slate-100",
    link: "/rstool",
    fullWidthMockup: true
  }
];

const MockupComponents = [ClickToBookMockup, PrivateFareMockup, AutomationMockup, RStoolDemoDashboard];

interface SolutionCardProps {
  solution: typeof solutions[0];
  index: number;
  MockupComponent: React.ComponentType;
}

const SolutionCard = ({ solution, index, MockupComponent }: SolutionCardProps) => {
  const Icon = solution.icon;
  
  // Full-width mockup layout (mockup on top, text below)
  if ('fullWidthMockup' in solution && solution.fullWidthMockup) {
    return (
      <div 
        className={`group bg-card bg-gradient-to-br ${solution.gradient} border border-border/50 hover:border-primary/30 rounded-3xl p-8 md:p-12 lg:p-16 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}
      >
        {/* Full-width Mockup at top */}
        <div className="rounded-2xl overflow-hidden shadow-lg mb-10 lg:mb-12">
          <MockupComponent />
        </div>
        
        {/* Content below mockup in 2-column grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Title, Description, Benefits */}
          <div className="space-y-5">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/20 border border-primary/20 flex items-center justify-center">
              <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary" strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
                {solution.title}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                {solution.description}
              </p>
            </div>
            <Card className="p-5 md:p-6 bg-accent/10 border-accent/20">
              <p className="text-foreground font-medium text-sm md:text-base leading-relaxed">
                {solution.benefits}
              </p>
            </Card>
          </div>
          
          {/* Right: Key Features */}
          <Card className="p-5 md:p-6 bg-card/80 backdrop-blur-sm border-border h-full">
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-4">Key Features</h3>
            <ul className="space-y-3">
              {solution.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm md:text-base">{feature}</span>
                </li>
              ))}
            </ul>
            <Link 
              to={solution.link}
              className="inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:gap-3 transition-all"
            >
              Learn more
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Card>
        </div>
      </div>
    );
  }
  
  // Standard 2-column layout (mockup side by side with content)
  return (
    <div 
      className={`group bg-card bg-gradient-to-br ${solution.gradient} border border-border/50 hover:border-primary/30 rounded-3xl p-6 md:p-10 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}
    >
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Content Side */}
        <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/20 border border-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary" strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {solution.title}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-5">
            {solution.description}
          </p>
          <Card className="p-4 md:p-5 bg-accent/10 border-accent/20 mb-5 group-hover:bg-accent/20 transition-colors duration-300">
            <p className="text-foreground font-medium text-sm">
              {solution.benefits}
            </p>
          </Card>
          
          <Card className="p-4 md:p-5 bg-card/80 backdrop-blur-sm border-border overflow-hidden">
            <h3 className="text-base md:text-lg font-bold text-foreground mb-3">Key Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {solution.features.map((feature, idx) => (
                <li 
                  key={idx} 
                  className="flex items-start gap-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Learn More Link */}
          <Link 
            to={solution.link}
            className="inline-flex items-center gap-2 mt-5 text-primary font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
          >
            Learn more
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Mockup Side */}
        <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} group-hover:scale-[1.02] transition-transform duration-500`}>
          <div className="rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
            <MockupComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

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
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Velaree Travel Technology Solutions",
            "description": "Comprehensive suite of travel technology solutions for modern travel businesses",
            "itemListElement": solutions.map((solution, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "SoftwareApplication",
                "name": solution.title,
                "applicationCategory": "BusinessApplication",
                "description": solution.description,
                "featureList": solution.features
              }
            }))
          })}
        </script>
      </Helmet>
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-background via-background to-muted/20 relative overflow-hidden pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px]" />
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Powerful Travel Technology Stack
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
            Technology
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Powerful tools built for modern travel businesses
          </p>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <SolutionCard 
                key={index}
                solution={solution}
                index={index}
                MockupComponent={MockupComponents[index]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo to see how Velaree can transform your operations
          </p>
          <Link to="/contact">
            <Button 
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
            >
              Book a Demo
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Technology;

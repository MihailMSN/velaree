import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, DollarSign, Zap, RefreshCw, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import ClickToBookMockup from "@/components/mockups/ClickToBookMockup";
import PrivateFareMockup from "@/components/mockups/PrivateFareMockup";
import AutomationMockup from "@/components/mockups/AutomationMockup";
import RStoolDemoDashboard from "@/components/rstool/RStoolDemoDashboard";
import ScrollStack, { ScrollStackItem } from "@/components/ui/scroll-stack";

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
    gradient: "from-blue-500/20 via-cyan-500/10 to-blue-600/5"
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
    gradient: "from-emerald-500/20 via-green-500/10 to-emerald-600/5"
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
    gradient: "from-amber-500/20 via-orange-500/10 to-amber-600/5"
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
    gradient: "from-violet-500/20 via-purple-500/10 to-violet-600/5"
  }
];

const MockupComponents = [ClickToBookMockup, PrivateFareMockup, AutomationMockup, RStoolDemoDashboard];

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

      {/* Solutions with ScrollStack */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <ScrollStack
            useWindowScroll={true}
            itemDistance={150}
            itemScale={0.02}
            itemStackDistance={40}
            stackPosition="15%"
            baseScale={0.9}
            blurAmount={2}
          >
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              const MockupComponent = MockupComponents[index];
              
              return (
                <ScrollStackItem key={index}>
                  <div className={`bg-gradient-to-br ${solution.gradient} border border-border/50 rounded-3xl p-8 md:p-12 shadow-xl`}>
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                      {/* Content Side */}
                      <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/20 border border-primary/20 flex items-center justify-center mb-6">
                          <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                          {solution.title}
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6">
                          {solution.description}
                        </p>
                        <Card className="p-5 bg-accent/10 border-accent/20 mb-6">
                          <p className="text-foreground font-medium text-sm">
                            {solution.benefits}
                          </p>
                        </Card>
                        
                        <Card className="p-5 bg-card/80 backdrop-blur-sm border-border">
                          <h3 className="text-lg font-bold text-foreground mb-4">Key Features</h3>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {solution.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                                <span className="text-foreground text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </Card>
                      </div>

                      {/* Mockup Side */}
                      <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                        <div className="rounded-2xl overflow-hidden">
                          <MockupComponent />
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollStackItem>
              );
            })}
          </ScrollStack>
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

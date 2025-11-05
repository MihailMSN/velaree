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
    benefits: "Reduce booking time from minutes to seconds while improving conversion rates by up to 40%"
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
    benefits: "Increase profit margins by 25-35% with access to exclusive consolidator inventory"
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
    benefits: "Reduce manual operations by 70% and eliminate human errors in routine tasks"
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
    benefits: "Capture 15-20% additional revenue post-sale by identifying and acting on price drops and availability changes"
  }
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary to-primary/90">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
              Enterprise Solutions
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8">
              Powerful tools built for modern travel businesses
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Detail */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              const MockupComponent = index === 0 ? ClickToBookMockup : index === 1 ? PrivateFareMockup : index === 2 ? AutomationMockup : RStoolDemoDashboard;
              
              return (
                <div 
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`animate-fade-in ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 border border-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                      {solution.title}
                    </h2>
                    <p className="text-xl text-muted-foreground mb-6">
                      {solution.description}
                    </p>
                    <Card className="p-6 bg-accent/10 border-accent/20 mb-6">
                      <p className="text-foreground font-semibold">
                        {solution.benefits}
                      </p>
                    </Card>
                    
                    <Card className="p-6 bg-card border-border">
                      <h3 className="text-xl font-bold text-foreground mb-4">Key Features</h3>
                      <ul className="space-y-3">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-foreground text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>

                  <div className={`animate-fade-in ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <MockupComponent />
                  </div>
                </div>
              );
            })}
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
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
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

export default Solutions;

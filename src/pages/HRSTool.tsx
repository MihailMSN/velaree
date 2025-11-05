import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles, Hotel, DollarSign, Bell, Shield, Clock, Network, Gift } from "lucide-react";
import { Link } from "react-router-dom";

const HRSTool = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Multi-OTA Rate Shopping",
      description: "Simultaneously compare rates across Booking.com, Expedia, Hotels.com, and direct hotel websites to find the best available price.",
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Bell,
      title: "Dynamic Pricing Alerts",
      description: "Real-time notifications when hotel rates drop below your booked price. Never miss a savings opportunity.",
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Shield,
      title: "Cancellation Monitoring",
      description: "Track cancellation policies and automatically rebook when better rates become available within free cancellation windows.",
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Clock,
      title: "24/7 Rate Monitoring",
      description: "Continuous automated monitoring of all hotel bookings. AI analyzes rate fluctuations and identifies optimal rebooking times.",
      color: "text-amber-600 dark:text-amber-400",
      bgColor: "bg-amber-500/10"
    },
    {
      icon: Network,
      title: "Corporate Rate Verification",
      description: "Validate corporate rates against public rates to ensure you're getting the best available deal for business travel.",
      color: "text-indigo-600 dark:text-indigo-400",
      bgColor: "bg-indigo-500/10"
    },
    {
      icon: Gift,
      title: "Loyalty Points Optimization",
      description: "Smart recommendations on when to use points vs. cash, maximizing both savings and loyalty program benefits.",
      color: "text-rose-600 dark:text-rose-400",
      bgColor: "bg-rose-500/10"
    }
  ];

  const howItWorksSteps = [
    {
      number: "01",
      title: "Connect Your Bookings",
      description: "Integrate with your PMS or manually upload hotel reservations. System accepts bookings from all major platforms."
    },
    {
      number: "02",
      title: "AI Monitoring Begins",
      description: "Advanced algorithms track rates across 50+ sources including OTAs, direct bookings, and corporate channels."
    },
    {
      number: "03",
      title: "Identify Savings",
      description: "When rates drop, AI analyzes cancellation policies, rebooking fees, and calculates net savings potential."
    },
    {
      number: "04",
      title: "Automated Re-booking",
      description: "System cancels and rebooks automatically, or alerts you for manual approval based on your preferences."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Coming Soon Banner */}
      <div className="fixed top-[88px] md:top-[120px] left-0 right-0 z-40 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-b border-primary/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3">
            <Badge variant="outline" className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-primary/20">
              Launching Q1 2026
            </Badge>
            <p className="text-base md:text-lg font-semibold flex items-center gap-2">
              <Hotel className="w-5 h-5" />
              Hotel Re-Shopping Tool - Coming Soon
            </p>
            <Link to="/contact">
              <Button size="sm" variant="outline" className="border-orange-500/30 hover:bg-orange-500/10">
                Join Waitlist <ArrowRight className="ml-2 w-3 h-3" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-48 md:pt-56 pb-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              AI-Powered Hotel Re-Shopping Portal
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
              hRStool Preview
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              The future of hotel re-shopping for B2B travel agencies. Monitor hotel rates 24/7 across all major OTAs 
              and automatically find better deals, saving your clients money on every reservation.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="rounded-full">
                  Get Early Access <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="rounded-full">
                Notify Me at Launch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features for Hotel Re-Shopping
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to maximize savings on hotel bookings across your entire portfolio
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border"
              >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 border border-primary/10 flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 text-primary`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How hRStool Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From booking submission to automated hotel re-shopping in 4 simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-4xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Savings */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <Card className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Expected Savings Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15-25%</div>
                <div className="text-sm text-muted-foreground">Average Savings per Booking</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">OTA Sources Monitored</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Continuous Rate Monitoring</div>
              </div>
            </div>
            <p className="text-muted-foreground mt-8 max-w-2xl mx-auto">
              Based on pilot data from our aRStool airline platform, adapted for hotel re-shopping scenarios.
              Actual savings may vary based on booking patterns and market conditions.
            </p>
          </Card>
        </div>
      </section>

      {/* Launch Timeline */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-6 text-base px-6 py-2">
            Q1 2026 Launch
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Be Among the First to Access hRStool
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join our exclusive waitlist and get early access to hotel re-shopping before the official launch.
            Early adopters receive 3 months free and preferential pricing.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="rounded-full">
                Join Waitlist <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/rstool">
              <Button size="lg" variant="outline" className="rounded-full">
                Try aRStool Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HRSTool;

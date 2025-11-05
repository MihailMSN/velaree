import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ROICalculator from "@/components/ROICalculator";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles, Gift, Plane, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const aRStoolPlans = [
  {
    name: "Starter",
    price: "$499",
    period: "/mo",
    description: "Perfect for small agencies getting started",
    volume: "<1K PNRs/month",
    features: [
      "Up to 1,000 PNRs monitored monthly",
      "24/7 automated price monitoring",
      "Basic multi-GDS integration",
      "Email & dashboard alerts",
      "Standard support (48hr response)",
      "Monthly savings reports"
    ],
    cta: "Start Free Pilot",
    ctaLink: "/contact",
    popular: false
  },
  {
    name: "Growth",
    price: "$1,999",
    period: "/mo",
    description: "For growing agencies scaling operations",
    volume: "<5K PNRs/month",
    features: [
      "Up to 5,000 PNRs monitored monthly",
      "Everything in Starter, plus:",
      "Full API access & webhooks",
      "Advanced GDS & NDC integrations",
      "Custom automation rules",
      "Priority support (24hr response)",
      "Dedicated account manager",
      "Custom reporting & analytics"
    ],
    cta: "Start Free Pilot",
    ctaLink: "/contact",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For high-volume agencies with specific needs",
    volume: "5K+ PNRs/month",
    features: [
      "Unlimited PNR monitoring",
      "Everything in Growth, plus:",
      "White-label dashboard & branding",
      "AI-powered auto-rebook (hands-free)",
      "Custom GDS/consolidator integrations",
      "Dedicated infrastructure",
      "Premium support (4hr SLA)",
      "Custom contract & pricing"
    ],
    cta: "Contact Sales",
    ctaLink: "/contact",
    popular: false
  }
];

const hRStoolPlans = [
  {
    name: "Starter",
    price: "$399",
    period: "/mo",
    description: "Perfect for agencies starting with hotel re-shopping",
    volume: "<500 bookings/month",
    features: [
      "Up to 500 bookings monitored monthly",
      "24/7 automated rate monitoring",
      "Basic OTA integrations",
      "Email & dashboard alerts",
      "Free cancellation focus",
      "Standard support (48hr response)",
      "Monthly savings reports"
    ],
    cta: "Join Waitlist",
    ctaLink: "/hrstool",
    popular: false,
    comingSoon: true
  },
  {
    name: "Growth",
    price: "$1,499",
    period: "/mo",
    description: "For agencies with growing hotel portfolios",
    volume: "<2.5K bookings/month",
    features: [
      "Up to 2,500 bookings monitored monthly",
      "Everything in Starter, plus:",
      "Full API access & webhooks",
      "Advanced OTA & direct hotel connections",
      "Custom automation rules",
      "Priority support (24hr response)",
      "Dedicated account manager",
      "Custom reporting & analytics"
    ],
    cta: "Join Waitlist",
    ctaLink: "/hrstool",
    popular: true,
    comingSoon: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For high-volume agencies with specific needs",
    volume: "2.5K+ bookings/month",
    features: [
      "Unlimited booking monitoring",
      "Everything in Growth, plus:",
      "White-label dashboard & branding",
      "AI-powered auto-rebook (hands-free)",
      "Custom hotel chain integrations",
      "Dedicated infrastructure",
      "Premium support (4hr SLA)",
      "Custom contract & pricing"
    ],
    cta: "Join Waitlist",
    ctaLink: "/hrstool",
    popular: false,
    comingSoon: true
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Choose the perfect plan for your agency. Start with a free pilot and scale as you grow.
          </p>
          
          {/* Promotional Banner */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 rounded-full px-6 py-3">
            <Gift className="w-5 h-5 text-primary" />
            <span className="font-semibold text-lg">
              First 500 PNRs/Bookings Free
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">
              No credit card required
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <Tabs defaultValue="arstool" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="arstool" className="flex items-center gap-2">
                <Plane className="w-4 h-4" />
                aRStool
              </TabsTrigger>
              <TabsTrigger value="hrstool" className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                hRStool
              </TabsTrigger>
            </TabsList>

            {/* aRStool Pricing */}
            <TabsContent value="arstool" className="space-y-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4">
                  <Plane className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold">Air Ticket Re-Shopping</span>
                </div>
                <h2 className="text-3xl font-bold mb-2">aRStool Pricing</h2>
                <p className="text-muted-foreground">
                  Save 15-40% on airfares with automated re-shopping
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {aRStoolPlans.map((tier, index) => (
                  <Card
                    key={index}
                    className={`relative flex flex-col ${
                      tier.popular
                        ? "border-primary shadow-lg scale-105"
                        : "border-border"
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                          <Sparkles className="w-3 h-3" />
                          Most Popular
                        </span>
                      </div>
                    )}

                    <CardHeader>
                      <CardTitle className="text-2xl">{tier.name}</CardTitle>
                      <CardDescription>{tier.description}</CardDescription>
                      <div className="mt-4">
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-bold">{tier.price}</span>
                          <span className="text-muted-foreground">{tier.period}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">{tier.volume}</p>
                      </div>
                    </CardHeader>

                    <CardContent className="flex-1">
                      <ul className="space-y-3">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span
                              className={`text-sm ${
                                feature.includes("Everything in") || feature.includes("plus:")
                                  ? "font-semibold"
                                  : ""
                              }`}
                            >
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>

                    <CardFooter>
                      <Link to={tier.ctaLink} className="w-full">
                        <Button
                          size="lg"
                          variant={tier.popular ? "default" : "outline"}
                          className="w-full rounded-full"
                        >
                          {tier.cta}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* hRStool Pricing */}
            <TabsContent value="hrstool" className="space-y-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-full px-4 py-2 mb-4">
                  <Building2 className="w-4 h-4 text-accent-foreground" />
                  <span className="text-sm font-semibold">Coming Q2 2025</span>
                </div>
                <h2 className="text-3xl font-bold mb-2">hRStool Pricing</h2>
                <p className="text-muted-foreground">
                  Save 20-35% on hotel bookings with automated rate monitoring
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {hRStoolPlans.map((tier, index) => (
                  <Card
                    key={index}
                    className={`relative flex flex-col ${
                      tier.popular
                        ? "border-primary shadow-lg scale-105"
                        : "border-border"
                    } ${tier.comingSoon ? "opacity-90" : ""}`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                          <Sparkles className="w-3 h-3" />
                          Most Popular
                        </span>
                      </div>
                    )}

                    <CardHeader>
                      <CardTitle className="text-2xl">{tier.name}</CardTitle>
                      <CardDescription>{tier.description}</CardDescription>
                      <div className="mt-4">
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-bold">{tier.price}</span>
                          <span className="text-muted-foreground">{tier.period}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">{tier.volume}</p>
                      </div>
                    </CardHeader>

                    <CardContent className="flex-1">
                      <ul className="space-y-3">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span
                              className={`text-sm ${
                                feature.includes("Everything in") || feature.includes("plus:")
                                  ? "font-semibold"
                                  : ""
                              }`}
                            >
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>

                    <CardFooter>
                      <Link to={tier.ctaLink} className="w-full">
                        <Button
                          size="lg"
                          variant={tier.popular ? "default" : "outline"}
                          className="w-full rounded-full"
                        >
                          {tier.cta}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* ROI Calculator */}
      <ROICalculator />

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-primary/5">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing FAQs</h2>
          
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-semibold text-lg mb-2">What's included in the free pilot?</h3>
              <p className="text-muted-foreground">
                Your first 500 PNRs or bookings are completely free to monitor, with no credit card required. This lets you see real savings before committing to a paid plan.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-semibold text-lg mb-2">Can I switch plans later?</h3>
              <p className="text-muted-foreground">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-semibold text-lg mb-2">What happens if I exceed my plan limits?</h3>
              <p className="text-muted-foreground">
                We'll notify you when you're approaching your limit. You can either upgrade to a higher tier or pay a small overage fee for additional volume.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-semibold text-lg mb-2">Is there a setup fee?</h3>
              <p className="text-muted-foreground">
                No setup fees for Starter and Growth plans. Enterprise plans include white-glove onboarding at no additional cost.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-semibold text-lg mb-2">When will hRStool be available?</h3>
              <p className="text-muted-foreground">
                hRStool is launching in Q2 2025. Join the waitlist now to get early access and lock in special launch pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Saving?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join hundreds of agencies already using Velaree's re-shopping tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="rounded-full px-8">
                Start Free Pilot
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/rstool">
              <Button size="lg" variant="outline" className="rounded-full px-8">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;

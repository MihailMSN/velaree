import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles, Gift } from "lucide-react";
import { Link } from "react-router-dom";
const pricingTiers = [{
  name: "Starter",
  price: "$499",
  period: "/mo",
  description: "Perfect for small agencies getting started",
  volume: "<1K PNRs/month",
  features: ["Up to 1,000 PNRs monitored monthly", "24/7 automated price monitoring", "Basic multi-GDS integration", "Email & dashboard alerts", "Standard support (48hr response)", "Monthly savings reports"],
  cta: "Start Free Pilot",
  ctaLink: "/contact",
  popular: false
}, {
  name: "Growth",
  price: "$1,999",
  period: "/mo",
  description: "For growing agencies scaling operations",
  volume: "<5K PNRs/month",
  features: ["Up to 5,000 PNRs monitored monthly", "Everything in Starter, plus:", "Full API access & webhooks", "Advanced GDS & NDC integrations", "Custom automation rules", "Priority support (24hr response)", "Dedicated account manager", "Custom reporting & analytics"],
  cta: "Start Free Pilot",
  ctaLink: "/contact",
  popular: true
}, {
  name: "Enterprise",
  price: "Custom",
  period: "",
  description: "For high-volume agencies with specific needs",
  volume: "5K+ PNRs/month",
  features: ["Unlimited PNR monitoring", "Everything in Growth, plus:", "White-label dashboard & branding", "AI-powered auto-rebook (hands-free)", "Custom GDS/consolidator integrations", "Dedicated infrastructure", "Premium support (4hr SLA)", "Custom contract & pricing"],
  cta: "Contact Sales",
  ctaLink: "/contact",
  popular: false
}];
const RStoolPricing = () => {
  return <div className="max-w-6xl mx-auto">
      {/* Promotional Banner */}
      <div className="mb-8 text-center px-0 py-0">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 rounded-full px-6 py-[10px] my-[7px]">
          <Gift className="w-5 h-5 text-primary" />
          <span className="font-semibold text-lg">
            First 500 PNRs Free
          </span>
          <span className="text-muted-foreground">•</span>
          <span className="text-sm text-muted-foreground">
            No credit card required
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {pricingTiers.map((tier, index) => <Card key={index} className={`relative flex flex-col ${tier.popular ? "border-primary shadow-lg scale-105" : "border-border"}`}>
          {tier.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                <Sparkles className="w-3 h-3" />
                Most Popular
              </span>
            </div>}
          
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
              {tier.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className={`text-sm ${feature.includes("Everything in") || feature.includes("plus:") ? "font-semibold" : ""}`}>
                    {feature}
                  </span>
                </li>)}
            </ul>
          </CardContent>

          <CardFooter>
            <Link to={tier.ctaLink} className="w-full">
              <Button size="lg" variant={tier.popular ? "default" : "outline"} className="w-full rounded-full text-black">
                {tier.cta}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>)}
      </div>
    </div>;
};
export default RStoolPricing;
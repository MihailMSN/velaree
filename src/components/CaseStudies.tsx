import { Card } from "@/components/ui/card";
import { TrendingUp, Clock, Users } from "lucide-react";

const caseStudies = [
  {
    icon: Users,
    customerType: "European OTA",
    challenge: "Missing out on fare drops after booking, unable to manually monitor 1,000+ monthly bookings",
    solution: "Deployed aRStool for automated re-shopping across 50+ sources with instant alerts",
    results: [
      { metric: "€340K", label: "Annual savings captured" },
      { metric: "1,200+", label: "Re-bookings per month" },
      { metric: "23%", label: "Average fare reduction" }
    ],
    industry: "Online Travel Agency"
  },
  {
    icon: TrendingUp,
    customerType: "Corporate TMC (300+ Clients)",
    challenge: "Corporate clients demanding price drop protection but manual checks were impossible at scale",
    solution: "Implemented aRStool with automated monitoring and one-click re-booking for all corporate bookings",
    results: [
      { metric: "€2.1M", label: "Saved for corporate clients" },
      { metric: "€420K", label: "Additional commission earned" },
      { metric: "95%", label: "Client retention rate" }
    ],
    industry: "Travel Management"
  },
  {
    icon: Clock,
    customerType: "Asia-Pacific Travel Agency",
    challenge: "Spending 30+ hours weekly manually checking for better fares with limited success",
    solution: "Switched to aRStool's AI-powered monitoring with automatic PNR updates and notifications",
    results: [
      { metric: "0hrs", label: "Manual re-shopping time" },
      { metric: "18%", label: "Profit margin increase" },
      { metric: "4x", label: "More re-bookings found" }
    ],
    industry: "Travel Agency"
  }
];

const CaseStudies = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-primary/5 via-accent/5 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Real Savings from Real Agencies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how travel agencies are increasing profits with aRStool re-shopping
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon & Industry */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-foreground" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {study.industry}
                  </span>
                </div>

                {/* Customer Type */}
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {study.customerType}
                </h3>

                {/* Challenge */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Challenge:</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Solution:</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {study.solution}
                  </p>
                </div>

                {/* Results */}
                <div className="pt-6 border-t border-border">
                  <p className="text-sm font-semibold text-foreground mb-4">Key Results:</p>
                  <div className="grid grid-cols-3 gap-4">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-xl font-bold text-foreground mb-1">
                          {result.metric}
                        </div>
                        <div className="text-xs text-muted-foreground leading-tight">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <p className="text-muted-foreground mb-4">
            Want to achieve similar results for your business?
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
          >
            Get Your Custom Strategy →
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

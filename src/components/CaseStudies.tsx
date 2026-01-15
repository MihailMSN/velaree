import { Card } from "@/components/ui/card";
import { TrendingUp, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    icon: Users,
    customerType: "Projected: European OTA Scenario",
    challenge: "Processing 15,000+ monthly bookings with high error rates and customer complaints",
    solution: "Velaree's unified API will consolidate multiple GDS connections into one streamlined integration",
    results: [
      { metric: "84%", label: "Projected error reduction" },
      { metric: "5,000+", label: "Monthly automated bookings" },
      { metric: "20hrs", label: "Estimated weekly savings" }
    ],
    industry: "Online Travel Agency"
  },
  {
    icon: TrendingUp,
    customerType: "Projected: Corporate TMC Scenario",
    challenge: "Unable to offer competitive business class fares, losing corporate accounts",
    solution: "Private fare access and automated corporate booking portal will unlock new revenue streams",
    results: [
      { metric: "28%", label: "Projected fare savings" },
      { metric: "3x", label: "Potential booking growth" },
      { metric: "$2.4M", label: "Estimated annual impact" }
    ],
    industry: "Travel Management"
  },
  {
    icon: Clock,
    customerType: "Projected: Consolidator Scenario",
    challenge: "Manual ticketing processes causing 48-hour fulfillment delays and high costs",
    solution: "Velaree automation suite designed for instant ticketing and schedule management",
    results: [
      { metric: "<2min", label: "Target ticket issuance" },
      { metric: "92%", label: "Projected ticket reduction" },
      { metric: "60%", label: "Estimated cost savings" }
    ],
    industry: "Flight Consolidation"
  }
];

const CaseStudies = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-primary/5 via-accent/5 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projected Impact Scenarios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the transformation potential for travel companies using Velaree
          </p>
          <p className="text-sm text-muted-foreground/70 mt-2 italic">
            *Based on industry benchmarks and our technology capabilities
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
            Want to be an early adopter and shape our product?
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
          >
            Join Early Access Program →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

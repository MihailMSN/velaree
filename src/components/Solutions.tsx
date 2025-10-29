import { Card } from "@/components/ui/card";
import { Plane, DollarSign, Zap } from "lucide-react";

const solutions = [
  {
    icon: Plane,
    title: "Book in 60 Seconds",
    subtitle: "vs. 15-min industry average",
    description: "Complete end-to-end booking flow from search to confirmation",
    features: [
      "Real-time availability across 200+ airlines in one search",
      "One-click booking with automatic instant ticketing",
      "Dynamic pricing with full fare rules transparency",
      "Mobile-optimized checkout with saved payment methods"
    ]
  },
  {
    icon: DollarSign,
    title: "Save 20-30% on Fares",
    subtitle: "With exclusive private contracts",
    description: "Access consolidator inventory not available on public channels",
    features: [
      "89+ private airline consolidator contracts globally",
      "Corporate negotiated rates with major carriers",
      "Bulk fare inventory with real-time availability",
      "Transparent commission tracking and reporting"
    ]
  },
  {
    icon: Zap,
    title: "Automate 70% of Operations",
    subtitle: "Save 20+ hours per week",
    description: "Intelligent automation eliminates repetitive manual tasks",
    features: [
      "Automatic ticketing within 2 minutes of booking",
      "AI-powered schedule change detection and rebooking",
      "One-click cancellation processing with refund automation",
      "Multi-channel customer notifications (email, SMS, push)"
    ]
  }
];

const Solutions = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Enterprise Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tools designed for scale, reliability, and innovation
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card 
                key={index} 
                className="p-8 bg-card border-border hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-2 cursor-pointer group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent/30 border border-accent/50">
                    <span className="text-sm font-semibold text-foreground">{solution.subtitle}</span>
                  </div>
                </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {solution.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {solution.description}
              </p>
              
              <ul className="space-y-3">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3 mt-2 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;

import { Card } from "@/components/ui/card";
import { Plane, DollarSign, Zap } from "lucide-react";

const solutions = [
  {
    icon: Plane,
    title: "Click-to-Book Platform",
    description: "Instant booking for OTAs and TMCs with real-time availability and pricing",
    features: ["Real-time inventory", "Multi-GDS support", "Seamless checkout"]
  },
  {
    icon: DollarSign,
    title: "Private Fare API",
    description: "Connect with global consolidators and airlines for exclusive rates",
    features: ["Direct airline connect", "Dynamic pricing", "Global coverage"]
  },
  {
    icon: Zap,
    title: "Automation Suite",
    description: "Manage ticketing, pricing, and servicing effortlessly with AI automation",
    features: ["AI-powered pricing", "Auto-ticketing", "Smart routing"]
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
                <div className="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {solution.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {solution.description}
              </p>
              
              <ul className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></div>
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

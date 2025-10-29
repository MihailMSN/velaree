import { Card } from "@/components/ui/card";
import { MousePointer, Zap, Bot } from "lucide-react";

const solutions = [
  {
    icon: MousePointer,
    title: "Click-to-Book Platform",
    description: "Instant booking solutions for OTAs and travel agencies. Streamline reservations with our intuitive interface and real-time availability.",
    features: ["Real-time inventory", "Multi-GDS support", "Seamless checkout"]
  },
  {
    icon: Zap,
    title: "Private Fare API",
    description: "Direct integration with airlines and consolidators. Access exclusive fares and negotiate contracts programmatically.",
    features: ["Direct airline connect", "Dynamic pricing", "Global coverage"]
  },
  {
    icon: Bot,
    title: "Automation Layer",
    description: "Smart pricing, ticketing, and management tools powered by AI. Reduce manual work and increase operational efficiency.",
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
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 w-16 h-16 rounded-2xl bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <solution.icon className="w-8 h-8 text-accent-foreground" />
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;

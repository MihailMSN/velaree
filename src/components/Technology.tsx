import { Card } from "@/components/ui/card";
import { Code2, Shield, Cpu, Rocket } from "lucide-react";
import ApiFlowDiagram from "./ApiFlowDiagram";

const techFeatures = [
  {
    icon: Code2,
    title: "API-First Architecture",
    description: "RESTful and GraphQL APIs designed for modern integration. Built for developers, by developers."
  },
  {
    icon: Cpu,
    title: "AI-Powered Optimization",
    description: "Machine learning algorithms for dynamic pricing, demand forecasting, and intelligent routing."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II compliant with end-to-end encryption, PCI DSS certified for payment processing."
  },
  {
    icon: Rocket,
    title: "Scalable Infrastructure",
    description: "Cloud-native microservices architecture handling millions of transactions per day with 99.99% uptime."
  }
];

const Technology = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Built for Scale
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade technology stack powering next-generation travel infrastructure
          </p>
        </div>

        <ApiFlowDiagram />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
          {techFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card/50 backdrop-blur-sm border-border hover:bg-card transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;

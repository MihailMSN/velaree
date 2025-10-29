import { Card } from "@/components/ui/card";
import { Code2, Shield, Cpu, Rocket } from "lucide-react";
import ApiFlowDiagram from "./ApiFlowDiagram";
import AutomationMockup from "./mockups/AutomationMockup";

const techFeatures = [
  {
    icon: Code2,
    title: "RESTful JSON API",
    description: "Clean, intuitive API that developers love. Get started in 10 minutes with SDKs for Node, Python, and PHP.",
    metric: "10-min integration"
  },
  {
    icon: Cpu,
    title: "Sub-500ms Response Time",
    description: "Lightning-fast search across 200+ airlines with intelligent caching and optimized routing algorithms.",
    metric: "<500ms avg"
  },
  {
    icon: Shield,
    title: "SOC 2 & PCI DSS Certified",
    description: "Enterprise-grade security with end-to-end encryption, OAuth 2.0 authentication, and TLS 1.3.",
    metric: "Bank-level security"
  },
  {
    icon: Rocket,
    title: "99.9% Uptime SLA",
    description: "Multi-region redundancy with automatic failover. Built to handle 10,000 requests per second.",
    metric: "24/7 monitoring"
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
        
        <div className="mt-16 max-w-6xl mx-auto">
          <AutomationMockup />
        </div>
        
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
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-xs font-semibold text-foreground whitespace-nowrap ml-4">
                      {feature.metric}
                    </div>
                  </div>
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

import { Card } from "@/components/ui/card";
import { Server, Zap, Shield, Code, Globe, Database } from "lucide-react";

const specs = [
  {
    icon: Zap,
    title: "Performance",
    items: [
      { label: "Average Response Time", value: "<500ms" },
      { label: "Peak Capacity", value: "10,000 req/sec" },
      { label: "Data Freshness", value: "Real-time" },
      { label: "Cache Strategy", value: "Intelligent" }
    ]
  },
  {
    icon: Server,
    title: "Reliability",
    items: [
      { label: "Uptime SLA", value: "99.9%" },
      { label: "Redundancy", value: "Multi-region" },
      { label: "Failover", value: "Automatic" },
      { label: "Monitoring", value: "24/7" }
    ]
  },
  {
    icon: Shield,
    title: "Security",
    items: [
      { label: "Compliance", value: "SOC 2, GDPR" },
      { label: "Encryption", value: "TLS 1.3" },
      { label: "Authentication", value: "OAuth 2.0" },
      { label: "PCI DSS", value: "Level 1" }
    ]
  },
  {
    icon: Code,
    title: "Developer Tools",
    items: [
      { label: "SDKs", value: "Node, Python, PHP" },
      { label: "Webhooks", value: "Real-time events" },
      { label: "Testing", value: "Sandbox env" },
      { label: "Docs", value: "Interactive" }
    ]
  },
  {
    icon: Globe,
    title: "Coverage",
    items: [
      { label: "Airlines", value: "200+" },
      { label: "Routes", value: "50,000+" },
      { label: "GDS Systems", value: "All major" },
      { label: "Countries", value: "195" }
    ]
  },
  {
    icon: Database,
    title: "Data",
    items: [
      { label: "Fare Types", value: "Public + Private" },
      { label: "Ancillaries", value: "Full support" },
      { label: "Schedule Updates", value: "Hourly" },
      { label: "Historical Data", value: "5 years" }
    ]
  }
];

const TechnicalSpecs = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Enterprise-Grade Infrastructure
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built for reliability, performance, and scale from day one
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {specs.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 border border-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {spec.title}
                  </h3>
                </div>

                {/* Specs List */}
                <div className="space-y-3">
                  {spec.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        {item.label}
                      </span>
                      <span className="text-sm font-semibold text-foreground">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <p className="text-muted-foreground mb-4">
            Need custom requirements? We offer dedicated infrastructure and SLAs.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center text-foreground font-semibold hover:text-primary transition-colors border-b-2 border-accent hover:border-primary pb-1"
          >
            Talk to Our Solutions Team →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;

import { Bot, TrendingUp, Network } from "lucide-react";

const pillars = [
  {
    icon: Bot,
    title: "Automate 70% of Tasks",
    description: "Intelligent automation handles ticketing, schedule changes, cancellations, and customer notifications automatically",
    metric: "20hrs saved/week"
  },
  {
    icon: TrendingUp,
    title: "Process 1M+ Bookings/Month",
    description: "Enterprise-grade infrastructure that scales from day one with zero downtime and multi-region redundancy",
    metric: "99.9% uptime SLA"
  },
  {
    icon: Network,
    title: "Search 10x More Inventory",
    description: "Unified API connecting 200+ airlines, all major GDS systems, and exclusive private fare sources in one call",
    metric: "<500ms response"
  }
];

const ValuePillars = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {pillars.map((pillar, index) => {
        const Icon = pillar.icon;
        return (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-accent/50 transition-all duration-300 hover:scale-105 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center">
              <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">{pillar.title}</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">{pillar.description}</p>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent/30 border border-accent/50">
              <span className="text-sm font-semibold text-foreground">{pillar.metric}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ValuePillars;

import { Bot, TrendingUp, Network } from "lucide-react";

const pillars = [
  {
    icon: Bot,
    title: "Automation",
    description: "Reduce manual work by 70%"
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    description: "Built to handle millions of bookings"
  },
  {
    icon: Network,
    title: "Connectivity",
    description: "50+ global integrations"
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
            <h3 className="text-xl font-bold text-foreground">{pillar.title}</h3>
            <p className="text-muted-foreground">{pillar.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ValuePillars;

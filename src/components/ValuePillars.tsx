import { Bot, TrendingUp, Network } from "lucide-react";

const pillars = [
  {
    icon: Bot,
    title: "100% Automated Monitoring",
    description: "AI continuously monitors all your bookings 24/7 across 50+ sources. No manual work required - just automatic alerts when savings are found",
    metric: "24/7 monitoring"
  },
  {
    icon: TrendingUp,
    title: "Increase Your Commissions",
    description: "Keep the price difference as additional profit when you rebook at lower fares. Turn price drops into revenue opportunities",
    metric: "15-40% savings"
  },
  {
    icon: Network,
    title: "50+ Data Sources",
    description: "Monitor GDS, airlines, consolidators, metasearch, and OTAs simultaneously. More sources mean more savings opportunities discovered",
    metric: "50+ sources"
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
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 border border-primary/10 flex items-center justify-center">
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

import { Shield, Lock, CreditCard, RotateCcw } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      label: "SOC 2 Type II",
      description: "Certified",
    },
    {
      icon: Lock,
      label: "GDPR",
      description: "Compliant",
    },
    {
      icon: RotateCcw,
      label: "30-Day",
      description: "Money Back",
    },
    {
      icon: CreditCard,
      label: "No Credit Card",
      description: "Required",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 py-8">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="flex items-center gap-3 bg-card border border-border rounded-lg px-4 py-3 transition-all duration-300 hover:border-primary/40 hover:shadow-sm"
        >
          <badge.icon className="w-5 h-5 text-primary" />
          <div className="text-left">
            <div className="text-sm font-semibold">{badge.label}</div>
            <div className="text-xs text-muted-foreground">{badge.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;

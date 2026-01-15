import { Rocket, Mail, TrendingUp, Clock } from "lucide-react";

const metrics = [
  { icon: Rocket, value: "Q3-Q4", label: "2026 Launch" },
  { icon: Mail, value: "50+", label: "Waitlist Signups" },
  { icon: TrendingUp, value: "15-30%", label: "Target Savings" },
  { icon: Clock, value: "Pre-Seed", label: "Funding Stage" }
];

const RStoolSocialProof = () => {
  return (
    <div className="w-full">
      {/* Trust Statement */}
      <div className="text-center mb-8">
        <p className="text-lg font-semibold text-muted-foreground mb-2">
          Early Access Interest
        </p>
        <p className="text-sm text-muted-foreground/70 mb-8">
          Join our growing waitlist of travel agencies interested in AI-powered repricing
        </p>
        
        {/* Coming Soon Notice */}
        <div className="max-w-2xl mx-auto p-6 rounded-xl bg-amber-500/10 border border-amber-500/30 mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Rocket className="w-5 h-5 text-amber-600" />
            <span className="text-lg font-semibold text-foreground">Pre-Seed Stage</span>
          </div>
          <p className="text-sm text-muted-foreground">
            We're currently raising our pre-seed round to bring rsTool to market. 
            Early adopters will receive priority access and special pricing.
          </p>
        </div>
      </div>

      {/* Metrics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8 border-t border-border">
        {metrics.map((metric, index) => (
          <div 
            key={index}
            className="text-center"
            style={{
              animation: `fade-in 0.6s ease-out ${0.6 + index * 0.1}s backwards`
            }}
          >
            <div className="flex justify-center mb-2">
              <metric.icon className="w-6 h-6 text-primary" />
            </div>
            <div className="text-2xl font-bold mb-1">{metric.value}</div>
            <div className="text-sm text-muted-foreground">{metric.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RStoolSocialProof;

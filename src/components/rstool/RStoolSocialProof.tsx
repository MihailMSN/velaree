import { Building2, Users, DollarSign, Zap } from "lucide-react";

const agencies = [
  { name: "Global Travel Solutions", abbr: "GTS" },
  { name: "Elite Business Travel", abbr: "EBT" },
  { name: "Wanderlust Travel Group", abbr: "WTG" },
  { name: "Corporate Air Solutions", abbr: "CAS" },
  { name: "Premier Flight Services", abbr: "PFS" },
  { name: "WorldWide Travel Partners", abbr: "WTP" }
];

const metrics = [
  { icon: Building2, value: "50+", label: "Travel Agencies" },
  { icon: DollarSign, value: "$2.4M+", label: "Saved Monthly" },
  { icon: Users, value: "15K+", label: "PNRs Monitored Daily" },
  { icon: Zap, value: "99.9%", label: "Uptime SLA" }
];

const RStoolSocialProof = () => {
  return (
    <div className="w-full">
      {/* Trust Statement */}
      <div className="text-center mb-8">
        <p className="text-lg font-semibold text-muted-foreground mb-6">
          Trusted by 50+ travel agencies worldwide
        </p>
        
        {/* Agency Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12 max-w-5xl mx-auto">
          {agencies.map((agency, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-300"
              style={{
                animation: `fade-in 0.6s ease-out ${index * 0.1}s backwards`
              }}
            >
              {/* Letter-based logo */}
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <span className="text-lg font-bold text-primary">
                  {agency.abbr}
                </span>
              </div>
              <span className="text-xs text-muted-foreground text-center leading-tight">
                {agency.name}
              </span>
            </div>
          ))}
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
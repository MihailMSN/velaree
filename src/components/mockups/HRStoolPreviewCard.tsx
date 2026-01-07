import { Building2, Calendar, Percent, TrendingDown } from "lucide-react";

const HRStoolPreviewCard = () => {
  return (
    <div className="h-full bg-[#FAFAFA]">
      {/* Browser Chrome */}
      <div className="bg-muted border-b border-border px-4 py-2.5 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
        </div>
        <div className="flex-1 bg-background rounded px-3 py-1 text-xs text-muted-foreground">
          hstool.velaree.com
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="p-4 relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-semibold text-foreground">hsTool Dashboard</h3>
            <p className="text-xs text-muted-foreground">Hotel Re-shopping Platform</p>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 bg-amber-100 rounded text-xs text-amber-700">
            <Calendar className="w-3 h-3" />
            Q1-Q2 2027
          </div>
        </div>

        {/* Stats Grid - Blurred Preview */}
        <div className="grid grid-cols-4 gap-3 mb-4 opacity-40 blur-[1px]">
          {[
            { label: "Savings Today", value: "$--", icon: TrendingDown },
            { label: "Hotels Scanned", value: "--", icon: Building2 },
            { label: "Opportunities", value: "--", icon: Percent },
            { label: "Success Rate", value: "--%", icon: Calendar },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-lg p-2.5 border border-border/50">
              <stat.icon className="w-3.5 h-3.5 text-muted-foreground mb-1" />
              <div className="text-lg font-bold text-foreground">{stat.value}</div>
              <div className="text-[10px] text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Blurred Table Preview */}
        <div className="bg-white rounded-lg border border-border/50 overflow-hidden opacity-40 blur-[1px]">
          <div className="px-3 py-2 border-b border-border/30">
            <span className="text-xs font-medium text-foreground">Active Opportunities</span>
          </div>
          <div className="divide-y divide-border/30">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="px-3 py-2 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-foreground/80">------</span>
                  <span className="text-muted-foreground">Hotel Name</span>
                </div>
                <span className="font-semibold text-muted-foreground">$---</span>
              </div>
            ))}
          </div>
        </div>

        {/* Coming Soon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-[2px] mt-10">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-amber-100 flex items-center justify-center">
              <Building2 className="w-8 h-8 text-amber-600" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-1">Coming Q1-Q2 2027</h4>
            <p className="text-xs text-muted-foreground max-w-[200px]">
              Hotel re-shopping with the same intelligent automation
            </p>
            <button className="mt-3 px-4 py-1.5 bg-amber-600 text-white rounded-full text-xs hover:bg-amber-700 transition-colors">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRStoolPreviewCard;

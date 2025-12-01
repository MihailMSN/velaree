import { Globe, Zap, Server, Activity } from "lucide-react";

const UnifyPreviewCard = () => {
  const gdsConnections = [
    { name: "Amadeus", status: "connected", latency: "142ms" },
    { name: "Sabre", status: "connected", latency: "156ms" },
    { name: "Travelport", status: "connected", latency: "189ms" },
    { name: "NDC Direct", status: "connected", latency: "98ms" },
  ];

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
          unify.velaree.com
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-semibold text-foreground">Unify Platform</h3>
            <p className="text-xs text-muted-foreground">Multi-GDS Aggregation</p>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 bg-violet-100 rounded text-xs text-violet-700">
            <Activity className="w-3 h-3" />
            All Systems Online
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          {[
            { label: "Avg Response", value: "146ms", icon: Zap, color: "text-violet-600" },
            { label: "GDS Connected", value: "4", icon: Server, color: "text-blue-600" },
            { label: "Airlines", value: "200+", icon: Globe, color: "text-emerald-600" },
            { label: "Uptime", value: "99.9%", icon: Activity, color: "text-amber-600" },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-lg p-2.5 border border-border/50">
              <stat.icon className={`w-3.5 h-3.5 ${stat.color} mb-1`} />
              <div className="text-lg font-bold text-foreground">{stat.value}</div>
              <div className="text-[10px] text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* GDS Connections */}
        <div className="bg-white rounded-lg border border-border/50 p-3 mb-3">
          <div className="text-xs font-medium text-foreground mb-2">GDS Connections</div>
          <div className="grid grid-cols-2 gap-2">
            {gdsConnections.map((gds, i) => (
              <div key={i} className="flex items-center justify-between bg-muted/30 rounded px-2.5 py-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  <span className="text-xs font-medium text-foreground">{gds.name}</span>
                </div>
                <span className="text-[10px] text-muted-foreground font-mono">{gds.latency}</span>
              </div>
            ))}
          </div>
        </div>

        {/* API Throughput */}
        <div className="bg-white rounded-lg border border-border/50 p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-foreground">API Throughput</span>
            <span className="text-[10px] text-muted-foreground">Last 60 min</span>
          </div>
          <div className="flex gap-0.5 h-8">
            {[45, 60, 75, 55, 80, 90, 85, 70, 95, 80, 75, 88, 92, 78, 85, 90, 82, 95, 88, 92].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-violet-400/70 rounded-sm"
                style={{ height: `${h}%`, alignSelf: 'flex-end' }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnifyPreviewCard;

import { DollarSign, Search, TrendingDown, Percent } from "lucide-react";

const RStoolPreviewCard = () => {
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
          arstool.velaree.com
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-semibold text-foreground">aRStool Dashboard</h3>
            <p className="text-xs text-muted-foreground">Intelligent Re-shopping</p>
          </div>
          <button className="px-2.5 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700 transition-colors">
            AI Scan
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          {[
            { label: "Savings Today", value: "$14.2k", icon: DollarSign, color: "text-emerald-600" },
            { label: "PNRs Scanned", value: "1,847", icon: Search, color: "text-blue-600" },
            { label: "Opportunities", value: "234", icon: TrendingDown, color: "text-amber-600" },
            { label: "Success Rate", value: "94%", icon: Percent, color: "text-violet-600" },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-lg p-2.5 border border-border/50">
              <stat.icon className={`w-3.5 h-3.5 ${stat.color} mb-1`} />
              <div className="text-lg font-bold text-foreground">{stat.value}</div>
              <div className="text-[10px] text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Opportunities Table */}
        <div className="bg-white rounded-lg border border-border/50 overflow-hidden">
          <div className="px-3 py-2 border-b border-border/30 flex items-center justify-between">
            <span className="text-xs font-medium text-foreground">Active Opportunities</span>
            <span className="text-[10px] text-blue-600">View All →</span>
          </div>
          <div className="divide-y divide-border/30">
            {[
              { pnr: "ABC123", route: "JFK → LHR", savings: "$847", confidence: "High" },
              { pnr: "XYZ789", route: "LAX → CDG", savings: "$523", confidence: "Medium" },
              { pnr: "DEF456", route: "SFO → NRT", savings: "$1,204", confidence: "High" },
            ].map((item, i) => (
              <div key={i} className="px-3 py-2 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-foreground/80">{item.pnr}</span>
                  <span className="text-muted-foreground">{item.route}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-emerald-600">{item.savings}</span>
                  <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                    item.confidence === 'High' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {item.confidence}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Savings Chart */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-[10px] text-muted-foreground">Weekly Savings</span>
          <div className="flex-1 flex gap-0.5 h-6">
            {[40, 65, 55, 80, 70, 95, 85].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-blue-400/80 rounded-sm"
                style={{ height: `${h}%`, alignSelf: 'flex-end' }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RStoolPreviewCard;

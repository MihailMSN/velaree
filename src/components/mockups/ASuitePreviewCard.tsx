import { Users, Calendar, TrendingUp, Clock } from "lucide-react";

const ASuitePreviewCard = () => {
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
          asuite.velaree.com
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-semibold text-foreground">aSuite Dashboard</h3>
            <p className="text-xs text-muted-foreground">Automation & CRM Platform</p>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 bg-amber-100 rounded text-xs text-amber-700">
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
            Demo
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          {[
            { label: "Tasks Today", value: "847", icon: Calendar, change: "+12%" },
            { label: "Completed", value: "721", icon: TrendingUp, change: "+8%" },
            { label: "Processing", value: "126", icon: Clock, change: "-3%" },
            { label: "Clients", value: "2.4k", icon: Users, change: "+5%" },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-lg p-2.5 border border-border/50">
              <stat.icon className="w-3.5 h-3.5 text-muted-foreground mb-1" />
              <div className="text-lg font-bold text-foreground">{stat.value}</div>
              <div className="text-[10px] text-muted-foreground">{stat.label}</div>
              <div className={`text-[10px] ${stat.change.startsWith('+') ? 'text-emerald-600' : 'text-red-500'}`}>
                {stat.change}
              </div>
            </div>
          ))}
        </div>

        {/* Mini Task Queue */}
        <div className="bg-white rounded-lg border border-border/50 p-3">
          <div className="text-xs font-medium text-foreground mb-2">Automation Queue</div>
          <div className="space-y-1.5">
            {[
              { task: "PNR Reshop Check", status: "Running", pnr: "ABC123" },
              { task: "Fare Update", status: "Queued", pnr: "XYZ789" },
              { task: "Booking Sync", status: "Running", pnr: "DEF456" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between text-xs py-1 border-b border-border/30 last:border-0">
                <span className="text-muted-foreground">{item.task}</span>
                <span className="font-mono text-[10px] text-foreground/70">{item.pnr}</span>
                <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                  item.status === 'Running' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
                }`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Bar */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-[10px] text-muted-foreground">Today's Performance</span>
          <div className="flex-1 flex gap-0.5 h-6">
            {[65, 80, 45, 90, 70, 85, 60, 75, 95, 55, 80, 70].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-emerald-400/80 rounded-sm"
                style={{ height: `${h}%`, alignSelf: 'flex-end' }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ASuitePreviewCard;

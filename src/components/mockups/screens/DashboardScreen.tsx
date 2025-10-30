import { TrendingUp, Users, DollarSign, Plane } from "lucide-react";

const DashboardScreen = () => {
  const stats = [
    { label: "Total Bookings", value: "1,247", icon: Plane, change: "+12%" },
    { label: "Revenue", value: "$94.2K", icon: DollarSign, change: "+23%" },
    { label: "Active Users", value: "3,891", icon: Users, change: "+8%" },
  ];

  return (
    <div className="p-6 h-full bg-background overflow-y-auto">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-foreground mb-1">Dashboard</h2>
        <p className="text-xs text-muted-foreground">Last 30 days performance</p>
      </div>

      <div className="space-y-3 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <stat.icon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xs font-medium text-accent">{stat.change}</span>
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-card border border-border rounded-xl p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-foreground text-sm">Recent Activity</h3>
          <TrendingUp className="w-4 h-4 text-primary" />
        </div>
        <div className="space-y-3">
          {[
            { text: "New booking from Tokyo", time: "2m ago" },
            { text: "Payment received $1,245", time: "15m ago" },
            { text: "3 new users registered", time: "1h ago" },
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-xs text-foreground">{activity.text}</span>
              <span className="text-xs text-muted-foreground">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;

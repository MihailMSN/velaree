import { useEffect, useState } from "react";
import { Activity, Globe, Zap } from "lucide-react";

const LiveStats = () => {
  const [savingsToday, setSavingsToday] = useState(24730);
  const [rebookings, setRebookings] = useState(347);
  const [monitored, setMonitored] = useState(8547);

  useEffect(() => {
    // Simulate real-time updates
    const savingsInterval = setInterval(() => {
      setSavingsToday(prev => prev + Math.floor(Math.random() * 500) + 100);
    }, 5000);

    const rebookingsInterval = setInterval(() => {
      setRebookings(prev => prev + Math.floor(Math.random() * 2));
    }, 8000);

    const monitoredInterval = setInterval(() => {
      setMonitored(prev => prev + Math.floor(Math.random() * 5) + 2);
    }, 6000);

    return () => {
      clearInterval(savingsInterval);
      clearInterval(rebookingsInterval);
      clearInterval(monitoredInterval);
    };
  }, []);

  const stats = [
    {
      icon: Activity,
      label: "Saved for Clients Today",
      value: "€" + savingsToday.toLocaleString(),
      suffix: "",
      color: "from-accent to-accent/70"
    },
    {
      icon: Globe,
      label: "Bookings Monitored",
      value: monitored.toLocaleString(),
      suffix: "",
      color: "from-primary to-primary/80"
    },
    {
      icon: Zap,
      label: "Re-bookings Today",
      value: rebookings.toString(),
      suffix: "",
      color: "from-accent to-accent/60"
    }
  ];

  return (
    <div className="py-12 bg-gradient-to-r from-primary via-primary/95 to-primary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Title */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
              Live Re-Shopping Activity
            </h3>
            <p className="text-primary-foreground/70 text-sm">
              Real-time savings being captured right now
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:w-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-foreground tabular-nums">
                      {stat.value}
                      {stat.suffix && <span className="text-lg ml-0.5">{stat.suffix}</span>}
                    </div>
                    <div className="text-xs text-primary-foreground/70">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          <span className="text-xs text-primary-foreground/80">
            AI monitoring active • 50+ sources checked continuously
          </span>
        </div>
      </div>
    </div>
  );
};

export default LiveStats;

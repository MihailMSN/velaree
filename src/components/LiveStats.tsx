import { Activity, Globe, Zap } from "lucide-react";
import { usePlatformStats } from "@/hooks/usePlatformStats";
import { Skeleton } from "@/components/ui/skeleton";

const LiveStats = () => {
  const { data: stats, isLoading } = usePlatformStats();

  const bookings = stats?.bookings_today || 0;
  const searches = stats?.searches_hour || 0;
  const responseTime = stats?.response_time || 0;

  const displayStats = [
    {
      icon: Activity,
      label: "Bookings Today",
      value: bookings.toLocaleString(),
      suffix: "",
      color: "from-accent to-accent/70"
    },
    {
      icon: Globe,
      label: "Searches This Hour",
      value: searches.toLocaleString(),
      suffix: "",
      color: "from-primary to-primary/80"
    },
    {
      icon: Zap,
      label: "Avg Response Time",
      value: responseTime.toString(),
      suffix: "ms",
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
              Live Platform Activity
            </h3>
            <p className="text-primary-foreground/70 text-sm">
              Real-time metrics from our global network
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:w-auto">
            {isLoading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
                  <Skeleton className="w-12 h-12 rounded-lg bg-primary-foreground/20" />
                  <div className="space-y-2">
                    <Skeleton className="h-8 w-20 bg-primary-foreground/20" />
                    <Skeleton className="h-4 w-28 bg-primary-foreground/20" />
                  </div>
                </div>
              ))
            ) : (
              displayStats.map((stat, index) => {
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
            })
          )}
          </div>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          <span className="text-xs text-primary-foreground/80">
            All systems operational • 99.9% uptime
          </span>
        </div>
      </div>
    </div>
  );
};

export default LiveStats;

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
    <div className="py-8 sm:py-12 bg-gradient-to-r from-primary via-primary/95 to-primary">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Title */}
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-foreground mb-1 sm:mb-2">
              Platform Capabilities Demo
            </h3>
            <p className="text-primary-foreground/70 text-xs sm:text-sm">
              Projected metrics based on our architecture
            </p>
          </div>

          {/* Stats - Horizontal scroll on mobile */}
          <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex md:grid md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 min-w-max md:min-w-0">
              {isLoading ? (
                Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 min-w-[160px] sm:min-w-[180px]">
                    <Skeleton className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-foreground/20" />
                    <div className="space-y-2">
                      <Skeleton className="h-6 sm:h-8 w-16 sm:w-20 bg-primary-foreground/20" />
                      <Skeleton className="h-3 sm:h-4 w-20 sm:w-28 bg-primary-foreground/20" />
                    </div>
                  </div>
                ))
              ) : (
                displayStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 animate-fade-in min-w-[160px] sm:min-w-[180px]"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-primary-foreground tabular-nums">
                          {stat.value}
                          {stat.suffix && <span className="text-sm sm:text-lg ml-0.5">{stat.suffix}</span>}
                        </div>
                        <div className="text-[10px] sm:text-xs text-primary-foreground/70">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6">
          <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
          <span className="text-[10px] sm:text-xs text-primary-foreground/80">
            Demo environment • Pre-seed stage
          </span>
        </div>
      </div>
    </div>
  );
};

export default LiveStats;

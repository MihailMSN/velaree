import { useEffect, useState } from "react";
import { Activity, Globe, Zap } from "lucide-react";

const LiveStats = () => {
  const [bookings, setBookings] = useState(47239);
  const [searches, setSearches] = useState(284156);
  const [responseTime, setResponseTime] = useState(612);
  const [flightBookings, setFlightBookings] = useState(28234);
  const [hotelBookings, setHotelBookings] = useState(16089);
  const [carBookings, setCarBookings] = useState(2916);

  useEffect(() => {
    // Simulate real-time updates
    const bookingInterval = setInterval(() => {
      setBookings(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);

    const searchInterval = setInterval(() => {
      setSearches(prev => prev + Math.floor(Math.random() * 15) + 5);
    }, 3000);

    const responseInterval = setInterval(() => {
      setResponseTime(prev => {
        const change = Math.floor(Math.random() * 40) - 20;
        const newValue = prev + change;
        return Math.max(250, Math.min(450, newValue));
      });
    }, 4000);

    return () => {
      clearInterval(bookingInterval);
      clearInterval(searchInterval);
      clearInterval(responseInterval);
    };
  }, []);

  const stats = [
    {
      icon: Activity,
      label: "Total Bookings Today",
      value: bookings.toLocaleString(),
      suffix: `(Flights: ${(flightBookings / 1000).toFixed(0)}K | Hotels: ${(hotelBookings / 1000).toFixed(0)}K | Cars: ${(carBookings / 1000).toFixed(1)}K)`,
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
            All systems operational • 99.9% uptime
          </span>
        </div>
      </div>
    </div>
  );
};

export default LiveStats;

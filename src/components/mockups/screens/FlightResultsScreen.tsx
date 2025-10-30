import { Plane, Clock } from "lucide-react";

const FlightResultsScreen = () => {
  const flights = [
    { airline: "British Airways", time: "08:00 - 16:30", price: "$589", badge: "Best Price" },
    { airline: "American Airlines", time: "10:30 - 18:45", price: "$612", badge: "Fastest" },
    { airline: "Virgin Atlantic", time: "14:00 - 22:15", price: "$645", badge: "Premium" },
  ];

  return (
    <div className="p-6 h-full bg-background">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-foreground mb-1">Available Flights</h2>
        <p className="text-xs text-muted-foreground">JFK → LHR • Dec 15</p>
      </div>

      <div className="space-y-3">
        {flights.map((flight, index) => (
          <div 
            key={index} 
            className="bg-card border border-border rounded-xl p-4 shadow-sm"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="font-semibold text-foreground text-sm mb-1">{flight.airline}</div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>{flight.time}</span>
                </div>
              </div>
              {index === 0 && (
                <span className="bg-accent/20 text-accent text-xs px-2 py-1 rounded-full font-medium">
                  {flight.badge}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-muted-foreground mb-0.5">Price</div>
                <div className="text-lg font-bold text-foreground">{flight.price}</div>
              </div>
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium">
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightResultsScreen;

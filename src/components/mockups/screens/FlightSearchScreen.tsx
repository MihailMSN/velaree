import { Search, Calendar, Users } from "lucide-react";

const FlightSearchScreen = () => {
  return (
    <div className="p-6 h-full bg-gradient-to-b from-primary/5 to-background">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">Find Flights</h2>
        <p className="text-sm text-muted-foreground">Search 200+ airlines worldwide</p>
      </div>

      <div className="space-y-4">
        {/* Origin */}
        <div className="bg-card border border-border rounded-xl p-4">
          <div className="text-xs text-muted-foreground mb-1">From</div>
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-primary" />
            <div>
              <div className="font-semibold text-foreground">New York</div>
              <div className="text-xs text-muted-foreground">JFK Airport</div>
            </div>
          </div>
        </div>

        {/* Destination */}
        <div className="bg-card border border-border rounded-xl p-4">
          <div className="text-xs text-muted-foreground mb-1">To</div>
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-primary" />
            <div>
              <div className="font-semibold text-foreground">London</div>
              <div className="text-xs text-muted-foreground">LHR Airport</div>
            </div>
          </div>
        </div>

        {/* Date and Passengers */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="text-xs text-muted-foreground mb-1">Date</div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <div className="text-sm font-medium text-foreground">Dec 15</div>
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="text-xs text-muted-foreground mb-1">Guests</div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <div className="text-sm font-medium text-foreground">2 Adults</div>
            </div>
          </div>
        </div>

        {/* Search Button */}
        <button className="w-full bg-accent text-accent-foreground rounded-xl py-4 font-semibold mt-6 shadow-lg">
          Search Flights
        </button>
      </div>
    </div>
  );
};

export default FlightSearchScreen;

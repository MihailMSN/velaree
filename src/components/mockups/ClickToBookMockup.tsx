import { Plane, Calendar, Users, Search } from "lucide-react";
import MockupBrowser from "./MockupBrowser";

const ClickToBookMockup = () => {
  return (
    <MockupBrowser url="app.velaree.com/search" className="animate-fade-in">
      <div className="p-8 space-y-6">
        {/* Search Form */}
        <div className="bg-card rounded-xl shadow-lg p-6 space-y-4 border border-border">
          <h3 className="text-lg font-bold text-foreground mb-4">Search Flights</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">From</label>
              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg border border-border">
                <Plane className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-bold text-foreground">SFO</div>
                  <div className="text-xs text-muted-foreground">San Francisco</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">To</label>
              <div className="flex items-center gap-3 p-3 bg-muted rounded-lg border border-border">
                <Plane className="w-5 h-5 text-primary rotate-90" />
                <div>
                  <div className="font-bold text-foreground">LHR</div>
                  <div className="text-xs text-muted-foreground">London Heathrow</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Departure</label>
              <div className="flex items-center gap-2 p-3 bg-muted rounded-lg border border-border">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">Mar 15, 2025</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Return</label>
              <div className="flex items-center gap-2 p-3 bg-muted rounded-lg border border-border">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">Mar 22, 2025</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Passengers</label>
              <div className="flex items-center gap-2 p-3 bg-muted rounded-lg border border-border">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">2 Adults</span>
              </div>
            </div>
          </div>

          <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
            <Search className="w-5 h-5" />
            Search Flights
          </button>
        </div>

        {/* Search Results */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-foreground">Available Flights</h4>
            <span className="text-xs text-muted-foreground">Showing 127 results</span>
          </div>
          
          {/* Flight Result Cards */}
          {[
            { airline: "British Airways", time: "10:30 AM - 10:55 PM", price: "$682", stops: "Nonstop", duration: "10h 25m" },
            { airline: "United Airlines", time: "2:15 PM - 3:10 AM", price: "$594", stops: "Nonstop", duration: "10h 55m" },
            { airline: "Virgin Atlantic", time: "6:45 PM - 7:30 AM", price: "$721", stops: "Nonstop", duration: "10h 45m" }
          ].map((flight, idx) => (
            <div key={idx} className="bg-card rounded-lg shadow p-4 border border-border hover:shadow-md transition-shadow animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Plane className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{flight.airline}</div>
                    <div className="text-xs text-muted-foreground">{flight.time}</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-xs text-muted-foreground">{flight.duration}</div>
                  <div className="text-xs font-semibold text-green-600">{flight.stops}</div>
                </div>
                
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{flight.price}</div>
                  <button className="text-xs bg-accent hover:bg-accent/80 text-accent-foreground px-4 py-1.5 rounded-full mt-1 transition-colors">
                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MockupBrowser>
  );
};

export default ClickToBookMockup;

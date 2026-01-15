import { useState } from "react";
import MockupBrowser from "./MockupBrowser";
import { Search, Plane, Calendar, Users, Clock, TrendingDown, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const airports = [{
  code: "JFK",
  name: "New York JFK",
  city: "New York"
}, {
  code: "LHR",
  name: "London Heathrow",
  city: "London"
}, {
  code: "LAX",
  name: "Los Angeles",
  city: "Los Angeles"
}, {
  code: "DXB",
  name: "Dubai International",
  city: "Dubai"
}, {
  code: "CDG",
  name: "Paris Charles de Gaulle",
  city: "Paris"
}, {
  code: "SIN",
  name: "Singapore Changi",
  city: "Singapore"
}, {
  code: "NRT",
  name: "Tokyo Narita",
  city: "Tokyo"
}, {
  code: "SFO",
  name: "San Francisco",
  city: "San Francisco"
}, {
  code: "MIA",
  name: "Miami International",
  city: "Miami"
}, {
  code: "ORD",
  name: "Chicago O'Hare",
  city: "Chicago"
}];
const mockResults = [{
  airline: "British Airways",
  logo: "BA",
  departure: "08:30",
  arrival: "20:45",
  duration: "7h 15m",
  stops: "Non-stop",
  price: 687,
  class: "Economy",
  availability: 9,
  gds: "Amadeus"
}, {
  airline: "United Airlines",
  logo: "UA",
  departure: "10:15",
  arrival: "22:30",
  duration: "7h 15m",
  stops: "Non-stop",
  price: 742,
  class: "Economy",
  availability: 4,
  gds: "Sabre"
}, {
  airline: "Virgin Atlantic",
  logo: "VS",
  departure: "14:20",
  arrival: "02:35+1",
  duration: "7h 15m",
  stops: "Non-stop",
  price: 698,
  class: "Economy",
  availability: 7,
  gds: "Amadeus"
}, {
  airline: "Air France",
  logo: "AF",
  departure: "19:45",
  arrival: "08:15+1",
  duration: "8h 30m",
  stops: "1 stop",
  price: 589,
  class: "Economy",
  availability: 12,
  gds: "Amadeus"
}];
const SearchAvailabilityMockup = () => {
  const [origin, setOrigin] = useState("JFK");
  const [destination, setDestination] = useState("LHR");
  const [showOriginDropdown, setShowOriginDropdown] = useState(false);
  const [showDestDropdown, setShowDestDropdown] = useState(false);
  return <MockupBrowser url="app.velaree.com/search">
      <div className="p-8">
        {/* Search Form */}
        <Card className="p-6 bg-card border-border mb-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Origin */}
            <div className="relative">
              <label className="block text-xs font-semibold text-muted-foreground mb-2">From</label>
              <div className="relative" onMouseEnter={() => setShowOriginDropdown(true)} onMouseLeave={() => setShowOriginDropdown(false)}>
                <Input value={`${origin} - ${airports.find(a => a.code === origin)?.city}`} readOnly className="cursor-pointer" />
                <Plane className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                
                {showOriginDropdown && <div className="absolute z-50 w-full mt-1 bg-card border border-border rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {airports.slice(0, 5).map(airport => <div key={airport.code} onClick={() => setOrigin(airport.code)} className="px-4 py-2 hover:bg-accent cursor-pointer transition-colors">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-sm text-foreground">{airport.code}</div>
                            <div className="text-xs text-muted-foreground">{airport.name}</div>
                          </div>
                          {origin === airport.code && <Check className="w-4 h-4 text-accent-foreground" />}
                        </div>
                      </div>)}
                  </div>}
              </div>
            </div>

            {/* Destination */}
            <div className="relative">
              <label className="block text-xs font-semibold text-muted-foreground mb-2">To</label>
              <div className="relative" onMouseEnter={() => setShowDestDropdown(true)} onMouseLeave={() => setShowDestDropdown(false)}>
                <Input value={`${destination} - ${airports.find(a => a.code === destination)?.city}`} readOnly className="cursor-pointer" />
                <Plane className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                
                {showDestDropdown && <div className="absolute z-50 w-full mt-1 bg-card border border-border rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {airports.filter(a => a.code !== origin).slice(0, 5).map(airport => <div key={airport.code} onClick={() => setDestination(airport.code)} className="px-4 py-2 hover:bg-accent cursor-pointer transition-colors">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-sm text-foreground">{airport.code}</div>
                            <div className="text-xs text-muted-foreground">{airport.name}</div>
                          </div>
                          {destination === airport.code && <Check className="w-4 h-4 text-accent-foreground" />}
                        </div>
                      </div>)}
                  </div>}
              </div>
            </div>

            {/* Departure Date */}
            <div>
              <label className="block text-xs font-semibold text-muted-foreground mb-2">Departure</label>
              <div className="relative">
                <Input value="Dec 15, 2024" readOnly className="cursor-pointer" />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>

            {/* Return Date */}
            <div>
              <label className="block text-xs font-semibold text-muted-foreground mb-2">Return</label>
              <div className="relative">
                <Input value="Dec 22, 2024" readOnly className="cursor-pointer" />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>

            {/* Passengers */}
            <div>
              <label className="block text-xs font-semibold text-muted-foreground mb-2">Passengers</label>
              <div className="relative">
                <Input value="2 Adults" readOnly className="cursor-pointer" />
                <Users className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>
          </div>

          <Button className="w-full mt-6 text-base text-white bg-stone-950 hover:bg-stone-800">
            <Search className="w-4 h-4 mr-2" />
            Search 200+ Airlines
          </Button>
        </Card>

        {/* Demo Status Bar */}
        <div className="flex items-center gap-4 mb-6 px-4 py-3 bg-muted/30 rounded-lg border border-border">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
            <span className="text-xs font-medium text-foreground">Demo Preview</span>
          </div>
          <div className="h-4 w-px bg-border"></div>
          <span className="text-xs text-muted-foreground">Simulated GDS, LCC, and Direct Connections</span>
          <div className="h-4 w-px bg-border"></div>
          <span className="text-xs font-semibold text-accent-foreground">Sample: 247 flights in 438ms</span>
        </div>

        {/* Results */}
        <div className="space-y-4">
          {mockResults.map((result, index) => <Card key={index} className="p-6 bg-card border-border hover:shadow-lg transition-all duration-300 animate-fade-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="flex items-center justify-between">
                {/* Flight Info */}
                <div className="flex-1 grid grid-cols-5 gap-6 items-center">
                  {/* Airline */}
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center text-sm font-bold text-accent-foreground mb-2">
                      {result.logo}
                    </div>
                    <div className="text-sm font-semibold text-foreground">{result.airline}</div>
                    <div className="text-xs text-muted-foreground">{result.class}</div>
                  </div>

                  {/* Times */}
                  <div>
                    <div className="text-2xl font-bold text-foreground">{result.departure}</div>
                    <div className="text-xs text-muted-foreground">{origin}</div>
                  </div>

                  {/* Duration */}
                  <div className="text-center">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex-1 h-px bg-border"></div>
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <div className="flex-1 h-px bg-border"></div>
                    </div>
                    <div className="text-sm text-muted-foreground">{result.duration}</div>
                    <div className="text-xs text-muted-foreground">{result.stops}</div>
                  </div>

                  {/* Arrival */}
                  <div>
                    <div className="text-2xl font-bold text-foreground">{result.arrival}</div>
                    <div className="text-xs text-muted-foreground">{destination}</div>
                  </div>

                  {/* Availability & GDS */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-sm font-semibold text-foreground">{result.availability} seats</span>
                    </div>
                    <div className="text-xs text-muted-foreground">via {result.gds}</div>
                  </div>
                </div>

                {/* Price & Action */}
                <div className="ml-6 text-right flex flex-col items-end gap-3">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">From</div>
                    <div className="text-3xl font-bold text-foreground">${result.price}</div>
                    <div className="text-xs text-muted-foreground">per person</div>
                  </div>
                  {index === 0 && <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-50 border border-green-200">
                      <TrendingDown className="w-3 h-3 text-green-600" />
                      <span className="text-xs font-semibold text-green-700">Best Price</span>
                    </div>}
                  <Button size="sm" className="bg-stone-950 hover:bg-stone-800 text-white">
                    Select Flight
                  </Button>
                </div>
              </div>
            </Card>)}
        </div>
      </div>
    </MockupBrowser>;
};
export default SearchAvailabilityMockup;
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Copy } from "lucide-react";
const codeExamples = {
  search: `// Search for flights
const response = await velaree.flights.search({
  origin: "LHR",
  destination: "JFK",
  date: "2025-12-01",
  cabin: "business",
  adults: 1
});

// Returns in < 500ms
console.log(response.flights.length); // 247 options
console.log(response.privateFares); // 89 exclusive fares`,
  book: `// Instant booking
const booking = await velaree.bookings.create({
  flightId: "VL_8472KD",
  passenger: {
    firstName: "John",
    lastName: "Smith",
    email: "john@example.com"
  },
  payment: {
    method: "card",
    token: "tok_visa_4242"
  }
});

// Automatic ticketing
console.log(booking.status); // "confirmed"
console.log(booking.pnr); // "ABC123"
console.log(booking.ticketNumber); // "125-4587..."`,
  manage: `// Automated schedule change handling
velaree.webhooks.on('schedule_change', async (event) => {
  const { booking, changes } = event;
  
  // Auto-notify passenger
  await velaree.notifications.send({
    bookingId: booking.id,
    type: "schedule_change",
    channels: ["email", "sms"]
  });
  
  // Update booking
  return { status: "notified", timestamp: Date.now() };
});

// Velaree handles the rest automatically`
};
const ApiPreview = () => {
  const [copiedTab, setCopiedTab] = useState<string | null>(null);
  const copyToClipboard = (code: string, tab: string) => {
    navigator.clipboard.writeText(code);
    setCopiedTab(tab);
    setTimeout(() => setCopiedTab(null), 2000);
  };
  return <section className="py-24 bg-gradient-to-b from-primary/5 via-accent/5 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Developer-First API
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Clean, intuitive API that developers love. Get started in 10 minutes.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="p-8 bg-card border-border shadow-xl animate-scale-in">
            <Tabs defaultValue="search" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="search">Search</TabsTrigger>
                <TabsTrigger value="book">Book</TabsTrigger>
                <TabsTrigger value="manage">Automate</TabsTrigger>
              </TabsList>

              {Object.entries(codeExamples).map(([key, code]) => <TabsContent key={key} value={key} className="relative">
                  <div className="relative">
                    <button onClick={() => copyToClipboard(code, key)} className="absolute top-3 right-3 p-2 rounded-lg bg-muted hover:bg-accent transition-colors z-10" title="Copy code">
                      {copiedTab === key ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-muted-foreground" />}
                    </button>
                    
                    <pre className="bg-primary text-primary-foreground p-6 rounded-lg overflow-x-auto text-sm leading-relaxed">
                      <code>{code}</code>
                    </pre>
                  </div>
                </TabsContent>)}
            </Tabs>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground mb-1">10 min</div>
                <div className="text-sm text-muted-foreground">Integration Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground mb-1">RESTful</div>
                <div className="text-sm text-muted-foreground">JSON API</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground mb-1">SDKs</div>
                <div className="text-sm text-muted-foreground">Node, Python, PHP</div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-8">
              <Link to="/contact" className="inline-flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg bg-primary text-primary-foreground">
                Get API Keys →
              </Link>
              <span className="inline-flex items-center px-6 py-3 text-muted-foreground/50 cursor-not-allowed ml-4">
                View Full Docs (Coming Soon)
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};
export default ApiPreview;
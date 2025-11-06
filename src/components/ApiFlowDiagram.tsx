import { ArrowDown, Plane, Hotel, Network, MousePointer, Key, Database, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const ApiFlowDiagram = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Complete <span className="text-gradient">Integrated Ecosystem</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            All tools unified in one platform, working seamlessly together for maximum efficiency
          </p>
        </div>

        {/* Data Sources Layer */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-muted-foreground">Data Sources</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["Amadeus", "Sabre", "Travelport", "200+ Airlines", "Major OTAs", "NDC", "Consolidators"].map((source, i) => (
              <div
                key={source}
                className="px-4 py-2 rounded-full bg-blue/20 border border-blue/40 text-sm font-medium animate-fade-in"
                style={{ animationDelay: `${0.1 + i * 0.05}s` }}
              >
                {source}
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <ArrowDown className="w-8 h-8 text-accent animate-bounce" />
          </div>
        </div>

        {/* Integration Layer */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Card className="bg-card/50 backdrop-blur-sm border-accent/30 max-w-3xl mx-auto">
            <CardContent className="p-6 text-center">
              <Database className="w-10 h-10 text-accent mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">API Integration Layer</h3>
              <p className="text-sm text-muted-foreground">
                Real-time data aggregation from 50+ sources with sub-500ms response
              </p>
            </CardContent>
          </Card>
          <div className="flex justify-center mt-6">
            <ArrowDown className="w-8 h-8 text-accent animate-bounce" />
          </div>
        </div>

        {/* Re-Shopping Tools */}
        <div className="mb-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* aRStool */}
          <Link to="/rstool" className="animate-fade-in hover-scale" style={{ animationDelay: "0.5s" }}>
            <Card className="h-full bg-card/70 backdrop-blur-sm border-blue/40 hover:border-blue hover:shadow-lg hover:shadow-blue/20 transition-all duration-300">
              <CardContent className="p-6">
                <Plane className="w-12 h-12 text-blue mb-4" />
                <h3 className="text-xl font-bold mb-2">aRStool</h3>
                <p className="text-sm text-muted-foreground mb-3">Air Re-Shopping Platform</p>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <div>• 50+ data sources</div>
                  <div>• Real-time monitoring</div>
                  <div>• Automatic re-booking</div>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* hRStool */}
          <Link to="/hrstool" className="animate-fade-in hover-scale" style={{ animationDelay: "0.6s" }}>
            <Card className="h-full bg-card/70 backdrop-blur-sm border-purple/40 hover:border-purple hover:shadow-lg hover:shadow-purple/20 transition-all duration-300">
              <CardContent className="p-6 relative">
                <Hotel className="w-12 h-12 text-purple mb-4" />
                <h3 className="text-xl font-bold mb-2">hRStool</h3>
                <p className="text-sm text-muted-foreground mb-3">Hotel Re-Shopping Platform</p>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <div>• Multi-source monitoring</div>
                  <div>• Price optimization</div>
                  <div>• Coming Q1 2026</div>
                </div>
                <div className="absolute top-4 right-4 px-2 py-1 bg-purple/20 border border-purple/40 rounded-full text-xs">
                  Coming Soon
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="flex justify-center mb-12">
          <ArrowDown className="w-8 h-8 text-accent animate-bounce" />
        </div>

        {/* UnifyTool - Center Hero */}
        <div className="mb-12 animate-scale-in" style={{ animationDelay: "0.7s" }}>
          <Link to="/unifytool" className="block max-w-2xl mx-auto hover-scale">
            <Card className="bg-gradient-to-br from-primary/20 via-accent/30 to-primary/20 border-2 border-accent shadow-2xl shadow-accent/30 hover:shadow-accent/50 transition-all duration-300">
              <CardContent className="p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent animate-network-pulse"></div>
                <Network className="w-16 h-16 text-primary mx-auto mb-4 relative z-10" />
                <h3 className="text-3xl font-bold mb-2 relative z-10">UnifyTool</h3>
                <p className="text-lg font-semibold mb-4 relative z-10">Complete Platform Core</p>
                <p className="text-sm text-muted-foreground max-w-lg mx-auto relative z-10">
                  All tools unified in one dashboard. Single sign-on, unified analytics, 
                  seamless data flow, and centralized management.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-2 relative z-10">
                  <span className="px-3 py-1 bg-accent/20 border border-accent/40 rounded-full text-xs font-medium">
                    Unified Dashboard
                  </span>
                  <span className="px-3 py-1 bg-accent/20 border border-accent/40 rounded-full text-xs font-medium">
                    Cross-Platform Analytics
                  </span>
                  <span className="px-3 py-1 bg-accent/20 border border-accent/40 rounded-full text-xs font-medium">
                    One API
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="flex justify-center mb-12">
          <ArrowDown className="w-8 h-8 text-accent animate-bounce" />
        </div>

        {/* Booking Tools */}
        <div className="mb-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Click-to-Book */}
          <div className="animate-fade-in" style={{ animationDelay: "0.9s" }}>
            <Card className="h-full bg-card/70 backdrop-blur-sm border-green/40 hover:border-green hover:shadow-lg hover:shadow-green/20 transition-all duration-300">
              <CardContent className="p-6">
                <MousePointer className="w-12 h-12 text-green mb-4" />
                <h3 className="text-xl font-bold mb-2">Click-to-Book</h3>
                <p className="text-sm text-muted-foreground mb-3">Instant Booking Platform</p>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <div>• One-click reservations</div>
                  <div>• Instant confirmations</div>
                  <div>• PNR management</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Private Fare API */}
          <div className="animate-fade-in" style={{ animationDelay: "1s" }}>
            <Card className="h-full bg-card/70 backdrop-blur-sm border-orange/40 hover:border-orange hover:shadow-lg hover:shadow-orange/20 transition-all duration-300">
              <CardContent className="p-6">
                <Key className="w-12 h-12 text-orange mb-4" />
                <h3 className="text-xl font-bold mb-2">Private Fare API</h3>
                <p className="text-sm text-muted-foreground mb-3">Exclusive Rates Access</p>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <div>• Negotiated fares</div>
                  <div>• Corporate rates</div>
                  <div>• Consolidator access</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex justify-center mb-12">
          <ArrowDown className="w-8 h-8 text-accent animate-bounce" />
        </div>

        {/* Your Platform */}
        <div className="animate-fade-in" style={{ animationDelay: "1.1s" }}>
          <Card className="bg-gradient-to-br from-primary to-primary/80 border-primary max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <Zap className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">Your Travel Platform</h3>
              <p className="text-primary-foreground/90 text-sm max-w-lg mx-auto">
                Seamlessly integrate with your existing systems via our RESTful API. 
                White-label ready, fully customizable, enterprise-grade security.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Experience the power of a truly unified travel technology platform. 
            All tools working together to maximize efficiency and ROI.
          </p>
          <Link 
            to="/unifytool" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Explore UnifyTool Platform
            <ArrowDown className="w-4 h-4 rotate-[-90deg]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ApiFlowDiagram;

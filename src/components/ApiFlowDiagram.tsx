import { ArrowRight } from "lucide-react";
const ApiFlowDiagram = () => {
  return <div className="relative py-12">
      <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
        {/* OTA/TMC */}
        <div className="flex flex-col items-center animate-fade-in">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
            <span className="text-primary-foreground font-bold text-sm text-center px-2">OTA / TMC</span>
          </div>
          <span className="text-xs text-muted-foreground mt-2">Your Platform</span>
        </div>

        {/* Arrow */}
        <ArrowRight className="w-8 h-8 text-accent animate-pulse hidden md:block" />

        {/* Velaree */}
        <div className="flex flex-col items-center animate-fade-in" style={{
        animationDelay: "0.2s"
      }}>
          <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/30 to-primary/20 border-2 border-accent/30 flex items-center justify-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent animate-network-pulse"></div>
            <span className="text-primary font-bold text-lg relative z-10">Velaree</span>
          </div>
          <span className="text-xs text-muted-foreground mt-2 font-semibold">API Layer</span>
        </div>

        {/* Arrow */}
        <ArrowRight className="w-8 h-8 text-accent animate-pulse hidden md:block" />

        {/* GDS/Airlines */}
        <div className="flex flex-col items-center animate-fade-in" style={{
        animationDelay: "0.4s"
      }}>
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-lg">
            <span className="text-foreground font-bold text-sm text-center px-2">GDS Airlines</span>
          </div>
          <span className="text-xs text-muted-foreground mt-2">Global Sources</span>
        </div>

        {/* Arrow back */}
        <ArrowRight className="w-8 h-8 text-accent/50 rotate-180 hidden md:block" />

        {/* Response */}
        <div className="flex flex-col items-center animate-fade-in" style={{
        animationDelay: "0.6s"
      }}>
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border-2 border-dashed border-accent">
            <span className="text-foreground font-bold text-sm text-center px-2">Real-time Data</span>
          </div>
          <span className="text-xs text-muted-foreground mt-2">Instant Response</span>
        </div>
      </div>

      <div className="text-center mt-8 animate-fade-in" style={{
      animationDelay: "0.8s"
    }}>
        <p className="text-muted-foreground text-sm max-w-2xl mx-auto mb-6">
          Our modular API architecture connects your platform to 200+ airlines across all major GDS in milliseconds, 
          delivering real-time availability, pricing, and instant booking confirmation.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <div className="px-4 py-2 rounded-full border border-accent/40 font-medium bg-primary text-primary-foreground">
            Sub-500ms Response
          </div>
          <div className="px-4 py-2 rounded-full border border-accent/40 font-medium bg-primary text-primary-foreground">
            RESTful JSON API
          </div>
          <div className="px-4 py-2 rounded-full border border-accent/40 font-medium bg-primary text-primary-foreground">
            Real-time Webhooks
          </div>
        </div>
      </div>
    </div>;
};
export default ApiFlowDiagram;
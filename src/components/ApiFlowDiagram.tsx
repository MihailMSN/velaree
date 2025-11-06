import { Link } from "react-router-dom";
import { Database, Plane, Hotel, Network, MousePointer, Key, Zap } from "lucide-react";

const tools = [
  {
    name: "aRStool",
    icon: Plane,
    color: "from-blue-500/20 to-blue-600/30 border-blue-500",
    iconColor: "text-blue-500",
    path: "/rstool",
    benefits: ["Real-time monitoring", "Automatic re-booking"],
    angle: 0,
  },
  {
    name: "hRStool",
    icon: Hotel,
    color: "from-purple-500/20 to-purple-600/30 border-purple-500",
    iconColor: "text-purple-500",
    path: "/hrstool",
    benefits: ["Price optimization", "Coming Q1 2026"],
    angle: 60,
  },
  {
    name: "Private Fare API",
    icon: Key,
    color: "from-orange-500/20 to-orange-600/30 border-orange-500",
    iconColor: "text-orange-500",
    path: "#",
    benefits: ["Exclusive rates", "Negotiated fares"],
    angle: 120,
  },
  {
    name: "Click-to-Book",
    icon: MousePointer,
    color: "from-green-500/20 to-green-600/30 border-green-500",
    iconColor: "text-green-500",
    path: "#",
    benefits: ["Instant bookings", "One-click reservations"],
    angle: 180,
  },
  {
    name: "Data Integration",
    icon: Database,
    color: "from-accent/20 to-accent/30 border-accent",
    iconColor: "text-accent",
    path: "#",
    benefits: ["50+ data sources", "Sub-500ms response"],
    angle: 240,
  },
  {
    name: "Automation Suite",
    icon: Zap,
    color: "from-cyan-500/20 to-cyan-600/30 border-cyan-500",
    iconColor: "text-cyan-500",
    path: "#",
    benefits: ["Streamline operations", "Reduce manual work"],
    angle: 300,
  },
];

const ApiFlowDiagram = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Complete Integrated Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            All tools unified in one powerful platform. Experience seamless integration across your entire travel technology stack.
          </p>
        </div>

        {/* Circular Diagram */}
        <div className="relative mx-auto max-w-5xl" style={{ minHeight: "800px" }}>
          {/* SVG Connection Lines Layer */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none" 
            viewBox="0 0 1000 1000"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            {tools.map((tool, index) => {
              const angle = (tool.angle - 90) * (Math.PI / 180);
              const x = 500 + Math.cos(angle) * 320;
              const y = 500 + Math.sin(angle) * 320;
              return (
                <g key={index}>
                  <path
                    d={`M 500 500 Q ${500 + Math.cos(angle) * 160} ${500 + Math.sin(angle) * 160} ${x} ${y}`}
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    strokeDasharray="8 4"
                    fill="none"
                    className="animate-fade-in"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  />
                  <circle
                    cx={500 + Math.cos(angle) * 160}
                    cy={500 + Math.sin(angle) * 160}
                    r="4"
                    className="fill-accent animate-pulse"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  />
                  <circle
                    cx={500 + Math.cos(angle) * 240}
                    cy={500 + Math.sin(angle) * 240}
                    r="4"
                    className="fill-accent animate-pulse"
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  />
                </g>
              );
            })}
          </svg>

          {/* Center Hub - UnifyTool */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <Link to="/unifytool" className="block group">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-primary/20 via-accent/30 to-primary/20 border-2 border-primary shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-primary/50 animate-scale-in backdrop-blur-sm">
                {/* Pulse ring */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping" style={{ animationDuration: "3s" }} />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <Network className="w-12 h-12 md:w-16 md:h-16 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">UnifyTool</h3>
                  <p className="text-sm text-muted-foreground">Complete Platform</p>
                  <p className="text-xs text-accent mt-1 font-semibold">50+ Data Sources</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Tools arranged in circle */}
          <div className="absolute inset-0">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              const angle = (tool.angle - 90) * (Math.PI / 180);
              const radius = 320; // Distance from center
              
              // Calculate position
              const x = 50 + Math.cos(angle) * radius / 10; // Convert to percentage
              const y = 50 + Math.sin(angle) * radius / 10;
              
              return (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Link 
                    to={tool.path}
                    className="block group animate-fade-in"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    {/* Tool Circle */}
                    <div className={`relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br ${tool.color} border-2 shadow-xl transition-all duration-300 hover:scale-125 hover:shadow-2xl backdrop-blur-sm flex items-center justify-center mb-2`}>
                      <Icon className={`w-8 h-8 md:w-10 md:h-10 ${tool.iconColor} group-hover:scale-110 transition-transform`} />
                    </div>
                    
                    {/* Tool Name */}
                    <h4 className="text-sm md:text-base font-semibold text-center text-foreground group-hover:text-primary transition-colors">
                      {tool.name}
                    </h4>

                    {/* Benefit Callouts */}
                    <div 
                      className="absolute animate-fade-in hidden md:block"
                      style={{ 
                        animationDelay: `${0.8 + index * 0.1}s`,
                        left: tool.angle >= 90 && tool.angle <= 270 ? "-140px" : "auto",
                        right: tool.angle < 90 || tool.angle > 270 ? "-140px" : "auto",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "120px",
                      }}
                    >
                      {tool.benefits.map((benefit, bIndex) => (
                        <div key={bIndex} className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: `${1 + index * 0.1 + bIndex * 0.05}s` }} />
                          <p className="text-xs text-muted-foreground leading-tight">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <p className="text-lg text-muted-foreground mb-6">
            Experience the power of unified travel technology
          </p>
          <Link
            to="/unifytool"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg hover:shadow-primary/50"
          >
            <Network className="w-5 h-5" />
            Explore UnifyTool Platform
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ApiFlowDiagram;

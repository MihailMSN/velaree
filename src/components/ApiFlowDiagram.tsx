import { Link } from "react-router-dom";
import { Database, Plane, Hotel, Network, MousePointer, Key, Zap } from "lucide-react";

const tools = [
  {
    name: "aRStool",
    icon: Plane,
    color: "from-feature-blue/20 to-feature-blue/30 border-feature-blue",
    iconColor: "text-feature-blue-foreground",
    path: "/rstool",
    benefits: ["Real-time monitoring", "Automatic re-booking"],
    angle: 0,
  },
  {
    name: "hRStool",
    icon: Hotel,
    color: "from-feature-purple/20 to-feature-purple/30 border-feature-purple",
    iconColor: "text-feature-purple-foreground",
    path: "/hrstool",
    benefits: ["Price optimization", "Coming Q1 2026"],
    angle: 60,
  },
  {
    name: "Private Fare API",
    icon: Key,
    color: "from-feature-amber/20 to-feature-amber/30 border-feature-amber",
    iconColor: "text-feature-amber-foreground",
    path: "#",
    benefits: ["Exclusive rates", "Negotiated fares"],
    angle: 120,
  },
  {
    name: "Click-to-Book",
    icon: MousePointer,
    color: "from-feature-green/20 to-feature-green/30 border-feature-green",
    iconColor: "text-feature-green-foreground",
    path: "#",
    benefits: ["Instant bookings", "One-click reservations"],
    angle: 180,
  },
  {
    name: "Data Integration",
    icon: Database,
    color: "from-feature-indigo/20 to-feature-indigo/30 border-feature-indigo",
    iconColor: "text-feature-indigo-foreground",
    path: "#",
    benefits: ["50+ data sources", "Sub-500ms response"],
    angle: 240,
  },
  {
    name: "Automation Suite",
    icon: Zap,
    color: "from-feature-emerald/20 to-feature-emerald/30 border-feature-emerald",
    iconColor: "text-feature-emerald-foreground",
    path: "#",
    benefits: ["Streamline operations", "Reduce manual work"],
    angle: 300,
  },
];

const ApiFlowDiagram = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-primary">
            Complete Integrated Ecosystem
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            All tools unified in one powerful platform. Experience seamless integration across your entire travel technology stack.
          </p>
        </div>

        {/* Circular Diagram */}
        <div className="relative mx-auto max-w-4xl lg:max-w-5xl" style={{ minHeight: "700px", maxHeight: "900px" }}>
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
              <div className="relative w-40 h-40 md:w-52 md:h-52 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-accent/40 via-accent/20 to-background border-2 border-primary transition-all duration-500 hover:scale-110 hover:border-accent animate-scale-in backdrop-blur-sm" style={{ boxShadow: "var(--shadow-lg)" }}>
                {/* Pulse ring */}
                <div className="absolute inset-0 rounded-full border-2 border-accent/40 animate-ping" style={{ animationDuration: "3s" }} />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 md:p-6">
                  <Network className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 text-primary mb-2 md:mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-1 md:mb-2">UnifyTool</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Complete Platform</p>
                  <p className="text-xs text-primary mt-1 font-semibold">50+ Data Sources</p>
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
                    <div className={`relative w-18 h-18 md:w-22 md:h-22 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br ${tool.color} border-2 transition-all duration-300 hover:scale-125 backdrop-blur-sm flex items-center justify-center mb-2`} style={{ boxShadow: "var(--shadow-md)" }}>
                      <Icon className={`w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10 ${tool.iconColor} group-hover:scale-110 transition-transform`} />
                    </div>
                    
                    {/* Tool Name */}
                    <h4 className="text-xs md:text-sm lg:text-base font-semibold text-center text-foreground group-hover:text-primary transition-colors">
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
                        <div key={bIndex} className="flex items-center gap-2 mb-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" style={{ animationDelay: `${1 + index * 0.1 + bIndex * 0.05}s` }} />
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
        <div className="text-center mt-16 md:mt-24 animate-fade-in px-4" style={{ animationDelay: "1.2s" }}>
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            Experience the power of unified travel technology
          </p>
          <Link
            to="/unifytool"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all hover:scale-105"
            style={{ boxShadow: "var(--shadow-md)" }}
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

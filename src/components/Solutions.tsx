import { Card } from "@/components/ui/card";
import { Plane, DollarSign, Zap, Check } from "lucide-react";

const solutions = [
  {
    icon: Plane,
    title: "Book in 60 Seconds",
    subtitle: "vs. 15-min industry average",
    description: "Complete end-to-end booking flow from search to confirmation",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-500/10",
    features: [
      "Real-time availability across 200+ airlines in one search",
      "One-click booking with automatic instant ticketing",
      "Dynamic pricing with full fare rules transparency",
      "Mobile-optimized checkout with saved payment methods"
    ]
  },
  {
    icon: DollarSign,
    title: "Save 20-30% on Fares",
    subtitle: "With exclusive private contracts",
    description: "Access consolidator inventory not available on public channels",
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-500/10",
    features: [
      "89+ private airline consolidator contracts globally",
      "Corporate negotiated rates with major carriers",
      "Bulk fare inventory with real-time availability",
      "Transparent commission tracking and reporting"
    ]
  },
  {
    icon: Zap,
    title: "Automate 70% of Operations",
    subtitle: "Save 20+ hours per week",
    description: "Intelligent automation eliminates repetitive manual tasks",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-500/10",
    features: [
      "Automatic ticketing within 2 minutes of booking",
      "AI-powered schedule change detection and rebooking",
      "One-click cancellation processing with refund automation",
      "Multi-channel customer notifications (email, SMS, push)"
    ]
  }
];

const Solutions = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Enterprise Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tools designed for scale, reliability, and innovation
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card 
                key={index} 
                className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon and Badge Row */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-lg ${solution.bgColor} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-7 h-7 ${solution.color}`} />
                  </div>
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent/20 border border-accent/40">
                    <span className="text-xs font-semibold text-foreground">{solution.subtitle}</span>
                  </div>
                </div>
              
                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {solution.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                {/* Features List */}
                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                      <Check className={`w-4 h-4 ${solution.color} mr-2 mt-0.5 flex-shrink-0`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;

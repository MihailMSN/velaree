import { Search, GitCompare, Zap, Bell } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Search 200+ Airlines",
    description: "Real-time availability across all major GDS, LCCs, and direct airline connections in one API call",
    metric: "Sub-500ms response"
  },
  {
    icon: GitCompare,
    number: "02",
    title: "Compare Private vs Public Fares",
    description: "Access exclusive consolidator fares and private contracts not available on public channels",
    metric: "Save 20-30% avg"
  },
  {
    icon: Zap,
    number: "03",
    title: "Book Instantly Online",
    description: "Complete end-to-end booking with automatic ticketing, payment processing, and confirmation",
    metric: "60-second booking"
  },
  {
    icon: Bell,
    number: "04",
    title: "Automated Management",
    description: "Intelligent automation handles ticketing, schedule changes, cancellations, and customer notifications",
    metric: "70% less manual work"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From search to boarding in four seamless steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-accent/30 group-hover:bg-accent/60 transition-colors"></div>
                )}

                <div className="relative p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-foreground font-bold text-lg shadow-md">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-4 mt-4">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Metric Badge */}
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent/20 border border-accent/40">
                    <span className="text-xs font-semibold text-foreground">
                      {step.metric}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <p className="text-muted-foreground text-lg mb-4">
            Ready to see it in action?
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center text-foreground font-semibold hover:text-primary transition-colors border-b-2 border-accent hover:border-primary pb-1"
          >
            Schedule a Live Demo →
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

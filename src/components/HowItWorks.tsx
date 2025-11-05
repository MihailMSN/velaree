import { ShoppingCart, Eye, Sparkles, Bell, TrendingDown, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    icon: ShoppingCart,
    title: "Book as Normal",
    description: "Your clients book flights or hotels through your platform as usual. No changes to your booking workflow.",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-500/10"
  },
  {
    number: "02",
    icon: Eye,
    title: "Automatic Monitoring",
    description: "Our AI continuously monitors 50+ data sources 24/7 for price drops and better rates on existing bookings.",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-500/10"
  },
  {
    number: "03",
    icon: Sparkles,
    title: "AI Price Analysis",
    description: "Advanced algorithms analyze fare rules, cancellation policies, and fees to calculate real net savings opportunities.",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-500/10"
  },
  {
    number: "04",
    icon: Bell,
    title: "Instant Alerts",
    description: "When a better price is found, you receive immediate notification with detailed comparison and savings breakdown.",
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-500/10"
  },
  {
    number: "05",
    icon: TrendingDown,
    title: "Review Opportunities",
    description: "Dashboard shows all re-shopping opportunities ranked by savings amount, commission impact, and confidence level.",
    color: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-500/10"
  },
  {
    number: "06",
    icon: CheckCircle2,
    title: "Re-book & Profit",
    description: "Cancel original booking, re-book at lower price, and keep the difference. Client saves money, you earn more commission.",
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-500/10"
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
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How Re-Shopping Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From booking to savings in 6 automated steps
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-lg ${step.bgColor} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-7 h-7 ${step.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-muted-foreground mb-1">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Data Sources Section */}
        <div className="mt-16 p-8 bg-muted/50 rounded-lg border border-border">
          <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
            50+ Integrated Data Sources
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {[
              "Amadeus",
              "Sabre",
              "Travelport",
              "Mystifly",
              "NDC Direct",
              "200+ Airlines",
              "Booking.com",
              "Expedia",
              "Hotels.com",
              "Agoda",
              "Hotel Direct",
              "Consolidators"
            ].map((source, idx) => (
              <div
                key={idx}
                className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-foreground"
              >
                {source}
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground">
            All connected to Velaree's AI engine for 24/7 real-time price monitoring
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-muted-foreground text-lg mb-4">
            Ready to start saving?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-foreground font-semibold hover:text-primary transition-colors border-b-2 border-accent hover:border-primary pb-1"
          >
            Schedule a Demo →
          </a>
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
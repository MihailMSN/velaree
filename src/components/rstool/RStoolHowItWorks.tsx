import { Card } from "@/components/ui/card";
import { Upload, Cpu, Search, Sparkles, TrendingDown, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Submit PNR",
    description: "B2B clients upload PNRs manually or via API integration. System accepts PNRs from all major GDS platforms.",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-500/10"
  },
  {
    number: "02",
    icon: Cpu,
    title: "AI Retrieves & Analyzes",
    description: "AI extracts booking details, passenger info, fare rules, and identifies re-shopping scenarios automatically.",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-500/10"
  },
  {
    number: "03",
    icon: Search,
    title: "Multi-GDS Price Check",
    description: "System queries all connected suppliers simultaneously including GDS, consolidators, NDC, and private fare sources.",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-500/10"
  },
  {
    number: "04",
    icon: Sparkles,
    title: "AI Dynamic Pricing",
    description: "Advanced algorithms compare options, calculate net savings after fees, and check fare rule compatibility.",
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-500/10"
  },
  {
    number: "05",
    icon: TrendingDown,
    title: "Present Opportunities",
    description: "Results ranked by savings amount, commission impact, and risk level. Each opportunity includes detailed breakdown.",
    color: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-500/10"
  },
  {
    number: "06",
    icon: CheckCircle2,
    title: "Auto or Manual Action",
    description: "Client approves re-booking or system automatically executes based on pre-configured rules and thresholds.",
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-500/10"
  }
];

const RStoolHowItWorks = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How rsTool Works
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          From PNR submission to automated re-booking in 6 intelligent steps
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <Card key={index} className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border">
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-14 h-14 rounded-lg ${step.bgColor} flex items-center justify-center flex-shrink-0`}>
                <step.icon className={`w-7 h-7 ${step.color}`} />
              </div>
              <div className="flex-1">
                <div className="text-sm font-bold text-muted-foreground mb-1">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </Card>
        ))}
      </div>

      {/* Process Flow Diagram */}
      <div className="mt-16 p-8 bg-muted/50 rounded-lg border border-border">
        <h3 className="text-xl font-semibold mb-6 text-center">Integrated GDS & Supplier Network</h3>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {["Amadeus", "Sabre", "Travelport", "Mystifly", "NDC Direct", "Consolidators", "Private Fares", "Tour Operators"].map((supplier, index) => (
            <div 
              key={index}
              className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium hover:shadow-md transition-shadow"
            >
              {supplier}
            </div>
          ))}
        </div>
        <div className="mt-6 text-center text-sm text-muted-foreground">
          All connected to rsTool's central AI processing engine for real-time price comparison
        </div>
      </div>
    </div>
  );
};

export default RStoolHowItWorks;

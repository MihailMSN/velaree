import { CheckCircle2, Minus } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  { name: "Real-time flight search", clickToBook: true, privateFare: true, automation: false, reshop: true },
  { name: "Multi-GDS aggregation", clickToBook: true, privateFare: true, automation: false, reshop: true },
  { name: "Instant booking API", clickToBook: true, privateFare: true, automation: true, reshop: true },
  { name: "Private/negotiated fares", clickToBook: false, privateFare: true, automation: false, reshop: true },
  { name: "Consolidator network access", clickToBook: false, privateFare: true, automation: false, reshop: true },
  { name: "Auto-ticketing", clickToBook: true, privateFare: false, automation: true, reshop: true },
  { name: "Queue management", clickToBook: false, privateFare: false, automation: true, reshop: false },
  { name: "Schedule change handling", clickToBook: false, privateFare: false, automation: true, reshop: false },
  { name: "Price drop detection", clickToBook: false, privateFare: false, automation: false, reshop: true },
  { name: "Automated re-booking", clickToBook: false, privateFare: false, automation: false, reshop: true },
  { name: "Revenue recovery alerts", clickToBook: false, privateFare: false, automation: false, reshop: true },
  { name: "Webhook notifications", clickToBook: true, privateFare: true, automation: true, reshop: true },
  { name: "Analytics dashboard", clickToBook: true, privateFare: true, automation: true, reshop: true },
  { name: "24/7 support", clickToBook: true, privateFare: true, automation: true, reshop: true },
];

const solutions = [
  { key: "clickToBook", name: "Click-to-Book", color: "from-blue-500 to-cyan-500" },
  { key: "privateFare", name: "Private Fare", color: "from-emerald-500 to-green-500" },
  { key: "automation", name: "Automation", color: "from-amber-500 to-orange-500" },
  { key: "reshop", name: "Re-Shopping", color: "from-violet-500 to-purple-500" },
];

const SolutionComparisonTable = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">
            Feature Comparison
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            See what's included in each solution
          </p>
        </div>

        <Card className="overflow-hidden border-border animate-fade-in max-w-6xl mx-auto" style={{ animationDelay: "0.2s" }}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-4 font-semibold text-foreground min-w-[200px]">
                    Feature
                  </th>
                  {solutions.map((solution) => (
                    <th key={solution.key} className="p-4 text-center min-w-[120px]">
                      <div className={`inline-flex px-3 py-1.5 rounded-full bg-gradient-to-r ${solution.color} text-white text-xs font-semibold`}>
                        {solution.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr 
                    key={index} 
                    className="border-t border-border hover:bg-muted/30 transition-colors"
                  >
                    <td className="p-4 text-foreground text-sm">
                      {feature.name}
                    </td>
                    <td className="p-4 text-center">
                      {feature.clickToBook ? (
                        <CheckCircle2 className="w-5 h-5 text-blue-500 mx-auto" />
                      ) : (
                        <Minus className="w-5 h-5 text-muted-foreground/30 mx-auto" />
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {feature.privateFare ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" />
                      ) : (
                        <Minus className="w-5 h-5 text-muted-foreground/30 mx-auto" />
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {feature.automation ? (
                        <CheckCircle2 className="w-5 h-5 text-amber-500 mx-auto" />
                      ) : (
                        <Minus className="w-5 h-5 text-muted-foreground/30 mx-auto" />
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {feature.reshop ? (
                        <CheckCircle2 className="w-5 h-5 text-violet-500 mx-auto" />
                      ) : (
                        <Minus className="w-5 h-5 text-muted-foreground/30 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SolutionComparisonTable;

import { Card } from "@/components/ui/card";
import { 
  Sparkles, 
  Globe, 
  Map, 
  Zap, 
  DollarSign, 
  FileText, 
  Clock,
  Network,
  Hotel
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Dynamic Pricing",
    description: "Advanced machine learning algorithms analyze pricing patterns across thousands of routes and predict optimal re-shopping opportunities with high accuracy.",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-500/10"
  },
  {
    icon: Globe,
    title: "Multi-GDS Integration",
    description: "Simultaneous price checks across Amadeus, Sabre, Travelport, Mystifly, and other major GDS platforms. Access to NDC direct connects and airline private fares.",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-500/10"
  },
  {
    icon: Map,
    title: "Intelligent Air Mapping",
    description: "Smart routing alternatives and airline equivalents. Automatically identifies similar routes, alternative airports, and connection possibilities.",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-500/10"
  },
  {
    icon: Zap,
    title: "Automated Re-booking",
    description: "Set custom rules for automatic re-shopping. System can auto-approve and rebook tickets based on your savings thresholds and risk parameters.",
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-500/10"
  },
  {
    icon: DollarSign,
    title: "Commission Optimization",
    description: "Tracks commission differences between suppliers. Highlights opportunities where re-booking not only saves on fare but also increases your commission earnings.",
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-500/10"
  },
  {
    icon: FileText,
    title: "Fare Rules Analysis",
    description: "AI reads and interprets complex fare rules, penalties, and restrictions. Automatically calculates refund amounts, reissue fees, and net savings.",
    color: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-500/10"
  },
  {
    icon: Clock,
    title: "24/7 Real-time Monitoring",
    description: "Continuous automated monitoring of all PNRs in your system. Instant alerts when price drops or re-shopping opportunities are detected.",
    color: "text-rose-600 dark:text-rose-400",
    bgColor: "bg-rose-500/10"
  },
  {
    icon: Network,
    title: "Global Supplier Network",
    description: "Access to worldwide consolidators, tour operators, and private fare suppliers. Tap into hidden inventory and exclusive rates not available in public GDS.",
    color: "text-cyan-600 dark:text-cyan-400",
    bgColor: "bg-cyan-500/10"
  },
  {
    icon: Hotel,
    title: "Hotel Re-Shopping",
    description: "Apply the same AI-powered re-shopping intelligence to hotel bookings. Monitor rates 24/7 and automatically rebook when prices drop. Coming Q1-Q2 2027.",
    color: "text-teal-600 dark:text-teal-400",
    bgColor: "bg-teal-500/10",
    badge: "Coming Q1-Q2 2027"
  }
];

const RStoolFeatures = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <Card 
          key={index} 
          className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border relative"
        >
          {feature.badge && (
            <div className="absolute top-3 right-3">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-700 dark:text-teal-400 border border-dashed border-teal-500/30">
                {feature.badge}
              </span>
            </div>
          )}
          <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}>
            <feature.icon className={`w-6 h-6 ${feature.color}`} />
          </div>
          <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {feature.description}
          </p>
        </Card>
      ))}
    </div>
  );
};

export default RStoolFeatures;

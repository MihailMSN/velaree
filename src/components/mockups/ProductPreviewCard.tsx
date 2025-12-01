import { ReactNode } from "react";
import {
  BarChart3,
  Plane,
  RefreshCw,
  Hotel,
  TrendingUp,
  Zap,
  Globe,
  DollarSign,
  Clock,
  CheckCircle,
  Activity,
  Layers,
} from "lucide-react";

interface ProductPreviewCardProps {
  product: "asuite" | "rstool" | "unify" | "hrstool";
}

const ProductPreviewCard = ({ product }: ProductPreviewCardProps) => {
  const configs: Record<
    string,
    {
      title: string;
      subtitle: string;
      gradient: string;
      icon: ReactNode;
      stats: { label: string; value: string; icon: ReactNode }[];
      preview: ReactNode;
    }
  > = {
    asuite: {
      title: "aSuite",
      subtitle: "Complete Travel CRM",
      gradient: "from-emerald-500 to-teal-600",
      icon: <BarChart3 className="w-5 h-5" />,
      stats: [
        { label: "Bookings", value: "12,847", icon: <Plane className="w-3 h-3" /> },
        { label: "Revenue", value: "$2.4M", icon: <DollarSign className="w-3 h-3" /> },
        { label: "Clients", value: "1,284", icon: <Globe className="w-3 h-3" /> },
      ],
      preview: (
        <div className="flex gap-2">
          {[65, 45, 80, 55, 70, 90, 60].map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-emerald-400/80 rounded-t"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      ),
    },
    rstool: {
      title: "aRStool",
      subtitle: "Air Re-shopping Engine",
      gradient: "from-blue-500 to-indigo-600",
      icon: <RefreshCw className="w-5 h-5" />,
      stats: [
        { label: "Savings", value: "$847K", icon: <TrendingUp className="w-3 h-3" /> },
        { label: "PNRs", value: "24,391", icon: <Activity className="w-3 h-3" /> },
        { label: "Success", value: "94.2%", icon: <CheckCircle className="w-3 h-3" /> },
      ],
      preview: (
        <div className="space-y-2">
          {[
            { route: "JFK → LHR", saving: "-$124", status: "found" },
            { route: "LAX → CDG", saving: "-$89", status: "found" },
            { route: "ORD → FRA", saving: "—", status: "pending" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between text-xs bg-white/10 rounded px-2 py-1">
              <span className="font-medium">{item.route}</span>
              <span className={item.status === "found" ? "text-green-300" : "text-white/50"}>
                {item.saving}
              </span>
            </div>
          ))}
        </div>
      ),
    },
    unify: {
      title: "Unify",
      subtitle: "Multi-GDS Platform",
      gradient: "from-violet-500 to-purple-600",
      icon: <Layers className="w-5 h-5" />,
      stats: [
        { label: "GDS", value: "4+", icon: <Globe className="w-3 h-3" /> },
        { label: "Response", value: "<500ms", icon: <Clock className="w-3 h-3" /> },
        { label: "Airlines", value: "200+", icon: <Plane className="w-3 h-3" /> },
      ],
      preview: (
        <div className="grid grid-cols-2 gap-2">
          {["Amadeus", "Sabre", "Travelport", "NDC"].map((gds, i) => (
            <div
              key={i}
              className="bg-white/10 rounded px-2 py-1.5 text-xs text-center font-medium"
            >
              {gds}
            </div>
          ))}
        </div>
      ),
    },
    hrstool: {
      title: "hRStool",
      subtitle: "Hotel Re-shopping",
      gradient: "from-amber-500 to-orange-600",
      icon: <Hotel className="w-5 h-5" />,
      stats: [
        { label: "Status", value: "Q1 2026", icon: <Clock className="w-3 h-3" /> },
        { label: "Chains", value: "50+", icon: <Hotel className="w-3 h-3" /> },
        { label: "Savings", value: "15-25%", icon: <TrendingUp className="w-3 h-3" /> },
      ],
      preview: (
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-semibold">
              Coming Soon
            </div>
          </div>
          <div className="opacity-30 space-y-2">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="h-6 bg-white/20 rounded" />
            ))}
          </div>
        </div>
      ),
    },
  };

  const config = configs[product];

  return (
    <div className={`w-full h-full bg-gradient-to-br ${config.gradient} text-white overflow-hidden`}>
      {/* Header */}
      <div className="p-4 pb-2">
        <div className="flex items-center gap-2 mb-1">
          <div className="p-1.5 bg-white/20 rounded-lg">{config.icon}</div>
          <div>
            <h3 className="font-bold text-lg leading-tight">{config.title}</h3>
            <p className="text-xs text-white/70">{config.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 pb-3">
        <div className="flex gap-3">
          {config.stats.map((stat, i) => (
            <div key={i} className="flex-1 bg-white/10 rounded-lg p-2">
              <div className="flex items-center gap-1 text-white/60 mb-0.5">
                {stat.icon}
                <span className="text-[10px] uppercase tracking-wide">{stat.label}</span>
              </div>
              <div className="text-sm font-bold">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview Area */}
      <div className="px-4 pb-4 h-24">{config.preview}</div>

      {/* Footer */}
      <div className="px-4 py-2 bg-black/10 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Zap className="w-3 h-3 text-yellow-300" />
          <span className="text-[10px] text-white/70">Powered by Velaree</span>
        </div>
        <div className="text-[10px] text-white/50">velaree.com/{product}</div>
      </div>
    </div>
  );
};

export default ProductPreviewCard;

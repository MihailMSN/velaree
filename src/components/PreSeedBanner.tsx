import { useState } from "react";
import { Link } from "react-router-dom";
import { Rocket, X, ArrowRight } from "lucide-react";

const PreSeedBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 text-white relative" style={{ zIndex: 60 }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 py-2.5 text-sm">
          <div className="hidden sm:flex items-center gap-2">
            <Rocket className="w-4 h-4" />
            <span className="font-semibold">Pre-Seed Funding Round Open</span>
          </div>
          <span className="sm:hidden font-semibold flex items-center gap-2">
            <Rocket className="w-4 h-4" />
            Pre-Seed Round Open
          </span>
          <span className="hidden md:inline text-white/90">—</span>
          <span className="hidden md:inline text-white/90">Raising €400K to bring Velaree to market</span>
          <Link 
            to="/investors" 
            className="ml-2 inline-flex items-center gap-1 px-3 py-1 bg-white/20 hover:bg-white/30 rounded-full font-medium transition-colors text-xs sm:text-sm"
          >
            Learn More
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded transition-colors"
        aria-label="Close banner"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default PreSeedBanner;

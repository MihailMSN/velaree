import { Link } from "react-router-dom";
import { Rocket, ArrowRight } from "lucide-react";

const PreSeedBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 text-white" style={{ zIndex: 60 }}>
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
    </div>
  );
};

export default PreSeedBanner;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    name: "aSuite",
    tagline: "CRM & CMS Platform",
  },
  {
    name: "aRStool",
    tagline: "AI Re-Shopping Engine",
  },
  {
    name: "UnifyTool",
    tagline: "Unified API Platform",
  },
  {
    name: "hRStool",
    tagline: "Hotel Re-Shopping",
  },
];

const MiniCardShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center gap-6">
      {/* Single card with fade transition */}
      <div className="relative w-[320px] h-[200px] md:w-[360px] md:h-[220px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 rounded-2xl bg-card border border-border/50 shadow-xl overflow-hidden"
          >
            <div className="p-6 h-full flex flex-col">
              {/* Browser dots */}
              <div className="flex gap-1.5 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
              </div>
              
              {/* Product info */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 via-accent/30 to-primary/20 border border-accent/30 flex items-center justify-center text-primary text-lg font-bold">
                  {products[activeIndex].name.charAt(0)}
                </div>
                <div>
                  <div className="text-lg font-semibold text-foreground">{products[activeIndex].name}</div>
                  <div className="text-sm text-muted-foreground">{products[activeIndex].tagline}</div>
                </div>
              </div>

              {/* Mini stats preview */}
              <div className="flex-1 grid grid-cols-3 gap-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-muted/30 rounded-lg p-3 flex flex-col items-center justify-center">
                    <div className="w-10 h-2.5 bg-muted/60 rounded mb-2" />
                    <div className="w-6 h-2 bg-muted/40 rounded" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Indicators - positioned outside the card */}
      <div className="flex gap-2">
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === activeIndex ? "bg-primary w-6" : "bg-muted-foreground/30 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MiniCardShowcase;

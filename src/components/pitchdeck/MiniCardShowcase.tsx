import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    name: "aSuite",
    tagline: "CRM & CMS Platform",
    color: "bg-emerald-500",
    borderColor: "border-emerald-200",
  },
  {
    name: "aRStool",
    tagline: "AI Re-Shopping Engine",
    color: "bg-blue-500",
    borderColor: "border-blue-200",
  },
  {
    name: "UnifyTool",
    tagline: "Unified API Platform",
    color: "bg-violet-500",
    borderColor: "border-violet-200",
  },
  {
    name: "hRStool",
    tagline: "Hotel Re-Shopping",
    color: "bg-amber-500",
    borderColor: "border-amber-200",
  },
];

const MiniCardShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-[280px] h-[180px]">
        {products.map((product, index) => {
          const offset = (index - activeIndex + products.length) % products.length;
          const isActive = offset === 0;
          const zIndex = products.length - offset;
          const translateY = offset * 12;
          const translateX = offset * 8;
          const scale = 1 - offset * 0.05;
          const opacity = 1 - offset * 0.2;

          return (
            <motion.div
              key={product.name}
              initial={false}
              animate={{
                x: translateX,
                y: translateY,
                scale,
                opacity,
                zIndex,
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
              }}
              className={`absolute inset-0 rounded-xl bg-white border-2 ${product.borderColor} shadow-lg overflow-hidden`}
            >
              <div className="p-4 h-full flex flex-col">
                {/* Browser dots */}
                <div className="flex gap-1 mb-3">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>
                
                {/* Product info */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-8 h-8 rounded-lg ${product.color} flex items-center justify-center text-white text-xs font-bold`}>
                    {product.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{product.name}</div>
                    <div className="text-xs text-muted-foreground">{product.tagline}</div>
                  </div>
                </div>

                {/* Mini stats preview */}
                <div className="flex-1 grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-muted/50 rounded-md p-2 flex flex-col items-center justify-center">
                      <div className="w-6 h-2 bg-muted rounded mb-1"></div>
                      <div className="w-4 h-1 bg-muted/60 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-1.5">
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              i === activeIndex ? "bg-primary w-4" : "bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MiniCardShowcase;

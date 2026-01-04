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
      <div className="relative w-[340px] h-[240px] md:w-[380px] md:h-[280px]">
        {products.map((product, index) => {
          const offset = (index - activeIndex + products.length) % products.length;
          const isActive = offset === 0;
          const zIndex = products.length - offset;
          const translateY = offset * 16;
          const translateX = offset * 12;
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
              className={`absolute inset-0 rounded-2xl bg-white dark:bg-card border-2 ${product.borderColor} shadow-xl overflow-hidden`}
            >
              <div className="p-6 h-full flex flex-col">
                {/* Browser dots */}
                <div className="flex gap-1.5 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                
                {/* Product info */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${product.color} flex items-center justify-center text-white text-lg font-bold shadow-lg`}>
                    {product.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-foreground">{product.name}</div>
                    <div className="text-sm text-muted-foreground">{product.tagline}</div>
                  </div>
                </div>

                {/* Mini stats preview */}
                <div className="flex-1 grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-muted/50 rounded-lg p-3 flex flex-col items-center justify-center">
                      <div className="w-10 h-3 bg-muted rounded mb-2"></div>
                      <div className="w-6 h-2 bg-muted/60 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
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

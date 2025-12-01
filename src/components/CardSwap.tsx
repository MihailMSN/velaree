import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TabConfig {
  id: string;
  label: string;
}

interface CardSwapProps {
  children: React.ReactNode[];
  tabs: TabConfig[];
  autoSwapInterval?: number;
  cardWidth?: number;
  cardHeight?: number;
}

const CardSwap = ({
  children,
  tabs,
  autoSwapInterval = 5000,
  cardWidth = 420,
  cardHeight = 280,
}: CardSwapProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextTab = () => {
    setActiveIndex((prev) => (prev + 1) % children.length);
  };

  useEffect(() => {
    if (!isPaused && autoSwapInterval > 0) {
      intervalRef.current = setInterval(nextTab, autoSwapInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, autoSwapInterval, children.length]);

  return (
    <div
      className="relative"
      style={{ width: cardWidth }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Tab Headers */}
      <div className="flex relative" style={{ height: 36 }}>
        {tabs.map((tab, index) => {
          const isActive = index === activeIndex;
          return (
            <motion.button
              key={tab.id}
              onClick={() => setActiveIndex(index)}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 border-t border-l border-r ${
                isActive
                  ? "bg-card text-foreground z-10 border-border"
                  : "bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted border-transparent"
              }`}
              style={{
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                marginRight: -1,
                zIndex: isActive ? 10 : tabs.length - index,
              }}
              whileHover={{ y: isActive ? 0 : -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {tab.label}
              {/* Active tab connector to hide bottom border */}
              {isActive && (
                <div className="absolute -bottom-[1px] left-0 right-0 h-[1px] bg-card" />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Content Area */}
      <div
        className="relative overflow-hidden rounded-b-lg rounded-tr-lg border border-border bg-card"
        style={{
          height: cardHeight,
          boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.15)",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="absolute inset-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            {children[activeIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Indicator - Subtle dots */}
      <div className="flex gap-1.5 justify-center mt-3">
        {tabs.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === activeIndex 
                ? "w-4 bg-foreground/60" 
                : "w-1.5 bg-foreground/20 hover:bg-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSwap;

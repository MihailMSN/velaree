import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TabConfig {
  id: string;
  label: string;
  color: string;
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
              className={`relative px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "text-white z-10"
                  : "text-white/60 hover:text-white/80"
              }`}
              style={{
                background: isActive ? tab.color : "rgba(255,255,255,0.1)",
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                marginRight: -8,
                zIndex: isActive ? 10 : tabs.length - index,
              }}
              whileHover={{ y: isActive ? 0 : -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {tab.label}
              {/* Active tab connector */}
              {isActive && (
                <motion.div
                  layoutId="activeTabConnector"
                  className="absolute -bottom-[1px] left-0 right-0 h-[2px]"
                  style={{ background: tab.color }}
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Content Area */}
      <div
        className="relative overflow-hidden rounded-b-xl rounded-tr-xl shadow-2xl"
        style={{
          height: cardHeight,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 40px rgba(0, 0, 0, 0.15)",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="absolute inset-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
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

      {/* Progress Indicator */}
      <div className="flex gap-1 justify-center mt-3">
        {tabs.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className="relative h-1 rounded-full overflow-hidden transition-all duration-300"
            style={{
              width: index === activeIndex ? 24 : 8,
              background: index === activeIndex ? tabs[activeIndex].color : "rgba(255,255,255,0.3)",
            }}
          >
            {index === activeIndex && !isPaused && (
              <motion.div
                className="absolute inset-0 bg-white/50"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: autoSwapInterval / 1000, ease: "linear" }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CardSwap;

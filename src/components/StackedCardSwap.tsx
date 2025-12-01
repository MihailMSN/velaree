import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface StackedCardSwapProps {
  children: ReactNode[];
  labels: string[];
  autoSwapInterval?: number;
  cardWidth?: number;
  cardHeight?: number;
}

const StackedCardSwap = ({
  children,
  labels,
  autoSwapInterval = 5000,
  cardWidth = 520,
  cardHeight = 380,
}: StackedCardSwapProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || autoSwapInterval <= 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % children.length);
    }, autoSwapInterval);

    return () => clearInterval(interval);
  }, [isPaused, autoSwapInterval, children.length]);

  const getCardStyle = (index: number) => {
    const position = (index - activeIndex + children.length) % children.length;
    const offset = position * 44;
    const scale = 1 - position * 0.03;
    const zIndex = children.length - position;

    return {
      y: -offset,
      scale,
      zIndex,
      opacity: position > 3 ? 0 : 1,
    };
  };

  return (
    <div
      className="relative"
      style={{ width: cardWidth, height: cardHeight + 180 }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Stacked Cards */}
      <div className="relative" style={{ width: cardWidth, height: cardHeight }}>
        {children.map((child, index) => {
          const position = (index - activeIndex + children.length) % children.length;
          const isActive = position === 0;
          const style = getCardStyle(index);

          return (
            <motion.div
              key={index}
              className="absolute top-0 left-0 cursor-pointer"
              style={{
                width: cardWidth,
                zIndex: style.zIndex,
              }}
              initial={false}
              animate={{
                y: style.y,
                scale: style.scale,
                opacity: style.opacity,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              onClick={() => !isActive && setActiveIndex(index)}
            >
              {/* Tab Header - Always visible */}
              <div
                className={`px-5 py-2.5 rounded-t-lg font-medium text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-card text-foreground border-t border-l border-r border-border"
                    : "bg-muted/80 text-muted-foreground border border-border/50 hover:bg-muted"
                }`}
                style={{
                  width: "fit-content",
                  marginBottom: -1,
                }}
              >
                {labels[index]}
              </div>

              {/* Card Content - Only fully visible for active card */}
              <motion.div
                className="rounded-b-xl rounded-tr-xl border border-border bg-card overflow-hidden"
                style={{
                  height: cardHeight,
                  boxShadow: isActive
                    ? "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                    : "0 10px 30px -10px rgba(0, 0, 0, 0.08)",
                }}
                animate={{
                  opacity: isActive ? 1 : 0.6,
                }}
              >
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="h-full"
                    >
                      {child}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default StackedCardSwap;

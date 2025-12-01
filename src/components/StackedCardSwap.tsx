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
    
    // Subtle rotation for depth - front card is flat, background cards tilt slightly
    const rotateX = position * 2; // Tilt back slightly
    const rotateY = position * -1.5; // Rotate slightly left
    const rotateZ = position * 0.5; // Slight twist

    return {
      y: -offset,
      x: position * 8, // Slight horizontal offset
      scale,
      zIndex,
      opacity: position > 3 ? 0 : 1,
      rotateX,
      rotateY,
      rotateZ,
    };
  };

  return (
    <div
      className="relative"
      style={{ 
        width: cardWidth, 
        height: cardHeight + 180,
        perspective: 1200, // Enable 3D perspective
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Stacked Cards */}
      <div 
        className="relative" 
        style={{ 
          width: cardWidth, 
          height: cardHeight,
          transformStyle: "preserve-3d",
        }}
      >
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
                transformStyle: "preserve-3d",
              }}
              initial={false}
              animate={{
                y: style.y,
                x: style.x,
                scale: style.scale,
                opacity: style.opacity,
                rotateX: style.rotateX,
                rotateY: style.rotateY,
                rotateZ: style.rotateZ,
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

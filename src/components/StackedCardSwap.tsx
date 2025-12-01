import { useState, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";

interface StackedCardSwapProps {
  children: ReactNode[];
  labels?: string[];
  autoSwapInterval?: number;
  cardWidth?: number;
  cardHeight?: number;
}

const StackedCardSwap = ({
  children,
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
    const yOffset = position * 50;
    const xOffset = position * 25;
    const scale = 1 - position * 0.05;
    const zIndex = children.length - position;
    const opacity = position === 0 ? 1 : Math.max(0.5, 1 - position * 0.15);

    return {
      y: -yOffset,
      x: -xOffset,
      scale,
      zIndex,
      opacity,
    };
  };

  return (
    <div
      className="relative"
      style={{ width: cardWidth, height: cardHeight + 80 }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative" style={{ width: cardWidth, height: cardHeight }}>
        {children.map((child, index) => {
          const position = (index - activeIndex + children.length) % children.length;
          const isActive = position === 0;
          const style = getCardStyle(index);

          return (
            <motion.div
              key={index}
              className="absolute top-0 left-0 cursor-pointer rounded-xl border border-border bg-card overflow-hidden"
              style={{
                width: cardWidth,
                height: cardHeight,
                zIndex: style.zIndex,
                boxShadow: isActive
                  ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  : "0 10px 30px -10px rgba(0, 0, 0, 0.1)",
              }}
              initial={false}
              animate={{
                y: style.y,
                x: style.x,
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
              {child}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default StackedCardSwap;

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CardSwapProps {
  children: React.ReactNode[];
  autoSwapInterval?: number;
  cardWidth?: number;
  cardHeight?: number;
}

const CardSwap = ({
  children,
  autoSwapInterval = 5000,
  cardWidth = 420,
  cardHeight = 280,
}: CardSwapProps) => {
  const [cards, setCards] = useState(
    children.map((child, index) => ({ id: index, content: child }))
  );
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const swapToBack = () => {
    setCards((prev) => {
      const newCards = [...prev];
      const [first, ...rest] = newCards;
      return [...rest, first];
    });
  };

  useEffect(() => {
    if (!isPaused && autoSwapInterval > 0) {
      intervalRef.current = setInterval(swapToBack, autoSwapInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, autoSwapInterval]);

  return (
    <div
      className="relative"
      style={{
        width: cardWidth,
        height: cardHeight + 40,
        perspective: "1000px",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="popLayout">
        {cards.map((card, index) => {
          const isTop = index === 0;
          const stackOffset = index * 8;
          const rotation = index * 2 - 2;
          const scale = 1 - index * 0.03;
          const opacity = 1 - index * 0.15;

          return (
            <motion.div
              key={card.id}
              className="absolute cursor-pointer"
              style={{
                width: cardWidth,
                height: cardHeight,
                zIndex: cards.length - index,
                transformStyle: "preserve-3d",
              }}
              initial={{
                y: -50,
                x: 0,
                rotate: 0,
                scale: 1,
                opacity: 0,
              }}
              animate={{
                y: stackOffset,
                x: stackOffset / 2,
                rotate: rotation,
                scale: scale,
                opacity: opacity,
              }}
              exit={{
                y: cardHeight + 50,
                x: 100,
                rotate: 15,
                scale: 0.9,
                opacity: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
                mass: 1,
              }}
              onClick={() => isTop && swapToBack()}
            >
              <div
                className="w-full h-full rounded-xl overflow-hidden shadow-2xl"
                style={{
                  boxShadow: isTop
                    ? "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 30px rgba(0, 0, 0, 0.1)"
                    : "0 10px 30px -10px rgba(0, 0, 0, 0.2)",
                }}
              >
                {card.content}
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {cards.map((card, index) => (
          <button
            key={card.id}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === 0
                ? "bg-primary scale-125"
                : "bg-primary/30 hover:bg-primary/50"
            }`}
            onClick={() => {
              // Move clicked card to front
              setCards((prev) => {
                const cardIndex = prev.findIndex((c) => c.id === card.id);
                if (cardIndex === 0) return prev;
                const newCards = [...prev];
                const [removed] = newCards.splice(cardIndex, 1);
                return [removed, ...newCards];
              });
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSwap;

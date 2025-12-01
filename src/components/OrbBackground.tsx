import { motion } from "framer-motion";

interface OrbBackgroundProps {
  className?: string;
}

const OrbBackground = ({ className = "" }: OrbBackgroundProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--muted)) 0%, hsl(var(--border) / 0.5) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default OrbBackground;

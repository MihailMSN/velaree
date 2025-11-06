interface SectionDividerProps {
  height?: string;
  contained?: boolean;
  className?: string;
}

const SectionDivider = ({ 
  height = "h-1", 
  contained = false,
  className = ""
}: SectionDividerProps) => {
  return (
    <div className={`w-full ${contained ? 'container mx-auto px-6' : ''}`}>
      <div 
        className={`
          ${height} 
          w-full 
          rounded-full 
          ${className}
        `}
        style={{
          background: `linear-gradient(
            90deg,
            hsl(var(--feature-amber)) 0%,
            hsl(var(--feature-indigo)) 25%,
            hsl(var(--feature-purple)) 50%,
            hsl(var(--feature-blue)) 75%,
            hsl(var(--feature-emerald)) 100%
          )`
        }}
      />
    </div>
  );
};

export default SectionDivider;

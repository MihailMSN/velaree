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
            #1a1a1a 0%,
            #4a4a4a 15%,
            #8a8a8a 30%,
            #c0c0c0 50%,
            #8a8a8a 70%,
            #4a4a4a 85%,
            #1a1a1a 100%
          )`
        }}
      />
    </div>
  );
};

export default SectionDivider;

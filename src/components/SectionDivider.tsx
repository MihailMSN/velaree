interface SectionDividerProps {
  height?: string;
  contained?: boolean;
  className?: string;
}
const SectionDivider = ({
  height = "h-2",
  contained = false,
  className = ""
}: SectionDividerProps) => {
  return <div className={`w-full ${contained ? 'container mx-auto px-6' : ''}`}>
      
    </div>;
};
export default SectionDivider;
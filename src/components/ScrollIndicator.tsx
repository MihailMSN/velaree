import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToContent}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce-arrow cursor-pointer group"
      aria-label="Scroll to content"
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-primary-foreground/60 text-sm font-light group-hover:text-primary-foreground/80 transition-colors">
          Scroll to explore
        </span>
        <ChevronDown className="w-6 h-6 text-primary-foreground/60 group-hover:text-primary-foreground/80 transition-colors" />
      </div>
    </button>
  );
};

export default ScrollIndicator;

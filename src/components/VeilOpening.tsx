import { useEffect, useState } from "react";
import { Plane } from "lucide-react";

const VeilOpening = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Remove component from DOM after animation completes
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Left Panel */}
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[hsl(35,40%,70%)] via-[hsl(35,35%,65%)] to-[hsl(35,30%,60%)] animate-veil-left overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCAzLjk5LTRIM0MxLjc5IDMwIDAgMzEuNzkgMCAzNHYyYzAgMi4yMSAxLjc5IDQgNCA0aDMyYzIuMjEgMCA0LTEuNzkgNC00di0yem0wLTIwYzAtMi4yMSAxLjc5LTQgMy45OS00SDNDMS43OSAxMCAwIDExLjc5IDAgMTR2MmMwIDIuMjEgMS43OSA0IDQgNGgzMmMyLjIxIDAgNC0xLjc5IDQtNHYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        
        {/* Subtle travel icons */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <Plane className="w-32 h-32 text-primary transform -rotate-45" />
        </div>
      </div>

      {/* Right Panel */}
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[hsl(35,40%,70%)] via-[hsl(35,35%,65%)] to-[hsl(35,30%,60%)] animate-veil-right overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCAzLjk5LTRIM0MxLjc5IDMwIDAgMzEuNzkgMCAzNHYyYzAgMi4yMSAxLjc5IDQgNCA0aDMyYzIuMjEgMCA0LTEuNzkgNC00di0yem0wLTIwYzAtMi4yMSAxLjc5LTQgMy45OS00SDNDMS43OSAxMCAwIDExLjc5IDAgMTR2MmMwIDIuMjEgMS43OSA0IDQgNGgzMmMyLjIxIDAgNC0xLjc5IDQtNHYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        
        {/* Subtle travel icons */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <Plane className="w-32 h-32 text-primary transform rotate-45" />
        </div>
      </div>

      {/* Center Seam with subtle shadow */}
      <div className="absolute inset-y-0 left-1/2 w-1 bg-gradient-to-b from-transparent via-primary/20 to-transparent transform -translate-x-1/2"></div>
    </div>
  );
};

export default VeilOpening;

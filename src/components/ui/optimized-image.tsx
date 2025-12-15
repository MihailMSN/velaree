import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  onLoad?: () => void;
}

const OptimizedImage = ({
  src,
  alt,
  title,
  className,
  width,
  height,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
  onLoad,
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "50px",
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  // Generate srcset for responsive images if width is provided
  const generateSrcSet = () => {
    if (!width || src.startsWith("data:")) return undefined;
    
    // For external URLs or non-resizable images, skip srcset
    if (src.startsWith("http") || src.includes("lovable-uploads")) {
      return undefined;
    }
    
    return undefined; // Static assets don't support srcset
  };

  return (
    <img
      ref={imgRef}
      src={isInView ? src : undefined}
      srcSet={isInView ? generateSrcSet() : undefined}
      sizes={sizes}
      alt={alt}
      title={title}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      onLoad={handleLoad}
      className={cn(
        "transition-opacity duration-300",
        isLoaded ? "opacity-100" : "opacity-0",
        className
      )}
    />
  );
};

export default OptimizedImage;

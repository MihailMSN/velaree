import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Use instant scroll on first render (initial page load)
    // Use smooth scroll for subsequent navigations (mobile-friendly UX)
    if (isFirstRender.current) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      });
      isFirstRender.current = false;
    } else {
      // Check if user prefers reduced motion
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: prefersReducedMotion ? "instant" : "smooth"
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;

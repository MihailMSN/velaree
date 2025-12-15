import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";

interface FloatingShareBarProps {
  title: string;
  url: string;
  excerpt?: string;
}

const FloatingShareBar = ({ title, url, excerpt = "" }: FloatingShareBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();
  
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px and hide near bottom
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const nearBottom = scrollY + windowHeight > docHeight - 300;
      
      setIsVisible(scrollY > 400 && !nearBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shareLinks = [
    {
      name: "Twitter",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      getUrl: () => `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      hoverBg: "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      getUrl: () => `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      hoverBg: "hover:bg-[#0A66C2] hover:text-white",
    },
    {
      name: "Facebook",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      getUrl: () => `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      hoverBg: "hover:bg-[#1877F2] hover:text-white",
    },
  ];

  const handleShare = (platform: string, shareUrl: string) => {
    window.open(shareUrl, `share-${platform}`, "width=600,height=400,menubar=no,toolbar=no");
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast({
        title: "Link copied",
        description: "Article link has been copied to clipboard.",
      });
    } catch {
      toast({
        title: "Copy failed",
        description: "Please copy the URL manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3"
        >
          <TooltipProvider>
            <div className="bg-card/90 backdrop-blur-sm border border-border/60 rounded-full p-2 shadow-lg flex flex-col gap-2">
              {shareLinks.map((link) => (
                <Tooltip key={link.name} delayDuration={0}>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => handleShare(link.name, link.getUrl())}
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground transition-all duration-200 ${link.hoverBg}`}
                    >
                      {link.icon}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Share on {link.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
              
              <div className="w-6 h-px bg-border mx-auto" />
              
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <button
                    onClick={handleCopyLink}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:bg-muted transition-all duration-200"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Copy link</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingShareBar;

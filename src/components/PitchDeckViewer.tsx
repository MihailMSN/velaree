import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Download, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface Slide {
  id: number;
  title: string;
  content: React.ReactNode;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Cover",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center p-8">
        <div className="flex items-baseline mb-6">
          <span className="text-8xl md:text-9xl font-bold text-primary">V</span>
          <span className="text-5xl md:text-6xl font-bold text-foreground">elaree</span>
        </div>
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4">
          Next-Generation Travel Technology
        </h2>
        <p className="text-lg text-muted-foreground/70">
          Powering OTAs, TMCs, and Airlines Worldwide
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "The Challenge",
    content: (
      <div className="p-8 h-full">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">The Challenge</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {[
            { title: "Manual Processes", desc: "70% of travel operations still rely on manual, error-prone workflows" },
            { title: "Fragmented Systems", desc: "Multiple GDS connections, each requiring separate integration" },
            { title: "Limited Inventory", desc: "Traditional systems access only a fraction of available inventory" },
            { title: "Slow Response Times", desc: "Legacy systems struggle with modern performance expectations" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-accent mt-2 shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Our Solution",
    content: (
      <div className="p-8 h-full">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Our Solution</h2>
        <p className="text-center text-muted-foreground mb-8">One unified platform for the entire travel technology stack</p>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: "⚡", title: "Unified API", desc: "Single integration to access 200+ airlines and all major GDS systems" },
            { icon: "🤖", title: "AI Automation", desc: "Intelligent workflows that handle ticketing, changes, and notifications" },
            { icon: "📊", title: "Real-time Analytics", desc: "Complete visibility into operations with actionable insights" },
          ].map((item, i) => (
            <div key={i} className="bg-card/50 border border-border/50 rounded-xl p-6 text-center">
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Platform Performance",
    content: (
      <div className="p-8 h-full">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Platform Performance</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { value: "70%", label: "Task Automation", sub: "20 hours saved/week" },
            { value: "1M+", label: "Bookings/Month", sub: "99.9% uptime SLA" },
            { value: "10x", label: "More Inventory", sub: "<500ms response" },
            { value: "200+", label: "Airlines", sub: "All major GDS" },
          ].map((item, i) => (
            <div key={i} className="bg-primary/10 border border-primary/20 rounded-xl p-6 text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{item.value}</div>
              <div className="text-lg font-semibold text-foreground">{item.label}</div>
              <div className="text-sm text-muted-foreground">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Product Suite",
    content: (
      <div className="p-8 h-full">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Product Suite</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { name: "aSuite", tagline: "CRM & CMS Platform", features: ["Customer management", "Content control", "White-label ready", "Analytics dashboard"] },
            { name: "aRStool", tagline: "AI Re-Shopping Engine", features: ["24/7 PNR monitoring", "Auto fare optimization", "15-20% savings", "Multi-GDS search"] },
            { name: "UnifyTool", tagline: "Unified Platform", features: ["Click-to-book", "Private fares", "Automation suite", "Complete solution"] },
          ].map((product, i) => (
            <div key={i} className="bg-accent/10 border border-accent/20 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-accent mb-1">{product.name}</h3>
              <p className="text-muted-foreground mb-4">{product.tagline}</p>
              <ul className="space-y-2">
                {product.features.map((f, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: "Enterprise Solutions",
    content: (
      <div className="p-8 h-full">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Enterprise Solutions</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { value: "60s", title: "Click-to-Book", desc: "Complete booking in under a minute with streamlined workflows" },
            { value: "30%", title: "Fare Savings", desc: "Access private fares and optimize pricing automatically" },
            { value: "70%", title: "Automation", desc: "Reduce manual operations with intelligent automation" },
          ].map((item, i) => (
            <div key={i} className="bg-card/50 border border-border/50 rounded-xl p-6 text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-4">{item.value}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: "Customer Success",
    content: (
      <div className="p-8 h-full">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Customer Success</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { type: "European OTA", challenge: "Manual booking errors", result: "84% Error Reduction", metric: "$890K savings" },
            { type: "Corporate TMC", challenge: "Missed savings opportunities", result: "$2.4M Revenue", metric: "First year" },
            { type: "Asia-Pacific Consolidator", challenge: "Slow ticketing", result: "<2 Min Ticketing", metric: "92% support reduction" },
          ].map((study, i) => (
            <div key={i} className="bg-accent/10 border border-accent/20 rounded-xl p-6 text-center">
              <div className="text-sm font-semibold text-accent mb-2">{study.type}</div>
              <p className="text-xs text-muted-foreground mb-4">{study.challenge}</p>
              <div className="text-2xl font-bold text-foreground mb-1">{study.result}</div>
              <div className="text-sm text-primary">{study.metric}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 8,
    title: "Partners",
    content: (
      <div className="p-8 h-full">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Trusted Integrations</h2>
        <p className="text-center text-muted-foreground mb-8">Connected to the world's leading travel technology providers</p>
        <div className="grid grid-cols-4 gap-4 max-w-3xl mx-auto">
          {["Amadeus", "Sabre", "Travelport", "IATA", "Google Flights", "Mystifly", "BCD Travel", "Fora"].map((partner, i) => (
            <div key={i} className="bg-card/30 border border-border/30 rounded-lg p-4 text-center">
              <span className="text-sm font-medium text-foreground">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 9,
    title: "Contact",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center p-8">
        <div className="flex items-baseline mb-6">
          <span className="text-7xl md:text-8xl font-bold text-primary">V</span>
          <span className="text-4xl md:text-5xl font-bold text-foreground">elaree</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Ready to Transform Your Travel Business?
        </h2>
        <p className="text-xl text-primary mb-2">velaree.com</p>
        <p className="text-muted-foreground">Schedule a Demo Today</p>
      </div>
    ),
  },
];

interface PitchDeckViewerProps {
  isOpen: boolean;
  onClose: () => void;
  onDownloadRequest: () => void;
}

const PitchDeckViewer = ({ isOpen, onClose, onDownloadRequest }: PitchDeckViewerProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === " ") {
      nextSlide();
    } else if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent 
        className={cn(
          "p-0 gap-0 border-border/50 bg-background overflow-hidden",
          isFullscreen ? "max-w-[100vw] w-[100vw] h-[100vh] max-h-[100vh] rounded-none" : "max-w-5xl w-[90vw] h-[80vh]"
        )}
        onKeyDown={handleKeyDown}
      >
        <DialogTitle className="sr-only">Velaree Pitch Deck</DialogTitle>
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-card/50">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">V</span>
            <span className="text-sm font-medium text-foreground">Pitch Deck</span>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={onDownloadRequest}
              className="text-muted-foreground hover:text-foreground"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="text-muted-foreground hover:text-foreground"
            >
              <Maximize2 className="w-4 h-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Slide Content */}
        <div className="flex-1 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              {slides[currentSlide].content}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-card"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-card"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Footer with slide indicators */}
        <div className="px-4 py-3 border-t border-border/50 bg-card/50 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            {slides[currentSlide].title}
          </span>
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  i === currentSlide 
                    ? "bg-primary w-6" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PitchDeckViewer;

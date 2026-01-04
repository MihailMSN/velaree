import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Download, Maximize2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import MiniCardShowcase from "./pitchdeck/MiniCardShowcase";

interface Slide {
  id: number;
  title: string;
  content: React.ReactNode;
}

// Slide 1: Cover
const CoverSlide = () => (
  <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-gradient-to-br from-background via-background to-muted/30">
    <div className="flex items-baseline mb-4">
      <span className="text-7xl md:text-8xl font-bold text-primary">V</span>
      <span className="text-4xl md:text-5xl font-bold text-foreground">elaree</span>
    </div>
    <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-2">
      Next-Generation Travel Technology
    </h2>
    <p className="text-sm text-muted-foreground/70 max-w-md">
      Unified APIs • AI Automation • Real-time Analytics
    </p>
    <div className="mt-8 flex items-center gap-2 text-xs text-muted-foreground">
      <span className="w-2 h-2 rounded-full bg-accent" />
      Investor Presentation 2025
    </div>
  </div>
);

// Slide 2: Vision
const VisionSlide = () => (
  <div className="p-8 h-full flex flex-col justify-center bg-gradient-to-br from-background to-accent/10">
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">Our Vision</h2>
    <div className="max-w-3xl mx-auto text-center">
      <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
        "Empowering travel businesses with <span className="text-primary font-semibold">intelligent technology</span> that transforms operations, reduces costs, and unlocks new revenue opportunities."
      </p>
      <div className="flex justify-center gap-8 flex-wrap">
        {[
          { value: "200+", label: "Airlines Connected" },
          { value: "70%", label: "Task Automation" },
          { value: "99.9%", label: "Platform Uptime" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl font-bold text-primary">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Slide 3: Market Problem
const ProblemSlide = () => (
  <div className="p-8 h-full flex flex-col justify-center">
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Market Problem</h2>
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {[
        { title: "Manual Processes", desc: "70% of travel operations still rely on error-prone manual workflows", icon: "⚙️" },
        { title: "Fragmented Systems", desc: "Multiple GDS connections require separate integrations and maintenance", icon: "🔗" },
        { title: "Limited Inventory", desc: "Traditional systems access only a fraction of global inventory", icon: "📦" },
        { title: "Slow Performance", desc: "Legacy systems can't meet modern speed and reliability expectations", icon: "🐢" },
      ].map((item) => (
        <div key={item.title} className="flex gap-4 p-4 rounded-xl bg-card border border-border/50">
          <span className="text-2xl">{item.icon}</span>
          <div>
            <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Slide 4: Our Solution
const SolutionSlide = () => (
  <div className="p-8 h-full flex flex-col justify-center">
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">Our Solution</h2>
    <p className="text-center text-muted-foreground mb-8">One unified platform for the entire travel technology stack</p>
    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {[
        { icon: "🔌", title: "Unified API", desc: "Single integration to access 200+ airlines and all major GDS systems", color: "bg-blue-50 border-blue-200" },
        { icon: "🤖", title: "AI Automation", desc: "Intelligent workflows handling ticketing, changes, and notifications", color: "bg-violet-50 border-violet-200" },
        { icon: "📊", title: "Real-time Analytics", desc: "Complete visibility into operations with actionable insights", color: "bg-emerald-50 border-emerald-200" },
      ].map((item) => (
        <div key={item.title} className={`rounded-xl p-6 text-center border ${item.color}`}>
          <span className="text-4xl mb-4 block">{item.icon}</span>
          <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
          <p className="text-sm text-muted-foreground">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

// Slide 5: Industry Demand
const IndustryDemandSlide = () => (
  <div className="p-8 h-full flex flex-col justify-center">
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Industry Demand</h2>
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {[
          { value: "$1.4T", label: "Global Travel Market", sub: "Recovering post-pandemic" },
          { value: "67%", label: "Seek Automation", sub: "Of travel businesses" },
          { value: "23%", label: "Annual Growth", sub: "In travel tech spending" },
        ].map((stat) => (
          <div key={stat.label} className="text-center p-6 rounded-xl bg-primary/5 border border-primary/10">
            <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
            <div className="font-medium text-foreground">{stat.label}</div>
            <div className="text-sm text-muted-foreground">{stat.sub}</div>
          </div>
        ))}
      </div>
      <div className="bg-accent/30 rounded-xl p-4 text-center">
        <p className="text-muted-foreground">
          <span className="font-semibold text-foreground">Digital transformation</span> is no longer optional — it's survival
        </p>
      </div>
    </div>
  </div>
);

// Slide 6: How It Works (with animated cards)
const HowItWorksSlide = () => (
  <div className="p-8 h-full flex flex-col justify-center">
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">How It Works</h2>
    <p className="text-center text-muted-foreground mb-6">A complete product suite for every travel need</p>
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
      {/* Mini Card Showcase */}
      <div className="w-[320px] h-[240px]">
        <MiniCardShowcase />
      </div>
      
      {/* Products List */}
      <div className="space-y-3 flex-1 max-w-md">
        {[
          { name: "aSuite", desc: "CRM, CMS & automation platform for complete customer management", color: "bg-emerald-500" },
          { name: "aRStool", desc: "24/7 AI-powered PNR monitoring with 15-20% fare savings", color: "bg-blue-500" },
          { name: "UnifyTool", desc: "Multi-GDS aggregation with click-to-book and private fares", color: "bg-violet-500" },
          { name: "hRStool", desc: "Hotel re-shopping with intelligent automation (Q1 2026)", color: "bg-amber-500" },
        ].map((product) => (
          <div key={product.name} className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border/50">
            <div className={`w-3 h-3 rounded-full ${product.color}`} />
            <div>
              <span className="font-semibold text-foreground">{product.name}</span>
              <span className="text-muted-foreground text-sm ml-2">{product.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Slide 7: Target Market
const TargetMarketSlide = () => (
  <div className="p-8 h-full flex flex-col justify-center">
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Target Market</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
      {[
        { segment: "OTAs", desc: "Online Travel Agencies seeking efficiency", size: "Primary", icon: "🌐" },
        { segment: "TMCs", desc: "Travel Management Companies scaling operations", size: "Primary", icon: "🏢" },
        { segment: "Airlines", desc: "Direct carriers optimizing distribution", size: "Primary", icon: "✈️" },
        { segment: "Consolidators", desc: "Ticket consolidators improving margins", size: "Secondary", icon: "📋" },
        { segment: "Corporate Travel", desc: "Enterprise travel management platforms", size: "Secondary", icon: "💼" },
        { segment: "Travel Tech", desc: "Platforms seeking white-label solutions", size: "Tertiary", icon: "⚡" },
      ].map((market) => (
        <div key={market.segment} className="p-4 rounded-xl bg-card border border-border/50">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">{market.icon}</span>
            <h3 className="font-semibold text-foreground">{market.segment}</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-2">{market.desc}</p>
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            market.size === "Primary" ? "bg-primary/10 text-primary" :
            market.size === "Secondary" ? "bg-accent text-accent-foreground" :
            "bg-muted text-muted-foreground"
          }`}>{market.size}</span>
        </div>
      ))}
    </div>
  </div>
);

// Slide 8: TAM
const TAMSlide = () => (
  <div className="p-8 h-full flex flex-col justify-center">
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Total Addressable Market</h2>
    <div className="flex flex-col items-center justify-center gap-4 max-w-3xl mx-auto">
      {/* Concentric circles visualization */}
      <div className="relative w-80 h-80">
        <div className="absolute inset-0 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center">
          <div className="absolute top-4 text-center">
            <div className="text-2xl font-bold text-primary">$24B</div>
            <div className="text-xs text-muted-foreground">TAM</div>
          </div>
        </div>
        <div className="absolute inset-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
          <div className="absolute top-4 text-center">
            <div className="text-xl font-bold text-primary">$4.2B</div>
            <div className="text-xs text-muted-foreground">SAM</div>
          </div>
        </div>
        <div className="absolute inset-20 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
          <div className="text-center">
            <div className="text-lg font-bold text-primary">$850M</div>
            <div className="text-xs text-muted-foreground">SOM</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-4 text-center">
        <div>
          <div className="font-semibold text-foreground">TAM</div>
          <div className="text-sm text-muted-foreground">Global B2B Travel Tech</div>
        </div>
        <div>
          <div className="font-semibold text-foreground">SAM</div>
          <div className="text-sm text-muted-foreground">OTA & TMC Platforms</div>
        </div>
        <div>
          <div className="font-semibold text-foreground">SOM</div>
          <div className="text-sm text-muted-foreground">Year 3 Target</div>
        </div>
      </div>
    </div>
  </div>
);

// Slide 9: Revenue Model
const RevenueModelSlide = () => (
  <div className="p-8 h-full flex flex-col justify-center">
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Revenue Model</h2>
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {[
        { title: "SaaS Subscriptions", desc: "Tiered monthly/annual pricing based on volume and features", revenue: "40%", icon: "💳" },
        { title: "Transaction Fees", desc: "Per-booking fee for platform usage (€0.50-2.00)", revenue: "35%", icon: "💰" },
        { title: "Enterprise Licensing", desc: "Custom solutions for large-scale implementations", revenue: "15%", icon: "🏛️" },
        { title: "Implementation Services", desc: "Onboarding, integration, and ongoing support", revenue: "10%", icon: "🛠️" },
      ].map((model) => (
        <div key={model.title} className="p-5 rounded-xl bg-card border border-border/50">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{model.icon}</span>
              <h3 className="font-semibold text-foreground">{model.title}</h3>
            </div>
            <span className="text-lg font-bold text-primary">{model.revenue}</span>
          </div>
          <p className="text-sm text-muted-foreground">{model.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

// Slide 10: Go-to-Market
const GTMSlide = () => (
  <div className="p-8 h-full flex flex-col justify-center">
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Go-to-Market Strategy</h2>
    <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
      {[
        { phase: "Phase 1", time: "0-12 months", title: "Foundation", items: ["Beta partners", "Product refinement", "Case studies", "Early adopter pricing"] },
        { phase: "Phase 2", time: "12-24 months", title: "Expansion", items: ["Channel partnerships", "Geographic expansion", "Marketing scale-up", "Team growth"] },
        { phase: "Phase 3", time: "24-36 months", title: "Enterprise", items: ["Enterprise sales", "Global presence", "Strategic M&A", "IPO preparation"] },
      ].map((phase, i) => (
        <div key={phase.phase} className="flex-1 relative">
          <div className={`p-5 rounded-xl border-2 ${
            i === 0 ? "bg-blue-50 border-blue-200" :
            i === 1 ? "bg-violet-50 border-violet-200" :
            "bg-emerald-50 border-emerald-200"
          }`}>
            <div className="flex items-center gap-2 mb-3">
              <span className={`px-2 py-1 rounded text-xs font-semibold ${
                i === 0 ? "bg-blue-500 text-white" :
                i === 1 ? "bg-violet-500 text-white" :
                "bg-emerald-500 text-white"
              }`}>{phase.phase}</span>
              <span className="text-xs text-muted-foreground">{phase.time}</span>
            </div>
            <h3 className="font-semibold text-foreground mb-3">{phase.title}</h3>
            <ul className="space-y-1">
              {phase.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {i < 2 && (
            <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-4 text-muted-foreground">→</div>
          )}
        </div>
      ))}
    </div>
  </div>
);

// Slide 11: Competition
const CompetitionSlide = () => (
  <div className="p-8 h-full flex flex-col justify-center">
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Competitive Landscape</h2>
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 rounded-xl bg-muted/50 text-center">
          <h4 className="font-semibold text-foreground mb-2">Legacy Providers</h4>
          <p className="text-xs text-muted-foreground">Amadeus, Sabre, Travelport</p>
          <p className="text-xs text-red-500 mt-2">Slow innovation, high costs</p>
        </div>
        <div className="p-4 rounded-xl bg-primary/10 border-2 border-primary text-center">
          <h4 className="font-semibold text-primary mb-2">Velaree</h4>
          <p className="text-xs text-muted-foreground">Unified, AI-first platform</p>
          <p className="text-xs text-emerald-600 mt-2">Modern, affordable, complete</p>
        </div>
        <div className="p-4 rounded-xl bg-muted/50 text-center">
          <h4 className="font-semibold text-foreground mb-2">Point Solutions</h4>
          <p className="text-xs text-muted-foreground">Niche tools, aggregators</p>
          <p className="text-xs text-amber-600 mt-2">Fragmented, limited scope</p>
        </div>
      </div>
      <div className="bg-card rounded-xl p-4 border border-border/50">
        <h4 className="font-semibold text-foreground mb-3 text-center">Our Differentiators</h4>
        <div className="flex flex-wrap justify-center gap-2">
          {["Unified Platform", "AI-First Approach", "Modern Infrastructure", "Transparent Pricing", "Rapid Integration", "24/7 Support"].map((diff) => (
            <span key={diff} className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm">{diff}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Slide 12: The Ask
const AskSlide = () => (
  <div className="p-8 h-full flex flex-col justify-center">
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">The Ask</h2>
    <p className="text-center text-muted-foreground mb-8">Seed round to accelerate growth</p>
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <div className="text-6xl font-bold text-primary mb-2">€400,000</div>
        <p className="text-muted-foreground">Pre-seed / Seed Investment</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Product Development", amount: "€160K", percent: "40%", color: "bg-blue-500" },
          { label: "Sales & Marketing", amount: "€120K", percent: "30%", color: "bg-violet-500" },
          { label: "Operations", amount: "€80K", percent: "20%", color: "bg-emerald-500" },
          { label: "Team & Hiring", amount: "€40K", percent: "10%", color: "bg-amber-500" },
        ].map((allocation) => (
          <div key={allocation.label} className="text-center p-4 rounded-xl bg-card border border-border/50">
            <div className={`w-10 h-10 rounded-full ${allocation.color} mx-auto mb-2 flex items-center justify-center text-white text-sm font-bold`}>
              {allocation.percent}
            </div>
            <div className="font-semibold text-foreground text-sm">{allocation.amount}</div>
            <div className="text-xs text-muted-foreground">{allocation.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Slide 13: Team
const TeamSlide = () => (
  <div className="p-8 h-full flex flex-col justify-center">
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">The Team</h2>
    <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
      {[
        { name: "CEO", role: "Strategy & Vision", bg: "bg-primary" },
        { name: "CTO", role: "Technology & Product", bg: "bg-blue-500" },
        { name: "COO", role: "Operations & Growth", bg: "bg-violet-500" },
      ].map((member) => (
        <div key={member.name} className="text-center">
          <div className={`w-20 h-20 rounded-full ${member.bg} mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold`}>
            {member.name.charAt(0)}
          </div>
          <h3 className="font-semibold text-foreground">{member.name}</h3>
          <p className="text-sm text-muted-foreground">{member.role}</p>
        </div>
      ))}
    </div>
    <div className="text-center mt-8">
      <div className="flex items-baseline justify-center mb-2">
        <span className="text-4xl font-bold text-primary">V</span>
        <span className="text-2xl font-bold text-foreground">elaree</span>
      </div>
      <p className="text-muted-foreground">velaree.com • contact@velaree.com</p>
    </div>
  </div>
);

const slides: Slide[] = [
  { id: 1, title: "Cover", content: <CoverSlide /> },
  { id: 2, title: "Vision", content: <VisionSlide /> },
  { id: 3, title: "Market Problem", content: <ProblemSlide /> },
  { id: 4, title: "Our Solution", content: <SolutionSlide /> },
  { id: 5, title: "Industry Demand", content: <IndustryDemandSlide /> },
  { id: 6, title: "How It Works", content: <HowItWorksSlide /> },
  { id: 7, title: "Target Market", content: <TargetMarketSlide /> },
  { id: 8, title: "TAM", content: <TAMSlide /> },
  { id: 9, title: "Revenue Model", content: <RevenueModelSlide /> },
  { id: 10, title: "Go-to-Market", content: <GTMSlide /> },
  { id: 11, title: "Competition", content: <CompetitionSlide /> },
  { id: 12, title: "The Ask", content: <AskSlide /> },
  { id: 13, title: "Team", content: <TeamSlide /> },
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
      e.preventDefault();
      nextSlide();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
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
        <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-muted/30">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">V</span>
            <span className="text-sm font-medium text-foreground">Pitch Deck</span>
            <span className="text-xs text-muted-foreground ml-2">Investor Presentation</span>
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
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
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
        <div className="flex-1 relative overflow-hidden bg-background">
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
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-card shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-card shadow-md"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Footer with slide indicators */}
        <div className="px-4 py-3 border-t border-border/50 bg-muted/30 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            {slides[currentSlide].title}
          </span>
          <div className="flex items-center gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  i === currentSlide 
                    ? "bg-primary w-5" 
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

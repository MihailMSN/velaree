import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Download, Maximize2, Minimize2, Settings2, Unlink, Package, Timer, Plug, Bot, BarChart3, Globe, Building2, Plane, ClipboardList, Briefcase, Zap, CreditCard, CircleDollarSign, Landmark, Wrench, Linkedin, type LucideIcon } from "lucide-react";
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
const CoverSlide = () => <div className="flex flex-col items-center justify-center h-full text-center p-12 md:p-16 bg-gradient-to-br from-background via-background to-accent/20">
    <div className="mb-6">
      <img src="/lovable-uploads/velaree-logo-text.png" alt="Velaree" className="h-24 md:h-32 lg:h-40 w-auto" />
    </div>
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground mb-4">
      Next-Generation Travel Technology
    </h2>
    <p className="text-lg md:text-xl text-muted-foreground/70 max-w-2xl">
      Unified APIs • AI Automation • Real-time Analytics
    </p>
    <div className="mt-12 flex items-center gap-3 text-sm md:text-base text-muted-foreground">
      <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
      Investor Presentation 2025
    </div>
  </div>;

// Slide 2: Vision
const VisionSlide = () => <div className="p-12 md:p-16 h-full flex flex-col justify-center bg-gradient-to-br from-background to-accent/20">
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-10 text-center">Our Vision</h2>
    <div className="max-w-5xl mx-auto text-center">
      <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground leading-relaxed mb-12">
        "Empowering travel businesses with <span className="text-primary font-semibold">intelligent technology</span> that transforms operations, reduces costs, and unlocks new revenue opportunities."
      </p>
      <div className="flex justify-center gap-12 md:gap-16 lg:gap-24 flex-wrap">
        {[{
        value: "200+",
        label: "Airlines Connected"
      }, {
        value: "70%",
        label: "Task Automation"
      }, {
        value: "99.9%",
        label: "Platform Uptime"
      }].map(stat => <div key={stat.label} className="text-center">
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary">{stat.value}</div>
            <div className="text-lg md:text-xl text-muted-foreground mt-2">{stat.label}</div>
          </div>)}
      </div>
    </div>
  </div>;

// Slide 3: Market Problem
const ProblemSlide = () => {
  const problems: {
    title: string;
    desc: string;
    Icon: LucideIcon;
  }[] = [{
    title: "Manual Processes",
    desc: "70% of travel operations still rely on error-prone manual workflows",
    Icon: Settings2
  }, {
    title: "Fragmented Systems",
    desc: "Multiple GDS connections require separate integrations and maintenance",
    Icon: Unlink
  }, {
    title: "Limited Inventory",
    desc: "Traditional systems access only a fraction of global inventory",
    Icon: Package
  }, {
    title: "Slow Performance",
    desc: "Legacy systems can't meet modern speed and reliability expectations",
    Icon: Timer
  }];
  return <div className="p-12 md:p-16 h-full flex flex-col justify-center">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-12 text-center">Market Problem</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {problems.map(item => <div key={item.title} className="flex gap-6 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-card via-accent/5 to-card border border-border/50 hover:border-accent/40 shadow-lg hover:shadow-xl transition-all">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 via-accent/20 to-primary/10 border border-accent/30 flex items-center justify-center shrink-0">
              <item.Icon className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-xl md:text-2xl mb-2">{item.title}</h3>
              <p className="text-base md:text-lg text-muted-foreground">{item.desc}</p>
            </div>
          </div>)}
      </div>
    </div>;
};

// Slide 4: Our Solution
const SolutionSlide = () => {
  const solutions: {
    Icon: LucideIcon;
    title: string;
    desc: string;
  }[] = [{
    Icon: Plug,
    title: "Unified API",
    desc: "Single integration to access 200+ airlines and all major GDS systems"
  }, {
    Icon: Bot,
    title: "AI Automation",
    desc: "Intelligent workflows handling ticketing, changes, and notifications"
  }, {
    Icon: BarChart3,
    title: "Real-time Analytics",
    desc: "Complete visibility into operations with actionable insights"
  }];
  return <div className="p-12 md:p-16 h-full flex flex-col justify-center">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-center">Our Solution</h2>
      <p className="text-center text-xl md:text-2xl text-muted-foreground mb-12">One unified platform for the entire travel technology stack</p>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {solutions.map(item => <div key={item.title} className="rounded-2xl p-8 md:p-10 text-center bg-gradient-to-br from-card via-accent/5 to-card border border-border/50 hover:border-accent/40 shadow-lg hover:shadow-xl transition-all">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 via-accent/20 to-primary/10 border border-accent/30 flex items-center justify-center mx-auto mb-6">
              <item.Icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">{item.title}</h3>
            <p className="text-base md:text-lg text-muted-foreground">{item.desc}</p>
          </div>)}
      </div>
    </div>;
};

// Slide 5: Industry Demand
const IndustryDemandSlide = () => <div className="p-12 md:p-16 h-full flex flex-col justify-center">
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-12 text-center">Industry Demand</h2>
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8 mb-10">
        {[{
        value: "$1.4T",
        label: "Global Travel Market",
        sub: "Recovering post-pandemic"
      }, {
        value: "67%",
        label: "Seek Automation",
        sub: "Of travel businesses"
      }, {
        value: "23%",
        label: "Annual Growth",
        sub: "In travel tech spending"
      }].map(stat => <div key={stat.label} className="text-center p-8 md:p-10 rounded-2xl bg-primary/5 border-2 border-primary/10 shadow-lg">
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-4">{stat.value}</div>
            <div className="font-semibold text-xl md:text-2xl text-foreground">{stat.label}</div>
            <div className="text-base md:text-lg text-muted-foreground mt-2">{stat.sub}</div>
          </div>)}
      </div>
      <div className="bg-accent/40 rounded-2xl p-6 md:p-8 text-center shadow-md">
        <p className="text-xl md:text-2xl text-muted-foreground">
          <span className="font-semibold text-foreground">Digital transformation</span> is no longer optional — it's survival
        </p>
      </div>
    </div>
  </div>;

// Slide 6: How It Works (with animated cards)
const HowItWorksSlide = () => <div className="p-12 md:p-16 h-full flex flex-col justify-center">
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-center">How It Works</h2>
    <p className="text-center text-xl md:text-2xl text-muted-foreground mb-10">A complete product suite for every travel need</p>
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 max-w-6xl mx-auto">
      {/* Mini Card Showcase */}
      <div className="w-[400px] h-[300px] lg:w-[450px] lg:h-[340px]">
        <MiniCardShowcase />
      </div>
      
      {/* Products List */}
      <div className="space-y-4 flex-1 max-w-xl">
        {[{
        name: "aSuite",
        desc: "CRM, CMS & automation platform for complete customer management",
        color: "bg-emerald-500"
      }, {
        name: "aRStool",
        desc: "24/7 AI-powered PNR monitoring with 15-20% fare savings",
        color: "bg-blue-500"
      }, {
        name: "UnifyTool",
        desc: "Multi-GDS aggregation with click-to-book and private fares",
        color: "bg-violet-500"
      }, {
        name: "hRStool",
        desc: "Hotel re-shopping with intelligent automation (Q1 2026)",
        color: "bg-amber-500"
      }].map(product => <div key={product.name} className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border/50 shadow-md hover:shadow-lg transition-shadow">
            <div className={`w-4 h-4 rounded-full ${product.color} shadow-lg`} />
            <div>
              <span className="font-semibold text-lg md:text-xl text-foreground">{product.name}</span>
              <p className="text-muted-foreground text-base md:text-lg">{product.desc}</p>
            </div>
          </div>)}
      </div>
    </div>
  </div>;

// Slide 7: Target Market
const TargetMarketSlide = () => {
  const markets: {
    segment: string;
    desc: string;
    size: string;
    Icon: LucideIcon;
  }[] = [{
    segment: "OTAs",
    desc: "Online Travel Agencies seeking efficiency",
    size: "Primary",
    Icon: Globe
  }, {
    segment: "TMCs",
    desc: "Travel Management Companies scaling operations",
    size: "Primary",
    Icon: Building2
  }, {
    segment: "Airlines",
    desc: "Direct carriers optimizing distribution",
    size: "Primary",
    Icon: Plane
  }, {
    segment: "Consolidators",
    desc: "Ticket consolidators improving margins",
    size: "Secondary",
    Icon: ClipboardList
  }, {
    segment: "Corporate Travel",
    desc: "Enterprise travel management platforms",
    size: "Secondary",
    Icon: Briefcase
  }, {
    segment: "Travel Tech",
    desc: "Platforms seeking white-label solutions",
    size: "Tertiary",
    Icon: Zap
  }];
  return <div className="p-12 md:p-16 h-full flex flex-col justify-center">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-12 text-center">Target Market</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {markets.map(market => <div key={market.segment} className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-card via-accent/5 to-card border border-border/50 hover:border-accent/40 shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 via-accent/20 to-primary/10 border border-accent/30 flex items-center justify-center">
                <market.Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-xl md:text-2xl text-foreground">{market.segment}</h3>
            </div>
            <p className="text-base md:text-lg text-muted-foreground mb-4">{market.desc}</p>
            <span className={`text-sm px-3 py-1 rounded-full font-medium ${market.size === "Primary" ? "bg-primary/10 text-primary" : market.size === "Secondary" ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`}>{market.size}</span>
          </div>)}
      </div>
    </div>;
};

// Slide 8: TAM
const TAMSlide = () => <div className="p-12 md:p-16 h-full flex flex-col justify-center">
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 text-center">Total Addressable Market</h2>
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
      {/* Concentric circles visualization */}
      <div className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px]">
        {/* Outer circle - TAM */}
        <div className="absolute inset-0 rounded-full bg-primary/5 border-2 border-primary/20 shadow-lg" />
        {/* Middle circle - SAM */}
        <div className="absolute inset-12 md:inset-14 rounded-full bg-primary/10 border-2 border-primary/30 shadow-md" />
        {/* Inner circle - SOM */}
        <div className="absolute inset-24 md:inset-28 rounded-full bg-primary/20 border-2 border-primary/40 shadow flex items-center justify-center">
          <div className="text-center">
            <div className="text-lg md:text-xl font-bold text-primary">$850M</div>
            <div className="text-xs text-muted-foreground">SOM</div>
          </div>
        </div>
      </div>
      
      {/* Side labels */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4 bg-gradient-to-br from-card via-accent/5 to-card border border-border/50 rounded-xl p-5 shadow-md">
          <div className="w-4 h-4 rounded-full bg-primary/20 border-2 border-primary/40 shrink-0" />
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary">$24B</div>
            <div className="text-sm text-muted-foreground font-medium">TAM — Global B2B Travel Tech</div>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-gradient-to-br from-card via-accent/5 to-card border border-border/50 rounded-xl p-5 shadow-md">
          <div className="w-4 h-4 rounded-full bg-primary/30 border-2 border-primary/50 shrink-0" />
          <div>
            <div className="text-2xl md:text-3xl font-bold text-primary">$4.2B</div>
            <div className="text-sm text-muted-foreground font-medium">SAM — OTA & TMC Platforms</div>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-gradient-to-br from-card via-accent/5 to-card border border-border/50 rounded-xl p-5 shadow-md">
          <div className="w-4 h-4 rounded-full bg-primary/40 border-2 border-primary/60 shrink-0" />
          <div>
            <div className="text-xl md:text-2xl font-bold text-primary">$850M</div>
            <div className="text-sm text-muted-foreground font-medium">SOM — Year 3 Target</div>
          </div>
        </div>
      </div>
    </div>
  </div>;

// Slide 9: Revenue Model
const RevenueModelSlide = () => {
  const models: {
    title: string;
    desc: string;
    revenue: string;
    Icon: LucideIcon;
  }[] = [{
    title: "SaaS Subscriptions",
    desc: "Tiered monthly/annual pricing based on volume and features",
    revenue: "40%",
    Icon: CreditCard
  }, {
    title: "Transaction Fees",
    desc: "Per-booking fee for platform usage (€0.50-2.00)",
    revenue: "35%",
    Icon: CircleDollarSign
  }, {
    title: "Enterprise Licensing",
    desc: "Custom solutions for large-scale implementations",
    revenue: "15%",
    Icon: Landmark
  }, {
    title: "Implementation Services",
    desc: "Onboarding, integration, and ongoing support",
    revenue: "10%",
    Icon: Wrench
  }];
  return <div className="p-12 md:p-16 h-full flex flex-col justify-center">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-12 text-center">Revenue Model</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {models.map(model => <div key={model.title} className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-card via-accent/5 to-card border border-border/50 hover:border-accent/40 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 via-accent/20 to-primary/10 border border-accent/30 flex items-center justify-center">
                  <model.Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl md:text-2xl text-foreground">{model.title}</h3>
              </div>
              <span className="text-2xl md:text-3xl font-bold text-primary">{model.revenue}</span>
            </div>
            <p className="text-base md:text-lg text-muted-foreground">{model.desc}</p>
          </div>)}
      </div>
    </div>;
};

// Slide 10: Go-to-Market
const GTMSlide = () => <div className="p-12 md:p-16 h-full flex flex-col justify-center">
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-12 text-center">Go-to-Market Strategy</h2>
    <div className="flex flex-col md:flex-row gap-6 md:gap-16 max-w-6xl mx-auto">
      {[{
      phase: "Phase 1",
      time: "0-12 months",
      title: "Foundation",
      items: ["Beta partners", "Product refinement", "Case studies", "Early adopter pricing"]
    }, {
      phase: "Phase 2",
      time: "12-24 months",
      title: "Expansion",
      items: ["Channel partnerships", "Geographic expansion", "Marketing scale-up", "Team growth"]
    }, {
      phase: "Phase 3",
      time: "24-36 months",
      title: "Enterprise",
      items: ["Enterprise sales", "Global presence", "Strategic M&A", "IPO preparation"]
    }].map((phase, i) => <div key={phase.phase} className="flex-1 relative">
          <div className="p-6 md:p-8 rounded-2xl border bg-gradient-to-br from-card via-accent/5 to-card border-border/50 hover:border-accent/40 shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1.5 rounded-lg text-sm font-semibold bg-primary text-primary-foreground">{phase.phase}</span>
              <span className="text-sm md:text-base text-muted-foreground">{phase.time}</span>
            </div>
            <h3 className="font-semibold text-xl md:text-2xl text-foreground mb-4">{phase.title}</h3>
            <ul className="space-y-2">
              {phase.items.map(item => <li key={item} className="text-base md:text-lg text-muted-foreground flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary/50" />
                  {item}
                </li>)}
            </ul>
          </div>
          {i < 2 && <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-10 w-8 h-8 rounded-full bg-gradient-to-r from-primary via-accent/40 to-primary border border-accent/50 text-foreground text-sm items-center justify-center z-10">→</div>}
        </div>)}
    </div>
  </div>;

// Slide 11: Competition
const CompetitionSlide = () => <div className="p-12 md:p-16 h-full flex flex-col justify-center">
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-12 text-center">Competitive Landscape</h2>
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-3 gap-6 md:gap-8 mb-10">
        <div className="p-6 md:p-8 rounded-2xl bg-muted/50 text-center shadow-md">
          <h4 className="font-semibold text-xl md:text-2xl text-foreground mb-3">Legacy Providers</h4>
          <p className="text-base md:text-lg text-muted-foreground">Amadeus, Sabre, Travelport</p>
          <p className="text-base text-red-500 mt-4 font-medium">Slow innovation, high costs</p>
        </div>
        <div className="p-6 md:p-8 rounded-2xl bg-primary/10 border-3 border-primary text-center shadow-lg scale-105">
          <h4 className="font-semibold text-xl md:text-2xl text-primary mb-3">Velaree</h4>
          <p className="text-base md:text-lg text-muted-foreground">Unified, AI-first platform</p>
          <p className="text-base text-emerald-600 mt-4 font-medium">Modern, affordable, complete</p>
        </div>
        <div className="p-6 md:p-8 rounded-2xl bg-muted/50 text-center shadow-md">
          <h4 className="font-semibold text-xl md:text-2xl text-foreground mb-3">Point Solutions</h4>
          <p className="text-base md:text-lg text-muted-foreground">Niche tools, aggregators</p>
          <p className="text-base text-amber-600 mt-4 font-medium">Fragmented, limited scope</p>
        </div>
      </div>
      <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-lg">
        <h4 className="font-semibold text-xl md:text-2xl text-foreground mb-6 text-center">Our Differentiators</h4>
        <div className="flex flex-wrap justify-center gap-3">
          {["Unified Platform", "AI-First Approach", "Modern Infrastructure", "Transparent Pricing", "Rapid Integration", "24/7 Support"].map(diff => <span key={diff} className="px-5 py-2.5 rounded-full bg-gradient-to-r from-primary via-accent/40 to-primary border border-accent/50 text-base md:text-lg font-medium shadow-sm bg-secondary-foreground text-primary-foreground">{diff}</span>)}
        </div>
      </div>
    </div>
  </div>;

// Slide 12: The Ask
const AskSlide = () => <div className="p-12 md:p-16 h-full flex flex-col justify-center">
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-center">The Ask</h2>
    <p className="text-center text-xl md:text-2xl text-muted-foreground mb-12">Seed round to accelerate growth</p>
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <div className="text-7xl md:text-8xl lg:text-9xl font-bold text-primary mb-4">€400,000</div>
        <p className="text-xl md:text-2xl text-muted-foreground">Pre-seed / Seed Investment</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[{
        label: "Product Development",
        amount: "€160K",
        percent: "40%",
        color: "bg-blue-500"
      }, {
        label: "Sales & Marketing",
        amount: "€120K",
        percent: "30%",
        color: "bg-violet-500"
      }, {
        label: "Operations",
        amount: "€80K",
        percent: "20%",
        color: "bg-emerald-500"
      }, {
        label: "Team & Hiring",
        amount: "€40K",
        percent: "10%",
        color: "bg-amber-500"
      }].map(allocation => <div key={allocation.label} className="text-center p-6 md:p-8 rounded-2xl bg-card border border-border/50 shadow-lg hover:shadow-xl transition-shadow">
            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${allocation.color} mx-auto mb-4 flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-lg`}>
              {allocation.percent}
            </div>
            <div className="font-semibold text-foreground text-xl md:text-2xl mb-2">{allocation.amount}</div>
            <div className="text-sm md:text-base text-muted-foreground">{allocation.label}</div>
          </div>)}
      </div>
    </div>
  </div>;

// Slide 13: Team
const TeamSlide = () => <div className="p-12 md:p-16 h-full flex flex-col justify-center">
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-12 text-center">The Team</h2>
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
      {[{
      name: "Mihail Mazil",
      role: "CEO",
      subtitle: "Strategy & Vision",
      bg: "bg-primary",
      linkedin: "https://www.linkedin.com/in/mihail-m-456922386/"
    }, {
      name: "Mihail Sinitari",
      role: "COO",
      subtitle: "Operations & Growth",
      bg: "bg-violet-500",
      linkedin: "https://www.linkedin.com/in/mihailmarksn/"
    }].map(member => <div key={member.name} className="text-center">
          <div className={`w-28 h-28 md:w-36 md:h-36 rounded-full ${member.bg} mx-auto mb-6 flex items-center justify-center text-white text-4xl md:text-5xl font-bold shadow-xl`}>
            {member.name.split(' ')[0].charAt(0)}
          </div>
          <h3 className="font-semibold text-2xl md:text-3xl text-foreground">{member.name}</h3>
          <p className="text-lg md:text-xl text-muted-foreground mt-2">{member.role} • {member.subtitle}</p>
          <a 
            href={member.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-[#0A66C2] hover:bg-[#004182] text-white text-sm font-medium transition-colors shadow-md"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>)}
    </div>
    <div className="text-center mt-12">
      <img src="/lovable-uploads/velaree-logo-text.png" alt="Velaree" className="h-24 md:h-32 w-auto mx-auto mb-4" />
      <p className="text-lg md:text-xl text-muted-foreground">velaree.com • contact@velaree.com</p>
    </div>
  </div>;
const slides: Slide[] = [{
  id: 1,
  title: "Cover",
  content: <CoverSlide />
}, {
  id: 2,
  title: "Vision",
  content: <VisionSlide />
}, {
  id: 3,
  title: "Market Problem",
  content: <ProblemSlide />
}, {
  id: 4,
  title: "Our Solution",
  content: <SolutionSlide />
}, {
  id: 5,
  title: "Industry Demand",
  content: <IndustryDemandSlide />
}, {
  id: 6,
  title: "How It Works",
  content: <HowItWorksSlide />
}, {
  id: 7,
  title: "Target Market",
  content: <TargetMarketSlide />
}, {
  id: 8,
  title: "TAM",
  content: <TAMSlide />
}, {
  id: 9,
  title: "Revenue Model",
  content: <RevenueModelSlide />
}, {
  id: 10,
  title: "Go-to-Market",
  content: <GTMSlide />
}, {
  id: 11,
  title: "Competition",
  content: <CompetitionSlide />
}, {
  id: 12,
  title: "The Ask",
  content: <AskSlide />
}, {
  id: 13,
  title: "Team",
  content: <TeamSlide />
}];
interface PitchDeckViewerProps {
  isOpen: boolean;
  onClose: () => void;
  onDownloadRequest: () => void;
}
const PitchDeckViewer = ({
  isOpen,
  onClose,
  onDownloadRequest
}: PitchDeckViewerProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
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
  return <Dialog open={isOpen} onOpenChange={open => !open && onClose()}>
      <DialogContent hideCloseButton className={cn("p-0 gap-0 border-border/50 bg-background overflow-hidden flex flex-col", isFullscreen ? "max-w-[100vw] w-[100vw] h-[100vh] max-h-[100vh] rounded-none" : "max-w-[96vw] w-[96vw] h-[92vh] max-h-[92vh]")} onKeyDown={handleKeyDown}>
        <DialogTitle className="sr-only">Velaree Pitch Deck</DialogTitle>
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border/50 bg-muted/30 backdrop-blur-sm shrink-0">
          <div className="flex items-center gap-3">
            <img src="/lovable-uploads/velaree-icon.png" alt="Velaree Logo" className="h-12 w-auto" />
            <span className="text-lg font-medium text-foreground">Pitch Deck</span>
            <span className="text-sm text-muted-foreground ml-2">Investor Presentation</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="default" onClick={onDownloadRequest} className="text-muted-foreground hover:text-foreground">
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsFullscreen(!isFullscreen)} className="text-muted-foreground hover:text-foreground h-10 w-10">
              {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-muted-foreground hover:text-foreground h-10 w-10">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Slide Content */}
        <div className="flex-1 relative overflow-hidden bg-background min-h-0">
          <AnimatePresence mode="wait">
            <motion.div key={currentSlide} initial={{
            opacity: 0,
            x: 50
          }} animate={{
            opacity: 1,
            x: 0
          }} exit={{
            opacity: 0,
            x: -50
          }} transition={{
            duration: 0.3,
            ease: "easeInOut"
          }} className="absolute inset-0 overflow-y-auto">
              {slides[currentSlide].content}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <Button variant="ghost" size="icon" onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-card/90 backdrop-blur-sm border border-border/50 hover:bg-card shadow-xl">
            <ChevronLeft className="w-7 h-7" />
          </Button>
          <Button variant="ghost" size="icon" onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-card/90 backdrop-blur-sm border border-border/50 hover:bg-card shadow-xl">
            <ChevronRight className="w-7 h-7" />
          </Button>
        </div>

        {/* Footer with slide indicators */}
        <div className="px-6 py-4 border-t border-border/50 bg-muted/30 backdrop-blur-sm flex items-center justify-between shrink-0">
          <span className="text-base font-medium text-muted-foreground min-w-[150px]">
            {slides[currentSlide].title}
          </span>
          <div className="flex items-center gap-2">
            {slides.map((_, i) => <button key={i} onClick={() => setCurrentSlide(i)} className={cn("h-2.5 rounded-full transition-all duration-300", i === currentSlide ? "bg-primary w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2.5")} />)}
          </div>
          <span className="text-base font-medium text-muted-foreground min-w-[150px] text-right">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </DialogContent>
    </Dialog>;
};
export default PitchDeckViewer;
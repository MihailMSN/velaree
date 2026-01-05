import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Download, Maximize2, Minimize2, Settings2, Unlink, Package, Timer, Plug, Bot, BarChart3, Globe, Building2, Plane, ClipboardList, Briefcase, Zap, CreditCard, CircleDollarSign, Landmark, Wrench, Linkedin, TrendingUp, Users, DollarSign, Target, Award, CheckCircle2, ArrowRight, Calendar, Rocket, Shield, Clock, Percent, PieChart, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import MiniCardShowcase from "./pitchdeck/MiniCardShowcase";
interface Slide {
  id: number;
  title: string;
  content: React.ReactNode;
}

// Slide 1: Cover - Enhanced with key metrics and stage info
const CoverSlide = () => <div className="flex flex-col items-center justify-center h-full text-center p-8 md:p-12 bg-gradient-to-br from-background via-background to-accent/20">
    <div className="mb-4">
      <img src="/lovable-uploads/velaree-logo-text.png" alt="Velaree" className="h-20 md:h-28 lg:h-36 w-auto" />
    </div>
    
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
        Est. 2024
      </span>
      <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium">
        Pre-Seed Stage
      </span>
    </div>
    
    <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground mb-3">
      Next-Generation Travel Technology
    </h2>
    <p className="text-base md:text-lg text-muted-foreground/70 max-w-2xl mb-6">
      Unified APIs • AI Automation • Real-time Analytics
    </p>
    
    {/* Key highlights bar */}
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 py-4 px-6 rounded-2xl bg-card/50 border border-border/50">
      {[{
      value: "200+",
      label: "Airlines"
    }, {
      value: "4",
      label: "Products"
    }, {
      value: "€400K",
      label: "Raising"
    }, {
      value: "18mo",
      label: "Runway"
    }].map(item => <div key={item.label} className="text-center">
          <div className="text-xl md:text-2xl font-bold text-primary">{item.value}</div>
          <div className="text-xs md:text-sm text-muted-foreground">{item.label}</div>
        </div>)}
    </div>
    
    <div className="flex items-center gap-3 text-sm text-muted-foreground">
      <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
      Investor Presentation 2025
    </div>
    
    <div className="mt-6 text-sm text-muted-foreground/60">
      contact@velaree.com • velaree.com
    </div>
  </div>;

// Slide 2: Vision - Enhanced with timeline and expanded metrics
const VisionSlide = () => <div className="p-8 md:p-12 h-full flex flex-col justify-center bg-gradient-to-br from-background to-accent/20 overflow-y-auto">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-center">Our Vision</h2>
    <div className="max-w-6xl mx-auto">
      <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-8 text-center max-w-4xl mx-auto">
        "Empowering travel businesses with <span className="text-primary font-semibold">intelligent technology</span> that transforms operations, reduces costs, and unlocks new revenue opportunities."
      </p>
      
      {/* Expanded metrics grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {[{
        value: "200+",
        label: "Airlines Connected",
        growth: "+40 YoY"
      }, {
        value: "70%",
        label: "Task Automation",
        growth: "+15% YoY"
      }, {
        value: "99.9%",
        label: "Platform Uptime",
        growth: "SLA"
      }, {
        value: "4.8/5",
        label: "Customer Rating",
        growth: "NPS 72"
      }, {
        value: "<2s",
        label: "Avg Response",
        growth: "-40% YoY"
      }].map(stat => <div key={stat.label} className="text-center p-4 rounded-xl bg-card border border-border/50 shadow-sm">
            <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            <div className="text-xs text-emerald-600 mt-1 font-medium">{stat.growth}</div>
          </div>)}
      </div>
      
      {/* Vision Timeline */}
      <div className="bg-card rounded-2xl border border-border/50 p-5 shadow-lg">
        <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Vision Timeline</h3>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {[{
          year: "2025",
          milestone: "Product Market Fit",
          status: "In Progress"
        }, {
          year: "2026",
          milestone: "European Expansion",
          status: "Planned"
        }, {
          year: "2027",
          milestone: "US Market Entry",
          status: "Planned"
        }, {
          year: "2028",
          milestone: "1000+ Clients",
          status: "Target"
        }, {
          year: "2030",
          milestone: "IPO / Exit",
          status: "Goal"
        }].map((item, i) => <div key={item.year} className="flex items-center gap-3 flex-1">
              <div className="text-center flex-1">
                <div className="text-lg font-bold text-primary">{item.year}</div>
                <div className="text-sm text-foreground font-medium">{item.milestone}</div>
                <span className={`text-xs px-2 py-0.5 rounded-full ${item.status === "In Progress" ? "bg-emerald-500/10 text-emerald-600" : item.status === "Planned" ? "bg-blue-500/10 text-blue-600" : "bg-violet-500/10 text-violet-600"}`}>{item.status}</span>
              </div>
              {i < 4 && <ArrowRight className="w-4 h-4 text-muted-foreground hidden md:block" />}
            </div>)}
        </div>
      </div>
    </div>
  </div>;

// Slide 3: Market Problem - Enhanced with quantified impacts and sources
const ProblemSlide = () => {
  const problems: {
    title: string;
    desc: string;
    impact: string;
    source: string;
    Icon: LucideIcon;
  }[] = [{
    title: "Manual Processes",
    desc: "70% of travel operations still rely on error-prone manual workflows",
    impact: "$8.2B lost annually",
    source: "IATA 2024",
    Icon: Settings2
  }, {
    title: "Fragmented Systems",
    desc: "Multiple GDS connections require separate integrations and maintenance",
    impact: "45% higher IT costs",
    source: "Phocuswright",
    Icon: Unlink
  }, {
    title: "Limited Inventory",
    desc: "Traditional systems access only a fraction of global inventory",
    impact: "23% revenue leakage",
    source: "Amadeus Study",
    Icon: Package
  }, {
    title: "Slow Performance",
    desc: "Legacy systems can't meet modern speed and reliability expectations",
    impact: "12% booking abandonment",
    source: "Travelport",
    Icon: Timer
  }];
  return <div className="p-8 md:p-12 h-full flex flex-col justify-center overflow-y-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-center">Market Problem</h2>
      
      <div className="grid md:grid-cols-2 gap-5 max-w-6xl mx-auto mb-6">
        {problems.map(item => <div key={item.title} className="flex gap-4 p-5 rounded-xl bg-gradient-to-br from-card via-accent/5 to-card border border-border/50 hover:border-accent/40 shadow-md transition-all">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 via-accent/20 to-primary/10 border border-accent/30 flex items-center justify-center shrink-0">
              <item.Icon className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{item.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-red-500">{item.impact}</span>
                <span className="text-xs text-muted-foreground/60">Source: {item.source}</span>
              </div>
            </div>
          </div>)}
      </div>
      
      {/* Cost of Inaction Summary */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-red-500/10 via-red-500/5 to-red-500/10 rounded-xl p-5 border border-red-500/20">
          <h4 className="text-lg font-semibold text-foreground mb-3 text-center">Cost of Inaction</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-red-500">$12.4B</div>
              <div className="text-xs text-muted-foreground">Total Industry Loss</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-500">38%</div>
              <div className="text-xs text-muted-foreground">Operational Waste</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-500">4.2hrs</div>
              <div className="text-xs text-muted-foreground">Avg. Daily Manual Work</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-500">67%</div>
              <div className="text-xs text-muted-foreground">Staff Turnover Related</div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};

// Slide 4: Our Solution - Enhanced with metrics and before/after
const SolutionSlide = () => {
  const solutions: {
    Icon: LucideIcon;
    title: string;
    desc: string;
    metric: string;
    metricLabel: string;
  }[] = [{
    Icon: Plug,
    title: "Unified API",
    desc: "Single integration to access 200+ airlines and all major GDS systems",
    metric: "85%",
    metricLabel: "Faster Integration"
  }, {
    Icon: Bot,
    title: "AI Automation",
    desc: "Intelligent workflows handling ticketing, changes, and notifications",
    metric: "70%",
    metricLabel: "Less Manual Work"
  }, {
    Icon: BarChart3,
    title: "Real-time Analytics",
    desc: "Complete visibility into operations with actionable insights",
    metric: "3x",
    metricLabel: "Faster Decisions"
  }];
  return <div className="p-8 md:p-12 h-full flex flex-col justify-center overflow-y-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 text-center">Our Solution</h2>
      <p className="text-center text-lg text-muted-foreground mb-6">One unified platform for the entire travel technology stack</p>
      
      <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto mb-6">
        {solutions.map(item => <div key={item.title} className="rounded-xl p-5 text-center bg-gradient-to-br from-card via-accent/5 to-card border border-border/50 shadow-md">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/10 via-accent/20 to-primary/10 border border-accent/30 flex items-center justify-center mx-auto mb-4">
              <item.Icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{item.desc}</p>
            <div className="pt-3 border-t border-border/50">
              <div className="text-2xl font-bold text-primary">{item.metric}</div>
              <div className="text-xs text-muted-foreground">{item.metricLabel}</div>
            </div>
          </div>)}
      </div>
      
      {/* Before/After Comparison */}
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-red-500/5 rounded-xl p-5 border border-red-500/20">
            <h4 className="font-semibold text-red-600 mb-3 flex items-center gap-2">
              <X className="w-4 h-4" /> Before Velaree
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• 6-12 months integration time</li>
              <li>• 5+ separate vendor contracts</li>
              <li>• Manual reconciliation daily</li>
              <li>• Limited fare visibility</li>
            </ul>
          </div>
          <div className="bg-emerald-500/5 rounded-xl p-5 border border-emerald-500/20">
            <h4 className="font-semibold text-emerald-600 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> After Velaree
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• 2-4 weeks go-live</li>
              <li>• Single unified contract</li>
              <li>• Automated real-time sync</li>
              <li>• 200+ airline access</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Tech Stack */}
      <div className="max-w-6xl mx-auto mt-5">
        <div className="flex flex-wrap justify-center gap-2">
          {["AWS", "Kubernetes", "PostgreSQL", "Redis", "GraphQL", "REST API"].map(tech => <span key={tech} className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">
              {tech}
            </span>)}
        </div>
      </div>
    </div>;
};

// Slide 5: Industry Demand - Enhanced with regional data and projections
const IndustryDemandSlide = () => <div className="p-8 md:p-12 h-full flex flex-col justify-center overflow-y-auto">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-center">Industry Demand</h2>
    <div className="max-w-6xl mx-auto">
      {/* Primary stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {[{
        value: "$1.4T",
        label: "Global Travel Market",
        sub: "2024 Value",
        growth: "+12% YoY"
      }, {
        value: "67%",
        label: "Seek Automation",
        sub: "Of travel businesses",
        growth: "Survey 2024"
      }, {
        value: "23%",
        label: "Annual Growth",
        sub: "Travel tech spending",
        growth: "CAGR 2024-28"
      }].map(stat => <div key={stat.label} className="text-center p-5 rounded-xl bg-primary/5 border border-primary/10 shadow-md">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
            <div className="font-semibold text-foreground text-sm">{stat.label}</div>
            <div className="text-xs text-muted-foreground mt-1">{stat.sub}</div>
            <div className="text-xs text-emerald-600 font-medium mt-1">{stat.growth}</div>
          </div>)}
      </div>
      
      {/* Regional breakdown */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[{
        region: "EMEA",
        value: "$420B",
        share: "30%",
        growth: "+18%"
      }, {
        region: "APAC",
        value: "$560B",
        share: "40%",
        growth: "+28%"
      }, {
        region: "Americas",
        value: "$420B",
        share: "30%",
        growth: "+14%"
      }].map(region => <div key={region.region} className="text-center p-4 rounded-xl bg-card border border-border/50 shadow-sm">
            <div className="text-lg font-bold text-foreground">{region.region}</div>
            <div className="text-xl font-bold text-primary">{region.value}</div>
            <div className="text-xs text-muted-foreground">{region.share} market share</div>
            <div className="text-xs text-emerald-600 font-medium">{region.growth} growth</div>
          </div>)}
      </div>
      
      {/* Growth projections */}
      <div className="bg-card rounded-xl p-5 border border-border/50 shadow-md mb-4">
        <h4 className="font-semibold text-foreground mb-3 text-center">Market Growth Projections</h4>
        <div className="grid grid-cols-4 gap-3 text-center">
          {[{
          year: "2024",
          value: "$24B"
        }, {
          year: "2025",
          value: "$29B"
        }, {
          year: "2026",
          value: "$36B"
        }, {
          year: "2028",
          value: "$52B"
        }].map(item => <div key={item.year}>
              <div className="text-lg font-bold text-primary">{item.value}</div>
              <div className="text-xs text-muted-foreground">{item.year}</div>
            </div>)}
        </div>
        <div className="text-center mt-2">
          <span className="text-xs text-muted-foreground/60">Source: Phocuswright, IATA, Skift Research 2024</span>
        </div>
      </div>
      
      <div className="bg-accent/40 rounded-xl p-4 text-center shadow-sm">
        <p className="text-base text-muted-foreground">
          <span className="font-semibold text-foreground">Digital transformation</span> is no longer optional — it's survival
        </p>
      </div>
    </div>
  </div>;

// Slide 6: How It Works - Enhanced with product metrics
const HowItWorksSlide = () => <div className="p-8 md:p-12 h-full flex flex-col justify-center overflow-y-auto">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 text-center">How It Works</h2>
    <p className="text-center text-lg text-muted-foreground mb-6">A complete product suite for every travel need</p>
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
      {/* Mini Card Showcase */}
      <div className="w-[360px] h-[280px] lg:w-[400px] lg:h-[300px]">
        <MiniCardShowcase />
      </div>
      
      {/* Products List with metrics */}
      <div className="space-y-3 flex-1 max-w-xl">
        {[{
        name: "aSuite",
        desc: "CRM, CMS & automation platform",
        metric: "50% faster workflows",
        status: "Live",
        color: "bg-emerald-500"
      }, {
        name: "aRStool",
        desc: "AI-powered PNR monitoring",
        metric: "15-20% fare savings",
        status: "Live",
        color: "bg-blue-500"
      }, {
        name: "UnifyTool",
        desc: "Multi-GDS aggregation + private fares",
        metric: "200+ airlines",
        status: "Live",
        color: "bg-violet-500"
      }, {
        name: "hRStool",
        desc: "Hotel re-shopping automation",
        metric: "10-15% savings target",
        status: "Q1 2026",
        color: "bg-amber-500"
      }].map(product => <div key={product.name} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow">
            <div className={`w-3 h-3 rounded-full ${product.color} shadow`} />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">{product.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${product.status === "Live" ? "bg-emerald-500/10 text-emerald-600" : "bg-amber-500/10 text-amber-600"}`}>{product.status}</span>
              </div>
              <p className="text-sm text-muted-foreground">{product.desc}</p>
              <p className="text-xs text-primary font-medium mt-1">{product.metric}</p>
            </div>
          </div>)}
      </div>
    </div>
    
    {/* Integration partners */}
    <div className="mt-6 text-center">
      <p className="text-xs text-muted-foreground mb-2">Integrated with</p>
      <div className="flex justify-center gap-4">
        {["Amadeus", "Sabre", "Travelport", "Mystifly", "TBO"].map(partner => <span key={partner} className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">
            {partner}
          </span>)}
      </div>
    </div>
  </div>;

// Slide 7: Target Market - Enhanced with market sizes and ICP
const TargetMarketSlide = () => {
  const markets: {
    segment: string;
    desc: string;
    size: string;
    marketSize: string;
    customers: string;
    Icon: LucideIcon;
  }[] = [{
    segment: "OTAs",
    desc: "Online Travel Agencies",
    size: "Primary",
    marketSize: "$8.2B",
    customers: "~2,500",
    Icon: Globe
  }, {
    segment: "TMCs",
    desc: "Travel Management Companies",
    size: "Primary",
    marketSize: "$4.8B",
    customers: "~4,000",
    Icon: Building2
  }, {
    segment: "Airlines",
    desc: "Direct carriers",
    size: "Primary",
    marketSize: "$3.2B",
    customers: "~400",
    Icon: Plane
  }, {
    segment: "Consolidators",
    desc: "Ticket consolidators",
    size: "Secondary",
    marketSize: "$2.1B",
    customers: "~1,200",
    Icon: ClipboardList
  }, {
    segment: "Corporate Travel",
    desc: "Enterprise platforms",
    size: "Secondary",
    marketSize: "$1.8B",
    customers: "~800",
    Icon: Briefcase
  }, {
    segment: "Travel Tech",
    desc: "White-label solutions",
    size: "Tertiary",
    marketSize: "$1.2B",
    customers: "~500",
    Icon: Zap
  }];
  return <div className="p-8 md:p-12 h-full flex flex-col justify-center overflow-y-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-center">Target Market</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto mb-6">
        {markets.map(market => <div key={market.segment} className="p-4 rounded-xl bg-gradient-to-br from-card via-accent/5 to-card border border-border/50 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 via-accent/20 to-primary/10 border border-accent/30 flex items-center justify-center">
                <market.Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{market.segment}</h3>
                <p className="text-xs text-muted-foreground">{market.desc}</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3 pt-2 border-t border-border/50">
              <div>
                <div className="text-lg font-bold text-primary">{market.marketSize}</div>
                <div className="text-xs text-muted-foreground">Market Size</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-foreground">{market.customers}</div>
                <div className="text-xs text-muted-foreground">Companies</div>
              </div>
            </div>
            <span className={`text-xs px-2 py-0.5 rounded-full mt-2 inline-block ${market.size === "Primary" ? "bg-primary/10 text-primary" : market.size === "Secondary" ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`}>{market.size}</span>
          </div>)}
      </div>
      
      {/* Ideal Customer Profile */}
      <div className="max-w-6xl mx-auto bg-card rounded-xl p-4 border border-border/50 shadow-sm">
        <h4 className="font-semibold text-foreground mb-3 text-center">Ideal Customer Profile</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
          <div>
            <div className="font-semibold text-primary">10,000+</div>
            <div className="text-xs text-muted-foreground">Annual Bookings</div>
          </div>
          <div>
            <div className="font-semibold text-primary">€1M+</div>
            <div className="text-xs text-muted-foreground">Annual Revenue</div>
          </div>
          <div>
            <div className="font-semibold text-primary">Multi-GDS</div>
            <div className="text-xs text-muted-foreground">Current Setup</div>
          </div>
          <div>
            <div className="font-semibold text-primary">B2B/B2C</div>
            <div className="text-xs text-muted-foreground">Business Model</div>
          </div>
        </div>
      </div>
    </div>;
};

// Slide 8: TAM - Enhanced with year-by-year progression
const TAMSlide = () => <div className="p-8 md:p-12 h-full flex flex-col justify-center overflow-y-auto">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-center">Total Addressable Market</h2>
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
      {/* Concentric circles visualization */}
      <div className="relative w-[240px] h-[240px] md:w-[280px] md:h-[280px]">
        <div className="absolute inset-0 rounded-full bg-primary/5 border-2 border-primary/20 shadow-lg" />
        <div className="absolute inset-10 md:inset-12 rounded-full bg-primary/10 border-2 border-primary/30 shadow-md" />
        <div className="absolute inset-20 md:inset-24 rounded-full bg-primary/20 border-2 border-primary/40 shadow flex items-center justify-center">
          <div className="text-center">
            <div className="text-lg font-bold text-primary">$850M</div>
            <div className="text-xs text-muted-foreground">SOM Y3</div>
          </div>
        </div>
      </div>
      
      {/* Market breakdown */}
      <div className="flex flex-col gap-4">
        {[{
        label: "TAM",
        value: "$24B",
        desc: "Global B2B Travel Tech",
        color: "bg-primary/20 border-primary/40"
      }, {
        label: "SAM",
        value: "$4.2B",
        desc: "OTA & TMC Platforms",
        color: "bg-primary/30 border-primary/50"
      }, {
        label: "SOM",
        value: "$850M",
        desc: "Year 3 Target",
        color: "bg-primary/40 border-primary/60"
      }].map(item => <div key={item.label} className="flex items-center gap-3 bg-card border border-border/50 rounded-lg p-4 shadow-sm">
            <div className={`w-4 h-4 rounded-full ${item.color} shrink-0`} />
            <div>
              <div className="text-xl font-bold text-primary">{item.value}</div>
              <div className="text-xs text-muted-foreground">{item.label} — {item.desc}</div>
            </div>
          </div>)}
      </div>
    </div>
    
    {/* Year-by-Year Progression */}
    <div className="max-w-6xl mx-auto mt-6">
      <h4 className="text-sm font-semibold text-foreground mb-3 text-center">SOM Progression & Market Share Target</h4>
      <div className="grid grid-cols-5 gap-3">
        {[{
        year: "Y1",
        som: "$12M",
        share: "0.3%",
        customers: "25"
      }, {
        year: "Y2",
        som: "$85M",
        share: "2%",
        customers: "120"
      }, {
        year: "Y3",
        som: "$850M",
        share: "20%",
        customers: "500"
      }, {
        year: "Y4",
        som: "$1.4B",
        share: "33%",
        customers: "850"
      }, {
        year: "Y5",
        som: "$2.1B",
        share: "50%",
        customers: "1,200"
      }].map(item => <div key={item.year} className="text-center p-3 rounded-lg bg-card border border-border/50 shadow-sm">
            <div className="text-xs font-medium text-muted-foreground">{item.year}</div>
            <div className="text-lg font-bold text-primary">{item.som}</div>
            <div className="text-xs text-muted-foreground">{item.share} share</div>
            <div className="text-xs text-emerald-600">{item.customers} clients</div>
          </div>)}
      </div>
      <div className="text-center mt-2 text-xs text-muted-foreground/60">
        Assumptions: 15% annual market growth, 2x customer expansion, 85% retention
      </div>
    </div>
  </div>;

// Slide 9: Revenue Model - Enhanced with projections and unit economics
const RevenueModelSlide = () => {
  const models: {
    title: string;
    desc: string;
    revenue: string;
    Icon: LucideIcon;
  }[] = [{
    title: "SaaS Subscriptions",
    desc: "Tiered monthly/annual pricing",
    revenue: "40%",
    Icon: CreditCard
  }, {
    title: "Transaction Fees",
    desc: "Per-booking fee (€0.50-2.00)",
    revenue: "35%",
    Icon: CircleDollarSign
  }, {
    title: "Enterprise Licensing",
    desc: "Custom implementations",
    revenue: "15%",
    Icon: Landmark
  }, {
    title: "Implementation",
    desc: "Onboarding & support",
    revenue: "10%",
    Icon: Wrench
  }];
  return <div className="p-8 md:p-12 h-full flex flex-col justify-center overflow-y-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-center">Revenue Model</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-6">
        {models.map(model => <div key={model.title} className="p-4 rounded-xl bg-gradient-to-br from-card via-accent/5 to-card border border-border/50 shadow-sm text-center">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 via-accent/20 to-primary/10 border border-accent/30 flex items-center justify-center mx-auto mb-2">
              <model.Icon className="w-5 h-5 text-primary" />
            </div>
            <div className="text-xl font-bold text-primary mb-1">{model.revenue}</div>
            <h3 className="font-semibold text-sm text-foreground">{model.title}</h3>
            <p className="text-xs text-muted-foreground">{model.desc}</p>
          </div>)}
      </div>
      
      {/* 3-Year Revenue Projections */}
      <div className="max-w-6xl mx-auto bg-card rounded-xl p-4 border border-border/50 shadow-sm mb-4">
        <h4 className="font-semibold text-foreground mb-3 text-center">3-Year Revenue Projections</h4>
        <div className="grid grid-cols-3 gap-4 text-center">
          {[{
          year: "Year 1",
          arr: "€480K",
          mrr: "€40K",
          growth: "-"
        }, {
          year: "Year 2",
          arr: "€2.4M",
          mrr: "€200K",
          growth: "+400%"
        }, {
          year: "Year 3",
          arr: "€8.5M",
          mrr: "€708K",
          growth: "+254%"
        }].map(item => <div key={item.year} className="p-3 rounded-lg bg-muted/30">
              <div className="text-sm font-medium text-muted-foreground">{item.year}</div>
              <div className="text-xl font-bold text-primary">{item.arr}</div>
              <div className="text-xs text-muted-foreground">ARR ({item.mrr} MRR)</div>
              <div className="text-xs text-emerald-600 font-medium">{item.growth}</div>
            </div>)}
        </div>
      </div>
      
      {/* Unit Economics */}
      <div className="max-w-6xl mx-auto bg-card rounded-xl p-4 border border-border/50 shadow-sm">
        <h4 className="font-semibold text-foreground mb-3 text-center">Unit Economics</h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-center">
          {[{
          label: "CAC",
          value: "€2,400",
          note: "Customer Acquisition"
        }, {
          label: "LTV",
          value: "€28,800",
          note: "Lifetime Value"
        }, {
          label: "LTV:CAC",
          value: "12:1",
          note: "Ratio"
        }, {
          label: "ARPU",
          value: "€800",
          note: "Per Month"
        }, {
          label: "Payback",
          value: "3 mo",
          note: "Period"
        }].map(item => <div key={item.label}>
              <div className="text-lg font-bold text-primary">{item.value}</div>
              <div className="text-xs text-foreground font-medium">{item.label}</div>
              <div className="text-xs text-muted-foreground">{item.note}</div>
            </div>)}
        </div>
      </div>
    </div>;
};

// Slide 10: Go-to-Market - Enhanced with KPIs and milestones
const GTMSlide = () => <div className="p-8 md:p-12 h-full flex flex-col justify-center overflow-y-auto">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-center">Go-to-Market Strategy</h2>
    <div className="flex flex-col md:flex-row gap-4 max-w-6xl mx-auto mb-6">
      {[{
      phase: "Phase 1",
      time: "0-12 months",
      title: "Foundation",
      items: ["10 beta partners", "Product-market fit", "€100K ARR", "5 case studies"],
      kpi: "€100K ARR",
      team: "8 FTE"
    }, {
      phase: "Phase 2",
      time: "12-24 months",
      title: "Expansion",
      items: ["50 paying customers", "Channel partnerships", "€1M+ ARR", "EMEA expansion"],
      kpi: "€2.4M ARR",
      team: "25 FTE"
    }, {
      phase: "Phase 3",
      time: "24-36 months",
      title: "Scale",
      items: ["200+ customers", "US market entry", "€8M+ ARR", "Series A ready"],
      kpi: "€8.5M ARR",
      team: "60 FTE"
    }].map(phase => <div key={phase.phase} className="flex-1">
          <div className="p-4 rounded-xl border bg-gradient-to-br from-card via-accent/5 to-card border-border/50 shadow-md h-full">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-1 rounded-md text-xs font-semibold bg-primary text-primary-foreground">{phase.phase}</span>
              <span className="text-xs text-muted-foreground">{phase.time}</span>
            </div>
            <h3 className="font-semibold text-lg text-foreground mb-2">{phase.title}</h3>
            <ul className="space-y-1 mb-3">
              {phase.items.map(item => <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                  {item}
                </li>)}
            </ul>
            <div className="pt-2 border-t border-border/50 flex justify-between text-xs">
              <div>
                <span className="text-muted-foreground">Target: </span>
                <span className="font-semibold text-primary">{phase.kpi}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Team: </span>
                <span className="font-semibold text-foreground">{phase.team}</span>
              </div>
            </div>
          </div>
        </div>)}
    </div>
    
    {/* Channel Mix */}
    <div className="max-w-6xl mx-auto bg-card rounded-xl p-4 border border-border/50 shadow-sm">
      <h4 className="font-semibold text-foreground mb-3 text-center">Customer Acquisition Channels</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-sm">
        {[{
        channel: "Direct Sales",
        share: "45%",
        note: "Enterprise focus"
      }, {
        channel: "Partners",
        share: "25%",
        note: "Referral network"
      }, {
        channel: "Inbound",
        share: "20%",
        note: "Content & SEO"
      }, {
        channel: "Events",
        share: "10%",
        note: "Trade shows"
      }].map(item => <div key={item.channel}>
            <div className="text-lg font-bold text-primary">{item.share}</div>
            <div className="font-medium text-foreground">{item.channel}</div>
            <div className="text-xs text-muted-foreground">{item.note}</div>
          </div>)}
      </div>
    </div>
  </div>;

// Slide 11: Competition - Enhanced with feature matrix
const CompetitionSlide = () => <div className="p-8 md:p-12 h-full flex flex-col justify-center overflow-y-auto">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-center">Competitive Landscape</h2>
    <div className="max-w-6xl mx-auto">
      {/* Competitor comparison */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 rounded-xl bg-muted/50 text-center shadow-sm">
          <h4 className="font-semibold text-lg text-foreground mb-1">Legacy Providers</h4>
          <p className="text-sm text-muted-foreground">Amadeus, Sabre, Travelport</p>
          <p className="text-xs text-red-500 mt-2 font-medium">Slow, expensive, complex</p>
          <div className="text-xs text-muted-foreground mt-1">€50K+ annual contracts</div>
        </div>
        <div className="p-4 rounded-xl bg-primary/10 border-2 border-primary text-center shadow-md scale-105">
          <h4 className="font-semibold text-lg text-primary mb-1">Velaree</h4>
          <p className="text-sm text-muted-foreground">Unified, AI-first platform</p>
          <p className="text-xs text-emerald-600 mt-2 font-medium">Modern, affordable, complete</p>
          <div className="text-xs text-primary mt-1">Starting €500/month</div>
        </div>
        <div className="p-4 rounded-xl bg-muted/50 text-center shadow-sm">
          <h4 className="font-semibold text-lg text-foreground mb-1">Point Solutions</h4>
          <p className="text-sm text-muted-foreground">Niche tools, aggregators</p>
          <p className="text-xs text-amber-600 mt-2 font-medium">Fragmented, limited</p>
          <div className="text-xs text-muted-foreground mt-1">Multiple vendors needed</div>
        </div>
      </div>
      
      {/* Feature comparison matrix */}
      <div className="bg-card rounded-xl p-4 border border-border/50 shadow-sm mb-4 overflow-x-auto">
        <h4 className="font-semibold text-foreground mb-3 text-center">Feature Comparison</h4>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50">
              <th className="text-left py-2 text-muted-foreground font-medium">Feature</th>
              <th className="text-center py-2 text-muted-foreground font-medium">Legacy</th>
              <th className="text-center py-2 text-primary font-medium">Velaree</th>
              <th className="text-center py-2 text-muted-foreground font-medium">Point Solutions</th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {[{
            feature: "Multi-GDS Access",
            legacy: "Limited",
            velaree: "Full",
            point: "Single"
          }, {
            feature: "AI Automation",
            legacy: "None",
            velaree: "Built-in",
            point: "Limited"
          }, {
            feature: "Integration Time",
            legacy: "6-12 mo",
            velaree: "2-4 wk",
            point: "1-3 mo"
          }, {
            feature: "Real-time Analytics",
            legacy: "Basic",
            velaree: "Advanced",
            point: "None"
          }, {
            feature: "API-First",
            legacy: "No",
            velaree: "Yes",
            point: "Partial"
          }].map(row => <tr key={row.feature} className="border-b border-border/30">
                <td className="py-2 font-medium">{row.feature}</td>
                <td className="py-2 text-center text-red-500">{row.legacy}</td>
                <td className="py-2 text-center text-emerald-600 font-semibold">{row.velaree}</td>
                <td className="py-2 text-center text-amber-600">{row.point}</td>
              </tr>)}
          </tbody>
        </table>
      </div>
      
      {/* Differentiators */}
      <div className="flex flex-wrap justify-center gap-2">
        {["Unified Platform", "AI-First", "Modern Stack", "Fair Pricing", "Fast Integration", "24/7 Support"].map(diff => <span key={diff} className="px-3 py-1.5 rounded-full bg-gradient-to-r from-primary via-accent/40 to-primary border border-accent/50 text-xs font-medium shadow-sm text-primary-foreground bg-secondary-foreground">{diff}</span>)}
      </div>
    </div>
  </div>;

// Slide 12: The Ask - Enhanced with runway and milestones
const AskSlide = () => <div className="p-8 md:p-12 h-full flex flex-col justify-center overflow-y-auto">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 text-center">The Ask</h2>
    <p className="text-center text-lg text-muted-foreground mb-6">Pre-seed investment to accelerate growth</p>
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-6">
        <div className="text-5xl md:text-6xl font-bold text-primary mb-2">€400,000</div>
        <p className="text-lg text-muted-foreground">Pre-seed / Seed Investment</p>
        <p className="text-sm text-muted-foreground mt-1">18-month runway • Target: €100K ARR</p>
      </div>
      
      {/* Allocation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[{
        label: "Product Dev",
        amount: "€160K",
        percent: "40%",
        color: "bg-blue-500"
      }, {
        label: "Sales & Mktg",
        amount: "€120K",
        percent: "30%",
        color: "bg-violet-500"
      }, {
        label: "Operations",
        amount: "€80K",
        percent: "20%",
        color: "bg-emerald-500"
      }, {
        label: "Team",
        amount: "€40K",
        percent: "10%",
        color: "bg-amber-500"
      }].map(allocation => <div key={allocation.label} className="text-center p-4 rounded-xl bg-card border border-border/50 shadow-sm">
            <div className={`w-12 h-12 rounded-full ${allocation.color} mx-auto mb-2 flex items-center justify-center text-white text-sm font-bold shadow-md`}>
              {allocation.percent}
            </div>
            <div className="font-semibold text-foreground text-lg">{allocation.amount}</div>
            <div className="text-xs text-muted-foreground">{allocation.label}</div>
          </div>)}
      </div>
      
      {/* Milestones */}
      <div className="bg-card rounded-xl p-4 border border-border/50 shadow-sm mb-4">
        <h4 className="font-semibold text-foreground mb-3 text-center">Key Milestones (18 months)</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-sm">
          {[{
          month: "M6",
          milestone: "Product Launch",
          kpi: "5 clients"
        }, {
          month: "M9",
          milestone: "€25K MRR",
          kpi: "15 clients"
        }, {
          month: "M12",
          milestone: "€50K MRR",
          kpi: "30 clients"
        }, {
          month: "M18",
          milestone: "€100K ARR",
          kpi: "Series A ready"
        }].map(item => <div key={item.month} className="p-2 rounded-lg bg-muted/30">
              <div className="text-xs font-medium text-muted-foreground">{item.month}</div>
              <div className="font-semibold text-primary">{item.milestone}</div>
              <div className="text-xs text-muted-foreground">{item.kpi}</div>
            </div>)}
        </div>
      </div>
      
      {/* Terms & Burn Rate */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-muted/30 rounded-xl p-4 text-center">
          <h4 className="text-sm font-semibold text-foreground mb-2">Monthly Burn Rate</h4>
          <div className="text-xl font-bold text-primary">€22K</div>
          <div className="text-xs text-muted-foreground">Avg. over 18 months</div>
        </div>
        <div className="bg-muted/30 rounded-xl p-4 text-center">
          <h4 className="text-sm font-semibold text-foreground mb-2">Runway</h4>
          <div className="text-xl font-bold text-primary">18 months</div>
          <div className="text-xs text-muted-foreground">To Series A</div>
        </div>
      </div>
    </div>
  </div>;

// Slide 13: Team - Enhanced with backgrounds and growth
const TeamSlide = () => <div className="p-8 md:p-12 h-full flex flex-col justify-center overflow-y-auto">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-center">The Team</h2>
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
      {[{
      name: "Mihail Mazil",
      role: "CEO",
      subtitle: "Strategy & Vision",
      bg: "bg-primary",
      linkedin: "https://www.linkedin.com/in/mihail-m-456922386/",
      experience: "10+ years travel tech",
      skills: ["Product Strategy", "Business Dev", "Fundraising"]
    }, {
      name: "Mihail Sinitari",
      role: "COO",
      subtitle: "Operations & Growth",
      bg: "bg-violet-500",
      linkedin: "https://www.linkedin.com/in/mihailmarksn/",
      experience: "8+ years operations",
      skills: ["Operations", "Partnerships", "Scaling"]
    }].map(member => <div key={member.name} className="text-center p-4 rounded-xl bg-card border border-border/50 shadow-sm">
          <div className={`w-20 h-20 rounded-full ${member.bg} mx-auto mb-3 flex items-center justify-center text-white text-3xl font-bold shadow-lg`}>
            {member.name.split(' ')[0].charAt(0)}
          </div>
          <h3 className="font-semibold text-xl text-foreground">{member.name}</h3>
          <p className="text-sm text-muted-foreground">{member.role} • {member.subtitle}</p>
          <p className="text-xs text-primary font-medium mt-1">{member.experience}</p>
          <div className="flex flex-wrap justify-center gap-1 mt-2">
            {member.skills.map(skill => <span key={skill} className="px-2 py-0.5 rounded-full bg-muted text-xs text-muted-foreground">{skill}</span>)}
          </div>
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 rounded-full bg-[#0A66C2] hover:bg-[#004182] text-white text-xs font-medium transition-colors shadow-sm">
            <Linkedin className="w-3.5 h-3.5" />
            LinkedIn
          </a>
        </div>)}
    </div>
    
    {/* Hiring Roadmap */}
    <div className="max-w-4xl mx-auto bg-card rounded-xl p-4 border border-border/50 shadow-sm mb-4">
      <h4 className="font-semibold text-foreground mb-2 text-center">Hiring Roadmap</h4>
      <div className="grid grid-cols-4 gap-2 text-center text-xs">
        {[{
        role: "Lead Engineer",
        timing: "Q1 2025"
      }, {
        role: "Sales Lead",
        timing: "Q2 2025"
      }, {
        role: "Product Manager",
        timing: "Q2 2025"
      }, {
        role: "Customer Success",
        timing: "Q3 2025"
      }].map(hire => <div key={hire.role} className="p-2 rounded-lg bg-muted/30">
            <div className="font-medium text-foreground">{hire.role}</div>
            <div className="text-muted-foreground">{hire.timing}</div>
          </div>)}
      </div>
    </div>
    
    <div className="text-center">
      <img src="/lovable-uploads/velaree-logo-text.png" alt="Velaree" className="h-16 w-auto mx-auto mb-2" />
      <p className="text-sm text-muted-foreground">velaree.com • contact@velaree.com</p>
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
  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
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
        <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-muted/30 backdrop-blur-sm shrink-0">
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/velaree-icon.png" alt="Velaree Logo" className="h-10 w-auto" />
            <span className="text-base font-medium text-foreground">Pitch Deck</span>
            <span className="text-sm text-muted-foreground hidden md:inline">Investor Presentation</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={onDownloadRequest} className="text-muted-foreground hover:text-foreground">
              <Download className="w-4 h-4 mr-1.5" />
              <span className="hidden md:inline">Download</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsFullscreen(!isFullscreen)} className="text-muted-foreground hover:text-foreground h-8 w-8">
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-muted-foreground hover:text-foreground h-8 w-8">
              <X className="w-4 h-4" />
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
          <Button variant="ghost" size="icon" onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm border border-border/50 hover:bg-card shadow-lg">
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm border border-border/50 hover:bg-card shadow-lg">
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Footer with slide indicators */}
        <div className="px-4 py-3 border-t border-border/50 bg-muted/30 backdrop-blur-sm flex items-center justify-between shrink-0">
          <span className="text-sm font-medium text-muted-foreground min-w-[120px]">
            {slides[currentSlide].title}
          </span>
          <div className="flex items-center gap-1.5">
            {slides.map((_, i) => <button key={i} onClick={() => setCurrentSlide(i)} className={cn("h-2 rounded-full transition-all duration-300", i === currentSlide ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2")} />)}
          </div>
          <span className="text-sm font-medium text-muted-foreground min-w-[120px] text-right">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </DialogContent>
    </Dialog>;
};
export default PitchDeckViewer;
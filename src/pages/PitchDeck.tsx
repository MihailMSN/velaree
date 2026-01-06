import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ChevronLeft, ChevronRight, ArrowLeft, Download, Maximize2, Minimize2, Settings2, Unlink, Package, Timer, Plug, Bot, BarChart3, Globe, Building2, Plane, ClipboardList, Briefcase, Zap, CreditCard, CircleDollarSign, Landmark, Wrench, Linkedin, TrendingUp, Users, DollarSign, Target, Award, CheckCircle2, ArrowRight, Calendar, Rocket, Shield, Clock, Percent, PieChart, X, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import MiniCardShowcase from "@/components/pitchdeck/MiniCardShowcase";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend, PieChart as RechartsPie, Pie, Cell, LineChart, Line } from "recharts";

interface Slide {
  id: number;
  title: string;
  content: React.ReactNode;
}

// Slide 1: Cover - Enhanced with key metrics and stage info
const CoverSlide = () => <div className="flex flex-col items-center justify-center h-full text-center p-10 md:p-16 lg:p-20 bg-gradient-to-br from-background via-background to-accent/20">
    <div className="mb-8">
      <img src="/lovable-uploads/velaree-logo-text.png" alt="Velaree" className="h-24 md:h-32 lg:h-40 w-auto" />
    </div>
    
    <div className="flex items-center gap-4 mb-6">
      <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
        Est. 2024
      </span>
      <span className="px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium">
        Pre-Seed Stage
      </span>
    </div>
    
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground mb-4">
      Next-Generation Travel Technology
    </h2>
    <p className="text-lg md:text-xl text-muted-foreground/70 max-w-2xl mb-10">
      Unified APIs • AI Automation • Real-time Analytics
    </p>
    
    {/* Key highlights bar */}
    <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-10 py-6 px-10 rounded-2xl bg-card/50 border border-border/50">
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
    }].map(item => <div key={item.label} className="text-center px-2">
          <div className="text-2xl md:text-3xl font-bold text-primary">{item.value}</div>
          <div className="text-sm text-muted-foreground mt-1">{item.label}</div>
        </div>)}
    </div>
    
    <div className="flex items-center gap-3 text-base text-muted-foreground">
      <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
      Investor Presentation 2025
    </div>
    
    <div className="mt-8 text-sm text-muted-foreground/60">
      contact@velaree.com • velaree.com
    </div>
  </div>;

// Slide 2: Vision - Enhanced with timeline and expanded metrics
const VisionSlide = () => <div className="p-10 md:p-14 lg:p-16 h-full flex flex-col justify-center bg-gradient-to-br from-background to-accent/20 overflow-y-auto">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-center">Our Vision</h2>
    <div className="max-w-6xl mx-auto">
      <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-10 text-center max-w-4xl mx-auto">
        "Empowering travel businesses with <span className="text-primary font-semibold">intelligent technology</span> that transforms operations, reduces costs, and unlocks new revenue opportunities."
      </p>
      
      {/* Expanded metrics grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-6 mb-10">
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
      }].map(stat => <div key={stat.label} className="text-center p-5 md:p-6 rounded-xl bg-card border border-border/50 shadow-sm">
            <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
            <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
            <div className="text-xs text-emerald-600 mt-2 font-medium">{stat.growth}</div>
          </div>)}
      </div>
      
      {/* Vision Timeline */}
      <div className="bg-card rounded-2xl border border-border/50 p-6 md:p-8 shadow-lg">
        <h3 className="text-lg font-semibold text-foreground mb-6 text-center">Vision Timeline</h3>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
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
        }].map((item, i) => <div key={item.year} className="flex items-center gap-4 flex-1">
              <div className="text-center flex-1 py-2">
                <div className="text-xl font-bold text-primary">{item.year}</div>
                <div className="text-sm text-foreground font-medium mt-1">{item.milestone}</div>
                <span className={`text-xs px-3 py-1 rounded-full mt-2 inline-block ${item.status === "In Progress" ? "bg-emerald-500/10 text-emerald-600" : item.status === "Planned" ? "bg-blue-500/10 text-blue-600" : "bg-violet-500/10 text-violet-600"}`}>{item.status}</span>
              </div>
              {i < 4 && <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block" />}
            </div>)}
        </div>
      </div>
    </div>
  </div>;

// Slide 3: Market Problem - Enhanced with quantified impacts and pie chart
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

  const inefficiencyData = [
    { name: 'Manual Processes', value: 38, color: 'hsl(0, 84%, 60%)' },
    { name: 'System Fragmentation', value: 27, color: 'hsl(15, 84%, 55%)' },
    { name: 'Limited Inventory', value: 22, color: 'hsl(30, 84%, 50%)' },
    { name: 'Performance Issues', value: 13, color: 'hsl(45, 84%, 45%)' },
  ];

  return (
    <div className="p-8 md:p-12 lg:p-14 h-full flex flex-col justify-center overflow-y-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-center">Market Problem</h2>
      
      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto mb-8">
        {/* Problem Cards */}
        <div className="grid grid-cols-2 gap-5 flex-1">
          {problems.map(item => (
            <div key={item.title} className="flex gap-4 p-5 rounded-xl bg-gradient-to-br from-card via-accent/5 to-card border border-border/50 hover:border-accent/40 shadow-md transition-all">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 via-accent/20 to-primary/10 border border-accent/30 flex items-center justify-center shrink-0">
                <item.Icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground text-base mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{item.desc}</p>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-bold text-red-500">{item.impact}</span>
                  <span className="text-xs text-muted-foreground/60 truncate">{item.source}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pie Chart */}
        <div className="bg-card rounded-xl p-6 border border-border/50 shadow-sm lg:w-[320px]">
          <h4 className="text-base font-semibold text-foreground mb-4 text-center">Operational Inefficiency Breakdown</h4>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPie>
                <Pie
                  data={inefficiencyData}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={75}
                  paddingAngle={3}
                  dataKey="value"
                  label={({ name, value }) => `${value}%`}
                  labelLine={false}
                >
                  {inefficiencyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                  formatter={(value: number) => [`${value}%`, 'Share']}
                />
              </RechartsPie>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {inefficiencyData.map((item) => (
              <div key={item.name} className="flex items-center gap-2 text-xs">
                <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                <span className="text-muted-foreground truncate">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Cost of Inaction Summary */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-red-500/10 via-red-500/5 to-red-500/10 rounded-xl p-6 border border-red-500/20">
          <h4 className="text-base font-semibold text-foreground mb-4 text-center">Cost of Inaction</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-red-500">$12.4B</div>
              <div className="text-xs text-muted-foreground mt-1">Total Industry Loss</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-500">38%</div>
              <div className="text-xs text-muted-foreground mt-1">Operational Waste</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-500">4.2hrs</div>
              <div className="text-xs text-muted-foreground mt-1">Avg. Daily Manual Work</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-500">67%</div>
              <div className="text-xs text-muted-foreground mt-1">Staff Turnover Related</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
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
  return <div className="p-10 md:p-14 lg:p-16 h-full flex flex-col justify-center overflow-y-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 text-center">Our Solution</h2>
      <p className="text-center text-lg text-muted-foreground mb-10">One unified platform for the entire travel technology stack</p>
      
      <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-10">
        {solutions.map(item => <div key={item.title} className="rounded-xl p-6 md:p-8 text-center bg-gradient-to-br from-card via-accent/5 to-card border border-border/50 shadow-md">
            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/10 via-accent/20 to-primary/10 border border-accent/30 flex items-center justify-center mx-auto mb-5">
              <item.Icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
            <div className="pt-4 border-t border-border/50">
              <div className="text-3xl font-bold text-primary">{item.metric}</div>
              <div className="text-sm text-muted-foreground mt-1">{item.metricLabel}</div>
            </div>
          </div>)}
      </div>
      
      {/* Before/After Comparison */}
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-red-500/5 rounded-xl p-6 border border-red-500/20">
            <h4 className="font-semibold text-red-600 mb-4 flex items-center gap-2 text-lg">
              <X className="w-5 h-5" /> Before Velaree
            </h4>
            <ul className="space-y-3 text-base text-muted-foreground">
              <li>• 6-12 months integration time</li>
              <li>• 5+ separate vendor contracts</li>
              <li>• Manual reconciliation daily</li>
              <li>• Limited fare visibility</li>
            </ul>
          </div>
          <div className="bg-emerald-500/5 rounded-xl p-6 border border-emerald-500/20">
            <h4 className="font-semibold text-emerald-600 mb-4 flex items-center gap-2 text-lg">
              <CheckCircle2 className="w-5 h-5" /> After Velaree
            </h4>
            <ul className="space-y-3 text-base text-muted-foreground">
              <li>• 2-4 weeks go-live</li>
              <li>• Single unified contract</li>
              <li>• Automated real-time sync</li>
              <li>• 200+ airline access</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Tech Stack */}
      <div className="max-w-6xl mx-auto mt-8">
        <div className="flex flex-wrap justify-center gap-3">
          {["AWS", "Kubernetes", "PostgreSQL", "Redis", "GraphQL", "REST API"].map(tech => <span key={tech} className="px-4 py-1.5 rounded-full bg-muted text-sm font-medium text-muted-foreground">
              {tech}
            </span>)}
        </div>
      </div>
    </div>;
};

// Slide 5: Industry Demand - Enhanced with regional data and projections
const IndustryDemandSlide = () => <div className="p-10 md:p-14 lg:p-16 h-full flex flex-col justify-center overflow-y-auto">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10 text-center">Industry Demand</h2>
    <div className="max-w-6xl mx-auto">
      {/* Primary stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 mb-10">
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
      }].map(stat => <div key={stat.label} className="text-center p-6 rounded-xl bg-primary/5 border border-primary/10 shadow-md">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-3">{stat.value}</div>
            <div className="font-semibold text-foreground text-base">{stat.label}</div>
            <div className="text-sm text-muted-foreground mt-2">{stat.sub}</div>
            <div className="text-sm text-emerald-600 font-medium mt-2">{stat.growth}</div>
          </div>)}
      </div>
      
      {/* Regional breakdown */}
      <div className="grid grid-cols-3 gap-5 md:gap-6 mb-10">
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
      }].map(region => <div key={region.region} className="text-center p-5 md:p-6 rounded-xl bg-card border border-border/50 shadow-md">
            <div className="font-semibold text-foreground mb-2 text-lg">{region.region}</div>
            <div className="text-2xl md:text-3xl font-bold text-primary">{region.value}</div>
            <div className="flex items-center justify-center gap-3 mt-3 text-sm">
              <span className="text-muted-foreground">{region.share} share</span>
              <span className="text-emerald-600 font-medium">{region.growth}</span>
            </div>
          </div>)}
      </div>
      
      {/* Key drivers */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        {[{
        Icon: Globe,
        title: "Digital Transformation",
        desc: "Accelerated adoption"
      }, {
        Icon: TrendingUp,
        title: "Post-Covid Recovery",
        desc: "Travel demand surge"
      }, {
        Icon: Users,
        title: "Workforce Shortage",
        desc: "Automation demand"
      }, {
        Icon: Zap,
        title: "Real-time Expectations",
        desc: "Consumer behavior shift"
      }].map(driver => <div key={driver.title} className="flex items-start gap-3 p-4 md:p-5 rounded-lg bg-muted/50 border border-border/30">
            <driver.Icon className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <div>
              <div className="font-medium text-foreground text-sm">{driver.title}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{driver.desc}</div>
            </div>
          </div>)}
      </div>
    </div>
  </div>;

// Slide 6: How It Works (Products) - RSTool as primary focus
const ProductsSlide = () => <div className="p-10 md:p-14 lg:p-16 h-full flex flex-col justify-center overflow-y-auto">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-center">How It Works</h2>
    <p className="text-center text-lg text-muted-foreground mb-8">RSTool first, then expanding to a full product suite</p>
    
    <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto items-start">
      {/* Primary Focus: RSTool */}
      <div className="flex-1">
        <div className="mb-4 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-sm font-medium">Building Now</span>
          <span className="text-sm text-muted-foreground">Phase 1</span>
        </div>
        <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/10 via-card to-card border-2 border-emerald-500/30 shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shrink-0">
              <CreditCard className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">RSTool</h3>
              <span className="text-sm text-emerald-600 font-medium">Smart PNR Repricing</span>
            </div>
          </div>
          <p className="text-muted-foreground mb-4">
            Automatically monitor and apply lower fares to existing bookings, saving travel agencies 15-30% per ticket on average.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {["AI-powered fare monitoring", "Automated rebooking", "Real-time savings alerts", "GDS integration"].map(feature => (
              <div key={feature} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Future Roadmap */}
      <div className="lg:w-[340px]">
        <div className="mb-4 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium">Future Roadmap</span>
        </div>
        <div className="space-y-3">
          {[{
            name: "A-Suite",
            tagline: "AI-Powered Automation",
            desc: "Automate ticketing, changes, refunds",
            Icon: Bot,
            color: "from-violet-500/70 to-purple-500/70",
            phase: "Year 2"
          }, {
            name: "UnifyTool",
            tagline: "Universal GDS Integration",
            desc: "Single API for all GDS and 200+ airlines",
            Icon: Plug,
            color: "from-blue-500/70 to-cyan-500/70",
            phase: "Year 2-3"
          }, {
            name: "HRSTool",
            tagline: "Hospitality Intelligence",
            desc: "Hotel rate optimization",
            Icon: Building2,
            color: "from-amber-500/70 to-orange-500/70",
            phase: "Year 3+"
          }].map(product => (
            <div key={product.name} className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border/50 opacity-80 hover:opacity-100 transition-opacity">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${product.color} flex items-center justify-center shrink-0`}>
                <product.Icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-semibold text-foreground text-sm">{product.name}</h4>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">{product.phase}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">{product.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground/70 mt-4 text-center italic">
          Funded by RSTool success
        </p>
      </div>
    </div>
  </div>;

// Slide 7: Target Market - Enhanced with market segments
const TargetMarketSlide = () => <div className="p-10 md:p-14 lg:p-16 h-full flex flex-col justify-center overflow-y-auto">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10 text-center">Target Market</h2>
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-10">
        {[{
        Icon: Plane,
        segment: "Travel Agencies",
        size: "45,000+",
        region: "in Europe",
        pain: "Manual GDS workflows",
        potential: "$180M TAM"
      }, {
        Icon: ClipboardList,
        segment: "TMCs",
        size: "2,500+",
        region: "Corporate specialists",
        pain: "Multi-source consolidation",
        potential: "$420M TAM"
      }, {
        Icon: Briefcase,
        segment: "Tour Operators",
        size: "8,000+",
        region: "Package specialists",
        pain: "Inventory management",
        potential: "$240M TAM"
      }].map(market => <div key={market.segment} className="p-6 rounded-xl bg-card border border-border/50 shadow-md">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <market.Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">{market.segment}</h3>
            <div className="text-3xl font-bold text-primary mb-1">{market.size}</div>
            <div className="text-sm text-muted-foreground mb-4">{market.region}</div>
            <div className="pt-4 border-t border-border/50">
              <div className="text-xs text-muted-foreground mb-2">Primary Pain Point:</div>
              <div className="text-sm font-medium text-foreground mb-3">{market.pain}</div>
              <div className="text-sm font-bold text-emerald-600">{market.potential}</div>
            </div>
          </div>)}
      </div>
      
      {/* Ideal Customer Profile */}
      <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-xl p-6 md:p-8 border border-primary/20">
        <h4 className="text-lg font-semibold text-foreground mb-5 text-center">Ideal Customer Profile (ICP)</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
          <div>
            <div className="text-2xl font-bold text-primary">€500K+</div>
            <div className="text-sm text-muted-foreground mt-1">Annual GDS Spend</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">10+</div>
            <div className="text-sm text-muted-foreground mt-1">Booking Agents</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">2+</div>
            <div className="text-sm text-muted-foreground mt-1">GDS Connections</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">50K+</div>
            <div className="text-sm text-muted-foreground mt-1">Annual Bookings</div>
          </div>
        </div>
      </div>
    </div>
  </div>;

// Slide 8: TAM/SAM/SOM - Enhanced with growth projections
const TAMSlide = () => {
  const growthData = [
    { year: '2024', TAM: 840, SAM: 168, SOM: 4.2 },
    { year: '2025', TAM: 924, SAM: 203, SOM: 12.2 },
    { year: '2026', TAM: 1017, SAM: 244, SOM: 29.3 },
    { year: '2027', TAM: 1119, SAM: 291, SOM: 52.4 },
    { year: '2028', TAM: 1231, SAM: 349, SOM: 87.3 },
  ];

  const revenueData = [
    { year: '2025', revenue: 0.8, customers: 15 },
    { year: '2026', revenue: 2.4, customers: 45 },
    { year: '2027', revenue: 6.8, customers: 120 },
    { year: '2028', revenue: 14.2, customers: 280 },
  ];

  return (
    <div className="p-10 md:p-14 lg:p-16 h-full flex flex-col justify-center overflow-y-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10 text-center">Market Opportunity</h2>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 mb-10">
          {/* TAM/SAM/SOM Visualization */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="relative w-[220px] h-[220px]">
              {/* TAM Circle */}
              <div className="absolute inset-0 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                <span className="absolute -top-8 text-sm font-medium text-foreground">TAM: $840M</span>
              </div>
              {/* SAM Circle */}
              <div className="absolute inset-8 rounded-full bg-primary/20 border-2 border-primary/30 flex items-center justify-center">
                <span className="absolute -top-6 text-xs font-medium text-foreground">SAM: $168M</span>
              </div>
              {/* SOM Circle */}
              <div className="absolute inset-16 rounded-full bg-primary border-2 border-primary flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">SOM<br/>$4.2M</span>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">European Travel Tech Market</p>
              <p className="text-xs text-muted-foreground/60 mt-1">Focus: Mid-market agencies & TMCs</p>
            </div>
          </div>

          {/* Market Growth Chart */}
          <div className="flex-1 bg-card rounded-xl p-6 border border-border/50 shadow-md">
            <h4 className="text-base font-semibold text-foreground mb-4">Market Growth Projection</h4>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={growthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="year" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                  <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                    formatter={(value: number) => [`$${value}M`, '']}
                  />
                  <Area type="monotone" dataKey="TAM" stackId="1" stroke="hsl(var(--primary) / 0.3)" fill="hsl(var(--primary) / 0.1)" />
                  <Area type="monotone" dataKey="SAM" stackId="2" stroke="hsl(var(--primary) / 0.6)" fill="hsl(var(--primary) / 0.3)" />
                  <Area type="monotone" dataKey="SOM" stackId="3" stroke="hsl(var(--primary))" fill="hsl(var(--primary) / 0.6)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Revenue Projections */}
        <div className="bg-card rounded-xl p-6 border border-border/50 shadow-md">
          <h4 className="text-base font-semibold text-foreground mb-4">Revenue & Customer Growth</h4>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="year" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis yAxisId="left" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                />
                <Legend />
                <Bar yAxisId="left" dataKey="revenue" name="Revenue (€M)" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                <Bar yAxisId="right" dataKey="customers" name="Customers" fill="hsl(142, 76%, 36%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

// Slide 9: Revenue Model - Enhanced with unit economics
const RevenueModelSlide = () => {
  const revenueStreams = [
    { year: 'Y1', subscription: 400, transaction: 280, services: 120 },
    { year: 'Y2', subscription: 1200, transaction: 840, services: 360 },
    { year: 'Y3', subscription: 3400, transaction: 2380, services: 1020 },
    { year: 'Y4', subscription: 7100, transaction: 4970, services: 2130 },
  ];

  return (
    <div className="p-10 md:p-14 lg:p-16 h-full flex flex-col justify-center overflow-y-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10 text-center">Revenue Model</h2>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 mb-10">
          {/* Revenue Streams Chart */}
          <div className="flex-1 bg-card rounded-xl p-6 border border-border/50 shadow-md">
            <h4 className="text-base font-semibold text-foreground mb-4">Revenue Streams (€K)</h4>
            <div className="h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueStreams}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="year" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                  <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                    formatter={(value: number) => [`€${value}K`, '']}
                  />
                  <Legend />
                  <Bar dataKey="subscription" name="SaaS Subscription" stackId="a" fill="hsl(var(--primary))" />
                  <Bar dataKey="transaction" name="Transaction Fees" stackId="a" fill="hsl(142, 76%, 36%)" />
                  <Bar dataKey="services" name="Professional Services" stackId="a" fill="hsl(45, 93%, 47%)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Revenue Cards */}
          <div className="flex-1 grid grid-cols-1 gap-5">
            {[{
              title: "SaaS Subscription",
              desc: "Monthly platform access fee",
              range: "€500 - €5,000/mo",
              Icon: CreditCard,
              color: "text-primary"
            }, {
              title: "Transaction Fees",
              desc: "Per-booking processing fee",
              range: "€0.50 - €2.00/booking",
              Icon: Zap,
              color: "text-emerald-600"
            }, {
              title: "Professional Services",
              desc: "Implementation & training",
              range: "€10K - €50K one-time",
              Icon: Wrench,
              color: "text-amber-600"
            }].map(stream => (
              <div key={stream.title} className="flex items-center gap-5 p-5 rounded-xl bg-muted/30 border border-border/50">
                <stream.Icon className={`w-8 h-8 ${stream.color} shrink-0`} />
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{stream.title}</h4>
                  <p className="text-sm text-muted-foreground">{stream.desc}</p>
                </div>
                <div className="text-sm font-bold text-foreground">{stream.range}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Unit Economics */}
        <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
          <h4 className="text-base font-semibold text-foreground mb-5 text-center">Unit Economics</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">€24K</div>
              <div className="text-sm text-muted-foreground mt-1">Avg. Contract Value</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">€4.2K</div>
              <div className="text-sm text-muted-foreground mt-1">CAC</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-600">5.7x</div>
              <div className="text-sm text-muted-foreground mt-1">LTV/CAC Ratio</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">8 mo</div>
              <div className="text-sm text-muted-foreground mt-1">Payback Period</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Slide 10: Go-to-Market - RSTool-first strategy
const GTMSlide = () => <div className="p-10 md:p-14 lg:p-16 h-full flex flex-col justify-center overflow-y-auto">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 text-center">Go-to-Market Strategy</h2>
    <p className="text-center text-lg text-muted-foreground mb-10">RSTool-first approach: Prove value, then expand</p>
    <div className="max-w-6xl mx-auto">
      {/* Phase-based approach */}
      <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-10">
        {[{
        phase: "Phase 1",
        title: "RSTool Launch",
        timeline: "Q1-Q2 2025",
        focus: "Build & validate RSTool",
        milestones: ["RSTool MVP launch", "10 pilot agencies", "Prove 15%+ savings"],
        status: "current"
      }, {
        phase: "Phase 2",
        title: "RSTool Growth",
        timeline: "Q3-Q4 2025",
        focus: "Scale RSTool revenue",
        milestones: ["50+ paying customers", "€500K ARR", "Channel partnerships"],
        status: "upcoming"
      }, {
        phase: "Phase 3",
        title: "Product Expansion",
        timeline: "2026+",
        focus: "Launch ASuite & more",
        milestones: ["ASuite development", "Cross-sell to RSTool users", "200+ total customers"],
        status: "future"
      }].map(phase => <div key={phase.phase} className={cn("p-6 rounded-xl border shadow-md", phase.status === "current" ? "bg-primary/5 border-primary/30" : "bg-card border-border/50")}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">{phase.phase}</span>
              {phase.status === "current" && <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600">Active</span>}
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-1">{phase.title}</h3>
            <p className="text-sm text-primary font-medium mb-2">{phase.timeline}</p>
            <p className="text-sm text-muted-foreground mb-4">{phase.focus}</p>
            <div className="space-y-2">
              {phase.milestones.map(m => <div key={m} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-muted-foreground">{m}</span>
                </div>)}
            </div>
          </div>)}
      </div>

      {/* RSTool GTM Focus */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl p-6 border border-border/50 shadow-md">
          <h4 className="text-base font-semibold text-foreground mb-5">RSTool Target Segments</h4>
          <div className="space-y-3">
            {[{
              segment: "Mid-size Travel Agencies",
              size: "10K+ bookings/year",
              pain: "Manual fare monitoring"
            }, {
              segment: "Corporate TMCs",
              size: "High-volume tickets",
              pain: "Missing savings opportunities"
            }, {
              segment: "OTAs & Consolidators",
              size: "Bulk ticket management",
              pain: "Thin margins, need automation"
            }].map(seg => (
              <div key={seg.segment} className="p-3 rounded-lg bg-muted/30 border border-border/30">
                <div className="font-medium text-foreground text-sm">{seg.segment}</div>
                <div className="text-xs text-muted-foreground mt-1">{seg.size} • {seg.pain}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-card rounded-xl p-6 border border-border/50 shadow-md">
          <h4 className="text-base font-semibold text-foreground mb-5">Channel Mix for RSTool</h4>
          <div className="grid grid-cols-2 gap-4">
            {[{
              channel: "Direct Sales",
              share: "50%",
              desc: "Agency outreach"
            }, {
              channel: "GDS Partners",
              share: "25%",
              desc: "Sabre, Amadeus"
            }, {
              channel: "Inbound/Content",
              share: "15%",
              desc: "SEO & demos"
            }, {
              channel: "Events",
              share: "10%",
              desc: "Trade shows"
            }].map(ch => <div key={ch.channel} className="text-center p-3 rounded-lg bg-muted/50">
                <div className="text-xl font-bold text-primary">{ch.share}</div>
                <div className="font-medium text-foreground text-sm mt-1">{ch.channel}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{ch.desc}</div>
              </div>)}
          </div>
        </div>
      </div>
    </div>
  </div>;

// Slide 11: Competition - Enhanced comparison
const CompetitionSlide = () => <div className="p-10 md:p-14 lg:p-16 h-full flex flex-col justify-center overflow-y-auto">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10 text-center">Competitive Landscape</h2>
    <div className="max-w-6xl mx-auto">
      {/* Competitor Comparison */}
      <div className="grid grid-cols-4 gap-5 md:gap-6 mb-10">
        {[{
        name: "Velaree",
        type: "Us",
        focus: "Unified Platform",
        strength: "All-in-one solution",
        isUs: true
      }, {
        name: "Legacy GDS",
        type: "Incumbents",
        focus: "Distribution",
        strength: "Market presence",
        isUs: false
      }, {
        name: "Point Solutions",
        type: "Specialists",
        focus: "Single Feature",
        strength: "Deep functionality",
        isUs: false
      }, {
        name: "In-house",
        type: "DIY",
        focus: "Custom Build",
        strength: "Full control",
        isUs: false
      }].map(comp => <div key={comp.name} className={cn("p-6 rounded-xl border shadow-md", comp.isUs ? "bg-primary/5 border-primary/30" : "bg-card border-border/50")}>
            <div className="text-xs font-medium text-muted-foreground mb-2">{comp.type}</div>
            <h3 className={cn("text-lg font-semibold mb-3", comp.isUs ? "text-primary" : "text-foreground")}>{comp.name}</h3>
            <div className="text-sm text-muted-foreground mb-2">{comp.focus}</div>
            <div className="text-xs font-medium text-foreground">{comp.strength}</div>
          </div>)}
      </div>

      {/* Feature Comparison */}
      <div className="bg-card rounded-xl p-6 border border-border/50 overflow-x-auto shadow-md">
        <table className="w-full min-w-[500px] text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 font-semibold text-foreground">Feature</th>
              <th className="text-center py-3 font-semibold text-primary">Velaree</th>
              <th className="text-center py-3 font-semibold text-muted-foreground">Legacy GDS</th>
              <th className="text-center py-3 font-semibold text-muted-foreground">Point Solutions</th>
            </tr>
          </thead>
          <tbody>
            {[{
            feature: "Unified API",
            velaree: true,
            legacy: false,
            point: false
          }, {
            feature: "AI Automation",
            velaree: true,
            legacy: false,
            point: "partial"
          }, {
            feature: "Real-time Analytics",
            velaree: true,
            legacy: "partial",
            point: true
          }, {
            feature: "Multi-GDS Support",
            velaree: true,
            legacy: false,
            point: false
          }, {
            feature: "Quick Implementation",
            velaree: true,
            legacy: false,
            point: true
          }].map(row => <tr key={row.feature} className="border-b border-border/50">
                <td className="py-3 text-foreground">{row.feature}</td>
                <td className="text-center py-3">
                  {row.velaree === true && <CheckCircle2 className="w-5 h-5 text-emerald-600 mx-auto" />}
                </td>
                <td className="text-center py-3">
                  {row.legacy === true ? <CheckCircle2 className="w-5 h-5 text-emerald-600 mx-auto" /> : row.legacy === "partial" ? <div className="w-5 h-5 rounded-full bg-amber-500/20 border-2 border-amber-500 mx-auto" /> : <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />}
                </td>
                <td className="text-center py-3">
                  {row.point === true ? <CheckCircle2 className="w-5 h-5 text-emerald-600 mx-auto" /> : row.point === "partial" ? <div className="w-5 h-5 rounded-full bg-amber-500/20 border-2 border-amber-500 mx-auto" /> : <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />}
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  </div>;

// Slide 12: The Ask - RSTool-focused investment
const AskSlide = () => <div className="p-10 md:p-14 lg:p-16 h-full flex flex-col justify-center overflow-y-auto">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 text-center">The Ask</h2>
    <p className="text-center text-lg text-muted-foreground mb-8">Building RSTool: Our Flagship Repricing Solution</p>
    <div className="max-w-5xl mx-auto">
      {/* Main Ask */}
      <div className="text-center mb-10">
        <div className="text-6xl md:text-7xl font-bold text-primary mb-3">€400,000</div>
        <div className="text-xl text-muted-foreground">Pre-Seed Investment for RSTool Launch</div>
        <div className="flex justify-center gap-4 mt-5">
          <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
            18-month runway
          </span>
          <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 text-sm font-medium">
            SAFE or Equity
          </span>
        </div>
      </div>

      {/* Use of Funds - RSTool Focused */}
      <div className="grid md:grid-cols-4 gap-5 md:gap-6 mb-10">
        {[{
        label: "RSTool Development",
        percent: "45%",
        amount: "€180K",
        desc: "AI pricing engine & core platform",
        Icon: Rocket
      }, {
        label: "RSTool Marketing",
        percent: "30%",
        amount: "€120K",
        desc: "Launch campaigns & sales team",
        Icon: Target
      }, {
        label: "Operations",
        percent: "15%",
        amount: "€60K",
        desc: "Infrastructure & GDS partnerships",
        Icon: Settings2
      }, {
        label: "Reserve",
        percent: "10%",
        amount: "€40K",
        desc: "Iteration & opportunities",
        Icon: Shield
      }].map(item => <div key={item.label} className="p-6 rounded-xl bg-card border border-border/50 text-center shadow-md">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <item.Icon className="w-6 h-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary">{item.percent}</div>
            <div className="text-sm text-foreground font-medium mt-2">{item.label}</div>
            <div className="text-xs text-muted-foreground mt-1">{item.desc}</div>
            <div className="text-sm text-primary/80 font-medium mt-2">{item.amount}</div>
          </div>)}
      </div>

      {/* RSTool Milestones & Expansion Strategy */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            RSTool Milestones
          </h4>
          <div className="space-y-3">
            {[
              { milestone: "RSTool Beta Launch", timing: "Month 3" },
              { milestone: "20+ paying travel agencies", timing: "Month 6" },
              { milestone: "€500K ARR from RSTool", timing: "Month 12" },
              { milestone: "Begin ASuite development", timing: "Month 15" }
            ].map(item => <div key={item.milestone} className="flex items-center justify-between gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-muted-foreground">{item.milestone}</span>
                </div>
                <span className="text-xs text-primary font-medium">{item.timing}</span>
              </div>)}
          </div>
        </div>
        <div className="bg-muted/30 rounded-xl p-6 border border-border/50">
          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Expansion Strategy
          </h4>
          <p className="text-sm text-muted-foreground mb-4">
            RSTool success funds expansion into full product suite:
          </p>
          <div className="space-y-2">
            {[
              { product: "ASuite", timeline: "Year 2", desc: "AI automation" },
              { product: "UnifyTool", timeline: "Year 2-3", desc: "GDS integration" },
              { product: "HRSTool", timeline: "Year 3+", desc: "Hospitality" }
            ].map(item => <div key={item.product} className="flex items-center justify-between text-sm p-2 rounded-lg bg-muted/50">
                <span className="font-medium text-foreground">{item.product}</span>
                <span className="text-xs text-muted-foreground">{item.timeline}</span>
              </div>)}
          </div>
        </div>
      </div>

      {/* Investor Benefits */}
      <div className="mt-6 bg-muted/30 rounded-xl p-5 border border-border/50">
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          {["Board observer seat", "Quarterly updates", "Strategic input welcome", "Pro-rata rights"].map(benefit => <div key={benefit} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span className="text-muted-foreground">{benefit}</span>
            </div>)}
        </div>
      </div>
    </div>
  </div>;

// Slide 13: Team - Enhanced with advisors
const TeamSlide = () => <div className="p-10 md:p-14 lg:p-16 h-full flex flex-col justify-center overflow-y-auto">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10 text-center">The Team</h2>
    <div className="max-w-5xl mx-auto">
      {/* Founders */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10">
        {[{
        name: "Mihail Mazil",
        role: "CEO & Co-Founder",
        bio: "10+ years travel tech leadership. Built and scaled travel platforms. Expert in product strategy and business development.",
        linkedin: "https://www.linkedin.com/in/mihail-m-456922386/",
        highlights: ["Product Strategy", "Business Development", "Fundraising"]
      }, {
        name: "Mihail Sinitari",
        role: "COO & Co-Founder",
        bio: "8+ years operations experience. Expert in scaling operations and building strategic partnerships.",
        linkedin: "https://www.linkedin.com/in/mihailmarksn/",
        highlights: ["Operations", "Partnerships", "Scaling"]
      }].map(member => <div key={member.name} className="p-8 rounded-xl bg-card border border-border/50 shadow-md">
            <div className="flex items-start gap-5 mb-5">
              <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center shrink-0">
                <span className="text-3xl font-bold text-primary">
                  {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-white bg-[#0A66C2] hover:bg-[#004182] px-3 py-1.5 rounded-md mt-2 transition-colors">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
            <div className="flex flex-wrap gap-2">
              {member.highlights.map(h => <span key={h} className="px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary">
                  {h}
                </span>)}
            </div>
          </div>)}
      </div>

      {/* Hiring Roadmap */}
      <div className="bg-muted/30 rounded-xl p-6 border border-border/50">
        <h4 className="font-semibold text-foreground mb-5 text-center">18-Month Hiring Roadmap</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[{
          role: "Engineers",
          count: "+4",
          timing: "Q1-Q2"
        }, {
          role: "Sales",
          count: "+3",
          timing: "Q2-Q3"
        }, {
          role: "Customer Success",
          count: "+2",
          timing: "Q3"
        }, {
          role: "Operations",
          count: "+3",
          timing: "Q3-Q4"
        }].map(hire => <div key={hire.role} className="text-center p-4 rounded-lg bg-card border border-border/50">
              <div className="text-2xl font-bold text-primary">{hire.count}</div>
              <div className="text-sm font-medium text-foreground mt-1">{hire.role}</div>
              <div className="text-xs text-muted-foreground">{hire.timing}</div>
            </div>)}
        </div>
      </div>

      {/* Contact */}
      <div className="mt-10 text-center">
        <img src="/lovable-uploads/velaree-logo-text.png" alt="Velaree" className="h-12 w-auto mx-auto mb-4 opacity-60" />
        <p className="text-muted-foreground">contact@velaree.com • velaree.com</p>
      </div>
    </div>
  </div>;

// Slide 14: RSTool Deep Dive
const RStoolDeepDiveSlide = () => <div className="p-10 md:p-14 lg:p-16 h-full flex flex-col justify-center overflow-y-auto">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 text-center">RSTool Deep Dive</h2>
    <p className="text-center text-lg text-muted-foreground mb-8">AI-Powered PNR Repricing Engine</p>
    <div className="max-w-6xl mx-auto">
      {/* Core Features */}
      <div className="grid md:grid-cols-3 gap-5 mb-8">
        {[{
          title: "Smart Fare Monitoring",
          desc: "AI continuously scans for lower fares across 200+ airlines, 24/7 automated monitoring",
          Icon: BarChart3,
          metric: "15-30%",
          metricLabel: "Avg. savings per ticket"
        }, {
          title: "One-Click Rebooking",
          desc: "Automated rebooking with minimal agent intervention, handles exchanges & refunds",
          Icon: Zap,
          metric: "< 2min",
          metricLabel: "Rebooking time"
        }, {
          title: "GDS Integration",
          desc: "Direct integration with Sabre, Amadeus, Travelport for seamless PNR management",
          Icon: Plug,
          metric: "3",
          metricLabel: "Major GDS supported"
        }].map(feature => (
          <div key={feature.title} className="p-5 rounded-xl bg-card border border-border/50 shadow-md">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
              <feature.Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{feature.desc}</p>
            <div className="pt-3 border-t border-border/50">
              <div className="text-2xl font-bold text-emerald-600">{feature.metric}</div>
              <div className="text-xs text-muted-foreground">{feature.metricLabel}</div>
            </div>
          </div>
        ))}
      </div>

      {/* How It Works Flow */}
      <div className="bg-muted/30 rounded-xl p-6 border border-border/50 mb-8">
        <h4 className="font-semibold text-foreground mb-5 text-center">How RSTool Works</h4>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {[
            { step: "1", title: "PNR Import", desc: "Auto-sync from GDS" },
            { step: "2", title: "Fare Monitoring", desc: "AI scans 24/7" },
            { step: "3", title: "Match Found", desc: "Lower fare detected" },
            { step: "4", title: "Agent Alert", desc: "Real-time notification" },
            { step: "5", title: "One-Click Rebook", desc: "Apply savings" }
          ].map((item, i) => (
            <div key={item.step} className="flex items-center gap-3">
              <div className="text-center flex-1">
                <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto font-bold text-sm">{item.step}</div>
                <div className="text-sm font-medium text-foreground mt-2">{item.title}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
              {i < 4 && <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block shrink-0" />}
            </div>
          ))}
        </div>
      </div>

      {/* Competitive Advantages & Early Interest */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-emerald-500/5 rounded-xl p-5 border border-emerald-500/20">
          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-600" />
            Competitive Advantages
          </h4>
          <div className="space-y-3">
            {[
              "AI-powered vs. rule-based competitors",
              "Multi-GDS support (most are single-GDS)",
              "Real-time monitoring vs. batch processing",
              "Self-service + automated (hybrid model)",
              "Transparent pricing, no hidden fees"
            ].map(adv => (
              <div key={adv} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-muted-foreground">{adv}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-primary/5 rounded-xl p-5 border border-primary/20">
          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Early Traction & Interest
          </h4>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center p-3 rounded-lg bg-card">
              <div className="text-2xl font-bold text-primary">5</div>
              <div className="text-xs text-muted-foreground">LOIs from agencies</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-card">
              <div className="text-2xl font-bold text-primary">€120K</div>
              <div className="text-xs text-muted-foreground">Pipeline value</div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Target customers:</span> Mid-size agencies processing 10K+ bookings/year with existing GDS contracts
          </div>
        </div>
      </div>
    </div>
  </div>;

// Slide 15: Product Roadmap Timeline
const ProductRoadmapSlide = () => <div className="p-10 md:p-14 lg:p-16 h-full flex flex-col justify-center">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 text-center">Product Roadmap</h2>
    <p className="text-center text-lg text-muted-foreground mb-12">RSTool funds expansion into full product suite</p>
    
    <div className="max-w-5xl mx-auto w-full">
      {/* Timeline Bar */}
      <div className="relative">
        <div className="absolute top-8 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-emerald-500 via-violet-500 via-blue-500 to-amber-500 rounded-full opacity-40" />
        
        {/* Timeline Items */}
        <div className="grid grid-cols-4 gap-6">
          {[{
            product: "RSTool",
            tagline: "Smart PNR Repricing",
            timeline: "Q2 2025",
            status: "Building Now",
            color: "emerald",
            Icon: CreditCard
          }, {
            product: "ASuite",
            tagline: "AI Automation",
            timeline: "Q4 2026",
            status: "Planned",
            color: "violet",
            Icon: Bot
          }, {
            product: "UnifyTool",
            tagline: "GDS Integration",
            timeline: "2027",
            status: "Planned",
            color: "blue",
            Icon: Plug
          }, {
            product: "HRSTool",
            tagline: "Hospitality",
            timeline: "2028+",
            status: "Future",
            color: "amber",
            Icon: Building2
          }].map((item, i) => (
            <div key={item.product} className="text-center">
              {/* Timeline Node */}
              <div className={`w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center shadow-lg ${
                item.color === "emerald" ? "bg-gradient-to-br from-emerald-500 to-teal-500" :
                item.color === "violet" ? "bg-gradient-to-br from-violet-500/70 to-purple-500/70" :
                item.color === "blue" ? "bg-gradient-to-br from-blue-500/70 to-cyan-500/70" :
                "bg-gradient-to-br from-amber-500/70 to-orange-500/70"
              }`}>
                <item.Icon className="w-7 h-7 text-white" />
              </div>
              
              {/* Product Info */}
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                item.status === "Building Now" ? "bg-emerald-500/20 text-emerald-600" : 
                item.status === "Planned" ? "bg-blue-500/10 text-blue-600" : 
                "bg-muted text-muted-foreground"
              }`}>{item.status}</span>
              <h3 className={`text-xl font-bold mt-3 ${i === 0 ? "text-emerald-600" : "text-foreground"}`}>{item.product}</h3>
              <p className="text-sm text-muted-foreground mb-2">{item.tagline}</p>
              <div className="text-lg font-semibold text-primary">{item.timeline}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>;

// Slide 16: Financial Projections Appendix
const FinancialProjectionsSlide = () => {
  const financialData = [
    { year: '2025', revenue: 180, costs: 320, profit: -140, customers: 15, arr: 180 },
    { year: '2026', revenue: 680, costs: 520, profit: -140, customers: 45, arr: 680 },
    { year: '2027', revenue: 1800, costs: 1200, profit: 600, customers: 120, arr: 1800 },
    { year: '2028', revenue: 4200, costs: 2400, profit: 1800, customers: 280, arr: 4200 },
  ];

  return (
    <div className="p-10 md:p-14 lg:p-16 h-full flex flex-col justify-center overflow-y-auto">
      <div className="flex items-center justify-center gap-3 mb-3">
        <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium">Appendix</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Financial Projections</h2>
      </div>
      <p className="text-center text-lg text-muted-foreground mb-8">4-Year Path to Profitability</p>
      <div className="max-w-6xl mx-auto">
        {/* Revenue vs Costs Chart */}
        <div className="bg-card rounded-xl p-6 border border-border/50 shadow-md mb-6">
          <h4 className="font-semibold text-foreground mb-4">Revenue vs. Operating Costs (€K)</h4>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={financialData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="year" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                  formatter={(value: number) => [`€${value}K`, '']}
                />
                <Legend />
                <Area type="monotone" dataKey="revenue" name="Revenue" stroke="hsl(142, 76%, 36%)" fill="hsl(142, 76%, 36%, 0.3)" />
                <Area type="monotone" dataKey="costs" name="Costs" stroke="hsl(0, 84%, 60%)" fill="hsl(0, 84%, 60%, 0.2)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Detailed Financial Table */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-card rounded-xl p-5 border border-border/50 shadow-md overflow-x-auto">
            <h4 className="font-semibold text-foreground mb-4">Year-by-Year Breakdown</h4>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 font-medium text-muted-foreground">Metric</th>
                  <th className="text-right py-2 font-medium text-muted-foreground">2025</th>
                  <th className="text-right py-2 font-medium text-muted-foreground">2026</th>
                  <th className="text-right py-2 font-medium text-muted-foreground">2027</th>
                  <th className="text-right py-2 font-medium text-muted-foreground">2028</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-2 text-foreground">Revenue (€K)</td>
                  <td className="text-right py-2 text-emerald-600 font-medium">180</td>
                  <td className="text-right py-2 text-emerald-600 font-medium">680</td>
                  <td className="text-right py-2 text-emerald-600 font-medium">1,800</td>
                  <td className="text-right py-2 text-emerald-600 font-medium">4,200</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 text-foreground">Costs (€K)</td>
                  <td className="text-right py-2 text-muted-foreground">320</td>
                  <td className="text-right py-2 text-muted-foreground">520</td>
                  <td className="text-right py-2 text-muted-foreground">1,200</td>
                  <td className="text-right py-2 text-muted-foreground">2,400</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 text-foreground font-medium">Net Profit (€K)</td>
                  <td className="text-right py-2 text-red-500 font-medium">-140</td>
                  <td className="text-right py-2 text-red-500 font-medium">-140</td>
                  <td className="text-right py-2 text-emerald-600 font-bold">+600</td>
                  <td className="text-right py-2 text-emerald-600 font-bold">+1,800</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 text-foreground">Customers</td>
                  <td className="text-right py-2 text-primary">15</td>
                  <td className="text-right py-2 text-primary">45</td>
                  <td className="text-right py-2 text-primary">120</td>
                  <td className="text-right py-2 text-primary">280</td>
                </tr>
                <tr>
                  <td className="py-2 text-foreground">Gross Margin</td>
                  <td className="text-right py-2 text-muted-foreground">65%</td>
                  <td className="text-right py-2 text-muted-foreground">72%</td>
                  <td className="text-right py-2 text-muted-foreground">78%</td>
                  <td className="text-right py-2 text-muted-foreground">82%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            {/* Cost Breakdown */}
            <div className="bg-muted/30 rounded-xl p-5 border border-border/50">
              <h4 className="font-semibold text-foreground mb-3">Cost Allocation (Year 1)</h4>
              <div className="space-y-2">
                {[
                  { category: "Engineering & Product", amount: "€144K", percent: "45%" },
                  { category: "Sales & Marketing", amount: "€96K", percent: "30%" },
                  { category: "Operations & Infra", amount: "€48K", percent: "15%" },
                  { category: "G&A / Reserve", amount: "€32K", percent: "10%" }
                ].map(item => (
                  <div key={item.category} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{item.category}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-foreground font-medium">{item.amount}</span>
                      <span className="text-xs text-muted-foreground w-8">{item.percent}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Metrics */}
            <div className="bg-emerald-500/5 rounded-xl p-5 border border-emerald-500/20">
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                Path to Profitability
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 rounded-lg bg-card">
                  <div className="text-lg font-bold text-emerald-600">Q1 2027</div>
                  <div className="text-xs text-muted-foreground">Break-even</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-card">
                  <div className="text-lg font-bold text-primary">278%</div>
                  <div className="text-xs text-muted-foreground">Revenue CAGR</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-card">
                  <div className="text-lg font-bold text-primary">€15K</div>
                  <div className="text-xs text-muted-foreground">Avg. ACV Year 1</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-card">
                  <div className="text-lg font-bold text-primary">43%</div>
                  <div className="text-xs text-muted-foreground">EBITDA Margin Y4</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Assumptions footnote */}
        <div className="text-center text-xs text-muted-foreground/70 italic">
          * Projections based on €400K pre-seed, 18-month runway, RSTool-first strategy. Conservative estimates assuming 80% of target customer acquisition.
        </div>
      </div>
    </div>
  );
};

// Slides array
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
  content: <ProductsSlide />
}, {
  id: 7,
  title: "RSTool Deep Dive",
  content: <RStoolDeepDiveSlide />
}, {
  id: 8,
  title: "Product Roadmap",
  content: <ProductRoadmapSlide />
}, {
  id: 9,
  title: "Target Market",
  content: <TargetMarketSlide />
}, {
  id: 10,
  title: "Market Opportunity",
  content: <TAMSlide />
}, {
  id: 11,
  title: "Revenue Model",
  content: <RevenueModelSlide />
}, {
  id: 12,
  title: "Go-to-Market",
  content: <GTMSlide />
}, {
  id: 13,
  title: "Competition",
  content: <CompetitionSlide />
}, {
  id: 14,
  title: "The Ask",
  content: <AskSlide />
}, {
  id: 15,
  title: "Team",
  content: <TeamSlide />
}, {
  id: 16,
  title: "Financial Projections",
  content: <FinancialProjectionsSlide />
}];

const PitchDeck = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === " ") {
      e.preventDefault();
      nextSlide();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prevSlide();
    } else if (e.key === "Escape") {
      navigate(-1);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Investor Pitch Deck | Velaree</title>
        <meta name="description" content="Velaree investor pitch deck - Next-generation travel technology platform with unified APIs, AI automation, and real-time analytics." />
        <meta property="og:title" content="Investor Pitch Deck | Velaree" />
        <meta property="og:description" content="Velaree investor pitch deck - Next-generation travel technology platform." />
      </Helmet>

      <div className="h-screen w-screen flex flex-col bg-background overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-muted/30 backdrop-blur-sm shrink-0">
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/velaree-icon.png" alt="Velaree Logo" className="h-10 w-auto" />
            <span className="text-base font-medium text-foreground">Pitch Deck</span>
            <span className="text-sm text-muted-foreground hidden md:inline">Investor Presentation</span>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/')} 
              className="text-muted-foreground hover:text-foreground"
            >
              <Download className="w-4 h-4 mr-1.5" />
              <span className="hidden md:inline">Download</span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleFullscreen} 
              className="text-muted-foreground hover:text-foreground h-8 w-8"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate(-1)} 
              className="text-muted-foreground hover:text-foreground h-8 w-8"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Slide Content */}
        <div className="flex-1 relative overflow-hidden bg-background min-h-0">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentSlide} 
              initial={{ opacity: 0, x: 50 }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: -50 }} 
              transition={{ duration: 0.3, ease: "easeInOut" }} 
              className="absolute inset-0 overflow-y-auto"
            >
              {slides[currentSlide].content}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={prevSlide} 
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm border border-border/50 hover:bg-card shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={nextSlide} 
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm border border-border/50 hover:bg-card shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Footer with slide indicators */}
        <div className="px-4 py-3 border-t border-border/50 bg-muted/30 backdrop-blur-sm flex items-center justify-between shrink-0">
          <span className="text-sm font-medium text-muted-foreground min-w-[120px]">
            {slides[currentSlide].title}
          </span>
          <div className="flex items-center gap-1.5">
            {slides.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrentSlide(i)} 
                className={cn(
                  "h-2 rounded-full transition-all duration-300", 
                  i === currentSlide 
                    ? "bg-primary w-6" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2"
                )} 
              />
            ))}
          </div>
          <span className="text-sm font-medium text-muted-foreground min-w-[120px] text-right">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>
    </>
  );
};

export default PitchDeck;

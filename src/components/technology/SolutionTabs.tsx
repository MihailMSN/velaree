import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Plane, DollarSign, Zap, RefreshCw, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ClickToBookMockup from "@/components/mockups/ClickToBookMockup";
import PrivateFareMockup from "@/components/mockups/PrivateFareMockup";
import AutomationMockup from "@/components/mockups/AutomationMockup";
import RStoolDemoDashboard from "@/components/rstool/RStoolDemoDashboard";

const solutions = [
  {
    id: "click-to-book",
    icon: Plane,
    title: "Click-to-Book",
    fullTitle: "Click-to-Book Platform",
    description: "Instant booking for OTAs and TMCs with real-time availability and pricing",
    features: [
      "Multi-source aggregation from 50+ suppliers",
      "Sub-second search response times",
      "Automated ticketing and confirmation",
      "Mobile-optimized booking flow",
      "Payment gateway integration",
      "24/7 uptime guarantee"
    ],
    benefits: "Reduce booking time from minutes to seconds while improving conversion rates by up to 40%",
    link: "/technology",
    color: "blue",
    MockupComponent: ClickToBookMockup
  },
  {
    id: "private-fare",
    icon: DollarSign,
    title: "Private Fare",
    fullTitle: "Private Fare API",
    description: "Connect with global consolidators and airlines for exclusive rates",
    features: [
      "Access to 100+ consolidator networks",
      "Negotiated private fares and net rates",
      "Real-time fare comparison engine",
      "Automated markup configuration",
      "Multi-currency support",
      "Fare rules and restrictions API"
    ],
    benefits: "Increase profit margins by 25-35% with access to exclusive consolidator inventory",
    link: "/technology",
    color: "emerald",
    MockupComponent: PrivateFareMockup
  },
  {
    id: "automation",
    icon: Zap,
    title: "Automation",
    fullTitle: "Automation Suite",
    description: "Manage ticketing, pricing, and servicing effortlessly with intelligent automation",
    features: [
      "Auto-ticketing with PNR management",
      "Dynamic pricing engine",
      "Queue monitoring and alerts",
      "Schedule change automation",
      "Refund and exchange processing",
      "Customer notification system"
    ],
    benefits: "Reduce manual operations by 70% and eliminate human errors in routine tasks",
    link: "/asuite",
    color: "amber",
    MockupComponent: AutomationMockup
  },
  {
    id: "reshop",
    icon: RefreshCw,
    title: "Re-Shopping",
    fullTitle: "Re-Shopping Engine",
    description: "Maximize post-sale revenue with continuous fare monitoring and automated re-booking",
    features: [
      "Real-time PNR monitoring across all bookings",
      "Automated price drop detection every 60 seconds",
      "Cross-content availability comparison",
      "Private fare re-shopping with live consolidator rates",
      "One-click re-booking with automatic ticketing",
      "Revenue recovery alerts and reporting"
    ],
    benefits: "Capture 15-20% additional revenue post-sale by identifying and acting on price drops",
    link: "/rstool",
    color: "violet",
    MockupComponent: RStoolDemoDashboard
  }
];

const colorClasses = {
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    text: "text-blue-600",
    gradient: "from-blue-50 via-cyan-50 to-slate-50"
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    text: "text-emerald-600",
    gradient: "from-emerald-50 via-green-50 to-slate-50"
  },
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    text: "text-amber-600",
    gradient: "from-amber-50 via-orange-50 to-slate-50"
  },
  violet: {
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    text: "text-violet-600",
    gradient: "from-violet-50 via-purple-50 to-slate-50"
  }
};

const SolutionTabs = () => {
  const [activeTab, setActiveTab] = useState("click-to-book");

  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">
            Our Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Four powerful products to transform your travel operations
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-7xl mx-auto">
          {/* Sticky Tab Navigation */}
          <div className="sticky top-20 z-30 bg-background/95 backdrop-blur-md py-4 -mx-4 px-4 md:-mx-6 md:px-6 border-b border-border mb-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 h-auto bg-muted/50 p-2 rounded-xl">
              {solutions.map((solution) => {
                const Icon = solution.icon;
                const colors = colorClasses[solution.color as keyof typeof colorClasses];
                return (
                  <TabsTrigger
                    key={solution.id}
                    value={solution.id}
                    className={`flex items-center gap-2 py-3 px-4 rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-md transition-all duration-300 ${
                      activeTab === solution.id ? colors.text : ""
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium text-sm md:text-base">{solution.title}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          {/* Tab Content */}
          {solutions.map((solution) => {
            const Icon = solution.icon;
            const colors = colorClasses[solution.color as keyof typeof colorClasses];
            const MockupComponent = solution.MockupComponent;

            return (
              <TabsContent
                key={solution.id}
                value={solution.id}
                className="mt-0 animate-fade-in"
              >
                <div className={`bg-gradient-to-br ${colors.gradient} rounded-3xl p-6 md:p-10 lg:p-12 border border-border/50`}>
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Content Side */}
                    <div>
                      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${colors.bg} ${colors.border} border flex items-center justify-center mb-5`}>
                        <Icon className={`w-7 h-7 md:w-8 md:h-8 ${colors.text}`} strokeWidth={1.5} />
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
                        {solution.fullTitle}
                      </h3>
                      <p className="text-base md:text-lg text-muted-foreground mb-5">
                        {solution.description}
                      </p>
                      
                      <Card className="p-4 md:p-5 bg-accent/10 border-accent/20 mb-5">
                        <p className="text-foreground font-medium text-sm">
                          {solution.benefits}
                        </p>
                      </Card>
                      
                      <Card className="p-4 md:p-5 bg-card/80 backdrop-blur-sm border-border">
                        <h4 className="text-base md:text-lg font-bold text-foreground mb-3">Key Features</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {solution.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-foreground text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>

                      <Link 
                        to={solution.link}
                        className="inline-flex items-center gap-2 mt-5 text-primary font-medium hover:gap-3 transition-all"
                      >
                        Learn more
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* Mockup Side */}
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <MockupComponent />
                    </div>
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default SolutionTabs;

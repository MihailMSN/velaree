import { Card } from "@/components/ui/card";
import { Plane, DollarSign, Zap, Check, Building2, Bot, Plug, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const primaryProduct = {
  icon: DollarSign,
  name: "rsTool",
  title: "AI-Powered PNR Repricing",
  subtitle: "Save 5-15% per ticket",
  timeline: "Q3-Q4 2026",
  status: "In Development",
  description: "Automatically monitor and apply lower fares to existing bookings. Our flagship product uses AI to continuously scan for price drops and handle rebooking automatically.",
  color: "text-emerald-600",
  bgColor: "bg-emerald-500/10",
  borderColor: "border-emerald-500/30",
  features: [
    "24/7 AI-powered fare monitoring across 200+ airlines",
    "Automated rebooking with minimal agent intervention",
    "Real-time savings alerts and customer notifications",
    "Multi-GDS integration (Sabre, Amadeus, Travelport)"
  ],
  link: "/rstool"
};

const futureProducts = [
  {
    icon: Building2,
    name: "hsTool",
    title: "Hotel Re-Shopping",
    timeline: "Q1-Q2 2027",
    description: "Apply the same AI-powered savings to hotel bookings",
    color: "text-amber-600",
    bgColor: "bg-amber-500/10",
    link: "/hrstool"
  },
  {
    icon: Bot,
    name: "aSuite",
    title: "AI Automation & CRM",
    timeline: "Q3-Q4 2027",
    description: "Intelligent CRM with automated workflows for ticketing, changes, and refunds",
    color: "text-violet-600",
    bgColor: "bg-violet-500/10",
    link: "/asuite"
  },
  {
    icon: Plug,
    name: "UnifyTool",
    title: "Universal GDS API",
    timeline: "Q3-Q4 2027",
    description: "Single integration to access all major GDS systems",
    color: "text-blue-600",
    bgColor: "bg-blue-500/10",
    link: "/unify"
  }
];

const Solutions = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Product Suite
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Starting with rsTool in 2026, expanding to a comprehensive travel technology platform
          </p>
        </div>

        {/* Primary Product - rsTool */}
        <div className="mb-16">
          <Card className={`p-8 md:p-10 border-2 ${primaryProduct.borderColor} bg-gradient-to-br from-card via-emerald-500/5 to-card shadow-lg`}>
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left side - Info */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl ${primaryProduct.bgColor} flex items-center justify-center`}>
                    <primaryProduct.icon className={`w-8 h-8 ${primaryProduct.color}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-3xl font-bold text-foreground">{primaryProduct.name}</h3>
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-semibold border border-emerald-500/20">
                        {primaryProduct.status}
                      </span>
                    </div>
                    <p className="text-lg text-muted-foreground">{primaryProduct.title}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
                    {primaryProduct.subtitle}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Launching {primaryProduct.timeline}
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {primaryProduct.description}
                </p>

                <Link 
                  to={primaryProduct.link}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Learn More About rsTool
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right side - Features */}
              <div className="lg:w-[400px]">
                <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">Key Features</h4>
                <ul className="space-y-4">
                  {primaryProduct.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                      <Check className={`w-5 h-5 ${primaryProduct.color} mr-3 mt-0.5 flex-shrink-0`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Future Products Roadmap */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Coming Next</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {futureProducts.map((product, index) => {
              const Icon = product.icon;
              return (
                <Link to={product.link} key={index}>
                  <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 opacity-80 hover:opacity-100">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg ${product.bgColor} flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${product.color}`} />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                        {product.timeline}
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-foreground mb-1">{product.name}</h4>
                    <p className="text-sm text-primary font-medium mb-3">{product.title}</p>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;

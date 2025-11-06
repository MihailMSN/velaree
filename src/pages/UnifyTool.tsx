import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Zap, 
  BarChart3, 
  Lock, 
  Globe, 
  RefreshCw, 
  Bell,
  Layers,
  Shield,
  TrendingUp,
  Users,
  Database,
  Cloud,
  CheckCircle2,
  MessageSquare
} from "lucide-react";
import ClickToBookMockup from "@/components/mockups/ClickToBookMockup";
import PrivateFareMockup from "@/components/mockups/PrivateFareMockup";
import RStoolDemoDashboard from "@/components/rstool/RStoolDemoDashboard";

const UnifyTool = () => {
  const integrationFeatures = [
    {
      icon: Layers,
      title: "Unified Dashboard",
      description: "Single interface for booking, monitoring, and re-shopping across all your travel operations."
    },
    {
      icon: BarChart3,
      title: "Cross-Platform Analytics",
      description: "Consolidated reporting and insights across all tools with real-time performance metrics."
    },
    {
      icon: RefreshCw,
      title: "Automated Workflows",
      description: "Seamless handoffs between booking, processing, and re-shopping with zero manual intervention."
    },
    {
      icon: Lock,
      title: "Single Sign-On",
      description: "One secure login for the entire platform with role-based access control."
    },
    {
      icon: Database,
      title: "Centralized PNR Management",
      description: "All bookings tracked and managed in one unified system across air and hotel."
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Unified alert system for price drops, booking changes, and opportunities across all channels."
    },
    {
      icon: Globe,
      title: "API-First Architecture",
      description: "All components accessible via unified RESTful API with consistent data formats."
    },
    {
      icon: Shield,
      title: "White-Label Ready",
      description: "Entire platform brandable to your business with custom domains and styling."
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Maximize ROI",
      description: "Combined savings from private fares, re-shopping, and automation deliver unprecedented returns."
    },
    {
      icon: Zap,
      title: "Reduced Complexity",
      description: "One vendor, one contract, one integration instead of managing multiple disparate systems."
    },
    {
      icon: Users,
      title: "Better User Experience",
      description: "Consistent interface across all operations reduces training time and increases efficiency."
    },
    {
      icon: BarChart3,
      title: "Complete Visibility",
      description: "Unified reporting provides complete picture of your travel operations and profitability."
    }
  ];

  const workflowSteps = [
    {
      number: "01",
      title: "Search & Book",
      description: "Use Click-to-Book platform or Private Fare API to search and instantly book flights and hotels with access to exclusive rates.",
      color: "from-primary to-primary/80"
    },
    {
      number: "02",
      title: "Auto-Process",
      description: "Automation Suite handles ticketing, confirmations, notifications, and all post-booking operations automatically.",
      color: "from-blue-600 to-blue-500"
    },
    {
      number: "03",
      title: "Monitor & Track",
      description: "aRStool and hRStool continuously monitor all bookings for better rates and re-shopping opportunities.",
      color: "from-purple-600 to-purple-500"
    },
    {
      number: "04",
      title: "Optimize & Save",
      description: "Automatic re-shopping and re-booking when savings opportunities are identified, with full tracking and reporting.",
      color: "from-green-600 to-green-500"
    },
    {
      number: "05",
      title: "Report & Analyze",
      description: "Unified analytics dashboard provides complete ROI visibility across all operations in real-time.",
      color: "from-orange-600 to-orange-500"
    }
  ];

  const techSpecs = [
    { label: "API Architecture", value: "RESTful JSON" },
    { label: "Response Time", value: "Sub-500ms" },
    { label: "Uptime SLA", value: "99.9%" },
    { label: "GDS Support", value: "Amadeus, Sabre, Travelport" },
    { label: "OTA Integrations", value: "Booking.com, Expedia, Hotels.com" },
    { label: "Security", value: "SOC 2, GDPR Compliant" },
    { label: "Infrastructure", value: "Cloud-Native, Auto-Scaling" },
    { label: "Capacity", value: "Millions of bookings/month" }
  ];

  const successStories = [
    {
      company: "Large European OTA",
      result: "30% reduction in operational costs",
      description: "Unified platform replaced 5 separate systems, streamlined operations, and reduced support staff by 40%."
    },
    {
      company: "Corporate TMC Network",
      result: "45% increase in conversion rate",
      description: "Seamless booking-to-re-shopping workflow improved customer satisfaction and repeat business."
    },
    {
      company: "Enterprise Travel Program",
      result: "€2.1M annual savings",
      description: "Managed 150K+ bookings annually with single dashboard, automated re-shopping saved average €14 per ticket."
    }
  ];

  const faqs = [
    {
      question: "How long does it take to implement the complete UnifyTool platform?",
      answer: "Typical implementation takes 4-8 weeks depending on your existing systems and integration requirements. We provide a dedicated onboarding team, comprehensive training, and white-glove support throughout the process."
    },
    {
      question: "Can we start with some tools and add others later?",
      answer: "Absolutely! Our platform is modular - you can start with Click-to-Book and Private Fare API, then add aRStool, hRStool, and Automation Suite as your needs grow. All components integrate seamlessly when added."
    },
    {
      question: "How does data flow between different components?",
      answer: "All components share a unified data model and communicate through our API layer. Bookings made through Click-to-Book automatically appear in aRStool for monitoring, automation workflows trigger across all systems, and analytics aggregate from all sources in real-time."
    },
    {
      question: "What's required for integration with our existing systems?",
      answer: "We provide RESTful APIs, webhooks, and can integrate with most existing booking systems, CRMs, and accounting software. Our technical team will assess your environment and provide a detailed integration plan during onboarding."
    },
    {
      question: "Is training and support included with the platform?",
      answer: "Yes! We provide comprehensive training for all platform components, ongoing 24/7 technical support, dedicated account management, regular platform updates, and access to our knowledge base and developer documentation."
    },
    {
      question: "What's the pricing difference between complete platform vs. individual tools?",
      answer: "The unified platform offers significant savings vs. purchasing tools separately - typically 25-35% lower total cost. We offer flexible packages based on booking volume, with custom enterprise pricing available for high-volume clients."
    },
    {
      question: "How do we migrate from our existing systems?",
      answer: "We provide full migration support including data transfer, parallel testing periods, and phased rollout options. Most clients complete migration within 6-12 weeks with zero downtime to their operations."
    },
    {
      question: "Can we customize and white-label the entire platform?",
      answer: "Yes! The entire platform is white-label ready. You can customize branding, domains, styling, and workflows to match your business needs. We also support custom feature development for enterprise clients."
    },
    {
      question: "What GDS and content sources are supported?",
      answer: "We support all major GDS providers (Amadeus, Sabre, Travelport) plus direct connections to airlines and OTA platforms (Booking.com, Expedia, Hotels.com). We can also add custom content sources based on your requirements."
    },
    {
      question: "How does the platform handle multi-currency and international operations?",
      answer: "UnifyTool supports 150+ currencies, automatic exchange rate updates, multi-language interfaces, and localized content. Perfect for OTAs and TMCs operating across multiple markets."
    },
    {
      question: "What kind of ROI can we expect from the unified platform?",
      answer: "Our clients typically see 15-30% savings on operational costs, 20-50% increase in booking conversion, and average €8-15 savings per ticket through re-shopping. Most achieve full ROI within 6-9 months."
    },
    {
      question: "Is there a minimum booking volume requirement?",
      answer: "We work with travel businesses of all sizes. Our pricing scales with volume - starting from 1,000 bookings/month up to millions. We offer special packages for startups and growth-stage companies."
    }
  ];

  return (
    <>
      <Helmet>
        <title>UnifyTool - Complete Travel Technology Platform | Velaree</title>
        <meta name="description" content="All-in-one travel technology platform combining click-to-book, private fares, air/hotel re-shopping, and automation. One unified solution for OTAs, TMCs, and travel agencies." />
        <meta name="keywords" content="unified travel platform, all-in-one travel technology, integrated booking system, complete travel solution, OTA platform, TMC software, travel automation, private fare api, re-shopping engine" />
        <link rel="canonical" href="https://velaree.com/unifytool" />
        
        {/* Open Graph */}
        <meta property="og:title" content="UnifyTool - Complete Travel Technology Platform | Velaree" />
        <meta property="og:description" content="All-in-one travel technology platform combining click-to-book, private fares, air/hotel re-shopping, and automation. One unified solution for OTAs, TMCs, and travel agencies." />
        <meta property="og:url" content="https://velaree.com/unifytool" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UnifyTool - Complete Travel Technology Platform | Velaree" />
        <meta name="twitter:description" content="All-in-one travel technology platform combining click-to-book, private fares, air/hotel re-shopping, and automation." />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "UnifyTool",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "127"
            },
            "description": "Complete unified travel technology platform combining booking, private fares, re-shopping, and automation for OTAs, TMCs, and travel agencies.",
            "provider": {
              "@type": "Organization",
              "name": "Velaree"
            },
            "featureList": [
              "Click-to-Book Platform",
              "Private Fare API",
              "Air Re-Shopping (aRStool)",
              "Hotel Re-Shopping (hRStool)",
              "Automation Suite",
              "Unified Dashboard",
              "Cross-Platform Analytics",
              "API-First Architecture"
            ]
          })}
        </script>
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-background via-background to-muted/20 relative overflow-hidden pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px]" />
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Complete Integrated Platform
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
            UnifyTool
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-4 max-w-4xl mx-auto">
            One Platform. Every Tool. Complete Control.
          </p>
          <p className="text-xl text-muted-foreground/80 mb-10 max-w-3xl mx-auto">
            The only travel technology platform that combines booking, private fares, re-shopping, and automation into one seamless, unified solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="rounded-full px-8 text-lg">
                Book Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="rounded-full px-8 text-lg">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Five Powerful Technologies, One Unified Platform
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              UnifyTool brings together our entire suite of travel technologies into a single, cohesive platform designed to transform your travel business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Click-to-Book Platform</h3>
              <p className="text-muted-foreground">
                Instant booking engine with real-time availability across GDS and direct airline connections.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Private Fare API</h3>
              <p className="text-muted-foreground">
                Access exclusive negotiated rates and wholesale fares not available to the public.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-purple-600/10 flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">aRStool (Air Re-Shopping)</h3>
              <p className="text-muted-foreground">
                AI-powered continuous monitoring and automatic re-booking when better air fares become available.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-green-600/10 flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">hRStool (Hotel Re-Shopping)</h3>
              <Badge variant="secondary" className="mb-2">Coming Q1 2026</Badge>
              <p className="text-muted-foreground">
                Continuous hotel rate monitoring and re-booking for maximum savings on accommodation.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-orange-600/10 flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Automation Suite</h3>
              <p className="text-muted-foreground">
                Complete post-booking automation including ticketing, confirmations, and notifications.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Unified Integration</h3>
              <p className="text-muted-foreground">
                All components work seamlessly together with shared data, unified reporting, and single dashboard.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Unified Platform */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose a Unified Platform?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Managing separate systems is costly, complex, and inefficient. UnifyTool eliminates these challenges with one integrated solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all">
                <benefit.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-lg">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Features */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Integration Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the benefits of true platform integration with features designed for efficiency and scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrationFeatures.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It All Works Together */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How It All Works Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From search to booking to optimization, every step is automated and integrated for maximum efficiency.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {workflowSteps.map((step, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${step.color}`} />
                <div className="flex items-start gap-6">
                  <div className={`text-4xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent flex-shrink-0`}>
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-lg">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Mockups */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              See the Platform in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore interactive demonstrations of each component working together seamlessly.
            </p>
          </div>

          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Click-to-Book Platform</h3>
              <ClickToBookMockup />
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Private Fare Comparison</h3>
              <PrivateFareMockup />
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-center">aRStool Re-Shopping Dashboard</h3>
              <RStoolDemoDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise-Grade Technology Stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built on modern cloud infrastructure with industry-leading performance, security, and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {techSpecs.map((spec, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <p className="text-sm text-muted-foreground mb-2">{spec.label}</p>
                <p className="text-xl font-semibold">{spec.value}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="text-base px-4 py-2">
              <Cloud className="w-4 h-4 mr-2" />
              Cloud-Native
            </Badge>
            <Badge variant="secondary" className="text-base px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              SOC 2 Certified
            </Badge>
            <Badge variant="secondary" className="text-base px-4 py-2">
              <Lock className="w-4 h-4 mr-2" />
              GDPR Compliant
            </Badge>
            <Badge variant="secondary" className="text-base px-4 py-2">
              <Globe className="w-4 h-4 mr-2" />
              Multi-GDS Support
            </Badge>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real Results from Real Customers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how travel businesses are transforming their operations with UnifyTool.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {successStories.map((story, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all">
                <MessageSquare className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{story.company}</h3>
                <div className="text-3xl font-bold text-primary mb-4">{story.result}</div>
                <p className="text-muted-foreground">{story.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Flexible Pricing for Every Business
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Save 25-35% with our complete platform packages vs. purchasing individual tools separately.
            </p>
            <Link to="/pricing">
              <Button size="lg" className="rounded-full px-8">
                View Detailed Pricing <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-2">Startup</h3>
              <p className="text-muted-foreground mb-4">Perfect for growing travel businesses</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  1,000 - 10,000 bookings/month
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  All core features included
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Email & chat support
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-primary shadow-lg">
              <Badge className="mb-2">Most Popular</Badge>
              <h3 className="text-2xl font-semibold mb-2">Business</h3>
              <p className="text-muted-foreground mb-4">For established OTAs and TMCs</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  10,000 - 100,000 bookings/month
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Advanced analytics & reporting
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Priority 24/7 support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Dedicated account manager
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-2">Enterprise</h3>
              <p className="text-muted-foreground mb-4">Custom solutions for high-volume operations</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  100,000+ bookings/month
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Custom feature development
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  SLA guarantees
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  On-premise deployment option
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about implementing UnifyTool
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card px-6 rounded-lg border">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your Travel Business Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join leading OTAs, TMCs, and travel agencies who have unified their operations with UnifyTool.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="rounded-full px-8 text-lg">
                  Schedule a Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="rounded-full px-8 text-lg">
                  View Pricing Plans
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              No credit card required • 4-8 week implementation • 24/7 support included
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default UnifyTool;

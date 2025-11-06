import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ASuiteDashboardMockup from "@/components/asuite/ASuiteDashboardMockup";
import { 
  Settings, 
  Users, 
  FileText, 
  LayoutDashboard, 
  UserCog, 
  BarChart3, 
  Code, 
  Ticket, 
  Mail, 
  Palette, 
  Shield, 
  Database, 
  Zap,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const ASuite = () => {
  const coreFeatures = [
    {
      icon: Users,
      title: "Customer Relationship Management",
      description: "Manage customer profiles, booking history, and preferences. Track customer lifetime value and engagement with automated communications."
    },
    {
      icon: FileText,
      title: "Content Management System",
      description: "Manage website content, pages, and assets. Full white-label customization with logos, colors, domains, and multi-language support."
    },
    {
      icon: LayoutDashboard,
      title: "Unified Dashboard",
      description: "Real-time overview of all operations with customizable widgets, reports, and KPI tracking for goal monitoring."
    },
    {
      icon: UserCog,
      title: "User Management",
      description: "Role-based access control (RBAC), team management, permissions, activity logs, and comprehensive audit trails."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Cross-platform analytics from all tools, custom report builder, automated scheduled reports, and revenue tracking."
    },
    {
      icon: Code,
      title: "API Management",
      description: "Manage API keys and credentials, monitor usage and performance, rate limiting, security controls, and developer documentation."
    },
    {
      icon: Ticket,
      title: "Booking Management",
      description: "Centralized PNR tracking across all platforms, bulk operations, automated workflows, and refund management."
    },
    {
      icon: Mail,
      title: "Marketing Automation",
      description: "Email campaign builder, customer segmentation, automated drip campaigns, and A/B testing capabilities."
    },
    {
      icon: Palette,
      title: "White-Label Configuration",
      description: "Custom branding and styling, domain management, email template customization, and mobile app configuration."
    }
  ];

  const crmFeatures = [
    "360° customer view",
    "Communication history",
    "Booking patterns & preferences",
    "Loyalty program management",
    "Customer support ticketing",
    "Automated follow-ups"
  ];

  const cmsFeatures = [
    "Drag-and-drop page builder",
    "Media library management",
    "SEO optimization tools",
    "Version control & rollback",
    "Multi-site management",
    "Template marketplace"
  ];

  const operationsFeatures = [
    "Team collaboration tools",
    "Task management & workflows",
    "Document management",
    "Compliance tracking",
    "Audit logs & reporting",
    "Notification center"
  ];

  const technicalSpecs = [
    { label: "Architecture", value: "Multi-tenant SaaS" },
    { label: "Database", value: "PostgreSQL with Redis caching" },
    { label: "Security", value: "SOC 2 Type II, GDPR compliant" },
    { label: "Uptime SLA", value: "99.99%" },
    { label: "Data Retention", value: "Configurable (1-7 years)" },
    { label: "API", value: "RESTful + GraphQL" },
    { label: "Backup", value: "Automated daily + point-in-time recovery" },
    { label: "Support", value: "24/7 with dedicated account manager" }
  ];

  const pricingTiers = [
    {
      name: "Professional",
      price: "$999",
      period: "/month",
      description: "Perfect for growing travel agencies",
      features: [
        "Up to 10 users",
        "5,000 customers in CRM",
        "Basic white-label (logo, colors)",
        "Standard reports",
        "Email support",
        "Unified dashboard",
        "User management",
        "Booking management",
        "Basic analytics"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Business",
      price: "$2,999",
      period: "/month",
      description: "For established travel businesses",
      features: [
        "Up to 50 users",
        "25,000 customers in CRM",
        "Full white-label (custom domains)",
        "Custom reports & analytics",
        "API access",
        "Priority support",
        "Marketing automation",
        "Advanced workflows",
        "API monitoring"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large-scale operations",
      features: [
        "Unlimited users",
        "Unlimited customers",
        "Multi-tenant architecture",
        "Advanced API access",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantees",
        "On-premise option available",
        "Custom training"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      title: "OTA Operations Manager",
      scenario: "Managing a multi-brand OTA with 50+ agents",
      solution: "aSuite provides centralized control, user permissions, and white-label customization for each brand, ensuring consistent operations across all properties."
    },
    {
      title: "TMC Administrator",
      scenario: "Corporate travel management with multiple client portals",
      solution: "Individual client dashboards, custom reporting, and automated compliance tracking for each corporate account with full data segregation."
    },
    {
      title: "Travel Agency Owner",
      scenario: "Growing agency needs better customer tracking and marketing",
      solution: "Integrated CRM with booking history, automated marketing campaigns, and customer insights to drive repeat bookings and referrals."
    }
  ];

  const faqs = [
    {
      question: "How does aSuite integrate with UnifyTool?",
      answer: "aSuite is the management layer that sits on top of UnifyTool. It provides the administrative interface to configure, monitor, and control all UnifyTool features including user management, white-labeling, and analytics. All data flows seamlessly between the two platforms through secure APIs."
    },
    {
      question: "Can we migrate data from our existing CRM?",
      answer: "Yes, we provide comprehensive data migration services. Our team will work with you to map your existing CRM data structure to aSuite and perform a secure migration. We support imports from most major CRM platforms including Salesforce, HubSpot, and custom databases."
    },
    {
      question: "What's included in white-label customization?",
      answer: "White-label customization includes custom branding (logo, colors, fonts), custom domain mapping, email template customization, custom landing pages, branded mobile apps (Enterprise tier), and the ability to completely remove all Velaree branding from customer-facing interfaces."
    },
    {
      question: "How long does implementation take?",
      answer: "Professional tier can be set up in 1-2 weeks, Business tier typically takes 3-4 weeks including API integrations and customization. Enterprise implementations vary based on complexity but typically range from 6-12 weeks including custom integrations and training."
    },
    {
      question: "Can we use aSuite without UnifyTool?",
      answer: "While aSuite is designed to work seamlessly with UnifyTool, it can function as a standalone CRM/CMS for travel businesses. However, you'll get the most value when using both platforms together as an integrated solution."
    },
    {
      question: "What third-party integrations are supported?",
      answer: "aSuite integrates with major accounting software (QuickBooks, Xero), marketing platforms (Mailchimp, SendGrid), communication tools (Slack, Microsoft Teams), and payment processors (Stripe, PayPal). Custom integrations can be built through our API."
    },
    {
      question: "How is customer data secured?",
      answer: "We use bank-level encryption (AES-256) for data at rest and TLS 1.3 for data in transit. All data is stored in SOC 2 Type II certified data centers with regular security audits. We're fully GDPR compliant and maintain strict access controls with audit logging."
    },
    {
      question: "Can we build custom workflows?",
      answer: "Yes, the Business and Enterprise tiers include a visual workflow builder that allows you to create custom automation rules, approval processes, and business logic without coding. Enterprise customers can also request fully custom workflows built by our development team."
    },
    {
      question: "What kind of training and support is provided?",
      answer: "All plans include comprehensive onboarding documentation and video tutorials. Business tier includes live training sessions for your team. Enterprise tier includes dedicated onboarding, custom training programs, and a dedicated account manager for ongoing support."
    },
    {
      question: "Is there a mobile app for aSuite?",
      answer: "aSuite is fully responsive and works perfectly on mobile browsers. Enterprise customers can request branded native mobile apps for iOS and Android with custom features tailored to their specific needs."
    }
  ];

  return (
    <>
      <Helmet>
        <title>aSuite - CRM & CMS for Travel Businesses | Velaree</title>
        <meta 
          name="description" 
          content="Complete CRM/CMS platform for managing your travel technology stack. Customer management, content control, analytics, and white-label customization in one unified system." 
        />
        <meta 
          name="keywords" 
          content="travel CRM, travel CMS, booking management, white label travel platform, travel agency software, OTA management, TMC software, travel analytics" 
        />
        <link rel="canonical" href="https://velaree.com/asuite" />
        <meta property="og:title" content="aSuite - CRM & CMS for Travel Businesses | Velaree" />
        <meta property="og:description" content="Complete CRM/CMS platform for managing your travel technology stack. Customer management, content control, analytics, and white-label customization." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://velaree.com/asuite" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="aSuite - CRM & CMS for Travel Businesses | Velaree" />
        <meta name="twitter:description" content="Complete CRM/CMS platform for managing your travel technology stack." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-background via-background to-muted/20 relative overflow-hidden pt-32 pb-20 px-6">
          <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px]" />
          <div className="container mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Settings className="w-4 h-4" />
              Complete Management Platform
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary animate-fade-in">
              aSuite
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto animate-fade-in">
              Your Command Center for Travel Operations
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
              Manage your entire travel technology stack, customers, content, and operations from one unified CRM/CMS platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link to="/contact">
                <Button size="lg" className="rounded-full px-8">
                  Book Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Platform Overview */}
        <section className="py-24 px-6 bg-muted/30">
          <div className="container mx-auto max-w-5xl text-center">
            <Badge variant="outline" className="mb-4">
              Platform Overview
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              The Control Center for Your Travel Business
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              aSuite is the management layer that sits on top of UnifyTool and your entire travel technology stack. 
              It provides comprehensive CRM capabilities, content management, user administration, and business intelligence 
              to help you run your travel business more efficiently.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card>
                <CardHeader>
                  <Users className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>CRM</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Complete customer relationship management with 360° customer views, booking history, and automated engagement.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <FileText className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>CMS</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Full content management system with white-label customization, multi-site support, and SEO optimization.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart3 className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Unified analytics dashboard with custom reporting, KPI tracking, and revenue insights across all platforms.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Interactive Dashboard Preview */}
            <div className="mt-16">
              <div className="text-center mb-8">
                <Badge variant="secondary" className="mb-4">
                  Live Demo
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  Experience aSuite in Action
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Explore the interactive dashboard below. Switch between CRM, CMS, Analytics, and Settings views to see how aSuite streamlines your operations.
                </p>
              </div>
              <ASuiteDashboardMockup />
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-24 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Core Features
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Everything You Need to Manage Your Travel Business
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A comprehensive suite of tools designed specifically for travel industry professionals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <feature.icon className="w-12 h-12 text-primary mb-4" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Capabilities */}
        <section className="py-24 px-6 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Key Capabilities
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Powerful Features Across Every Function
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-6 h-6 text-primary" />
                    CRM Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {crmFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-6 h-6 text-primary" />
                    CMS Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {cmsFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-6 h-6 text-primary" />
                    Operations Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {operationsFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Use Cases
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Built for Every Type of Travel Business
              </h2>
            </div>

            <div className="space-y-8">
              {useCases.map((useCase, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-2xl">{useCase.title}</CardTitle>
                    <CardDescription className="text-base">
                      <strong>Scenario:</strong> {useCase.scenario}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      <strong>Solution:</strong> {useCase.solution}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-24 px-6 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Technical Specifications
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Enterprise-Grade Infrastructure
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Built on modern, scalable architecture with security and reliability at the core
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {technicalSpecs.map((spec, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-primary">{spec.label}</span>
                      <span className="text-muted-foreground">{spec.value}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Shield className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Security First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Bank-level encryption, SOC 2 Type II certified, and GDPR compliant with regular security audits.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Database className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Reliable Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    99.99% uptime SLA with automated daily backups and point-in-time recovery capabilities.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>High Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Optimized for speed with Redis caching, CDN delivery, and distributed architecture.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-24 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Pricing
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Plans That Scale With Your Business
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Choose the plan that fits your needs. All plans include core features with the ability to upgrade as you grow.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <Card 
                  key={index} 
                  className={`relative ${tier.popular ? 'border-primary shadow-xl' : ''}`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-primary">{tier.price}</span>
                      <span className="text-muted-foreground">{tier.period}</span>
                    </div>
                    <CardDescription>{tier.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact">
                      <Button 
                        className="w-full rounded-full" 
                        variant={tier.popular ? "default" : "outline"}
                      >
                        {tier.cta}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                All plans include: Unified dashboard • User management • Booking management • Basic analytics • API monitoring
              </p>
              <Link to="/pricing" className="text-primary hover:underline">
                View detailed pricing comparison →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                FAQ
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about aSuite
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Ready to Take Control of Your Travel Operations?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              See how aSuite can streamline your entire travel business management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="rounded-full px-8">
                  Schedule Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  View All Pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ASuite;

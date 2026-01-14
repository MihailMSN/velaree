import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Plane, Building2, Layers, Link as LinkIcon, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const faqItems = [
    {
      question: "How quickly will you respond?",
      answer: "We typically respond to all demo requests within 24 hours during business days. Our team will reach out to schedule a time that works best for you."
    },
    {
      question: "What happens after I submit?",
      answer: "After you submit the form, our team will review your information and reach out via email to schedule a personalized demo. We'll tailor the session to your specific needs and use case."
    },
    {
      question: "Is there a free trial available?",
      answer: "We offer personalized demos and pilot programs for qualified businesses. Contact us to discuss the best option for your specific needs and scale."
    },
    {
      question: "What support options are available?",
      answer: "We provide comprehensive support including email, phone, and dedicated account management for enterprise clients. Our team is available during business hours and offers 24/7 support for critical issues."
    }
  ];

  const quickLinks: Array<{ 
    title: string; 
    description: string; 
    path: string; 
    icon?: LucideIcon; 
    badgeColor?: string;
  }> = [
    { title: "rsTool", description: "AI-powered air ticket re-shopping", path: "/rstool", icon: Plane, badgeColor: "bg-feature-purple-muted text-feature-purple-foreground border-feature-purple" },
    { title: "hsTool", description: "Hotel reservation re-shopping", path: "/hrstool", icon: Building2, badgeColor: "bg-feature-emerald-muted text-feature-emerald-foreground border-feature-emerald" },
    { title: "aSuite", description: "Complete automation suite", path: "/asuite", icon: Layers, badgeColor: "bg-feature-blue-muted text-feature-blue-foreground border-feature-blue" },
    { title: "UnifyTool", description: "Unified API platform", path: "/unifytool", icon: LinkIcon, badgeColor: "bg-feature-amber-muted text-feature-amber-foreground border-feature-amber" },
    { title: "Technology", description: "Our tech stack & approach", path: "/technology" },
    { title: "Pricing", description: "Plans & pricing details", path: "/pricing" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Us - Book a Demo | Velaree</title>
        <meta name="description" content="Contact Velaree to schedule a personalized demo. See how our travel technology solutions can transform your OTA, TMC, or airline operations." />
        <meta name="keywords" content="contact Velaree, book demo, travel technology demo, OTA consultation, TMC software demo, airline technology" />
        <link rel="canonical" href="https://velaree.com/contact" />
        
        <meta property="og:title" content="Contact Us - Book a Demo | Velaree" />
        <meta property="og:description" content="Schedule a personalized demo to see how Velaree can transform your travel operations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://velaree.com/contact" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - Book a Demo | Velaree" />
        <meta name="twitter:description" content="Schedule a personalized demo to see how Velaree can transform your travel operations." />
      </Helmet>
      <Navigation />
      
      {/* Simple Header Section */}
      <section className="pt-24 md:pt-32 pb-8 md:pb-12 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 text-foreground">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Centered Contact Form */}
      <section className="py-8 md:py-12 px-4 md:px-6">
        <div className="container mx-auto max-w-2xl">
          <ContactForm />
        </div>
      </section>

      {/* Mini FAQ Section */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-foreground">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-8">
            <Link 
              to="/faq" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              View Full FAQ
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links / Explore More Section */}
      <section className="py-12 md:py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 md:mb-4 text-foreground">
            Explore Our Solutions
          </h2>
          <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base px-2">
            Learn more about our products and how they can transform your travel operations
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Link key={index} to={link.path}>
                  <Card className="p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group cursor-pointer h-full">
                    <div className="flex items-start gap-3 mb-3">
                      {Icon && link.badgeColor && (
                        <Badge 
                          variant="outline" 
                          className={`${link.badgeColor} p-2 rounded-full`}
                        >
                          <Icon className="w-4 h-4" />
                        </Badge>
                      )}
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {link.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {link.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

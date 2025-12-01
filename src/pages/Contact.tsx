import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone, Clock, CheckCircle, MessageSquare, Calendar, Rocket, Copy, ExternalLink, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("sales@velaree.com");
    setCopiedEmail(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const quickFAQs = [
    {
      question: "How long does a typical demo take?",
      answer: "Our personalized demos typically last 30-45 minutes. We tailor each session to your specific needs and use cases, ensuring you see exactly how Velaree can benefit your operations."
    },
    {
      question: "Is there a minimum company size requirement?",
      answer: "No minimum requirements! We work with travel businesses of all sizes, from growing agencies to enterprise-level TMCs and airlines. Our solutions scale with your needs."
    },
    {
      question: "Can I get a trial before committing?",
      answer: "Yes! After your demo, we can arrange a pilot program tailored to your business. This lets you experience Velaree's capabilities with your actual workflows before making a decision."
    },
    {
      question: "What information should I prepare for the demo?",
      answer: "Just bring your questions! It helps if you can share your current booking volumes and pain points, but our team will guide you through everything."
    }
  ];

  const timelineSteps = [
    {
      step: 1,
      title: "Submit Request",
      description: "Fill out the form and our team will receive your inquiry instantly",
      icon: MessageSquare,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: 2,
      title: "Discovery Call",
      description: "We'll reach out within 24 hours to understand your needs",
      icon: Calendar,
      color: "from-primary to-accent"
    },
    {
      step: 3,
      title: "Personalized Demo",
      description: "See Velaree in action with a demo tailored to your business",
      icon: Rocket,
      color: "from-accent to-emerald-500"
    }
  ];

  const benefits = [
    "Personalized demo tailored to your use case",
    "Response within 24 hours guaranteed",
    "No commitment required",
    "Expert consultation included",
    "Custom pricing for your needs"
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
      
      {/* Enhanced Hero Section */}
      <section className="min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-background via-background to-muted/30 relative overflow-hidden pt-32 pb-16 px-6">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        {/* Decorative floating elements */}
        <div className="absolute top-40 right-20 w-4 h-4 bg-primary/30 rounded-full animate-bounce" style={{ animationDuration: "3s" }} />
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-accent/30 rounded-full animate-bounce" style={{ animationDuration: "2.5s", animationDelay: "0.5s" }} />
        <div className="absolute top-60 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }} />
        
        <div className="container mx-auto text-center relative z-10">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 text-primary px-5 py-2.5 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <Clock className="w-4 h-4" />
            Average response time: Under 24 hours
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Let's Build Something
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Ready to transform your travel operations? Our team is here to show you how Velaree can automate and optimize your business.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>500+ Demos Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Enterprise Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>No Commitment Required</span>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-12 animate-bounce">
            <ChevronDown className="w-6 h-6 mx-auto text-muted-foreground/50" />
          </div>
        </div>
      </section>

      {/* Two-Column Form Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary-foreground/10 rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-primary-foreground/5 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary-foreground/20 rounded-full" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
            {/* Left Column - Benefits */}
            <div className="text-primary-foreground animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Calendar className="w-4 h-4" />
                Book Your Demo
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                See Velaree in Action
              </h2>
              
              <p className="text-xl text-primary-foreground/80 mb-10">
                Get a personalized walkthrough of our platform and discover how we can help automate your travel operations.
              </p>

              {/* Benefits list */}
              <div className="space-y-4 mb-10">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 animate-fade-in"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-primary-foreground/90">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-primary-foreground/10">
                <div>
                  <div className="text-4xl font-bold text-primary-foreground mb-1">500+</div>
                  <div className="text-primary-foreground/60 text-sm">Demos Delivered</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary-foreground mb-1">98%</div>
                  <div className="text-primary-foreground/60 text-sm">Satisfaction Rate</div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:pl-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next Timeline */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:40px_40px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4" />
              Simple Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Happens Next?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From inquiry to demo in just a few simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {timelineSteps.map((item, index) => (
              <div 
                key={item.step} 
                className="relative animate-fade-in"
                style={{ animationDelay: `${0.15 * index}s` }}
              >
                {/* Connector line */}
                {index < timelineSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-border to-border/50" />
                )}
                
                <div className="relative bg-card border border-border rounded-2xl p-8 text-center hover:shadow-xl hover:border-primary/30 transition-all duration-300 group">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-sm font-bold text-primary">
                    {item.step}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Other Ways to Reach Us
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Email Card */}
            <div className="group relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/30 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 border border-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Email Us</h3>
                <a href="mailto:sales@velaree.com" className="text-primary hover:underline block mb-1">
                  sales@velaree.com
                </a>
                <p className="text-muted-foreground text-sm mb-4">Response within 24 hours</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={copyEmail}
                  className="gap-2"
                >
                  <Copy className="w-4 h-4" />
                  {copiedEmail ? "Copied!" : "Copy Email"}
                </Button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group relative animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/30 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 border border-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Call Us</h3>
                <a href="tel:+15551234567" className="text-primary hover:underline block mb-1">
                  +1 (555) 123-4567
                </a>
                <p className="text-muted-foreground text-sm mb-4">Mon-Fri, 9AM-6PM EST</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  asChild
                  className="gap-2"
                >
                  <a href="tel:+15551234567">
                    <ExternalLink className="w-4 h-4" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>

            {/* Location Card */}
            <div className="group relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/30 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 border border-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Visit Us</h3>
                <p className="text-foreground mb-1">San Francisco, CA</p>
                <p className="text-muted-foreground text-sm mb-4">By appointment only</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  asChild
                  className="gap-2"
                >
                  <a href="https://maps.google.com/?q=San+Francisco,+CA" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini FAQ Section */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MessageSquare className="w-4 h-4" />
                Quick Answers
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Common Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Get quick answers before booking your demo
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {quickFAQs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`faq-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors duration-300 animate-fade-in"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-10">
              <p className="text-muted-foreground mb-4">Have more questions?</p>
              <Button variant="outline" asChild>
                <a href="/faq">View Full FAQ</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

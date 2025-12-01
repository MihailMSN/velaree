import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone, Clock, CheckCircle, Calendar } from "lucide-react";

const Contact = () => {
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
      
      {/* Hero Section */}
      <section className="min-h-[40vh] flex items-center justify-center bg-gradient-to-b from-background to-muted/30 relative overflow-hidden pt-32 pb-12 px-6">
        <div className="container mx-auto text-center relative z-10">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 text-primary px-5 py-2.5 rounded-full text-sm font-medium mb-8">
            <Clock className="w-4 h-4" />
            Average response time: Under 24 hours
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Let's Build Something
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ready to transform your travel operations? Our team is here to show you how Velaree can automate and optimize your business.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
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
        </div>
      </section>

      {/* Two-Column Form Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
            {/* Left Column - Benefits */}
            <div className="text-primary-foreground">
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
                    className="flex items-center gap-3"
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

      {/* Contact Information */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Other Ways to Reach Us
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Email */}
              <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a href="mailto:sales@velaree.com" className="text-sm text-primary hover:underline">
                    sales@velaree.com
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">Response in 24hrs</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a href="tel:+15551234567" className="text-sm text-primary hover:underline">
                    +1 (555) 123-4567
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">Mon-Fri, 9AM-6PM</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-sm text-foreground">San Francisco, CA</p>
                  <p className="text-xs text-muted-foreground mt-1">By appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

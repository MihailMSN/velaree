import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Us - Book a Demo | Velaree</title>
        <meta 
          name="description" 
          content="Contact Velaree to schedule a personalized demo. See how our travel technology solutions can transform your OTA, TMC, or airline operations." 
        />
        <meta 
          name="keywords" 
          content="contact Velaree, book demo, travel technology demo, OTA consultation, TMC software demo, airline technology" 
        />
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
      <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-background via-background to-muted/20 relative overflow-hidden pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px]" />
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Mail className="w-4 h-4" />
            Let's Talk
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            See how Velaree can automate your travel operations
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Book a Demo
              </h2>
              <p className="text-xl text-muted-foreground">
                Schedule a personalized demo with our enterprise solutions team
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 border border-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Email Us</h3>
              <p className="text-muted-foreground">sales@velaree.com</p>
              <p className="text-muted-foreground text-sm mt-1">Response within 24 hours</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 border border-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Call Us</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
              <p className="text-muted-foreground text-sm mt-1">Mon-Fri, 9AM-6PM EST</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 border border-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Visit Us</h3>
              <p className="text-muted-foreground">San Francisco, CA</p>
              <p className="text-muted-foreground text-sm mt-1">By appointment only</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

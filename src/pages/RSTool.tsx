import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RStoolDemoDashboard from "@/components/rstool/RStoolDemoDashboard";
import RStoolFeatures from "@/components/rstool/RStoolFeatures";
import RStoolHowItWorks from "@/components/rstool/RStoolHowItWorks";
import RStoolPricing from "@/components/rstool/RStoolPricing";
import RStoolSocialProof from "@/components/rstool/RStoolSocialProof";
import RStoolFAQ from "@/components/rstool/RStoolFAQ";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
const RSTool = () => {
  return <div className="min-h-screen bg-background">
      <Helmet>
        <title>rsTool - AI-Powered Air Ticket Re-Shopping | Velaree</title>
        <meta name="description" content="AI-powered B2B air ticket re-shopping platform. Monitor PNRs 24/7, check pricing across all GDSs, and automatically find better fares. Save 15-20% post-sale." />
        <meta name="keywords" content="air ticket re-shopping, PNR monitoring, GDS integration, airline fare comparison, automated re-booking, travel savings, B2B travel tools" />
        <link rel="canonical" href="https://velaree.com/rstool" />
        
        <meta property="og:title" content="rsTool - AI-Powered Air Ticket Re-Shopping | Velaree" />
        <meta property="og:description" content="Monitor PNRs 24/7 and automatically find better fares across all GDSs. Save 15-20% on air tickets post-sale." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://velaree.com/rstool" />
        <meta property="og:image" content="/og-rstool.png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="rsTool - AI-Powered Air Ticket Re-Shopping | Velaree" />
        <meta name="twitter:description" content="Monitor PNRs 24/7 and automatically find better fares across all GDSs. Save 15-20% on air tickets post-sale." />
        <meta name="twitter:image" content="/og-rstool.png" />
        
        <script type="application/ld+json">
          {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "rsTool",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "lowPrice": "499",
            "highPrice": "4999",
            "offerCount": "3"
          },
          "description": "AI-powered B2B air ticket re-shopping platform that monitors PNRs 24/7 and automatically finds better fares across all GDSs",
          "featureList": ["24/7 automated PNR monitoring", "Multi-GDS fare comparison", "AI-powered price drop detection", "Automated re-booking capability", "Real-time savings alerts", "Comprehensive analytics dashboard"],
          "provider": {
            "@type": "Organization",
            "name": "Velaree",
            "url": "https://velaree.com"
          }
        })}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "How long does implementation take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Implementation typically takes 2-4 weeks depending on your existing systems. Our team handles the technical setup including GDS integration, PNR monitoring configuration, and user training. The Starter plan can be live in as little as 7 days."
            }
          }, {
            "@type": "Question",
            "name": "Which GDS systems do you integrate with?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "rsTool integrates with all major GDS platforms including Amadeus, Sabre, Travelport (Galileo, Apollo, Worldspan), and NDC connections. We also support direct airline APIs for enhanced fare checking and rebooking capabilities."
            }
          }, {
            "@type": "Question",
            "name": "What's included in the pricing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "All plans include 24/7 PNR monitoring, multi-GDS fare comparison, automated savings alerts, and comprehensive analytics. Growth and Enterprise plans add API access, priority support, custom reporting, and white-label options. There are no hidden fees or per-transaction charges."
            }
          }, {
            "@type": "Question",
            "name": "How do you calculate savings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Savings are calculated by comparing the original booking fare against the best available fare found through our AI-powered re-shopping engine. We factor in change fees, fare rules, and taxes to show true net savings. Our dashboard tracks both realized savings (completed rebookings) and potential savings opportunities."
            }
          }, {
            "@type": "Question",
            "name": "Is our booking data secure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. rsTool is SOC 2 Type II certified and fully GDPR compliant. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We maintain separate data environments per agency, and you retain full ownership of your booking data. We never share client data with third parties."
            }
          }, {
            "@type": "Question",
            "name": "What happens during the free pilot?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The free pilot includes 30 days of full platform access with up to 500 PNR monitoring. Our team will configure your GDS connections, train your staff, and help you identify initial savings opportunities. There's no credit card required and no commitment to continue after the trial."
            }
          }, {
            "@type": "Question",
            "name": "Can we automate the rebooking process?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, with Enterprise plans. Auto-rebook functionality allows you to set rules-based triggers (e.g., 'automatically rebook if savings exceed $100 and no fare rule violations'). Starter and Growth plans provide savings alerts with one-click manual rebooking through your existing GDS workflow."
            }
          }, {
            "@type": "Question",
            "name": "What kind of support do you provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Starter plans include email support with 24-hour response time. Growth plans add live chat and phone support during business hours. Enterprise clients get a dedicated account manager, priority support with 1-hour response SLA, and quarterly business reviews to optimize your savings strategy."
            }
          }]
        })}
        </script>
      </Helmet>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              AI-Powered B2B Re-Shopping Portal
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">rsTool</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Experience the future of air ticket re-shopping. Our AI-powered platform monitors PNRs 24/7, 
              checks pricing across all major GDSs, and automatically finds better fares through multiple re-booking scenarios.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="rounded-full bg-stone-950 hover:bg-stone-800">
                  Start Free Pilot <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="rounded-full">
                Watch Demo Video
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      

      {/* Demo Dashboard */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Interactive Dashboard</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how rsTool analyzes PNRs and finds savings opportunities across multiple GDS platforms
            </p>
          </div>
          <RStoolDemoDashboard />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <RStoolHowItWorks />
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features for B2B Travel Agencies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to maximize savings and optimize your airline bookings
            </p>
          </div>
          <RStoolFeatures />
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 py-[2px]">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your agency's volume
            </p>
          </div>
          <RStoolPricing />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about rsTool implementation and pricing
            </p>
          </div>
          <RStoolFAQ />
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your B2B Travel Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join leading travel agencies already saving millions with rsTool's AI-powered re-shopping platform
          </p>
          <Link to="/contact">
            <Button size="lg" className="rounded-full bg-stone-950 hover:bg-stone-800 text-white">
              Schedule a Demo <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>;
};
export default RSTool;
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Mission from "@/components/Mission";
import Solutions from "@/components/Solutions";
import ApiPreview from "@/components/ApiPreview";
import Technology from "@/components/Technology";
import TechnicalSpecs from "@/components/TechnicalSpecs";
import CaseStudies from "@/components/CaseStudies";
import LiveStats from "@/components/LiveStats";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return <div className="min-h-screen bg-background">
      <Helmet>
        <title>Velaree - Next-Generation Travel Technology Solutions</title>
        <meta name="description" content="Enterprise travel software for OTAs, TMCs, and airlines. Instant booking, private fares, automation, and re-shopping tools. Transform your travel operations today." />
        <meta name="keywords" content="travel technology, OTA software, TMC platform, airline booking system, travel automation, GDS integration, private fares, NDC content" />
        <link rel="canonical" href="https://velaree.com/" />
        
        <meta property="og:title" content="Velaree - Next-Generation Travel Technology Solutions" />
        <meta property="og:description" content="Enterprise travel software for OTAs, TMCs, and airlines. Transform your operations with instant booking, automation, and AI-powered tools." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://velaree.com/" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Velaree - Next-Generation Travel Technology Solutions" />
        <meta name="twitter:description" content="Enterprise travel software for OTAs, TMCs, and airlines. Transform your operations with instant booking, automation, and AI-powered tools." />
        
        <script type="application/ld+json">
          {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Velaree",
          "url": "https://velaree.com",
          "logo": "https://velaree.com/logo.png",
          "description": "Enterprise travel technology solutions for OTAs, TMCs, and airlines",
          "foundingDate": "2020",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Sales",
            "url": "https://velaree.com/contact"
          },
          "sameAs": ["https://www.linkedin.com/company/velaree"],
          "offers": [{
            "@type": "Offer",
            "itemOffered": {
              "@type": "SoftwareApplication",
              "name": "aRStool",
              "applicationCategory": "BusinessApplication",
              "description": "AI-powered air ticket re-shopping platform"
            }
          }, {
            "@type": "Offer",
            "itemOffered": {
              "@type": "SoftwareApplication",
              "name": "hRStool",
              "applicationCategory": "BusinessApplication",
              "description": "AI-powered hotel re-shopping platform"
            }
          }]
        })}
        </script>
      </Helmet>
      <Navigation />
      <Hero />
      <HowItWorks />
      <Mission />
      <Solutions />
      <ApiPreview />
      <Technology />
      <TechnicalSpecs />
      <CaseStudies />
      <LiveStats />
      <CTA />
      <Footer />
      <BackToTop />
    </div>;
};
export default Index;
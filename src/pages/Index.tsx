import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductsShowcase from "@/components/ProductsShowcase";
import HowItWorks from "@/components/HowItWorks";
import Integrations from "@/components/Integrations";
import ValuePillars from "@/components/ValuePillars";
import CaseStudies from "@/components/CaseStudies";
import LiveStats from "@/components/LiveStats";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ProductsShowcase />
      <HowItWorks />
      <Integrations />
      <section className="py-24 bg-gradient-to-b from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Why Choose Velaree?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built for travel agencies who want to increase profits and delight customers
            </p>
          </div>
          <ValuePillars />
        </div>
      </section>
      <CaseStudies />
      <LiveStats />
      <TestimonialCarousel />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;

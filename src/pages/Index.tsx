import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";
import HowItWorks from "@/components/HowItWorks";
import Mission from "@/components/Mission";
import Solutions from "@/components/Solutions";
import Integrations from "@/components/Integrations";
import ApiPreview from "@/components/ApiPreview";
import Technology from "@/components/Technology";
import TechnicalSpecs from "@/components/TechnicalSpecs";
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
      <SectionDivider />
      <HowItWorks />
      <Mission />
      <Solutions />
      <Integrations />
      <ApiPreview />
      <Technology />
      <TechnicalSpecs />
      <CaseStudies />
      <LiveStats />
      <TestimonialCarousel />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;

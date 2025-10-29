import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Solutions from "@/components/Solutions";
import Integrations from "@/components/Integrations";
import Technology from "@/components/Technology";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Mission />
      <Solutions />
      <Integrations />
      <Technology />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;

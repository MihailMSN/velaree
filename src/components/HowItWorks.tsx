import { useState } from "react";
import { Search, GitCompare, Zap, Bell } from "lucide-react";
import SearchAvailabilityMockup from "./mockups/SearchAvailabilityMockup";
import RStoolDemoDashboard from "./rstool/RStoolDemoDashboard";
import CheckoutMockup from "./mockups/CheckoutMockup";
import AutomationMockup from "./mockups/AutomationMockup";
const steps = [{
  icon: Search,
  number: "01",
  title: "Book as Usual",
  shortTitle: "Book",
  description: "Your clients book tickets or hotels through your platform as they normally do",
  metric: "Seamless integration",
  mockup: SearchAvailabilityMockup,
  demoDescription: "Your existing booking process remains unchanged. Clients search and book flights or hotels through your platform exactly as they always have."
}, {
  icon: GitCompare,
  number: "02",
  title: "Automatic Monitoring",
  shortTitle: "Monitor",
  description: "Our AI monitors 50+ sources continuously for better prices - GDS, airlines, consolidators, and OTAs",
  metric: "24/7 monitoring",
  mockup: RStoolDemoDashboard,
  demoDescription: "Advanced AI-powered monitoring checks every booking against 50+ data sources continuously. Our system compares fares, rates, and availability across GDS, direct connections, consolidators, and metasearch platforms."
}, {
  icon: Zap,
  number: "03",
  title: "Find Savings",
  shortTitle: "Savings",
  description: "When a better price is found, you get instant notification with detailed re-booking options",
  metric: "Instant alerts",
  mockup: CheckoutMockup,
  demoDescription: "Receive real-time alerts when better prices are discovered. See exactly how much you can save, view different re-booking scenarios (void/reissue, refund/rebook), and get confidence scores for each option."
}, {
  icon: Bell,
  number: "04",
  title: "Re-book & Profit",
  shortTitle: "Profit",
  description: "Cancel the original booking, rebook at the lower price, and keep the difference as additional commission",
  metric: "15-40% savings",
  mockup: AutomationMockup,
  demoDescription: "One-click re-booking makes it effortless to capture savings. The price difference becomes your additional profit while your client benefits from price drop protection."
}];
const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const ActiveMockup = steps[activeStep].mockup;
  return <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How Re-Shopping Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Turn every booking into a potential profit opportunity
          </p>
        </div>

        {/* Step Selector Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto mb-12">
          {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = activeStep === index;
          return <button key={index} onClick={() => setActiveStep(index)} role="tab" aria-selected={isActive} aria-controls={`demo-panel-${index}`} id={`step-tab-${index}`} className={`
                  relative p-4 rounded-lg border-2 transition-all duration-300 text-left
                  ${isActive ? 'bg-accent border-accent shadow-lg scale-105' : 'bg-card border-border hover:border-accent/50 hover:shadow-md'}
                `} style={{
            animationDelay: `${index * 0.1}s`
          }}>
                {/* Connector Line */}
                {index < steps.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-border">
                    {activeStep >= index && <div className="h-full bg-accent transition-all duration-500" />}
                  </div>}

                {/* Step Number */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs mb-2 transition-colors ${isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                  {step.number}
                </div>

                {/* Icon */}
                

                {/* Title */}
                <h3 className={`text-sm font-bold mb-1.5 transition-colors ${isActive ? 'text-foreground' : 'text-foreground'}`}>
                  {step.shortTitle}
                </h3>

                {/* Metric */}
                <div className={`text-xs font-semibold transition-colors ${isActive ? 'text-foreground/80' : 'text-muted-foreground'}`}>
                  {step.metric}
                </div>
              </button>;
        })}
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {steps.map((_, idx) => <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeStep ? 'w-8 bg-accent' : 'w-1.5 bg-accent/30'}`} />)}
        </div>

        {/* Demo Display Area */}
        <div className="max-w-6xl mx-auto" role="tabpanel" id={`demo-panel-${activeStep}`} aria-labelledby={`step-tab-${activeStep}`}>
          <div key={activeStep} className="animate-fade-in mb-8">
            <ActiveMockup />
          </div>

          {/* Description */}
          <div className="text-center animate-fade-in" style={{
          animationDelay: "0.1s"
        }}>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
              {steps[activeStep].demoDescription}
            </p>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 border border-accent/40">
              <span className="text-sm font-semibold text-foreground">
                {steps[activeStep].metric}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-muted-foreground text-lg mb-4">
            Ready to see it in action?
          </p>
          <a href="#contact" className="inline-flex items-center text-foreground font-semibold hover:text-primary transition-colors border-b-2 border-accent hover:border-primary pb-1">
            Schedule a Live Demo →
          </a>
        </div>
      </div>
    </section>;
};
export default HowItWorks;
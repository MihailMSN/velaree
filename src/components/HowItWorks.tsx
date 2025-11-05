import { useState } from "react";
import { Search, GitCompare, Zap, Bell } from "lucide-react";
import SearchAvailabilityMockup from "./mockups/SearchAvailabilityMockup";
import RStoolDemoDashboard from "./rstool/RStoolDemoDashboard";
import CheckoutMockup from "./mockups/CheckoutMockup";
import AutomationMockup from "./mockups/AutomationMockup";
const steps = [{
  icon: Search,
  number: "01",
  title: "Search 200+ Airlines",
  shortTitle: "Search",
  description: "Real-time availability across all major GDS, LCCs, and direct airline connections in one API call",
  metric: "Sub-500ms response",
  mockup: SearchAvailabilityMockup,
  demoDescription: "Interactive live search with real-time availability across 200+ airlines. Select airports, dates, and passengers to see instant results from GDS, LCC, and direct connections - all in under 500ms."
}, {
  icon: GitCompare,
  number: "02",
  title: "Re-Shopping Intelligence",
  shortTitle: "Re-Shop",
  description: "Automated price monitoring checks for fare drops every minute, comparing consolidators, suppliers, commission rates, and private fares",
  metric: "24/7 monitoring",
  mockup: RStoolDemoDashboard,
  demoDescription: "Advanced re-shopping dashboard with AI-powered analysis monitors existing bookings for price drops. View detailed scenarios (Void/Reissue, Refund/Reissue, Exchange), confidence scores, and one-click re-booking opportunities across multiple GDS and consolidators."
}, {
  icon: Zap,
  number: "03",
  title: "Book Instantly",
  shortTitle: "Checkout",
  description: "Complete end-to-end booking with passenger details, ancillaries, payment processing, and instant confirmation",
  metric: "60-second booking",
  mockup: CheckoutMockup,
  demoDescription: "Streamlined checkout experience with passenger management, ancillary selection, and secure payment processing. Add baggage, meals, seats, and more - complete your booking in under 60 seconds."
}, {
  icon: Bell,
  number: "04",
  title: "Automated Management",
  shortTitle: "Manage",
  description: "Intelligent automation handles ticketing, schedule changes, cancellations, and customer notifications",
  metric: "70% less manual work",
  mockup: AutomationMockup,
  demoDescription: "See how our automation suite handles routine tasks like ticketing, schedule changes, and notifications - reducing manual work by 70% while eliminating errors."
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
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See it in action - Click each step below
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
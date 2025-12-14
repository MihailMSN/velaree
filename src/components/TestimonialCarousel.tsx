import { Card } from "@/components/ui/card";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "Velaree transformed our booking operations. The automation suite reduced our processing time dramatically while improving accuracy. We process 15,000 bookings monthly with 84% fewer errors.",
    metric: "84% Reduction in Booking Errors",
    name: "Sarah Chen",
    role: "Head of Technology",
    company: "Leading European OTA",
    companyType: "Online Travel Agency"
  },
  {
    quote: "Access to private consolidator fares through Velaree gave us a competitive advantage we never had. Our premium cabin bookings tripled and margins improved by $2.4M annually.",
    metric: "3x Growth in Premium Bookings",
    name: "Michael Rodriguez",
    role: "Managing Director",
    company: "Corporate TMC Network",
    companyType: "Travel Management Company"
  },
  {
    quote: "Scaling from 10K to over 100K bookings per month was seamless. The sub-500ms API response time and 99.9% uptime means we never lose a customer to slow searches.",
    metric: "100K+ Bookings Per Month",
    name: "Priya Patel",
    role: "CEO & Founder",
    company: "Asia-Pacific Consolidator",
    companyType: "Flight Consolidation"
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-primary/5 via-accent/5 to-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            See how travel companies scaled their operations with Velaree
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="p-6 sm:p-8 md:p-12 bg-card border-border shadow-xl animate-fade-in">
            <div className="text-center space-y-4 sm:space-y-6 md:space-y-8">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent">
                {testimonials[currentIndex].metric}
              </div>
              
              <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground font-light leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="space-y-1 sm:space-y-2">
                <div className="font-bold text-base sm:text-lg text-foreground">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-sm sm:text-base text-muted-foreground">
                  {testimonials[currentIndex].role}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground/80">
                  {testimonials[currentIndex].company}
                </div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-xs font-medium text-foreground mt-2">
                  {testimonials[currentIndex].companyType}
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={previous}
              className="rounded-full hover:bg-accent/10 active:bg-accent/20 min-w-[44px] min-h-[44px]"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 min-w-[32px] ${
                    index === currentIndex
                      ? "bg-accent w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full hover:bg-accent/10 active:bg-accent/20 min-w-[44px] min-h-[44px]"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;

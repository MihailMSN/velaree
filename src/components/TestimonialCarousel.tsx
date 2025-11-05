import { Card } from "@/components/ui/card";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "aRStool completely changed our business model. We now offer price drop protection to all clients and capture €340K in annual savings that we would have completely missed. The AI finds opportunities we never would have spotted manually.",
    metric: "€340K Captured Annually",
    name: "Sarah Chen",
    role: "Operations Director",
    company: "European OTA",
    companyType: "Online Travel Agency"
  },
  {
    quote: "Our corporate clients love the price drop protection. We've saved them over €2.1M while earning an additional €420K in commission. aRStool paid for itself in the first month and client retention improved to 95%.",
    metric: "€2.1M Saved for Clients",
    name: "Michael Rodriguez",
    role: "Managing Director",
    company: "Corporate TMC",
    companyType: "Travel Management Company"
  },
  {
    quote: "Before aRStool, we spent 30+ hours weekly manually checking fares with limited success. Now it's completely automated, we find 4x more re-booking opportunities, and our profit margins increased by 18%. It's a game changer.",
    metric: "18% Margin Increase",
    name: "Priya Patel",
    role: "CEO & Founder",
    company: "Asia-Pacific Travel Agency",
    companyType: "Travel Agency"
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
    <section className="py-24 bg-gradient-to-b from-primary/5 via-accent/5 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Loved by Travel Agencies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how agencies are increasing profits with re-shopping
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="p-12 bg-card border-border shadow-xl animate-fade-in">
            <div className="text-center space-y-8">
              <div className="text-4xl md:text-5xl font-bold text-accent">
                {testimonials[currentIndex].metric}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-foreground font-light leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="space-y-2">
                <div className="font-bold text-lg text-foreground">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-muted-foreground">
                  {testimonials[currentIndex].role}
                </div>
                <div className="text-sm text-muted-foreground/80">
                  {testimonials[currentIndex].company}
                </div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-xs font-medium text-foreground mt-2">
                  {testimonials[currentIndex].companyType}
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={previous}
              className="rounded-full hover:bg-accent/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-accent w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full hover:bg-accent/10"
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

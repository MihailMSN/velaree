import { Card } from "@/components/ui/card";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "Velaree transformed our booking operations. The automation suite reduced our processing time dramatically while improving accuracy.",
    metric: "Reduced booking time by 60%",
    name: "Sarah Chen",
    role: "CTO",
    company: "GlobalTours Ltd"
  },
  {
    quote: "The private fare API gave us access to consolidator rates we never had before. Our margins improved significantly within the first quarter.",
    metric: "Increased conversions by 45%",
    name: "Michael Rodriguez",
    role: "Head of Operations",
    company: "TravelWise Group"
  },
  {
    quote: "Scaling from 10K to over 100K bookings per month was seamless with Velaree. Their infrastructure handled our growth effortlessly.",
    metric: "Processing 100K+ bookings/month",
    name: "Priya Patel",
    role: "CEO",
    company: "JetSet Travels"
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
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how travel companies scaled their operations with Velaree
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
                  {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
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

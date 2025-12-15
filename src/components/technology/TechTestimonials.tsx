import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The API integration took less than a day. Response times are consistently under 400ms even during peak hours. Best travel tech investment we've made.",
    author: "Marcus Chen",
    role: "CTO",
    company: "TravelMax OTA",
    metric: "10x faster integration"
  },
  {
    quote: "We switched from building in-house and saved 18 months of development time. The private fare API alone increased our margins by 28%.",
    author: "Sarah Williams",
    role: "VP Engineering",
    company: "JetStream Travel",
    metric: "28% margin increase"
  },
  {
    quote: "The re-shopping engine recovered $2.3M in the first quarter. The webhook system is rock-solid and the documentation is excellent.",
    author: "David Park",
    role: "Head of Product",
    company: "FlyDirect TMC",
    metric: "$2.3M recovered Q1"
  }
];

const TechTestimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">
            Trusted by Engineering Teams
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Hear from the developers and tech leaders using our platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4 group-hover:text-primary/50 transition-colors" />
              
              <p className="text-foreground leading-relaxed mb-6 text-sm md:text-base">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-accent/20 border border-accent/40">
                  <span className="text-xs font-semibold text-foreground whitespace-nowrap">
                    {testimonial.metric}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechTestimonials;

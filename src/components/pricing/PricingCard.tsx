import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface PricingPlan {
  name: string;
  price: string;
  originalPrice?: string;
  period: string;
  description: string;
  volume: string;
  features: string[];
  cta: string;
  ctaLink: string;
  popular: boolean;
  comingSoon?: boolean;
}

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
}

const PricingCard = ({ plan, index }: PricingCardProps) => {
  return (
    <Card
      className={cn(
        "relative flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group",
        plan.popular
          ? "border-primary shadow-lg bg-gradient-to-b from-primary/5 to-transparent"
          : "border-border hover:border-primary/40",
        plan.comingSoon && "opacity-90"
      )}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
            <Sparkles className="w-3 h-3" />
            Most Popular
          </span>
        </div>
      )}

      <CardHeader className="pb-4">
        <CardTitle className="text-2xl">{plan.name}</CardTitle>
        <CardDescription className="min-h-[40px]">{plan.description}</CardDescription>
        <div className="mt-4">
          <div className="flex items-baseline gap-2">
            {plan.originalPrice && (
              <span className="text-xl text-muted-foreground line-through">
                {plan.originalPrice}
              </span>
            )}
            <span className="text-4xl font-bold transition-all duration-300">
              {plan.price}
            </span>
            <span className="text-muted-foreground">{plan.period}</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">{plan.volume}</p>
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        <ul className="space-y-3">
          {plan.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span
                className={cn(
                  "text-sm",
                  feature.includes("Everything in") || feature.includes("plus:")
                    ? "font-semibold"
                    : ""
                )}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Link to={plan.ctaLink} className="w-full">
          <Button
            size="lg"
            className={cn(
              "w-full rounded-full transition-all duration-300",
              plan.popular
                ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                : "bg-foreground hover:bg-foreground/90 text-background"
            )}
          >
            {plan.cta}
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;

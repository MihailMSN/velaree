import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const CTA = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you! We'll be in touch soon.");
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Travel Business?
          </h2>
          
          <p className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            Join leading OTAs, TMCs, and airlines using Velaree to power their digital infrastructure
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-8">
            <Input 
              type="email" 
              placeholder="Enter your work email" 
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-lg px-6 py-6 rounded-full flex-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit"
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
          
          <p className="text-primary-foreground/60 text-sm">
            Schedule a personalized demo with our enterprise solutions team
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;

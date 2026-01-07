import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Sparkles, Check, Users } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleWaitlistSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      const { error } = await supabase
        .from("newsletter_subscribers")
        .insert({ 
          email, 
          source: "rstool_waitlist",
          is_active: true 
        });

      if (error) {
        if (error.code === "23505") {
          toast.info("You're already on the waitlist!");
        } else {
          throw error;
        }
      } else {
        setIsSuccess(true);
        toast.success("You're on the rsTool early access list!");
      }
      setEmail("");
    } catch (error) {
      console.error("Waitlist signup error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-primary-foreground text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            rsTool Early Access • Launching Q3-Q4 2026
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 sm:mb-6">
            Be First to Save 15-30% on Every Ticket
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Join the waitlist for early access to rsTool—our AI-powered PNR repricing platform that automatically finds and applies lower fares to your bookings.
          </p>

          {/* Waitlist Form */}
          {isSuccess ? (
            <div className="max-w-md mx-auto p-6 rounded-2xl bg-white/10 border border-white/20">
              <div className="flex items-center justify-center gap-3 text-primary-foreground">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-semibold">You're on the list!</p>
                  <p className="text-sm text-primary-foreground/70">We'll notify you when rsTool launches.</p>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleWaitlistSignup} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-14 px-5 rounded-full bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:bg-white/20"
                />
                <Button 
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="h-14 px-8 rounded-full bg-white text-primary hover:bg-white/90 font-semibold group"
                >
                  {isLoading ? (
                    "Joining..."
                  ) : (
                    <>
                      Join Waitlist
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}

          {/* Social Proof */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>50+ agencies on waitlist</span>
            </div>
            <span>•</span>
            <span>No commitment required</span>
            <span>•</span>
            <span>Early adopter pricing</span>
          </div>

          {/* Feature highlights */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              "AI monitors fares 24/7",
              "Automated rebooking",
              "Multi-GDS support"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center justify-center gap-2 text-sm text-primary-foreground/80">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

import { cn } from "@/lib/utils";

interface BillingToggleProps {
  billingCycle: "monthly" | "annual";
  onToggle: (cycle: "monthly" | "annual") => void;
}

const BillingToggle = ({ billingCycle, onToggle }: BillingToggleProps) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      <button
        onClick={() => onToggle("monthly")}
        className={cn(
          "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
          billingCycle === "monthly"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        Monthly
      </button>
      <div className="relative">
        <button
          onClick={() => onToggle(billingCycle === "monthly" ? "annual" : "monthly")}
          className="w-14 h-8 bg-muted rounded-full p-1 transition-colors duration-300"
        >
          <div
            className={cn(
              "w-6 h-6 bg-primary rounded-full transition-transform duration-300",
              billingCycle === "annual" ? "translate-x-6" : "translate-x-0"
            )}
          />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onToggle("annual")}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
            billingCycle === "annual"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Annual
        </button>
        <span className="bg-green-500/20 text-green-600 dark:text-green-400 text-xs font-semibold px-2 py-1 rounded-full">
          Save 20%
        </span>
      </div>
    </div>
  );
};

export default BillingToggle;

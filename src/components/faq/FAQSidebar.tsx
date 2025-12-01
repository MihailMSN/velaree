import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Building2, 
  Settings2, 
  Package, 
  Shield, 
  CreditCard, 
  Headphones,
  ChevronRight
} from "lucide-react";

interface FAQSidebarProps {
  categories: string[];
  categoryConfig: Record<string, { icon: typeof Building2; gradient: string }>;
}

const FAQSidebar = ({ categories, categoryConfig }: FAQSidebarProps) => {
  const [activeCategory, setActiveCategory] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    categories.forEach((category) => {
      const element = document.getElementById(getCategoryId(category));
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveCategory(category);
              }
            });
          },
          { 
            rootMargin: "-20% 0px -60% 0px",
            threshold: 0 
          }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [categories]);

  const getCategoryId = (category: string) => {
    return category.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and");
  };

  const scrollToCategory = (category: string) => {
    const element = document.getElementById(getCategoryId(category));
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const defaultIcons: Record<string, typeof Building2> = {
    "Company & Services": Building2,
    "Implementation & Integration": Settings2,
    "Products & Features": Package,
    "Security & Compliance": Shield,
    "Pricing & Plans": CreditCard,
    "Support & Training": Headphones
  };

  return (
    <nav className="hidden lg:block sticky top-32 h-fit w-64 shrink-0">
      <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-4">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 px-2">
          Categories
        </h3>
        <ul className="space-y-1">
          {categories.map((category) => {
            const config = categoryConfig[category];
            const Icon = config?.icon || defaultIcons[category] || Building2;
            const isActive = activeCategory === category;
            
            return (
              <li key={category}>
                <button
                  onClick={() => scrollToCategory(category)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200",
                    isActive 
                      ? "bg-primary/10 text-primary font-medium" 
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                  )}
                >
                  <Icon className={cn(
                    "w-4 h-4 shrink-0 transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )} />
                  <span className="text-sm truncate flex-1">{category}</span>
                  <ChevronRight className={cn(
                    "w-4 h-4 shrink-0 transition-all duration-200",
                    isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                  )} />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default FAQSidebar;

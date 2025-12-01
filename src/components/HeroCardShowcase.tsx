import CardSwap from "./CardSwap";
import ProductPreviewCard from "./mockups/ProductPreviewCard";

const tabs = [
  { id: "asuite", label: "aSuite", color: "linear-gradient(135deg, #10b981, #0d9488)" },
  { id: "rstool", label: "aRStool", color: "linear-gradient(135deg, #3b82f6, #4f46e5)" },
  { id: "unify", label: "Unify", color: "linear-gradient(135deg, #8b5cf6, #9333ea)" },
  { id: "hrstool", label: "hRStool", color: "linear-gradient(135deg, #f59e0b, #ea580c)" },
];

const HeroCardShowcase = () => {
  return (
    <div className="hidden lg:block absolute right-[5%] top-1/2 -translate-y-1/2 z-0 opacity-90">
      <CardSwap 
        tabs={tabs} 
        autoSwapInterval={4000} 
        cardWidth={380} 
        cardHeight={260}
      >
        <ProductPreviewCard product="asuite" />
        <ProductPreviewCard product="rstool" />
        <ProductPreviewCard product="unify" />
        <ProductPreviewCard product="hrstool" />
      </CardSwap>
    </div>
  );
};

export default HeroCardShowcase;

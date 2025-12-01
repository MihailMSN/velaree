import CardSwap from "./CardSwap";
import ProductPreviewCard from "./mockups/ProductPreviewCard";

const HeroCardShowcase = () => {
  return (
    <div className="hidden lg:block absolute right-[5%] top-1/2 -translate-y-1/2 z-0 opacity-90">
      <CardSwap autoSwapInterval={4000} cardWidth={380} cardHeight={260}>
        <ProductPreviewCard product="asuite" />
        <ProductPreviewCard product="rstool" />
        <ProductPreviewCard product="unify" />
        <ProductPreviewCard product="hrstool" />
      </CardSwap>
    </div>
  );
};

export default HeroCardShowcase;

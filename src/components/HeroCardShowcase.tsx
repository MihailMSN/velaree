import StackedCardSwap from "./StackedCardSwap";
import ASuitePreviewCard from "./mockups/ASuitePreviewCard";
import RStoolPreviewCard from "./mockups/RStoolPreviewCard";
import UnifyPreviewCard from "./mockups/UnifyPreviewCard";
import HRStoolPreviewCard from "./mockups/HRStoolPreviewCard";

const labels = ["aSuite", "aRStool", "Unify", "hRStool"];

const HeroCardShowcase = () => {
  return (
    <div 
      className="hidden lg:block absolute right-[12%] xl:right-[15%] 2xl:right-[18%] top-1/2 -translate-y-1/2 z-0 opacity-95"
      style={{ transform: 'none' }}
    >
      <StackedCardSwap 
        labels={labels}
        autoSwapInterval={5000}
        cardWidth={520}
        cardHeight={380}
      >
        <ASuitePreviewCard />
        <RStoolPreviewCard />
        <UnifyPreviewCard />
        <HRStoolPreviewCard />
      </StackedCardSwap>
    </div>
  );
};

export default HeroCardShowcase;

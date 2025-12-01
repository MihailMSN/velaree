import StackedCardSwap from "./StackedCardSwap";
import ASuitePreviewCard from "./mockups/ASuitePreviewCard";
import RStoolPreviewCard from "./mockups/RStoolPreviewCard";
import UnifyPreviewCard from "./mockups/UnifyPreviewCard";
import HRStoolPreviewCard from "./mockups/HRStoolPreviewCard";

const labels = ["aSuite", "aRStool", "Unify", "hRStool"];

const HeroCardShowcase = () => {
  return (
    <div 
      className="hidden lg:block absolute right-[2%] bottom-[12%] z-0 opacity-95"
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

import CardSwap, { Card } from "./CardSwap";
import ASuitePreviewCard from "./mockups/ASuitePreviewCard";
import RStoolPreviewCard from "./mockups/RStoolPreviewCard";
import UnifyPreviewCard from "./mockups/UnifyPreviewCard";
import HRStoolPreviewCard from "./mockups/HRStoolPreviewCard";

const HeroCardShowcase = () => {
  return (
    <div 
      className="hidden lg:block absolute right-[12%] xl:right-[15%] 2xl:right-[18%] top-1/2 -translate-y-1/2 z-0 opacity-95"
      style={{ height: '500px', position: 'relative' }}
    >
      <CardSwap
        width={520}
        height={380}
        cardDistance={100}
        verticalDistance={75}
        delay={5000}
        pauseOnHover={true}
        skewAmount={0}
        easing="elastic"
      >
        <Card><ASuitePreviewCard /></Card>
        <Card><RStoolPreviewCard /></Card>
        <Card><UnifyPreviewCard /></Card>
        <Card><HRStoolPreviewCard /></Card>
      </CardSwap>
    </div>
  );
};

export default HeroCardShowcase;

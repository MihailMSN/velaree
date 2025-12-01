import CardSwap, { Card } from "./CardSwap";
import ASuitePreviewCard from "./mockups/ASuitePreviewCard";
import RStoolPreviewCard from "./mockups/RStoolPreviewCard";
import UnifyPreviewCard from "./mockups/UnifyPreviewCard";
import HRStoolPreviewCard from "./mockups/HRStoolPreviewCard";

interface HeroCardShowcaseProps {
  className?: string;
}

const HeroCardShowcase = ({ className = "" }: HeroCardShowcaseProps) => {
  return (
    <div 
      className={`opacity-95 ${className}`}
      style={{ height: '500px', width: '600px', position: 'relative' }}
    >
      <CardSwap
        width={520}
        height={380}
        cardDistance={100}
        verticalDistance={75}
        delay={5000}
        pauseOnHover={false}
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

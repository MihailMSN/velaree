import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AnimatedAccordionItemProps {
  value: string;
  question: string;
  answer: string;
  index: number;
}

const AnimatedAccordionItem = ({ value, question, answer, index }: AnimatedAccordionItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
    >
      <AccordionItem 
        value={value}
        className="border-b border-border/50"
      >
        <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-5 group">
          <span className="group-hover:text-primary transition-colors">
            {question}
          </span>
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
          {answer}
        </AccordionContent>
      </AccordionItem>
    </motion.div>
  );
};

export default AnimatedAccordionItem;

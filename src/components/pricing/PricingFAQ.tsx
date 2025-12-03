import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const pricingFaqs = [
  {
    question: "What's included in the free pilot?",
    answer:
      "Your first 500 PNRs or bookings are completely free to monitor, with no credit card required. This lets you see real savings before committing to a paid plan.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    question: "What happens if I exceed my plan limits?",
    answer:
      "We'll notify you when you're approaching your limit. You can either upgrade to a higher tier or pay a small overage fee for additional volume.",
  },
  {
    question: "Is there a setup fee?",
    answer:
      "No setup fees for Starter and Growth plans. Enterprise plans include white-glove onboarding at no additional cost.",
  },
  {
    question: "When will hRStool be available?",
    answer:
      "hRStool is launching in Q2 2025. Join the waitlist now to get early access and lock in special launch pricing.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer:
      "Yes! When you choose annual billing, you save 20% compared to monthly pricing. This is automatically reflected in the prices shown when you toggle to Annual billing.",
  },
];

const PricingFAQ = () => {
  return (
    <section className="py-16 px-6 bg-primary/5">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing FAQs</h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {pricingFaqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/40 transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default PricingFAQ;

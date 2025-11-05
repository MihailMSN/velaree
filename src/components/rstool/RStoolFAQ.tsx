import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const RStoolFAQ = () => {
  const faqs = [
    {
      question: "How long does implementation take?",
      answer: "Implementation typically takes 2-4 weeks depending on your existing systems. Our team handles the technical setup including GDS integration, PNR monitoring configuration, and user training. The Starter plan can be live in as little as 7 days."
    },
    {
      question: "Which GDS systems do you integrate with?",
      answer: "RSTool integrates with all major GDS platforms including Amadeus, Sabre, Travelport (Galileo, Apollo, Worldspan), and NDC connections. We also support direct airline APIs for enhanced fare checking and rebooking capabilities."
    },
    {
      question: "What's included in the pricing?",
      answer: "All plans include 24/7 PNR monitoring, multi-GDS fare comparison, automated savings alerts, and comprehensive analytics. Growth and Enterprise plans add API access, priority support, custom reporting, and white-label options. There are no hidden fees or per-transaction charges."
    },
    {
      question: "How do you calculate savings?",
      answer: "Savings are calculated by comparing the original booking fare against the best available fare found through our AI-powered re-shopping engine. We factor in change fees, fare rules, and taxes to show true net savings. Our dashboard tracks both realized savings (completed rebookings) and potential savings opportunities."
    },
    {
      question: "Is our booking data secure?",
      answer: "Yes. RSTool is SOC 2 Type II certified and fully GDPR compliant. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We maintain separate data environments per agency, and you retain full ownership of your booking data. We never share client data with third parties."
    },
    {
      question: "What happens during the free pilot?",
      answer: "The free pilot includes 30 days of full platform access with up to 500 PNR monitoring. Our team will configure your GDS connections, train your staff, and help you identify initial savings opportunities. There's no credit card required and no commitment to continue after the trial."
    },
    {
      question: "Can we automate the rebooking process?",
      answer: "Yes, with Enterprise plans. Auto-rebook functionality allows you to set rules-based triggers (e.g., 'automatically rebook if savings exceed $100 and no fare rule violations'). Starter and Growth plans provide savings alerts with one-click manual rebooking through your existing GDS workflow."
    },
    {
      question: "What kind of support do you provide?",
      answer: "Starter plans include email support with 24-hour response time. Growth plans add live chat and phone support during business hours. Enterprise clients get a dedicated account manager, priority support with 1-hour response SLA, and quarterly business reviews to optimize your savings strategy."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-lg font-semibold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default RStoolFAQ;

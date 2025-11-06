import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    // Company & Services
    {
      category: "Company & Services",
      question: "What is Velaree?",
      answer: "Velaree is a leading travel technology company specializing in innovative reservation and booking solutions for the aviation and travel industry. We provide cutting-edge tools and APIs that streamline operations, enhance customer experiences, and drive revenue growth for airlines, travel agencies, and hospitality providers."
    },
    {
      category: "Company & Services",
      question: "What services does Velaree offer?",
      answer: "Velaree offers a comprehensive suite of travel technology solutions including aRStool (automated reservation system), hRStool (hotel reservation system), custom API integrations, real-time availability search, automated booking workflows, and enterprise-grade travel management platforms. Our solutions are designed to scale with your business needs."
    },
    {
      category: "Company & Services",
      question: "Who are Velaree's typical customers?",
      answer: "Our customers include airlines, travel agencies, online travel agencies (OTAs), tour operators, corporate travel management companies, hospitality providers, and travel technology platforms. We serve businesses of all sizes, from startups to enterprise organizations managing millions of bookings annually."
    },
    {
      category: "Company & Services",
      question: "What makes Velaree different from competitors?",
      answer: "Velaree stands out through our innovative approach combining AI-powered automation, real-time processing, seamless integrations, and industry-leading uptime (99.9% SLA). Our solutions are built on modern cloud infrastructure, offer comprehensive API documentation, and are backed by 24/7 expert support. We focus on reducing operational costs while maximizing efficiency and revenue opportunities."
    },
    
    // Implementation & Integration
    {
      category: "Implementation & Integration",
      question: "How long does implementation take?",
      answer: "Implementation timelines vary based on the complexity of your requirements. Standard integrations typically take 2-4 weeks, while custom enterprise solutions may require 6-12 weeks. Our onboarding team works closely with you to ensure a smooth transition with minimal disruption to your operations. We provide dedicated implementation specialists and comprehensive training throughout the process."
    },
    {
      category: "Implementation & Integration",
      question: "Can Velaree integrate with my existing systems?",
      answer: "Yes, Velaree is designed for seamless integration with existing travel systems, GDS platforms (Amadeus, Sabre, Travelport), PSS systems, CRM tools, payment gateways, and custom applications. We provide RESTful APIs, webhooks, and comprehensive documentation to ensure smooth connectivity with your technology stack."
    },
    {
      category: "Implementation & Integration",
      question: "Do you provide API documentation?",
      answer: "Yes, we provide extensive API documentation including detailed endpoint references, code examples in multiple programming languages, authentication guides, webhook documentation, and interactive API explorers. Our documentation is continuously updated and includes best practices, rate limits, and troubleshooting guides."
    },
    {
      category: "Implementation & Integration",
      question: "Is technical support available during implementation?",
      answer: "Absolutely. We provide dedicated technical support throughout the implementation process, including assigned integration specialists, regular check-in calls, access to our support portal, and priority response times. Our team ensures you have the resources and assistance needed for successful deployment."
    },
    
    // Products & Features
    {
      category: "Products & Features",
      question: "What is aRStool?",
      answer: "aRStool (automated Reservation System tool) is our flagship product for airlines and travel agencies. It provides real-time flight availability search, automated booking workflows, fare management, seat selection, ancillary service booking, multi-currency support, and comprehensive reporting. It's designed to handle high-volume operations with enterprise-grade reliability."
    },
    {
      category: "Products & Features",
      question: "What is hRStool?",
      answer: "hRStool (hotel Reservation System tool) is our comprehensive hotel booking platform offering real-time inventory management, rate management, channel distribution, booking engine integration, guest management, and analytics. It connects hotels with global distribution channels and provides tools to maximize occupancy and revenue."
    },
    {
      category: "Products & Features",
      question: "Can I use multiple Velaree products together?",
      answer: "Yes, our products are designed to work seamlessly together. You can combine aRStool, hRStool, and our API solutions to create a unified travel booking platform. Our integrated approach allows you to manage flights, hotels, and other travel services from a single dashboard with consolidated reporting and analytics."
    },
    {
      category: "Products & Features",
      question: "Do you offer white-label solutions?",
      answer: "Yes, we offer fully white-label solutions that can be customized with your branding, color schemes, logos, and custom domains. Our white-label offerings allow you to provide a seamless branded experience to your customers while leveraging our powerful technology infrastructure."
    },
    {
      category: "Products & Features",
      question: "What analytics and reporting features are available?",
      answer: "Our platforms include comprehensive analytics dashboards with real-time booking metrics, revenue reports, customer behavior analytics, conversion tracking, inventory insights, and customizable reports. You can export data in multiple formats, set up automated reports, and integrate with your existing BI tools."
    },
    
    // Security & Compliance
    {
      category: "Security & Compliance",
      question: "How does Velaree ensure data security?",
      answer: "We implement enterprise-grade security measures including end-to-end encryption, secure data centers, regular security audits, PCI DSS compliance for payment processing, GDPR compliance for data privacy, role-based access controls, and continuous monitoring for threats. All data is encrypted at rest and in transit using industry-standard protocols."
    },
    {
      category: "Security & Compliance",
      question: "Is Velaree PCI DSS compliant?",
      answer: "Yes, Velaree is PCI DSS Level 1 compliant, the highest level of payment card industry certification. We follow strict security standards to protect cardholder data and ensure safe payment processing for all transactions."
    },
    {
      category: "Security & Compliance",
      question: "What about GDPR and data privacy?",
      answer: "Velaree is fully GDPR compliant and adheres to international data privacy regulations. We implement data minimization, provide transparent privacy policies, offer data portability, enable right to erasure, maintain detailed processing records, and conduct regular privacy impact assessments. Customers maintain full control over their data."
    },
    {
      category: "Security & Compliance",
      question: "What is your uptime guarantee?",
      answer: "We guarantee 99.9% uptime backed by our Service Level Agreement (SLA). Our infrastructure is built on redundant cloud systems with automatic failover, continuous monitoring, and disaster recovery protocols. We provide real-time status updates and proactive notifications for any maintenance windows."
    },
    
    // Pricing & Plans
    {
      category: "Pricing & Plans",
      question: "How does Velaree pricing work?",
      answer: "Velaree offers flexible pricing models including subscription-based plans, transaction-based pricing, and custom enterprise agreements. Pricing varies based on factors such as booking volume, number of users, features required, and level of support. Contact our sales team for a customized quote tailored to your specific needs."
    },
    {
      category: "Pricing & Plans",
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial with full access to core features so you can evaluate our platform. No credit card is required to start your trial. Our team is available to provide guided demos and answer questions throughout your evaluation period."
    },
    {
      category: "Pricing & Plans",
      question: "Are there any setup fees?",
      answer: "Setup fees vary depending on the complexity of your implementation. Standard implementations typically include setup in the monthly subscription, while custom enterprise solutions may have one-time implementation fees. We provide transparent pricing with no hidden costs during our initial consultation."
    },
    {
      category: "Pricing & Plans",
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle. Our customer success team will work with you to ensure a smooth transition and help you choose the plan that best fits your evolving needs."
    },
    
    // Support & Training
    {
      category: "Support & Training",
      question: "What support options are available?",
      answer: "We offer 24/7 customer support through multiple channels including email, live chat, phone support, and a comprehensive help center. Enterprise customers receive dedicated account managers, priority support queues, and direct access to our technical team. We also provide a community forum and regular webinars."
    },
    {
      category: "Support & Training",
      question: "Do you provide training for new users?",
      answer: "Yes, we provide comprehensive training programs including onboarding sessions, video tutorials, documentation guides, live training webinars, and certification programs. Our training is tailored to different user roles (administrators, agents, developers) and can be conducted on-site or remotely based on your preference."
    },
    {
      category: "Support & Training",
      question: "How quickly do you respond to support requests?",
      answer: "Response times vary by support tier. Standard support receives responses within 24 hours, Priority support within 4 hours, and Enterprise customers receive responses within 1 hour for critical issues. We maintain high resolution rates and provide status updates throughout the support process."
    }
  ];

  // Group FAQs by category for organized display
  const categories = Array.from(new Set(faqs.map(faq => faq.category)));

  // Generate FAQ structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions - Velaree | Travel Technology Solutions</title>
        <meta 
          name="description" 
          content="Find answers to common questions about Velaree's travel technology solutions, including implementation, pricing, security, integrations, and support for aRStool and hRStool platforms." 
        />
        <meta 
          name="keywords" 
          content="Velaree FAQ, travel technology questions, implementation guide, pricing information, API integration, aRStool support, hRStool help, travel software questions" 
        />
        <link rel="canonical" href="https://velaree.com/faq" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Frequently Asked Questions - Velaree" />
        <meta 
          property="og:description" 
          content="Get answers to your questions about Velaree's travel technology solutions, implementation, pricing, and support." 
        />
        <meta property="og:url" content="https://velaree.com/faq" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Frequently Asked Questions - Velaree" />
        <meta 
          name="twitter:description" 
          content="Get answers to your questions about Velaree's travel technology solutions, implementation, pricing, and support." 
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about our travel technology solutions, implementation, pricing, and support
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="pb-24 px-4">
          <div className="container mx-auto max-w-4xl">
            {categories.map((category) => (
              <div key={category} className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  {category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs
                    .filter(faq => faq.category === category)
                    .map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`${category}-${index}`}
                        className="border border-border rounded-lg px-6 bg-card/50"
                      >
                        <AccordionTrigger className="text-left hover:no-underline">
                          <span className="font-semibold text-foreground">
                            {faq.question}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="pb-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Still Have Questions?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our team is here to help. Contact us for personalized assistance with your travel technology needs.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default FAQ;

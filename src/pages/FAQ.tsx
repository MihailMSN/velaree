import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQSidebar from "@/components/faq/FAQSidebar";
import BackToTopButton from "@/components/faq/BackToTopButton";
import AnimatedAccordionItem from "@/components/faq/AnimatedAccordionItem";
import { Accordion } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { 
  Building2, 
  Settings2, 
  Package, 
  Shield, 
  CreditCard, 
  Headphones,
  HelpCircle,
  Search,
  Sparkles
} from "lucide-react";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

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

  // Category icons and colors mapping
  const categoryConfig: Record<string, { icon: typeof Building2; gradient: string }> = {
    "Company & Services": { icon: Building2, gradient: "from-blue-500/20 to-indigo-500/20" },
    "Implementation & Integration": { icon: Settings2, gradient: "from-emerald-500/20 to-teal-500/20" },
    "Products & Features": { icon: Package, gradient: "from-violet-500/20 to-purple-500/20" },
    "Security & Compliance": { icon: Shield, gradient: "from-amber-500/20 to-orange-500/20" },
    "Pricing & Plans": { icon: CreditCard, gradient: "from-rose-500/20 to-pink-500/20" },
    "Support & Training": { icon: Headphones, gradient: "from-cyan-500/20 to-sky-500/20" }
  };

  // Filter FAQs based on search query
  const filteredFaqs = useMemo(() => {
    if (!searchQuery.trim()) return faqs;
    const query = searchQuery.toLowerCase();
    return faqs.filter(
      faq => 
        faq.question.toLowerCase().includes(query) || 
        faq.answer.toLowerCase().includes(query) ||
        faq.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Get unique categories from filtered FAQs
  const categories = useMemo(() => {
    return Array.from(new Set(filteredFaqs.map(faq => faq.category)));
  }, [filteredFaqs]);

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
        <section className="pt-32 pb-20 px-4 relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
          
          <div className="container mx-auto max-w-5xl relative">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Help Center</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                Find answers to common questions about our travel technology solutions, implementation, pricing, and support
              </p>
              
              {/* Search Bar */}
              <div className="max-w-xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg rounded-xl border-border/50 bg-card/50 backdrop-blur-sm focus:border-primary/50 transition-colors"
                />
                {searchQuery && (
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                    {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''}
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="pb-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex gap-8">
              {/* Sidebar */}
              {!searchQuery && (
                <FAQSidebar categories={categories} categoryConfig={categoryConfig} />
              )}
              
              {/* Main Content */}
              <div className={searchQuery ? "w-full max-w-5xl mx-auto" : "flex-1 min-w-0"}>
                {categories.length === 0 ? (
              <div className="text-center py-16">
                <HelpCircle className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No results found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or browse all categories below
                </p>
                <button 
                  onClick={() => setSearchQuery("")}
                  className="mt-4 text-primary hover:underline font-medium"
                >
                  Clear search
                </button>
              </div>
            ) : (
              categories.map((category, categoryIndex) => {
                const config = categoryConfig[category];
                const CategoryIcon = config?.icon || HelpCircle;
                const isAlternate = categoryIndex % 2 === 1;
                const categoryId = category.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and");
                
                return (
                  <div 
                    key={category}
                    id={categoryId}
                    className={`mb-16 last:mb-0 scroll-mt-32 ${isAlternate ? 'py-12 -mx-4 px-4 md:-mx-8 md:px-8 bg-muted/30 rounded-3xl' : ''}`}
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${config?.gradient || 'from-primary/20 to-primary/10'}`}>
                        <CategoryIcon className="w-6 h-6 text-foreground" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-foreground">
                          {category}
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          {filteredFaqs.filter(f => f.category === category).length} questions
                        </p>
                      </div>
                    </div>
                    
                    {/* Accordion - Clean aRStool style with animations */}
                    <div className="max-w-3xl">
                      <Accordion type="single" collapsible className="w-full">
                        {filteredFaqs
                          .filter(faq => faq.category === category)
                          .map((faq, index) => (
                            <AnimatedAccordionItem
                              key={index}
                              value={`${category}-${index}`}
                              question={faq.question}
                              answer={faq.answer}
                              index={index}
                            />
                          ))}
                      </Accordion>
                    </div>
                  </div>
                );
              })
            )}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="pb-24 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 p-12 md:p-16">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <HelpCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Need More Help?</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Still Have Questions?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Our team is here to help. Contact us for personalized assistance with your travel technology needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all hover:scale-105"
                  >
                    Contact Sales
                  </a>
                  <a 
                    href="/rstool" 
                    className="inline-flex items-center justify-center gap-2 bg-card border border-border px-8 py-4 rounded-xl font-semibold hover:border-primary/50 transition-all"
                  >
                    Explore aRStool
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <BackToTopButton />
      </div>
    </>
  );
};

export default FAQ;

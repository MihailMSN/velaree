import ContactForm from "./ContactForm";

const CTA = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Start Saving Money with AI-Powered Re-Shopping
          </h2>
          
          <p className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            Join leading travel agencies using Velaree's re-shopping tools to increase profits and delight customers with better prices
          </p>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default CTA;

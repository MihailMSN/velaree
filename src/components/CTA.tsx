import ContactForm from "./ContactForm";
import PitchDeckDownload from "./PitchDeckDownload";

const CTA = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 sm:mb-6">
            Ready to Transform Your Travel Business?
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Join leading OTAs, TMCs, and airlines using Velaree to power their digital infrastructure
          </p>
          
          <div className="mb-8">
            <PitchDeckDownload />
          </div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default CTA;

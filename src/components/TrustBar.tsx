import LogoLoop from "@/components/ui/logo-loop";

const TrustBar = () => {
  const partnerLogos = [
    { 
      node: <span className="text-lg font-semibold tracking-wide text-muted-foreground/80 hover:text-foreground transition-colors">AMADEUS</span>, 
      title: "Amadeus GDS" 
    },
    { 
      node: <span className="text-lg font-semibold tracking-wide text-muted-foreground/80 hover:text-foreground transition-colors">SABRE</span>, 
      title: "Sabre GDS" 
    },
    { 
      node: <span className="text-lg font-semibold tracking-wide text-muted-foreground/80 hover:text-foreground transition-colors">TRAVELPORT</span>, 
      title: "Travelport GDS" 
    },
    { 
      node: <span className="text-lg font-semibold tracking-wide text-muted-foreground/80 hover:text-foreground transition-colors">IATA</span>, 
      title: "IATA" 
    },
    { 
      node: <span className="text-lg font-semibold tracking-wide text-muted-foreground/80 hover:text-foreground transition-colors">GOOGLE FLIGHTS</span>, 
      title: "Google Flights" 
    },
    { 
      node: <span className="text-lg font-semibold tracking-wide text-muted-foreground/80 hover:text-foreground transition-colors">NDC</span>, 
      title: "NDC" 
    },
  ];

  return (
    <div className="border-t border-border/50 bg-secondary/30 backdrop-blur-sm py-6">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <p className="text-sm text-muted-foreground font-medium">
            Trusted by leading travel platforms
          </p>
        </div>
        <LogoLoop
          logos={partnerLogos}
          speed={120}
          direction="left"
          logoHeight={32}
          gap={48}
          pauseOnHover
          fadeOut
          scaleOnHover
          ariaLabel="Travel industry partners"
        />
      </div>
    </div>
  );
};
export default TrustBar;
import LogoLoop from "@/components/ui/logo-loop";

const TrustBar = () => {
  const partnerLogos = [
    { 
      src: "/logos/amadeus.png",
      alt: "Amadeus GDS",
      title: "Amadeus GDS"
    },
    { 
      src: "/logos/sabre.png",
      alt: "Sabre GDS",
      title: "Sabre GDS"
    },
    { 
      src: "/logos/travelport.png",
      alt: "Travelport GDS",
      title: "Travelport GDS"
    },
    { 
      src: "/logos/iata.png",
      alt: "IATA",
      title: "International Air Transport Association"
    },
    { 
      src: "/logos/google-flights.png",
      alt: "Google Flights",
      title: "Google Flights"
    },
    { 
      src: "/logos/ndc.png",
      alt: "NDC",
      title: "New Distribution Capability"
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
          logoHeight={48}
          gap={64}
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
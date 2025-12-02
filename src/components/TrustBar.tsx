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
    <div className="relative bg-gradient-to-b from-white to-secondary/50 border-y border-border/40 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70 font-medium">
            Trusted by leading travel platforms
          </p>
        </div>
        <div className="[&_img]:grayscale [&_img]:opacity-60 hover:[&_img]:grayscale-0 hover:[&_img]:opacity-100 [&_img]:transition-all [&_img]:duration-500">
          <LogoLoop
            logos={partnerLogos}
            speed={80}
            direction="left"
            logoHeight={56}
            gap={80}
            pauseOnHover
            fadeOut
            fadeOutColor="rgba(255, 255, 255, 0)"
            scaleOnHover
            ariaLabel="Travel industry partners"
          />
        </div>
      </div>
    </div>
  );
};
export default TrustBar;
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
    <div className="relative bg-gradient-to-b from-background via-secondary/30 to-background border-y border-border/40 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground font-semibold">
            Trusted by leading travel platforms
          </p>
        </div>
        <div className="[&_img]:grayscale-[30%] [&_img]:opacity-70 hover:[&_img]:grayscale-0 hover:[&_img]:opacity-100 [&_img]:transition-all [&_img]:duration-300 [&_img]:ease-out [&_img]:object-contain">
          <LogoLoop
            logos={partnerLogos}
            speed={50}
            direction="left"
            logoHeight={52}
            gap={120}
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
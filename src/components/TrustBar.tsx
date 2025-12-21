import LogoLoop from "@/components/ui/logo-loop";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import OptimizedImage from "@/components/ui/optimized-image";

const TrustBar = () => {
  const partnerData = [
    { 
      src: "/logos/amadeus.png",
      alt: "Amadeus GDS",
      title: "Amadeus GDS",
      description: "Leading global distribution system connecting travel agencies with airlines, hotels, and travel suppliers worldwide.",
      integration: "Real-time availability and pricing data"
    },
    { 
      src: "/logos/sabre.png",
      alt: "Sabre GDS",
      title: "Sabre GDS",
      description: "One of the world's largest GDS platforms serving travel agencies, airlines, and corporate travel management.",
      integration: "Advanced booking and inventory management"
    },
    { 
      src: "/logos/travelport.png",
      alt: "Travelport GDS",
      title: "Travelport GDS",
      description: "Global technology company providing distribution, technology, and payment solutions for the travel industry.",
      integration: "Multi-source content aggregation"
    },
    { 
      src: "/logos/iata.png",
      alt: "IATA",
      title: "IATA",
      description: "International Air Transport Association - setting global standards for airline safety, security, and efficiency.",
      integration: "Compliance with industry standards"
    },
    { 
      src: "/logos/google-flights.png",
      alt: "Google Flights",
      title: "Google Flights",
      description: "Powerful flight search engine providing comprehensive comparison shopping across airlines and travel sites.",
      integration: "Price comparison and availability data"
    },
    { 
      src: "/logos/mystifly.png",
      alt: "Mystifly",
      title: "Mystifly",
      description: "Global B2B travel technology company providing air content consolidation and distribution solutions to travel businesses worldwide.",
      integration: "Consolidated fare aggregation and ticketing"
    },
    { 
      src: "/logos/unmatched-fares.jpg",
      alt: "Unmatched Fares",
      title: "Unmatched Fares",
      description: "Travel technology platform offering competitive fare solutions and unique pricing for travel agencies and businesses.",
      integration: "Exclusive fare access and pricing"
    },
    { 
      src: "/logos/bcd-travel.png",
      alt: "BCD Travel",
      title: "BCD Travel",
      description: "One of the world's largest corporate travel management companies, providing end-to-end travel solutions for businesses globally.",
      integration: "Corporate travel management solutions"
    },
    { 
      src: "/logos/fora.png",
      alt: "FORA",
      title: "FORA",
      description: "Modern travel advisor platform empowering travel advisors with technology, tools, and support to build successful travel businesses.",
      integration: "Travel advisor platform integration"
    },
  ];

  const partnerLogos = partnerData.map((partner) => ({
    node: (
      <HoverCard openDelay={200} closeDelay={100}>
        <HoverCardTrigger asChild>
          <div className="bg-white rounded-lg px-5 py-2.5 flex items-center justify-center shadow-sm h-14">
            <OptimizedImage
              src={partner.src}
              alt={partner.alt}
              title={partner.title}
              className="h-9 w-auto cursor-pointer object-contain"
              height={36}
            />
          </div>
        </HoverCardTrigger>
        <HoverCardContent 
          className="w-80 border-accent/40 bg-gradient-to-br from-card via-card to-accent/10" 
          side="top"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <h4 className="text-sm font-semibold text-foreground tracking-tight">{partner.title}</h4>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {partner.description}
            </p>
            <div className="pt-3 border-t border-accent/30">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground/70 font-medium">Integration</span>
              </div>
              <p className="text-xs font-medium text-foreground/90 mt-1">
                {partner.integration}
              </p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    ),
  }));

  return (
    <div className="relative bg-background border-y border-border/40 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground font-semibold">
            Trusted by leading travel platforms
          </p>
        </div>
      </div>
      <div className="px-8 md:px-16">
        <LogoLoop
          logos={partnerLogos}
          speed={40}
          direction="left"
          logoHeight={64}
          gap={48}
          pauseOnHover
          fadeOut
          fadeOutColor="hsl(var(--background))"
          scaleOnHover
          ariaLabel="Travel industry partners"
        />
      </div>
    </div>
  );
};
export default TrustBar;

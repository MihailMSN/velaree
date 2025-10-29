const TrustBar = () => {
  const metrics = [
    { value: "$250M+", label: "Annual Bookings Processed" },
    { value: "150+", label: "Travel Companies Powered" },
    { value: "99.9%", label: "API Uptime SLA" },
    { value: "<500ms", label: "Average Response Time" }
  ];

  const partners = [
    "Amadeus", "Sabre", "Travelport", "IATA", "Google Flights"
  ];

  return (
    <div className="border-t border-border/50 bg-secondary/30 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-8">
        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                {metric.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="flex flex-col items-center">
          <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
            Trusted By Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="text-sm md:text-base font-semibold text-muted-foreground/70 hover:text-foreground transition-colors duration-300 animate-fade-in"
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          <div className="px-3 py-1.5 rounded-full bg-accent/30 border border-accent/50 text-xs font-medium text-foreground">
            IATA Certified
          </div>
          <div className="px-3 py-1.5 rounded-full bg-accent/30 border border-accent/50 text-xs font-medium text-foreground">
            SOC 2 Type II
          </div>
          <div className="px-3 py-1.5 rounded-full bg-accent/30 border border-accent/50 text-xs font-medium text-foreground">
            GDPR Compliant
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;

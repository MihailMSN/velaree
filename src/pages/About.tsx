import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Globe2, Target, Users, Rocket } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Price Optimization",
    description: "We believe travelers deserve the best price, even after they book. Our AI continuously monitors bookings to find better rates and fares, turning price drops into profit opportunities for agencies."
  },
  {
    icon: Globe2,
    title: "Automation First",
    description: "Manual re-shopping is time-consuming and error-prone. Our automated monitoring across 50+ sources eliminates manual work while capturing savings that would otherwise be missed."
  },
  {
    icon: Users,
    title: "Travel Agency Focus",
    description: "Built specifically for travel agencies, TMCs, and OTAs. Every feature is designed to help you increase commissions, reduce costs, and provide exceptional value to your clients."
  },
  {
    icon: Rocket,
    title: "Continuous Innovation",
    description: "We're constantly expanding our data sources, improving our AI algorithms, and adding new tools. Started with aRStool for flights, launching hRStool for hotels in Q2 2025."
  }
];

const milestones = [
  { year: "2018", event: "Velaree founded with mission to optimize travel pricing" },
  { year: "2020", event: "First re-shopping algorithm developed and tested" },
  { year: "2022", event: "aRStool beta launched with 10 pilot agencies" },
  { year: "2024", event: "aRStool goes live - 50+ data sources, AI-powered monitoring" },
  { year: "2025", event: "hRStool launching Q2 - Hotel re-shopping platform" },
  { year: "Future", event: "Expanding to car rentals, packages, and more travel categories" }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary to-primary/90">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
              About Velaree
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80">
              AI-powered re-shopping tools that help travel agencies increase profits
            </p>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-24 bg-gradient-to-b from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Our Mission
            </h2>
            <p className="text-2xl text-muted-foreground leading-relaxed mb-6">
              We built Velaree to solve one problem: travelers deserve the best price, even after they book.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our AI-powered re-shopping tools help travel agencies save their clients money while increasing their own profits. 
              Through continuous monitoring, intelligent automation, and seamless integrations with 50+ data sources, 
              we're transforming how the industry approaches price optimization.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Drives Us
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 bg-card border-border hover:border-accent/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 border border-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-to-b from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Product Timeline
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building the future of travel re-shopping, one tool at a time
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className="flex gap-8 items-start animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-24 flex-shrink-0">
                    <div className="text-3xl font-bold text-accent">{milestone.year}</div>
                  </div>
                  <Card className="flex-1 p-6 bg-card border-border">
                    <p className="text-lg text-foreground">{milestone.event}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="text-5xl font-bold text-accent mb-2">50+</div>
              <div className="text-muted-foreground">Data Sources</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-5xl font-bold text-accent mb-2">€2.4M</div>
              <div className="text-muted-foreground">Saved for Clients</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-5xl font-bold text-accent mb-2">24/7</div>
              <div className="text-muted-foreground">AI Monitoring</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-5xl font-bold text-accent mb-2">15-40%</div>
              <div className="text-muted-foreground">Average Savings</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Globe2, Target, Users, Rocket } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To revolutionize the travel industry through cutting-edge technology that empowers businesses to scale, automate, and deliver exceptional experiences to millions of travelers worldwide."
  },
  {
    icon: Globe2,
    title: "Global Impact",
    description: "We connect the global travel ecosystem — from airlines and hotels to agencies and consolidators — creating seamless workflows that drive growth and efficiency across continents."
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Every feature we build, every integration we deploy, and every optimization we make is driven by the real needs of travel professionals managing complex operations at scale."
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "We leverage the latest in cloud architecture, API design, and automation to stay ahead of industry trends and provide our partners with competitive advantages."
  }
];

const milestones = [
  { year: "2018", event: "Velaree founded with vision to modernize travel tech" },
  { year: "2019", event: "First GDS integration launched for enterprise clients" },
  { year: "2020", event: "Expanded to 25+ airline direct connections" },
  { year: "2021", event: "Private Fare API released, reaching 100K+ bookings/month" },
  { year: "2022", event: "Automation Suite launched, processing 1M+ transactions" },
  { year: "2023", event: "50+ global integrations, serving customers in 40+ countries" }
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
              Building the infrastructure that powers modern travel businesses
            </p>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Our Vision
            </h2>
            <p className="text-2xl text-muted-foreground leading-relaxed mb-6">
              We believe the travel industry deserves technology as sophisticated as the journeys it enables. 
              Velaree exists to bridge the gap between legacy systems and modern expectations.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Through intelligent automation, robust APIs, and seamless integrations, we're building the 
              infrastructure that allows travel businesses to focus on what they do best: creating 
              unforgettable experiences for travelers around the world.
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
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center flex-shrink-0">
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
      <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From startup to global platform, powering millions of travel bookings
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
              <div className="text-muted-foreground">Global Integrations</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-5xl font-bold text-accent mb-2">40+</div>
              <div className="text-muted-foreground">Countries Served</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-5xl font-bold text-accent mb-2">1M+</div>
              <div className="text-muted-foreground">Monthly Transactions</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-5xl font-bold text-accent mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime SLA</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Globe, Zap, Award, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Zap,
      title: "Innovation First",
      description: "We push the boundaries of travel technology, constantly evolving to meet tomorrow's challenges."
    },
    {
      icon: Users,
      title: "Customer Obsessed",
      description: "Every feature we build starts with understanding our customers' real-world needs."
    },
    {
      icon: Globe,
      title: "Global Mindset",
      description: "We think globally, serving travel businesses across continents and cultures."
    },
    {
      icon: Heart,
      title: "Integrity Always",
      description: "We build trust through transparency, reliability, and doing what we say we'll do."
    }
  ];

  const milestones = [
    { year: "2019", event: "Founded with a mission to modernize airline distribution" },
    { year: "2020", event: "Launched first NDC aggregation platform" },
    { year: "2021", event: "Reached 50+ airline partnerships" },
    { year: "2022", event: "Expanded to serve OTAs and TMCs globally" },
    { year: "2023", event: "Processed 10M+ bookings through our platform" },
    { year: "2024", event: "Launched A-Suite automation tools" }
  ];

  const team = [
    { name: "Sarah Chen", role: "CEO & Co-founder", bio: "Former airline distribution executive with 15+ years in travel tech." },
    { name: "Marcus Rodriguez", role: "CTO & Co-founder", bio: "Ex-Google engineer specializing in high-throughput distributed systems." },
    { name: "Priya Sharma", role: "VP of Product", bio: "Product leader with deep expertise in travel and hospitality platforms." },
    { name: "David Kim", role: "VP of Engineering", bio: "Built scalable infrastructure at multiple travel unicorns." }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Velaree - Our Mission & Team</title>
        <meta name="description" content="Learn about Velaree's mission to transform travel distribution. Meet our team and discover the values that drive us." />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Transforming How the World Books Travel
              </h1>
              <p className="text-xl text-muted-foreground">
                We're on a mission to make airline distribution faster, smarter, and more accessible for travel businesses of all sizes.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Mission</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Democratizing Access to Airline Content
                </h2>
                <p className="text-muted-foreground mb-4">
                  The travel industry has long been dominated by legacy systems that are slow, expensive, and difficult to integrate. We believe every travel business deserves access to the best fares, the fastest technology, and the most reliable infrastructure.
                </p>
                <p className="text-muted-foreground">
                  That's why we built Velaree—a modern API platform that connects travel sellers to 200+ airlines through a single integration, with sub-500ms response times and 99.9% uptime.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">200+</div>
                    <div className="text-sm text-muted-foreground">Airlines Connected</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                    <div className="text-sm text-muted-foreground">Platform Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">&lt;500ms</div>
                    <div className="text-sm text-muted-foreground">Avg Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Countries Served</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These principles guide every decision we make and every product we build.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="border-border/60 bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
              <p className="text-muted-foreground">Key milestones in our growth story</p>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative pl-12 pb-8 last:pb-0">
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                    <div className="bg-card border border-border/60 rounded-lg p-4">
                      <div className="text-sm font-semibold text-primary mb-1">{milestone.year}</div>
                      <p className="text-foreground">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Leadership Team</h2>
              <p className="text-muted-foreground">The people driving our mission forward</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="border-border/60 bg-card">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground">{member.name}</h3>
                    <p className="text-sm text-primary mb-2">{member.role}</p>
                    <p className="text-xs text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Join Us on Our Mission
              </h2>
              <p className="text-muted-foreground mb-8">
                We're always looking for talented people who share our passion for transforming travel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/careers">
                  <Button size="lg" className="rounded-full px-8">
                    View Open Positions
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="rounded-full px-8">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;

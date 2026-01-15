import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Rocket, 
  TrendingUp, 
  Users, 
  Target, 
  DollarSign, 
  Globe, 
  Shield, 
  Zap,
  ArrowRight,
  Presentation,
  Mail,
  Linkedin,
  CheckCircle2
} from "lucide-react";

const teamMembers = [
  {
    name: "Founder & CEO",
    role: "Product & Vision",
    bio: "Travel technology veteran with deep industry expertise in GDS systems and airline distribution.",
    linkedin: "#"
  },
  {
    name: "Co-Founder & CTO",
    role: "Technology & Architecture",
    bio: "Full-stack engineer with experience building scalable enterprise platforms and API infrastructure.",
    linkedin: "#"
  },
  {
    name: "Co-Founder & COO",
    role: "Operations & Partnerships",
    bio: "Former airline executive with extensive network across OTAs, TMCs, and consolidators.",
    linkedin: "#"
  }
];

const marketOpportunity = [
  { metric: "$800B+", label: "Global Air Travel Market" },
  { metric: "15%", label: "Average Ticket Repricing Opportunity" },
  { metric: "$120B", label: "Addressable Market for Savings" },
  { metric: "50K+", label: "Travel Agencies Worldwide" }
];

const fundingDetails = {
  round: "Pre-Seed",
  target: "$500K - $750K",
  use: [
    "Product development and MVP completion",
    "GDS integrations (Amadeus, Sabre, Travelport)",
    "Initial team expansion (3-4 key hires)",
    "Pilot program with 5-10 travel agencies",
    "Regulatory compliance and certifications"
  ],
  timeline: [
    { phase: "Q1 2025", milestone: "Close pre-seed round" },
    { phase: "Q2 2025", milestone: "Complete GDS integrations" },
    { phase: "Q3-Q4 2025", milestone: "Beta launch with pilot partners" },
    { phase: "Q1-Q2 2026", milestone: "Seed round & expansion" },
    { phase: "Q3-Q4 2026", milestone: "rsTool public launch" }
  ]
};

const investmentThesis = [
  {
    icon: Target,
    title: "Large Market Opportunity",
    description: "The travel industry leaves billions on the table through inefficient fare management. Velaree captures this through AI-powered repricing."
  },
  {
    icon: Zap,
    title: "Technology Moat",
    description: "Our unified API approach and AI algorithms create defensible IP, reducing integration complexity from months to days."
  },
  {
    icon: TrendingUp,
    title: "Proven Business Model",
    description: "Revenue-share model aligns incentives—we only make money when we save our customers money. High retention, low churn."
  },
  {
    icon: Globe,
    title: "Scalable Architecture",
    description: "Cloud-native platform designed to handle millions of PNRs. Each new customer improves our AI through network effects."
  }
];

const Investors = () => {
  return (
    <>
      <Helmet>
        <title>Investors - Velaree | Pre-Seed Investment Opportunity</title>
        <meta 
          name="description" 
          content="Invest in Velaree's pre-seed round. We're building next-generation travel technology to capture the $120B+ airline repricing opportunity." 
        />
        <link rel="canonical" href="https://velaree.com/investors" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="container mx-auto max-w-5xl relative">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 mb-6">
                <Rocket className="w-4 h-4" />
                <span className="text-sm font-medium">Pre-Seed Round Open</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Invest in the Future of Travel Technology
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                We're raising our pre-seed round to bring AI-powered travel automation to market. Join us in capturing the $120B+ airline repricing opportunity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/pitch-deck">
                  <Button size="lg" className="w-full sm:w-auto rounded-full px-8">
                    <Presentation className="mr-2 h-5 w-5" />
                    View Pitch Deck
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Market Opportunity */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-4">Market Opportunity</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              The travel industry is ripe for disruption. Airlines and agencies lose billions annually to inefficient fare management.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {marketOpportunity.map((item, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{item.metric}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Thesis */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-4">Investment Thesis</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Why Velaree is positioned to win in the travel technology space
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {investmentThesis.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Funding Details */}
        <section className="py-16 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Funding Info */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Funding Details</h2>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full">
                    <span className="font-semibold text-amber-700">{fundingDetails.round}</span>
                  </div>
                  <div className="text-2xl font-bold">{fundingDetails.target}</div>
                </div>
                
                <h3 className="text-lg font-semibold mb-4">Use of Funds</h3>
                <ul className="space-y-3 mb-8">
                  {fundingDetails.use.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Timeline */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Roadmap</h2>
                
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
                  
                  <div className="space-y-6">
                    {fundingDetails.timeline.map((item, index) => (
                      <div key={index} className="flex items-start gap-4 relative">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 z-10">
                          <span className="text-xs font-bold text-primary-foreground">{index + 1}</span>
                        </div>
                        <div className="pt-1">
                          <div className="font-semibold text-foreground">{item.phase}</div>
                          <div className="text-muted-foreground">{item.milestone}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-4">Leadership Team</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Experienced founders with deep domain expertise in travel technology and enterprise software
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <div className="text-sm text-primary font-medium mb-3">{member.role}</div>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <a href={member.linkedin} className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-primary">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Learn More?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              We'd love to share our vision with you. Schedule a call to discuss the investment opportunity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pitch-deck">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto rounded-full px-8">
                  <Presentation className="mr-2 h-5 w-5" />
                  View Full Pitch Deck
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <Mail className="mr-2 h-5 w-5" />
                  Schedule a Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Investors;

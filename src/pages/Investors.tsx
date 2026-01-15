import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Rocket, TrendingUp, Users, Target, DollarSign, Globe, Shield, Zap, ArrowRight, Presentation, Mail, Linkedin, CheckCircle2, Calendar, Bot, Plug } from "lucide-react";
const teamMembers = [{
  name: "Founder & CEO",
  role: "Product & Vision",
  bio: "Travel technology veteran with deep industry expertise in GDS systems and airline distribution.",
  linkedin: "#"
}, {
  name: "Co-Founder & CTO",
  role: "Technology & Architecture",
  bio: "Full-stack engineer with experience building scalable enterprise platforms and API infrastructure.",
  linkedin: "#"
}, {
  name: "Co-Founder & COO",
  role: "Operations & Partnerships",
  bio: "Former airline executive with extensive network across OTAs, TMCs, and consolidators.",
  linkedin: "#"
}];
const marketOpportunity = [{
  metric: "$800B+",
  label: "Global Air Travel Market"
}, {
  metric: "200+",
  label: "Airlines to Connect"
}, {
  metric: "4",
  label: "Products in Development"
}, {
  metric: "18mo",
  label: "Runway with Funding"
}];
const fundingDetails = {
  round: "Pre-Seed",
  target: "€400K",
  use: ["Product development and MVP completion", "GDS integrations (Amadeus, Sabre, Travelport)", "Initial team expansion (3-4 key hires)", "Beta program with 5-10 travel agencies", "Infrastructure and security certifications"],
  timeline: [{
    phase: "Q1 2025",
    milestone: "Close pre-seed round"
  }, {
    phase: "Q2 2025",
    milestone: "Complete GDS integrations"
  }, {
    phase: "Q3-Q4 2025",
    milestone: "Beta launch with pilot partners"
  }, {
    phase: "Q1-Q2 2026",
    milestone: "Seed round & expansion"
  }, {
    phase: "Q3-Q4 2026",
    milestone: "rsTool public launch"
  }]
};
const investmentThesis = [{
  icon: Target,
  title: "Large Market Opportunity",
  description: "The travel industry loses billions annually through inefficient fare management. Velaree captures this through AI-powered repricing."
}, {
  icon: Plug,
  title: "Unified API Approach",
  description: "Single integration to access 200+ airlines and all major GDS systems, reducing complexity from months to weeks."
}, {
  icon: Bot,
  title: "AI-Powered Automation",
  description: "70% less manual work through intelligent workflows handling ticketing, changes, and notifications automatically."
}, {
  icon: Globe,
  title: "Scalable Architecture",
  description: "Cloud-native platform designed to handle millions of PNRs. Each new customer improves our AI through network effects."
}];
const productRoadmap = [{
  name: "rsTool",
  desc: "AI-powered PNR repricing",
  timeline: "Q3-Q4 2026",
  status: "In Development"
}, {
  name: "hsTool",
  desc: "Hotel re-shopping platform",
  timeline: "Q1-Q2 2027",
  status: "Planned"
}, {
  name: "aSuite",
  desc: "AI automation workflows",
  timeline: "Q3-Q4 2027",
  status: "Planned"
}, {
  name: "UnifyTool",
  desc: "Universal GDS API",
  timeline: "Q3-Q4 2027",
  status: "Planned"
}];
const Investors = () => {
  return <>
      <Helmet>
        <title>Investors - Velaree | Pre-Seed Investment Opportunity</title>
        <meta name="description" content="Invest in Velaree's €400K pre-seed round. We're building next-generation travel technology with AI-powered automation and unified GDS integration." />
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
                <span className="text-sm font-medium">Pre-Seed Round Open • Est. 2024</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Invest in the Future of Travel Technology
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                We're raising <span className="font-bold text-primary">€400K</span> to build AI-powered travel automation and unified GDS integration. Join us in transforming how travel businesses operate.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/pitch-deck">
                  <Button size="lg" className="w-full sm:w-auto rounded-full px-8 bg-secondary-foreground">
                    <Presentation className="mr-2 h-5 w-5" />
                    View Pitch Deck
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8">
                    <Mail className="mr-2 h-5 w-5" />
                    Schedule a Call
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-4">The Opportunity</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Building next-generation travel technology for a massive underserved market
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {marketOpportunity.map((item, index) => <Card key={index} className="p-6 text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{item.metric}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </Card>)}
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
              return <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </Card>;
            })}
            </div>
          </div>
        </section>

        {/* Product Roadmap */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-4">Product Roadmap</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Four products building a comprehensive travel technology platform
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {productRoadmap.map((product, index) => <Card key={index} className={`p-6 ${index === 0 ? 'border-2 border-primary/50 bg-primary/5' : ''}`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${product.status === 'In Development' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-muted text-muted-foreground'}`}>
                      {product.status}
                    </span>
                    <span className="text-xs text-muted-foreground">{product.timeline}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.desc}</p>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Funding Details */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Funding Info */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Funding Details</h2>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full">
                    <span className="font-semibold text-amber-700">{fundingDetails.round}</span>
                  </div>
                  <div className="text-3xl font-bold text-primary">{fundingDetails.target}</div>
                </div>
                
                <div className="mb-4 p-4 bg-primary/5 rounded-xl border border-primary/20">
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <Calendar className="w-5 h-5" />
                    <span>18-month runway post-funding</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-4">Use of Funds</h3>
                <ul className="space-y-3">
                  {fundingDetails.use.map((item, index) => <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>)}
                </ul>
              </div>
              
              {/* Timeline */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Milestones</h2>
                
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
                  
                  <div className="space-y-6">
                    {fundingDetails.timeline.map((item, index) => <div key={index} className="flex items-start gap-4 relative">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 z-10">
                          <span className="text-xs font-bold text-primary-foreground">{index + 1}</span>
                        </div>
                        <div className="pt-1">
                          <div className="font-semibold text-foreground">{item.phase}</div>
                          <div className="text-muted-foreground">{item.milestone}</div>
                        </div>
                      </div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-4">Leadership Team</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Experienced founders with deep domain expertise in travel technology and enterprise software
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => <Card key={index} className="p-6 text-center bg-card">
                  <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <div className="text-sm text-muted-foreground font-medium mb-3">{member.role}</div>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <a href={member.linkedin} className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </Card>)}
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
    </>;
};
export default Investors;
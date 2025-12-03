import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Briefcase, 
  Clock, 
  Heart, 
  Zap, 
  Globe, 
  Users, 
  Coffee,
  Laptop,
  GraduationCap,
  Plane,
  ArrowRight
} from "lucide-react";

const Careers = () => {
  const benefits = [
    { icon: Heart, title: "Health & Wellness", description: "Comprehensive health, dental, and vision coverage for you and your family." },
    { icon: Laptop, title: "Remote-First", description: "Work from anywhere. We trust you to deliver great work, wherever you are." },
    { icon: Plane, title: "Travel Perks", description: "Discounted flights and travel benefits—we practice what we preach." },
    { icon: GraduationCap, title: "Learning Budget", description: "$2,000 annual budget for courses, conferences, and professional development." },
    { icon: Coffee, title: "Flexible PTO", description: "Unlimited vacation policy. Take the time you need to recharge." },
    { icon: Users, title: "Team Retreats", description: "Annual company retreats to connect with colleagues around the world." }
  ];

  const openings = [
    {
      title: "Senior Backend Engineer",
      department: "Engineering",
      location: "Remote (US/EU)",
      type: "Full-time",
      description: "Build high-performance APIs that handle millions of requests daily. Experience with Go, Rust, or high-throughput systems required."
    },
    {
      title: "Product Manager - Platform",
      department: "Product",
      location: "Remote (Global)",
      type: "Full-time",
      description: "Own the roadmap for our core API platform. 5+ years PM experience, travel industry knowledge a plus."
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote (US/EU)",
      type: "Full-time",
      description: "Scale our infrastructure across multiple cloud providers. Kubernetes, Terraform, and observability expertise needed."
    },
    {
      title: "Technical Account Manager",
      department: "Customer Success",
      location: "Remote (APAC)",
      type: "Full-time",
      description: "Support our enterprise clients with technical onboarding and optimization. API experience required."
    },
    {
      title: "Senior Frontend Engineer",
      department: "Engineering",
      location: "Remote (Global)",
      type: "Full-time",
      description: "Build beautiful, performant dashboards and tools. React, TypeScript, and attention to UX detail."
    },
    {
      title: "Content Marketing Manager",
      department: "Marketing",
      location: "Remote (US/EU)",
      type: "Full-time",
      description: "Create compelling content that educates travel businesses about modern distribution technology."
    }
  ];

  const values = [
    { icon: Zap, title: "Move Fast", description: "We ship quickly, learn from feedback, and iterate." },
    { icon: Globe, title: "Think Big", description: "We're building infrastructure for the future of travel." },
    { icon: Users, title: "Win Together", description: "Collaboration beats competition. We succeed as a team." },
    { icon: Heart, title: "Care Deeply", description: "About our customers, our craft, and each other." }
  ];

  return (
    <>
      <Helmet>
        <title>Careers | Velaree - Join Our Team</title>
        <meta name="description" content="Join Velaree and help transform travel technology. View open positions and learn about our culture, benefits, and team." />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
                We're Hiring
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Build the Future of Travel With Us
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Join a team of passionate engineers, product thinkers, and travel enthusiasts working to transform how the world books flights.
              </p>
              <Button size="lg" className="rounded-full px-8" asChild>
                <a href="#openings">
                  View Open Positions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Culture Values */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">How We Work</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our culture is built on trust, ownership, and a shared commitment to excellence.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Benefits & Perks</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We take care of our team so they can focus on doing their best work.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-border/60 bg-card">
                  <CardContent className="p-6">
                    <benefit.icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="openings" className="py-16 scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Open Positions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find your next role. All positions are remote-friendly unless otherwise noted.
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
              {openings.map((job, index) => (
                <Card key={index} className="border-border/60 bg-card hover:shadow-lg hover:border-primary/30 transition-all group">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {job.title}
                          </h3>
                          <Badge variant="secondary" className="text-xs">
                            {job.department}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
                        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-3 h-3" />
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <Link to="/contact">
                        <Button variant="outline" className="rounded-full shrink-0">
                          Apply Now
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Don't See a Perfect Fit?
              </h2>
              <p className="text-muted-foreground mb-8">
                We're always looking for exceptional talent. Send us your resume and tell us how you'd like to contribute.
              </p>
              <Link to="/contact">
                <Button size="lg" className="rounded-full px-8">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Careers;

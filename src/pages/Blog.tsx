import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
  image?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of NDC: What Airlines Need to Know in 2025",
    excerpt: "NDC adoption is accelerating across the industry. Learn how the latest developments are reshaping airline distribution and what it means for your business.",
    category: "Industry Trends",
    author: "Sarah Chen",
    date: "Nov 28, 2025",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: "2",
    title: "How AI is Transforming Flight Reshop Operations",
    excerpt: "Discover how machine learning algorithms are helping travel agencies save millions by automatically identifying better fares for existing bookings.",
    category: "Technology",
    author: "Michael Torres",
    date: "Nov 25, 2025",
    readTime: "6 min read",
    featured: true,
  },
  {
    id: "3",
    title: "Maximizing Private Fare Access: A Complete Guide",
    excerpt: "Learn the strategies top TMCs use to unlock exclusive airline rates and pass significant savings to their corporate clients.",
    category: "Best Practices",
    author: "Emma Williams",
    date: "Nov 22, 2025",
    readTime: "10 min read",
    featured: true,
  },
  {
    id: "4",
    title: "Understanding Multi-GDS Aggregation",
    excerpt: "Why connecting to multiple GDS systems simultaneously is essential for comprehensive fare coverage in today's fragmented market.",
    category: "Technology",
    author: "James Park",
    date: "Nov 18, 2025",
    readTime: "5 min read",
  },
  {
    id: "5",
    title: "Case Study: How TravelCorp Reduced Costs by 23%",
    excerpt: "A deep dive into how one of Europe's largest TMCs transformed their operations with automated reshop technology.",
    category: "Case Studies",
    author: "Lisa Anderson",
    date: "Nov 15, 2025",
    readTime: "7 min read",
  },
  {
    id: "6",
    title: "API Integration Best Practices for Travel Tech",
    excerpt: "Technical guide for developers building travel applications. Covers authentication, rate limiting, and error handling.",
    category: "Developer",
    author: "David Kim",
    date: "Nov 12, 2025",
    readTime: "12 min read",
  },
  {
    id: "7",
    title: "The Rise of Corporate Self-Booking Tools",
    excerpt: "How modern enterprises are empowering employees with sophisticated booking tools while maintaining policy compliance.",
    category: "Industry Trends",
    author: "Rachel Green",
    date: "Nov 8, 2025",
    readTime: "6 min read",
  },
  {
    id: "8",
    title: "Sustainability in Travel: Beyond Carbon Offsets",
    excerpt: "Exploring how technology can help travel companies make meaningful progress on environmental goals.",
    category: "Sustainability",
    author: "Tom Wilson",
    date: "Nov 5, 2025",
    readTime: "8 min read",
  },
];

const categories = [
  { name: "All", count: blogPosts.length },
  { name: "Industry Trends", count: blogPosts.filter(p => p.category === "Industry Trends").length },
  { name: "Technology", count: blogPosts.filter(p => p.category === "Technology").length },
  { name: "Best Practices", count: blogPosts.filter(p => p.category === "Best Practices").length },
  { name: "Case Studies", count: blogPosts.filter(p => p.category === "Case Studies").length },
  { name: "Developer", count: blogPosts.filter(p => p.category === "Developer").length },
  { name: "Sustainability", count: blogPosts.filter(p => p.category === "Sustainability").length },
];

const categoryColors: Record<string, string> = {
  "Industry Trends": "bg-primary/10 text-primary border-primary/20",
  "Technology": "bg-accent/20 text-accent-foreground border-accent/30",
  "Best Practices": "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
  "Case Studies": "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
  "Developer": "bg-violet-500/10 text-violet-700 dark:text-violet-400 border-violet-500/20",
  "Sustainability": "bg-teal-500/10 text-teal-700 dark:text-teal-400 border-teal-500/20",
};

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured || selectedCategory !== "All");

  return (
    <>
      <Helmet>
        <title>Blog | Velaree - Travel Technology Insights</title>
        <meta name="description" content="Stay updated with the latest travel technology trends, NDC developments, and industry best practices from Velaree's expert team." />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Travel Tech Insights
              </h1>
              <p className="text-xl text-muted-foreground">
                Expert perspectives on NDC, airline distribution, and the future of travel technology.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        {selectedCategory === "All" && (
          <section className="py-12">
            <div className="container mx-auto px-6">
              <h2 className="text-2xl font-bold text-foreground mb-8">Featured Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {featuredPosts.map((post) => (
                  <Card 
                    key={post.id} 
                    className="group hover:shadow-xl transition-all duration-300 border-border/60 bg-card hover:border-primary/30 cursor-pointer"
                  >
                    <CardHeader className="pb-3">
                      <Badge 
                        variant="outline" 
                        className={`w-fit ${categoryColors[post.category] || "bg-muted"}`}
                      >
                        {post.category}
                      </Badge>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-2">
                        <div className="flex items-center gap-2">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Category Filter & All Articles */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar */}
              <aside className="lg:w-64 flex-shrink-0">
                <div className="sticky top-28">
                  <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                    Categories
                  </h3>
                  <div className="flex flex-wrap lg:flex-col gap-2">
                    {categories.map((category) => (
                      <button
                        key={category.name}
                        onClick={() => setSelectedCategory(category.name)}
                        className={`flex items-center justify-between px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                          selectedCategory === category.name
                            ? "bg-primary text-primary-foreground font-medium"
                            : "bg-card hover:bg-accent/50 text-foreground/80"
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className={`ml-2 text-xs ${
                          selectedCategory === category.name 
                            ? "text-primary-foreground/70" 
                            : "text-muted-foreground"
                        }`}>
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Newsletter CTA */}
                  <Card className="mt-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                    <CardContent className="p-5">
                      <h4 className="font-semibold text-foreground mb-2">Stay Updated</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Get the latest insights delivered to your inbox.
                      </p>
                      <Link to="/contact">
                        <Button size="sm" className="w-full rounded-full">
                          Subscribe
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </aside>

              {/* Articles Grid */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-foreground">
                    {selectedCategory === "All" ? "All Articles" : selectedCategory}
                  </h2>
                  <span className="text-sm text-muted-foreground">
                    {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {(selectedCategory === "All" ? regularPosts.slice(3) : regularPosts).map((post) => (
                    <Card 
                      key={post.id} 
                      className="group hover:shadow-lg transition-all duration-300 border-border/60 bg-card hover:border-primary/30 cursor-pointer"
                    >
                      <CardContent className="p-5 space-y-3">
                        <Badge 
                          variant="outline" 
                          className={`${categoryColors[post.category] || "bg-muted"}`}
                        >
                          {post.category}
                        </Badge>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground pt-2">
                          <span>{post.author}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-10">
                  <Button variant="outline" className="rounded-full px-8">
                    Load More Articles
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Blog;
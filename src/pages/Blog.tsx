import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, ArrowRight, User, Search, X } from "lucide-react";
import { blogPosts, categories, categoryColors, searchPosts } from "@/data/blogPosts";
import NewsletterForm from "@/components/blog/NewsletterForm";
const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);
  const filteredPosts = useMemo(() => {
    let posts = blogPosts;

    // Apply search filter
    if (searchQuery.trim()) {
      posts = searchPosts(searchQuery);
    }

    // Apply category filter
    if (selectedCategory !== "All") {
      posts = posts.filter(post => post.category === selectedCategory);
    }
    return posts;
  }, [selectedCategory, searchQuery]);
  const featuredPosts = blogPosts.filter(post => post.featured);
  const showFeatured = selectedCategory === "All" && !searchQuery.trim();
  const categoryCountMap = useMemo(() => {
    const basePosts = searchQuery.trim() ? searchPosts(searchQuery) : blogPosts;
    return categories.reduce((acc, cat) => {
      acc[cat] = basePosts.filter(p => p.category === cat).length;
      return acc;
    }, {} as Record<string, number>);
  }, [searchQuery]);
  const clearSearch = () => {
    setSearchQuery("");
  };
  return <>
      <Helmet>
        <title>Blog | Velaree - Travel Technology Insights</title>
        <meta name="description" content="Stay updated with the latest travel technology trends, NDC developments, and industry best practices from Velaree's expert team." />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background pt-20 sm:pt-24">
        {/* Hero Section */}
        <section className="py-10 sm:py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                Travel Tech Insights
              </h1>
              <p className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-8">
                Expert perspectives on NDC, airline distribution, and the future of travel technology.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-muted-foreground" />
                <Input type="text" placeholder="Search articles..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10 sm:pl-12 pr-10 sm:pr-12 py-5 sm:py-6 text-base sm:text-lg rounded-full border-border/60 bg-card focus-visible:ring-primary" />
                {searchQuery && <button onClick={clearSearch} className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-muted transition-colors">
                    <X className="w-4 sm:w-5 h-4 sm:h-5 text-muted-foreground" />
                  </button>}
              </div>
              
              {searchQuery && <p className="mt-3 sm:mt-4 text-sm text-muted-foreground">
                  Found {filteredPosts.length} result{filteredPosts.length !== 1 ? "s" : ""} for "{searchQuery}"
                </p>}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        {showFeatured && <section className="py-8 sm:py-12">
            <div className="container mx-auto px-4 sm:px-6">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8">Featured Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {featuredPosts.map(post => <Link key={post.id} to={`/blog/${post.id}`}>
                    <Card className="h-full group hover:shadow-xl transition-all duration-300 border-border/60 bg-card hover:border-primary/30">
                      <CardHeader className="pb-2 sm:pb-3 p-4 sm:p-6">
                        <Badge variant="outline" className={`w-fit text-xs ${categoryColors[post.category] || "bg-muted"}`}>
                          {post.category}
                        </Badge>
                      </CardHeader>
                      <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                        <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 sm:line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-muted-foreground pt-2">
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
                  </Link>)}
              </div>
            </div>
          </section>}

        {/* Category Filter & All Articles */}
        <section className="py-8 sm:py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              {/* Sidebar */}
              <aside className="lg:w-64 flex-shrink-0">
                <div className="lg:sticky lg:top-28">
                  <h3 className="text-sm font-semibold text-foreground mb-3 sm:mb-4 uppercase tracking-wider">
                    Categories
                  </h3>
                  <div className="flex flex-wrap lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 -mx-1 px-1">
                    <button onClick={() => setSelectedCategory("All")} className={`flex items-center justify-between px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm transition-all duration-200 whitespace-nowrap ${selectedCategory === "All" ? "bg-primary text-primary-foreground font-medium" : "bg-card hover:bg-accent/50 text-foreground/80"}`}>
                      <span>All</span>
                      <span className={`ml-2 text-xs ${selectedCategory === "All" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                        {searchQuery.trim() ? filteredPosts.length : blogPosts.length}
                      </span>
                    </button>
                    {categories.map(category => <button key={category} onClick={() => setSelectedCategory(category)} className={`flex items-center justify-between px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm transition-all duration-200 whitespace-nowrap ${selectedCategory === category ? "bg-primary text-primary-foreground font-medium" : "bg-card hover:bg-accent/50 text-foreground/80"}`}>
                        <span>{category}</span>
                        <span className={`ml-2 text-xs ${selectedCategory === category ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                          {categoryCountMap[category]}
                        </span>
                      </button>)}
                  </div>

                  {/* Newsletter CTA - Hide on mobile, show on desktop */}
                  <div className="mt-8 hidden lg:block">
                    <NewsletterForm source="blog-sidebar" />
                  </div>
                </div>
              </aside>

              {/* Articles Grid */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h2 className="text-lg sm:text-xl font-bold text-foreground">
                    {selectedCategory === "All" ? "All Articles" : selectedCategory}
                  </h2>
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
                  </span>
                </div>

                {filteredPosts.length === 0 ? <div className="text-center py-12 sm:py-16">
                    <p className="text-muted-foreground mb-4 text-sm sm:text-base">No articles found matching your criteria.</p>
                    <Button variant="outline" size="sm" onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}>
                      Clear Filters
                    </Button>
                  </div> : <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {(showFeatured ? filteredPosts.filter(p => !p.featured) : filteredPosts).slice(0, visibleCount).map(post => <Link key={post.id} to={`/blog/${post.id}`}>
                        <Card className="h-full group hover:shadow-lg transition-all duration-300 border-border/60 bg-card hover:border-primary/30">
                          <CardContent className="p-4 sm:p-5 space-y-2 sm:space-y-3">
                            <Badge variant="outline" className={`text-xs ${categoryColors[post.category] || "bg-muted"}`}>
                              {post.category}
                            </Badge>
                            <h3 className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between text-xs text-muted-foreground pt-2">
                              <span className="truncate max-w-[100px] sm:max-w-none">{post.author}</span>
                              <span className="flex items-center gap-1 flex-shrink-0">
                                <Clock className="w-3 h-3" />
                                {post.readTime}
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>)}
                  </div>}

                {/* Load More - only show if there are more articles to show */}
                {(showFeatured ? filteredPosts.filter(p => !p.featured) : filteredPosts).length > visibleCount && <div className="text-center mt-8 sm:mt-10">
                    <Button variant="outline" className="rounded-full px-6 sm:px-8 text-sm" onClick={() => setVisibleCount(prev => prev + 8)}>
                      Load More Articles
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>}

                {/* Newsletter CTA - Show on mobile at bottom */}
                <div className="mt-8 lg:hidden">
                  <NewsletterForm source="blog-sidebar" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>;
};
export default Blog;
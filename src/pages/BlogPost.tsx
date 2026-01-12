import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, User, Bookmark } from "lucide-react";
import { blogPosts, categoryColors, getRelatedPosts } from "@/data/blogPosts";
import { useToast } from "@/hooks/use-toast";
import MarkdownRenderer from "@/components/blog/MarkdownRenderer";
import TableOfContents, { extractHeadings } from "@/components/blog/TableOfContents";
import ReadingProgressBar from "@/components/blog/ReadingProgressBar";
import NewsletterForm from "@/components/blog/NewsletterForm";
import SocialShareButtons from "@/components/blog/SocialShareButtons";
import FloatingShareBar from "@/components/blog/FloatingShareBar";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeHeading, setActiveHeading] = useState<string>("");
  const post = blogPosts.find(p => p.id === id);
  const relatedPosts = post ? getRelatedPosts(post, 3) : [];
  const headings = post ? extractHeadings(post.content) : [];

  // Track active heading on scroll
  useEffect(() => {
    if (!post || headings.length < 2) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveHeading(entry.target.id);
        }
      });
    }, {
      rootMargin: "-100px 0px -80% 0px"
    });
    headings.forEach(heading => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [post, headings]);
  if (!post) {
    return <>
        <Navigation />
        <main className="min-h-screen bg-background pt-32">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">The article you are looking for does not exist.</p>
            <Button onClick={() => navigate("/blog")} className="rounded-full">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Button>
          </div>
        </main>
        <Footer />
      </>;
  }
  const currentUrl = typeof window !== "undefined" ? window.location.href : `https://velaree.com/blog/${post.id}`;
  
  const handleBookmark = () => {
    toast({
      title: "Article bookmarked",
      description: "You can find your saved articles in your profile."
    });
  };

  const showTOC = headings.length >= 2;
  return <>
      <Helmet>
        <title>{post.title} | Velaree Blog</title>
        <meta name="description" content={post.excerpt} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content="Velaree" />
        <meta property="article:author" content={post.author} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:section" content={post.category} />
        {post.tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:site" content="@velaree" />
        
      </Helmet>

      <Navigation />
      <ReadingProgressBar />
      <FloatingShareBar title={post.title} url={currentUrl} excerpt={post.excerpt} />

      <main className="min-h-screen bg-background pt-20 sm:pt-24">
        {/* Hero */}
        <section className="py-8 sm:py-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto lg:max-w-none lg:px-0">
              <div className="lg:max-w-3xl lg:mx-auto">
                <Button variant="ghost" onClick={() => navigate("/blog")} className="mb-4 sm:mb-6 -ml-2 text-muted-foreground hover:text-foreground text-sm">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back to Blog
                </Button>

                <Badge variant="outline" className={`mb-3 sm:mb-4 text-xs ${categoryColors[post.category] || "bg-muted"}`}>
                  {post.category}
                </Badge>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
                  {post.title}
                </h1>

                <p className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-8">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground pb-6 sm:pb-8 border-b border-border">
                  <Link 
                    to={`/blog/author/${encodeURIComponent(post.author.toLowerCase().replace(/\s+/g, "-"))}`}
                    className="flex items-center gap-2 group"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <User className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">{post.author}</p>
                      <p className="text-xs">{post.authorRole}</p>
                    </div>
                  </Link>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                    {post.readTime}
                  </span>
                  <div className="flex-1" />
                  <div className="flex items-center gap-2">
                    <div className="hidden sm:flex">
                      <SocialShareButtons 
                        title={post.title} 
                        url={currentUrl} 
                        excerpt={post.excerpt}
                      />
                    </div>
                    <Button variant="outline" size="icon" onClick={handleBookmark} className="rounded-full w-8 h-8 sm:w-10 sm:h-10">
                      <Bookmark className="w-3 h-3 sm:w-4 sm:h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content with TOC */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex gap-8 lg:gap-12 max-w-6xl mx-auto">
              {/* Main Content */}
              <div className="flex-1 max-w-3xl">
                <div className="prose prose-sm sm:prose-base max-w-none">
                  <MarkdownRenderer content={post.content} />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border">
                  {post.tags.map(tag => <Badge key={tag} variant="secondary" className="rounded-full text-xs">
                      {tag}
                    </Badge>)}
                </div>

                {/* Author Card */}
                <Link to={`/blog/author/${encodeURIComponent(post.author.toLowerCase().replace(/\s+/g, "-"))}`}>
                  <Card className="mt-6 sm:mt-8 bg-muted/30 border-border/60 hover:border-primary/30 transition-colors group">
                    <CardContent className="p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <User className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">{post.author}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{post.authorRole}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-1 line-clamp-2">
                          Expert in travel technology and airline distribution systems.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                {/* Newsletter CTA */}
                <div className="mt-6 sm:mt-8">
                  <NewsletterForm source="blog-post" />
                </div>
              </div>

              {/* Table of Contents Sidebar */}
              {showTOC && <aside className="hidden xl:block w-64 flex-shrink-0">
                  <TableOfContents content={post.content} activeId={activeHeading} />
                </aside>}
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedPosts.length > 0 && <section className="py-8 sm:py-12 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8">Related Articles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {relatedPosts.map(relatedPost => <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`}>
                      <Card className="h-full group hover:shadow-lg transition-all duration-300 border-border/60 bg-card hover:border-primary/30">
                        <CardContent className="p-4 sm:p-5 space-y-2 sm:space-y-3">
                          <Badge variant="outline" className={`text-xs ${categoryColors[relatedPost.category] || "bg-muted"}`}>
                            {relatedPost.category}
                          </Badge>
                          <h3 className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                          <div className="flex items-center text-xs text-muted-foreground pt-2">
                            <Clock className="w-3 h-3 mr-1" />
                            {relatedPost.readTime}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>)}
                </div>
              </div>
            </div>
          </section>}

        {/* CTA */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
              Ready to transform your travel operations?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto">
              See how Velaree can help you access better content, automate operations, and reduce costs.
            </p>
            <Link to="/contact">
              <Button size="lg" className="rounded-full px-6 sm:px-8 bg-secondary-foreground text-sm sm:text-base">
                Get Started
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>;
};
export default BlogPost;
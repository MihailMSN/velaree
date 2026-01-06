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
        {ogImageUrl && <meta name="twitter:image" content={ogImageUrl} />}
        
        {/* OG Image */}
        {ogImageUrl && (
          <>
            <meta property="og:image" content={ogImageUrl} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
          </>
        )}
      </Helmet>

      <Navigation />
      <ReadingProgressBar />
      <FloatingShareBar title={post.title} url={currentUrl} excerpt={post.excerpt} />

      <main className="min-h-screen bg-background pt-24">
        {/* Hero */}
        <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto lg:max-w-none lg:px-0">
              <div className="lg:max-w-3xl lg:mx-auto">
                <Button variant="ghost" onClick={() => navigate("/blog")} className="mb-6 -ml-2 text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back to Blog
                </Button>

                <Badge variant="outline" className={`mb-4 ${categoryColors[post.category] || "bg-muted"}`}>
                  {post.category}
                </Badge>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  {post.title}
                </h1>

                <p className="text-xl text-muted-foreground mb-8">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pb-8 border-b border-border">
                  <Link 
                    to={`/blog/author/${encodeURIComponent(post.author.toLowerCase().replace(/\s+/g, "-"))}`}
                    className="flex items-center gap-2 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">{post.author}</p>
                      <p className="text-xs">{post.authorRole}</p>
                    </div>
                  </Link>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                  <div className="flex-1" />
                  <div className="flex items-center gap-2">
                    <SocialShareButtons 
                      title={post.title} 
                      url={currentUrl} 
                      excerpt={post.excerpt}
                    />
                    <Button variant="outline" size="icon" onClick={handleBookmark} className="rounded-full">
                      <Bookmark className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content with TOC */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="flex gap-12 max-w-6xl mx-auto">
              {/* Main Content */}
              <div className="flex-1 max-w-3xl">
                <MarkdownRenderer content={post.content} />

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border">
                  {post.tags.map(tag => <Badge key={tag} variant="secondary" className="rounded-full">
                      {tag}
                    </Badge>)}
                </div>

                {/* Author Card */}
                <Link to={`/blog/author/${encodeURIComponent(post.author.toLowerCase().replace(/\s+/g, "-"))}`}>
                  <Card className="mt-8 bg-muted/30 border-border/60 hover:border-primary/30 transition-colors group">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <User className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{post.author}</p>
                        <p className="text-sm text-muted-foreground">{post.authorRole}</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Expert in travel technology and airline distribution systems.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                {/* Newsletter CTA */}
                <div className="mt-8">
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
        {relatedPosts.length > 0 && <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-6">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-bold text-foreground mb-8">Related Articles</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map(relatedPost => <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`}>
                      <Card className="h-full group hover:shadow-lg transition-all duration-300 border-border/60 bg-card hover:border-primary/30">
                        <CardContent className="p-5 space-y-3">
                          <Badge variant="outline" className={`${categoryColors[relatedPost.category] || "bg-muted"}`}>
                            {relatedPost.category}
                          </Badge>
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
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
        <section className="py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Ready to transform your travel operations?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              See how Velaree can help you access better content, automate operations, and reduce costs.
            </p>
            <Link to="/contact">
              <Button size="lg" className="rounded-full px-8 bg-secondary-foreground">
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
import { useParams, Link, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User, Calendar, Clock, BookOpen } from "lucide-react";
import { blogPosts, categoryColors } from "@/data/blogPosts";
import NewsletterForm from "@/components/blog/NewsletterForm";

const Author = () => {
  const { authorName } = useParams<{ authorName: string }>();
  const navigate = useNavigate();

  // Decode the author name from URL
  const decodedAuthorName = authorName ? decodeURIComponent(authorName.replace(/-/g, " ")) : "";

  // Find all posts by this author (case-insensitive match)
  const authorPosts = useMemo(() => {
    return blogPosts.filter(
      (post) => post.author.toLowerCase() === decodedAuthorName.toLowerCase()
    );
  }, [decodedAuthorName]);

  // Get author info from the first post
  const authorInfo = authorPosts[0];

  // Get unique categories for this author
  const authorCategories = useMemo(() => {
    const categories = new Set(authorPosts.map((post) => post.category));
    return Array.from(categories);
  }, [authorPosts]);

  if (!authorInfo || authorPosts.length === 0) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-background pt-32">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Author Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The author you are looking for does not exist.
            </p>
            <Button onClick={() => navigate("/blog")} className="rounded-full">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{authorInfo.author} | Velaree Blog</title>
        <meta
          name="description"
          content={`Read articles by ${authorInfo.author}, ${authorInfo.authorRole} at Velaree. Expert insights on travel technology and airline distribution.`}
        />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background pt-24">
        {/* Author Hero */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Button
                variant="ghost"
                onClick={() => navigate("/blog")}
                className="mb-6 -ml-2 text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Blog
              </Button>

              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Author Avatar */}
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <User className="w-12 h-12 md:w-16 md:h-16 text-primary" />
                </div>

                {/* Author Info */}
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {authorInfo.author}
                  </h1>
                  <p className="text-xl text-primary mb-4">{authorInfo.authorRole}</p>
                  <p className="text-muted-foreground mb-6">
                    Expert in travel technology and airline distribution systems. Contributing
                    insights on NDC, API integration, and the future of travel commerce.
                  </p>

                  {/* Author Stats */}
                  <div className="flex flex-wrap gap-6 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <BookOpen className="w-4 h-4" />
                      <span>
                        {authorPosts.length} article{authorPosts.length !== 1 ? "s" : ""}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {authorCategories.map((category) => (
                        <Badge
                          key={category}
                          variant="outline"
                          className={categoryColors[category] || "bg-muted"}
                        >
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Author Articles */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
              {/* Articles Grid */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-foreground mb-8">
                  Articles by {authorInfo.author}
                </h2>

                <div className="grid sm:grid-cols-2 gap-6">
                  {authorPosts.map((post) => (
                    <Link key={post.id} to={`/blog/${post.id}`}>
                      <Card className="h-full group hover:shadow-lg transition-all duration-300 border-border/60 bg-card hover:border-primary/30">
                        <CardContent className="p-5 space-y-3">
                          <Badge
                            variant="outline"
                            className={categoryColors[post.category] || "bg-muted"}
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
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.readTime}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:w-80 flex-shrink-0">
                <div className="sticky top-28 space-y-6">
                  <NewsletterForm source="author-page" />

                  <Card className="border-border/60">
                    <CardContent className="p-5">
                      <h4 className="font-semibold text-foreground mb-4">Browse by Category</h4>
                      <div className="flex flex-wrap gap-2">
                        {authorCategories.map((category) => (
                          <Link key={category} to={`/blog?category=${encodeURIComponent(category)}`}>
                            <Badge
                              variant="outline"
                              className={`cursor-pointer hover:opacity-80 ${
                                categoryColors[category] || "bg-muted"
                              }`}
                            >
                              {category}
                            </Badge>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Author;

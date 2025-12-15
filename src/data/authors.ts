import { blogPosts } from "./blogPosts";

export interface Author {
  name: string;
  role: string;
  articleCount: number;
  slug: string;
}

export const getAuthors = (): Author[] => {
  const authorMap = new Map<string, { role: string; count: number }>();

  blogPosts.forEach((post) => {
    const existing = authorMap.get(post.author);
    if (existing) {
      existing.count++;
    } else {
      authorMap.set(post.author, { role: post.authorRole, count: 1 });
    }
  });

  return Array.from(authorMap.entries()).map(([name, { role, count }]) => ({
    name,
    role,
    articleCount: count,
    slug: name.toLowerCase().replace(/\s+/g, "-"),
  }));
};

export const getAuthorBySlug = (slug: string): Author | undefined => {
  return getAuthors().find((author) => author.slug === slug);
};

import { getCollection, type CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;

export interface BlogCategory {
  slug: string;
  label: string;
}

export async function getPublishedPosts() {
  return (await getCollection("blog", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

export function getPostSlug(post: BlogPost) {
  return "slug" in post && typeof post.slug === "string"
    ? post.slug
    : post.id.replace(/\.(md|mdx)$/i, "");
}

export function getPostCategory(post: BlogPost): BlogCategory | null {
  const [categorySlug, postSlug] = getPostSlug(post).split("/");
  if (!categorySlug || !postSlug) return null;

  return {
    slug: categorySlug,
    label: formatCategoryLabel(categorySlug),
  };
}

export function getBlogCategories(posts: BlogPost[]) {
  const categories = new Map<string, BlogCategory>();

  for (const post of posts) {
    const category = getPostCategory(post);
    if (category) categories.set(category.slug, category);
  }

  return Array.from(categories.values()).sort((a, b) =>
    a.label.localeCompare(b.label, "en"),
  );
}

export async function getBlogNavLinks() {
  const posts = await getPublishedPosts();
  return getBlogCategories(posts).map((category) => ({
    href: `/blog/${category.slug}/`,
    label: category.label,
  }));
}

function formatCategoryLabel(slug: string) {
  return slug
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

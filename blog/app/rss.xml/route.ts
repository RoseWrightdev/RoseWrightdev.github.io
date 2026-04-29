import { getPosts } from "@/lib/posts";

export const dynamic = "force-static";

export async function GET() {
  const posts = getPosts();
  const siteUrl = "https://rosewright.dev";

  const items = posts
    .map((post) => `
    <item>
      <title>${post.title}</title>
      <link>${siteUrl}/${post.slug}</link>
      <description>${post.description}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid>${siteUrl}/${post.slug}</guid>
    </item>`)
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Rose Wright's Blog</title>
  <link>${siteUrl}</link>
  <description>Software Engineering and Low-level Systems</description>
  <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
  ${items}
</channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

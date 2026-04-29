import Link from "next/link";
import { getPost, getPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import Mermaid from "@/components/Mermaid";
import ShareButton from "@/components/ShareButton";
import { visit } from "unist-util-visit";
import type { Root, Element, Text } from "hast";

export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.metadata.title} | Rose Wright`,
    description: post.metadata.description,
  };
}

const rehypeMermaid = () => (tree: Root) => {
  visit(tree, "element", (node: Element) => {
    if (node.tagName === "pre") {
      const codeChild = node.children.find(
        (c): c is Element => c.type === "element" && c.tagName === "code"
      );
      if (codeChild) {
        const className = (codeChild.properties?.className as string[]) || [];
        if (className.includes("language-mermaid")) {
          // Change tag name to avoid rehype-pretty-code
          node.tagName = "mermaid-diagram";
          // Get the raw text content
          const chart = codeChild.children
            .filter((c): c is Text => c.type === "text")
            .map((c) => c.value)
            .join("");
          node.properties = { chart };
        }
      }
    }
  });
};

const mdxComponents = {
  "mermaid-diagram": (props: { chart: string }) => {
    return <Mermaid chart={props.chart} />;
  },
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white dark:bg-black font-sans selection:bg-zinc-100 dark:selection:bg-zinc-800">
      <div className="max-w-3xl mx-auto py-16 px-8 sm:px-16">
        <header className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors mb-8 group"
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
              className="mr-2 h-5 w-5 stroke-zinc-500 group-hover:stroke-black dark:stroke-zinc-400 dark:group-hover:stroke-zinc-50 transition-colors"
            >
              <path
                d="M6.75 5.75 3.25 9.25l3.5 3.5M3.75 9.25h13"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Home
          </Link>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight text-black dark:text-zinc-50 sm:text-4xl">
              {post.metadata.title}
            </h1>
            <div className="flex items-center text-zinc-500 dark:text-zinc-400 font-mono text-sm">
              <time dateTime={post.metadata.date}>{post.metadata.date}</time>
            </div>
          </div>
        </header>

        <div className="prose prose-zinc dark:prose-invert max-w-none prose-headings:scroll-mt-28 prose-headings:font-semibold prose-headings:tracking-tight prose-a:font-medium hover:prose-a:text-zinc-600 dark:hover:prose-a:text-zinc-300 prose-pre:bg-zinc-900 dark:prose-pre:bg-zinc-900 prose-img:rounded-xl">
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                rehypePlugins: [
                  rehypeMermaid,
                  [
                    rehypePrettyCode,
                    {
                      theme: "github-dark",
                    },
                  ],
                ],
              },
            }}
          />
        </div>

        <div className="mt-8 border-zinc-100 dark:border-zinc-900">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-zinc-700 bg-white border border-zinc-300 rounded-lg hover:bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-300 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors"
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
                className="mr-2 h-4 w-4 stroke-current"
              >
                <path
                  d="M6.75 5.75 3.25 9.25l3.5 3.5M3.75 9.25h13"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Home
            </Link>
            <ShareButton />
            <Link
              href="https://www.linkedin.com/in/rosewrightdev"
              className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-zinc-700 bg-white border border-zinc-300 rounded-lg hover:bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-300 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              Connect on LinkedIn
            </Link>
          </div>
        </div>

        <footer className="mt-8 pt-8 border-t border-zinc-100 dark:border-zinc-900">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Rose Wright. All rights reserved.
          </p>
        </footer>
      </div>
    </article>
  );
}

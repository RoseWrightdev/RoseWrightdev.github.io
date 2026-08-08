import Link from "next/link";
import { getPosts } from "@/lib/posts";
import PostPreview from "@/components/PostPreview";

export default function Home() {
  const posts = getPosts();

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="flex-1 w-full max-w-3xl mx-auto py-24 px-8 sm:px-16">
        <section className="mb-4">
          <h1 className="text-3xl font-bold tracking-tight text-black dark:text-zinc-50">
            Rose Wright
          </h1>
          <h2 className="text-lg leading-7 text-zinc-600 dark:text-zinc-300 max-w-lg">
            Software Engineer
          </h2>
          <h2 className="text-sm leading-7 text-zinc-600 dark:text-zinc-300">
            AI/ML intern @ Mayo Clinic | Prev SWE Intern @ GCM Grosvenor
          </h2>
        </section>
        <section className="space-y-4 mb-4">
          <h2 className="text-xl font-semibold tracking-tight text-black dark:text-zinc-50 border-b border-zinc-200 dark:border-zinc-800 pb-1">
            Writing
          </h2>
          <div className="flex flex-col space-y-10">
            {posts.map((post) => (
              <PostPreview key={post.slug} post={post} />
            ))}
          </div>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-black dark:text-zinc-50 border-b border-zinc-200 dark:border-zinc-800 pb-1">
            Socials
          </h2>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link
                href="https://www.github.com/rosewrightdev"
                className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/rosewrightdev"
                className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="/rss.xml"
                className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
              >
                RSS Feed
              </Link>
            </li>
          </ul>
        </section>
      </main>
      <footer className="w-full max-w-3xl mx-auto py-2 px-8 sm:px-16 text-zinc-500 text-sm border-t border-zinc-100 dark:border-zinc-900">
        &copy; {new Date().getFullYear()} Rose Wright. All rights reserved. Opinions expressed are solely my own and do not express the views or opinions of my employer. 
      </footer>
    </div>
  );
}



import Link from "next/link";
import { getPosts } from "@/lib/posts";
import PostPreview from "@/components/PostPreview";

export default function Home() {
  const posts = getPosts();

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-3xl mx-auto pt-12 pb-8 px-8 sm:px-16">
        <section className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-black dark:text-zinc-50">
            Rose Wright
          </h1>
          <h2 className="text-lg text-zinc-600 dark:text-zinc-300 max-w-lg mt-1">
            Software Engineer
          </h2>
          <h2 className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">
            AI/ML intern @ Mayo Clinic, Previously SWE Intern @ GCM Grosvenor
          </h2>
        </section>
        <section className="space-y-4 mb-6">
          <h2 className="text-xl font-semibold tracking-tight text-black dark:text-zinc-50 border-b border-zinc-200 dark:border-zinc-800 pb-1">
            Writing
          </h2>
          <div className="flex flex-col space-y-6">
            {posts.map((post) => (
              <PostPreview key={post.slug} post={post} />
            ))}
          </div>
        </section>
        <section className="space-y-4 mb-6">
          <h2 className="text-xl font-semibold tracking-tight text-black dark:text-zinc-50 border-b border-zinc-200 dark:border-zinc-800 pb-1">
            Experience
          </h2>
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-base font-medium text-black dark:text-zinc-50">
                  Mayo Clinic, Radiation Oncology
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Artificial Intelligence &amp; Machine Learning Intern
                </p>
              </div>
              <div className="sm:text-right shrink-0">
                <span className="text-zinc-500 dark:text-zinc-400 font-mono text-sm block">
                  August 2026 – May 2027
                </span>
                <span className="text-sm text-zinc-600 dark:text-zinc-400 block">
                  Rochester, MN
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-base font-medium text-black dark:text-zinc-50">
                  GCM Grosvenor
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Software Engineering Intern
                </p>
              </div>
              <div className="sm:text-right shrink-0">
                <span className="text-zinc-500 dark:text-zinc-400 font-mono text-sm block">
                  June – August 2026
                </span>
                <span className="text-sm text-zinc-600 dark:text-zinc-400 block">
                  Chicago, IL
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-base font-medium text-black dark:text-zinc-50">
                  University of Minnesota: Twin Cities
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Web Developer
                </p>
              </div>
              <div className="sm:text-right shrink-0">
                <span className="text-zinc-500 dark:text-zinc-400 font-mono text-sm block">
                  March – December 2025
                </span>
                <span className="text-sm text-zinc-600 dark:text-zinc-400 block">
                  Minneapolis, MN
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-base font-medium text-black dark:text-zinc-50">
                  Wildlife Forever
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Web Development Intern
                </p>
              </div>
              <div className="sm:text-right shrink-0">
                <span className="text-zinc-500 dark:text-zinc-400 font-mono text-sm block">
                  June – August 2023
                </span>
                <span className="text-sm text-zinc-600 dark:text-zinc-400 block">
                  St. Paul, MN
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-black dark:text-zinc-50 border-b border-zinc-200 dark:border-zinc-800 pb-1">
            Contact
          </h2>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
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
                href="mailto:wrig1313@umn.edu"
                className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
              >
                Email
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
      <footer className="w-full max-w-3xl mx-auto py-4 px-8 sm:px-16 text-zinc-500 text-sm border-t border-zinc-100 dark:border-zinc-900">
        &copy; {new Date().getFullYear()} Rose Wright. All rights reserved. Opinions expressed are solely my own and do not express the views or opinions of my employer.
      </footer>
    </div>
  );
}



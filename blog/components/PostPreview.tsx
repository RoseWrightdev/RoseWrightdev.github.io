import Link from "next/link";
import { PostMetadata } from "@/lib/posts";

export default function PostPreview({ post }: { post: PostMetadata }) {
  return (
    <Link
      href={`/${post.slug}`}
      className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between transition-opacity hover:opacity-70"
    >
      <div>
        <h3 className="text-base font-medium text-black dark:text-zinc-50">
          {post.title}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
          {post.description}
        </p>
      </div>
      <span className="text-zinc-500 dark:text-zinc-400 font-mono text-sm shrink-0">
        {post.date}
      </span>
    </Link>
  );
}

import Link from "next/link";
import { PostMetadata } from "@/lib/posts";

export default function PostPreview({ post }: { post: PostMetadata }) {
  return (
    <Link
      href={`/${post.slug}`}
      className="group flex flex-col space-y-2 transition-opacity hover:opacity-70"
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-lg font-medium text-black dark:text-zinc-50">
          {post.title}
        </h3>
        <span className="text-zinc-500 dark:text-zinc-400 font-mono">
          {post.date}
        </span>
      </div>
      <p className="text-zinc-600 dark:text-zinc-400 line-clamp-2">
        {post.description}
      </p>
    </Link>
  );
}

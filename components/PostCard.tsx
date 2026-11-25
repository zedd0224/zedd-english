import Link from "next/link";
import type { Post } from "@/content/posts";

export default function PostCard({ post, summary }: { post: Post; summary?: string }) {
  return (
    <Link
      href={`/posts/${post.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      {post.cover && (
        <div className="aspect-[4/3] overflow-hidden bg-slate-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.cover}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold leading-snug group-hover:text-brand">{post.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{summary ?? post.excerpt}</p>
        <span className="mt-5 text-sm font-semibold text-brand">글 읽기 →</span>
      </div>
    </Link>
  );
}

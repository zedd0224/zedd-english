import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/site.config";
import { posts, getPost, type Block } from "@/content/posts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

// 모든 글 페이지를 미리 만들어 둡니다(빠르고 검색 로봇이 읽기 좋음).
export function generateStaticParams() {
  return posts.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: PageProps<"/posts/[id]">): Promise<Metadata> {
  const { id } = await params;
  const post = getPost(id);
  if (!post) return {};
  return {
    title: `${post.title} | ${site.name}`,
    description: post.excerpt,
    openGraph: post.cover ? { images: [post.cover] } : undefined,
  };
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "image":
      // eslint-disable-next-line @next/next/no-img-element
      return (
        <img
          src={block.src}
          alt=""
          loading="lazy"
          className="mx-auto my-8 w-full max-w-2xl rounded-2xl"
        />
      );
    case "heading":
      return <h2 className="mt-12 text-2xl font-extrabold">{block.text}</h2>;
    case "quote": {
      const [first, ...rest] = block.text.split("\n");
      return (
        <div className="mt-12 border-l-4 border-brand pl-5">
          <h2 className="text-xl font-extrabold leading-snug">{first}</h2>
          {rest.length > 0 && (
            <p className="mt-2 whitespace-pre-line text-slate-600">
              {rest.join("\n")}
            </p>
          )}
        </div>
      );
    }
    case "hr":
      return <hr className="my-10 border-black/10" />;
    default:
      return block.text ? (
        <p className="whitespace-pre-line">{block.text}</p>
      ) : (
        <div className="h-3" />
      );
  }
}

export default function PostPage({ params }: PageProps<"/posts/[id]">) {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Suspense
          fallback={
            <div className="mx-auto max-w-3xl px-5 py-16 text-slate-400">
              불러오는 중…
            </div>
          }
        >
          <PostBody params={params} />
        </Suspense>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}

async function PostBody({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = getPost(id);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <Link href="/#columns" className="text-sm font-semibold text-brand">
        ← 교육 칼럼 목록
      </Link>
      <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
        {post.title}
      </h1>
      <div className="mt-10 space-y-2 text-[17px] leading-8 text-slate-800">
        {post.blocks.map((b, i) => (
          <BlockView key={i} block={b} />
        ))}
      </div>
      {post.tags.length > 0 && (
        <ul className="mt-12 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <li
              key={t}
              className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600"
            >
              #{t}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-12 rounded-2xl bg-slate-50 p-6 text-center">
        <p className="font-semibold">
          이 글이 도움이 되셨나요? 우리 아이 영어, 제드쌤과 상담해 보세요.
        </p>
        <Link
          href="/#contact"
          className="mt-4 inline-block rounded-xl bg-brand px-6 py-3 font-semibold text-white"
        >
          상담 문의하기
        </Link>
      </div>
    </article>
  );
}

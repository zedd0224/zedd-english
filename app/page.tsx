import Link from "next/link";
import { site } from "@/site.config";
import { getPost } from "@/content/posts";
import Header from "@/components/Header";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import PostCard from "@/components/PostCard";

export default function Home() {
  const columns = site.columns.posts
    .map((c) => ({ post: getPost(c.id), summary: c.summary }))
    .filter((c) => c.post !== undefined);

  return (
    <>
      <Header />

      <main className="flex-1">
        {/* ① 첫 화면 */}
        <section className="relative overflow-hidden bg-ink text-white">
          <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand/40 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:py-28 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-sm font-semibold text-accent">{site.hero.eyebrow}</p>
              <h1 className="mt-4 whitespace-pre-line text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                {site.hero.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">{site.hero.body}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="rounded-xl bg-accent px-6 py-3 font-semibold text-ink hover:opacity-90">
                  상담·레벨테스트 문의
                </a>
                <a href="#columns" className="rounded-xl border border-white/30 px-6 py-3 font-semibold hover:bg-white/10">
                  교육 칼럼 보기
                </a>
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={site.hero.image}
              alt="아이들이 제드쌤에게 쓴 손편지와 선물"
              className="mx-auto aspect-[4/5] w-full max-w-sm rounded-3xl object-cover shadow-2xl lg:max-w-none"
            />
          </div>
        </section>

        {/* ② 제드쌤 프로필 + 광고 영상 */}
        <section id="about" className="scroll-mt-28 bg-white">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 sm:py-24 md:grid-cols-[1fr_1.1fr_auto] lg:gap-14">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={site.teacher.photo}
              alt={`${site.teacher.name} 프로필 사진`}
              loading="lazy"
              className="mx-auto aspect-[4/5] w-full max-w-xs rounded-3xl bg-slate-100 object-cover object-top shadow-lg"
            />
            <div>
              <p className="text-sm font-semibold text-brand">{site.teacher.role}</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">{site.teacher.name}</h2>
              <ul className="mt-6 space-y-3">
                {site.teacher.credentials.map((c) => (
                  <li
                    key={c.title}
                    className={`flex items-center gap-4 rounded-full px-5 py-3 ${
                      c.highlight ? "bg-teal-600 text-white" : "border border-black/10 bg-white shadow-sm"
                    }`}
                  >
                    {c.icon === "check" ? (
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                          c.highlight ? "bg-white text-teal-600" : "bg-teal-600 text-white"
                        }`}
                      >
                        ✓
                      </span>
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={c.icon} alt="" className="h-8 w-8 shrink-0" />
                    )}
                    <span>
                      <span className="block font-bold leading-snug">{c.title}</span>
                      {c.sub && <span className="block text-sm font-semibold text-teal-600">{c.sub}</span>}
                    </span>
                  </li>
                ))}
              </ul>
              <Link href={site.teacher.link} className="mt-6 inline-block font-semibold text-brand">
                제드쌤 이야기 더 읽기 →
              </Link>
            </div>
            <figure className="mx-auto w-full max-w-[330px]">
              <video
                src={site.video.src}
                controls
                playsInline
                preload="metadata"
                className="w-full rounded-3xl bg-ink shadow-lg"
              />
              <figcaption className="mt-3 text-center text-sm text-slate-500">{site.video.title}</figcaption>
            </figure>
          </div>
        </section>

        {/* ③ 학부모 후기 */}
        <Section id="reviews" tone="gray" subtitle={`${site.reviews.source} ★ ${site.reviews.rating}`} title="학부모님이 직접 남긴 후기">
          <figure className="rounded-3xl bg-white p-8 shadow-sm sm:p-10">
            <p className="text-2xl text-[#FF6F0F]">★★★★★</p>
            <blockquote className="mt-4 text-2xl font-extrabold leading-snug sm:text-3xl">
              “{site.reviews.featured.quote}”
            </blockquote>
            <figcaption className="mt-4 text-sm text-slate-500">
              {site.reviews.featured.name} · {site.reviews.featured.meta} · {site.reviews.featured.date}
            </figcaption>
            <details className="group mt-6">
              <summary className="cursor-pointer list-none font-semibold text-brand">
                <span className="group-open:hidden">후기 전문 읽기 ↓</span>
                <span className="hidden group-open:inline">접기 ↑</span>
              </summary>
              <div className="mt-4 space-y-4 leading-relaxed text-slate-700">
                {site.reviews.featured.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </details>
          </figure>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2">
            {site.reviews.items.map((r) => (
              <li key={r.name} className="flex flex-col rounded-2xl bg-white p-7 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[#FF6F0F]">★★★★★</span>
                  <span className="text-xs text-slate-400">{r.date}</span>
                </div>
                <p className="mt-4 flex-1 leading-relaxed text-slate-700">{r.body}</p>
                <p className="mt-5 text-sm">
                  <span className="font-bold">{r.name}</span>
                  <span className="text-slate-500"> · {r.meta}</span>
                </p>
              </li>
            ))}
          </ul>

          {/* 실제 후기 화면 캡처 */}
          <p className="mt-14 text-center text-sm font-semibold text-slate-500">실제 후기 화면 · 누르면 크게 볼 수 있어요</p>
          <ul className="-mx-5 mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0">
            {site.reviews.screenshots.map((s) => (
              <li key={s.src} className="w-56 shrink-0 snap-start lg:w-auto">
                <a href={s.src} target="_blank" rel="noopener noreferrer" className="block">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.src}
                    alt={`당근 후기 화면: ${s.caption}`}
                    loading="lazy"
                    className="h-96 w-full rounded-2xl border border-black/10 bg-white object-cover object-top shadow-sm transition hover:shadow-md"
                  />
                </a>
                <p className="mt-2 text-center text-xs text-slate-500">{s.caption}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* ④ 수업 철학 */}
        <Section id="philosophy"subtitle="소규모 그룹 · 1:1 수업" title={site.philosophy.title}>
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {site.philosophy.points.map((p, i) => (
              <li key={p.title} className="rounded-2xl bg-white p-7 shadow-sm">
                <span className="text-sm font-bold text-brand">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-3 text-lg font-bold leading-snug">{p.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.body}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* ④ 교육 칼럼 (블로그 인기글) */}
        <Section id="columns" tone="gray" subtitle={site.columns.subtitle} title={site.columns.title}>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {columns.map(({ post, summary }) => (
              <li key={post!.id}>
                <PostCard post={post!} summary={summary} />
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <a
              href={site.contact.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl border border-black/15 px-6 py-3 font-semibold hover:bg-slate-50"
            >
              블로그에서 더 많은 글 보기
            </a>
          </div>
        </Section>

        {/* ⑤ 오시는 길 */}
        <Section id="location"subtitle="두 곳의 수업 공간" title="찾아오시는 길">
          <ul className="grid gap-6 md:grid-cols-2">
            {site.locations.map((l) => (
              <li key={l.name} className="rounded-2xl bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold text-brand">{l.name}</p>
                <p className="mt-1 text-2xl font-extrabold">{l.area}</p>
                <p className="mt-2 text-slate-600">{l.desc}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {l.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-brand">•</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-slate-600">{site.locationNote}</p>
        </Section>

        {/* ⑥ 상담 */}
        <section id="contact" className="scroll-mt-28 bg-ink text-white">
          <div className="mx-auto max-w-3xl px-5 py-24 text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/landing/profile-formal.jpg"
              alt="제드쌤"
              loading="lazy"
              className="mx-auto mb-6 h-28 w-28 rounded-full object-cover object-top ring-4 ring-white/20"
            />
            <p className="text-sm font-semibold text-accent">예약제 운영</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">우리 아이에게 맞는 영어, 함께 찾아볼까요?</h2>
            <p className="mt-5 leading-relaxed text-white/75">
              위치·상담·레벨테스트 문의는 블로그 채팅이나 카카오톡으로 편하게 남겨주세요.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={site.contact.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[#03C75A] px-6 py-3 font-semibold text-white"
              >
                네이버 블로그로 문의
              </a>
              {site.contact.kakao && (
                <a
                  href={site.contact.kakao}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-[#FEE500] px-6 py-3 font-semibold text-[#191919]"
                >
                  카카오톡 문의
                </a>
              )}
              {site.contact.phone && (
                <a href={`tel:${site.contact.phone}`} className="rounded-xl bg-white px-6 py-3 font-semibold text-ink">
                  전화 {site.contact.phone}
                </a>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}

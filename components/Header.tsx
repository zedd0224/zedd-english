import { site } from "@/site.config";

export default function Header() {
  return (
    <header className="sticky top-0 z-30">
      {/* 알림 띠 */}
      <div className="bg-ink text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-2 text-sm">
          <p className="truncate">🔔 {site.notice}</p>
          <a href="/#contact" className="shrink-0 rounded-full bg-accent px-3 py-1 font-semibold text-ink">
            상담 문의
          </a>
        </div>
      </div>

      {/* 메뉴 */}
      <div className="border-b border-black/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="/" className="text-xl font-extrabold tracking-tight">
            {site.name}
          </a>

          {/* PC 메뉴 */}
          <nav className="hidden gap-8 md:flex">
            {site.nav.map((item) => (
              <div key={item.label} className="group relative">
                <a href={item.href} className="py-2 font-medium hover:text-brand">
                  {item.label}
                </a>
                {item.children && (
                  <ul className="invisible absolute right-0 top-full min-w-40 rounded-xl border border-black/10 bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
                    {item.children.map((c) => (
                      <li key={c.label}>
                        <a href={c.href} className="block rounded-lg px-3 py-2 text-sm hover:bg-slate-100">
                          {c.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>

          {/* 모바일 메뉴 */}
          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none rounded-lg border border-black/10 px-3 py-1.5 text-sm">
              메뉴
            </summary>
            <nav className="absolute right-0 mt-2 w-56 rounded-xl border border-black/10 bg-white p-2 shadow-lg">
              {site.nav.map((item) => (
                <div key={item.label}>
                  <a href={item.href} className="block rounded-lg px-3 py-2 font-medium hover:bg-slate-100">
                    {item.label}
                  </a>
                  {item.children?.map((c) => (
                    <a key={c.label} href={c.href} className="block rounded-lg px-6 py-1.5 text-sm text-slate-600 hover:bg-slate-100">
                      {c.label}
                    </a>
                  ))}
                </div>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

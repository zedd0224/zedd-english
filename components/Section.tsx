// 모든 구역이 같은 모양의 제목을 쓰도록 만든 공통 틀입니다.
export default function Section({
  id,
  subtitle,
  title,
  tone = "white",
  children,
}: {
  id?: string;
  subtitle?: string;
  title: string;
  tone?: "white" | "gray" | "dark";
  children: React.ReactNode;
}) {
  const bg = {
    white: "bg-white",
    gray: "bg-slate-50",
    dark: "bg-ink text-white",
  }[tone];

  return (
    <section id={id} className={`${bg} scroll-mt-28`}>
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <div className="mb-10 text-center">
          {subtitle && (
            <p className={`text-sm font-semibold ${tone === "dark" ? "text-accent" : "text-brand"}`}>
              {subtitle}
            </p>
          )}
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

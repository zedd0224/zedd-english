import { site } from "@/site.config";

export default function Footer() {
  const { business, contact } = site;
  const sns = site.sns.filter((s) => s.href);

  return (
    <footer id="contact" className="scroll-mt-28 border-t border-black/10 bg-slate-50 text-sm text-slate-600">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-6">
          <nav className="flex flex-wrap gap-5 font-medium text-slate-800">
            <a href="#">이용약관</a>
            <a href="#">개인정보처리방침</a>
            <a href="/#location">찾아오시는 길</a>
          </nav>
          {sns.length > 0 && (
            <ul className="flex gap-4">
              {sns.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-brand">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-6 space-y-1 leading-relaxed">
          <p className="text-base font-bold text-slate-800">{site.name}</p>
          <p>
            {business.company} · 대표 {business.ceo} · 사업자등록번호 {business.bizNumber}
          </p>
          {business.extra.map((e) => (
            <p key={e}>{e}</p>
          ))}
          <p>
            {contact.address}
            {contact.phone && ` · 전화 ${contact.phone}`} · {contact.hours}
          </p>
          <p className="pt-3 text-slate-400">
            © {site.copyrightYear} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

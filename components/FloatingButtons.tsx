import { site } from "@/site.config";

// 화면 오른쪽 아래에 떠 있는 전화·카톡·블로그·맨 위로 버튼
export default function FloatingButtons() {
  const btn =
    "flex h-12 w-12 items-center justify-center rounded-full text-xs font-bold shadow-lg transition hover:scale-105";

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      {site.contact.phone && (
        <a href={`tel:${site.contact.phone}`} className={`${btn} bg-brand text-white`} aria-label="전화하기">
          전화
        </a>
      )}
      {site.contact.kakao && (
        <a
          href={site.contact.kakao}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btn} bg-[#FEE500] text-[#191919]`}
          aria-label="카카오톡 문의"
        >
          카톡
        </a>
      )}
      <a
        href={site.contact.blog}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btn} bg-[#03C75A] text-white`}
        aria-label="네이버 블로그"
      >
        블로그
      </a>
      <a href="#" className={`${btn} border border-black/10 bg-white text-slate-700`} aria-label="맨 위로">
        TOP
      </a>
    </div>
  );
}

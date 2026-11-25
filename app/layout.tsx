import type { Metadata } from "next";
import { site } from "@/site.config";
import "./globals.css";

const verificationOther: Record<string, string> = {};
if (site.verification.naver) verificationOther["naver-site-verification"] = site.verification.naver;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.slogan}`,
    template: `%s`,
  },
  description: site.description,
  keywords: site.keywords,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    siteName: site.name,
    title: `${site.name} | ${site.slogan}`,
    description: site.description,
    images: [{ url: site.shareImage, alt: `${site.name} 제드쌤` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.slogan}`,
    description: site.description,
    images: [site.shareImage],
  },
  verification: {
    google: site.verification.google || undefined,
    other: verificationOther,
  },
};

// 검색엔진이 읽는 학원 정보 (구조화 데이터)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: site.name,
  description: site.description,
  url: site.url,
  image: `${site.url}${site.shareImage}`,
  areaServed: "서울 서대문구·마포구",
  sameAs: site.sns.map((s) => s.href).filter(Boolean),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        {/* 한글 글꼴 Pretendard (무료 공개 글꼴) */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

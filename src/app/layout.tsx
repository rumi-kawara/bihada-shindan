import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "美肌診断 | あなたのスキンケア習慣チェック",
  description: "10問の質問に答えて、あなたの美肌度をチェック！NG習慣を発見して正しいケアを始めよう。",
  openGraph: {
    title: "美肌診断 | あなたのスキンケア習慣チェック",
    description: "10問の質問に答えて、あなたの美肌度をチェック！",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>{children}</body>
    </html>
  );
}

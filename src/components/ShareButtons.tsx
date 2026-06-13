"use client";

import { Result } from "@/lib/results";

type Props = {
  result: Result;
  resultUrl: string;
};

export default function ShareButtons({ result, resultUrl }: Props) {
  const shareText = encodeURIComponent(
    `🌸 美肌診断\n私の結果は【${result.title}】でした\n― ${result.subtitle} ―\nあなたの美肌度は？\n`
  );
  const encodedUrl = encodeURIComponent(resultUrl);

  const xUrl = `https://twitter.com/intent/tweet?text=${shareText}&url=${encodedUrl}`;
  const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodedUrl}&text=${shareText}`;

  return (
    <div className="flex flex-col gap-3 w-full">
      <p className="text-sm text-center font-medium" style={{ color: "var(--color-sub)" }}>
        結果をシェアする
      </p>
      <a
        href={xUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-bold text-sm transition-opacity hover:opacity-80"
        style={{ background: "#000000", minHeight: "48px" }}
      >
        <span>𝕏</span>
        <span>Xでシェア</span>
      </a>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-bold text-sm transition-opacity hover:opacity-80"
        style={{ background: "#06C755", minHeight: "48px" }}
      >
        <span>LINE</span>
        <span>LINEでシェア</span>
      </a>
    </div>
  );
}

"use client";

import { Result } from "@/lib/results";
import ShareButtons from "./ShareButtons";

type Props = {
  result: Result;
  totalScore: number;
  onRetry: () => void;
};

export default function ResultScreen({ result, totalScore, onRetry }: Props) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";
  const resultUrl = `${baseUrl}/result/${result.type}`;

  return (
    <div className="flex flex-col items-center px-6 py-8 max-w-md mx-auto w-full">
      <div className="text-5xl mb-3">{result.emoji}</div>

      <div
        className="w-full rounded-2xl p-6 mb-5 text-center"
        style={{ background: result.bgColor, border: `2px solid ${result.color}` }}
      >
        <p className="text-xs font-medium mb-1" style={{ color: result.color }}>
          あなたの美肌タイプ
        </p>
        <h2 className="text-2xl font-bold mb-1" style={{ color: result.color }}>
          {result.title}
        </h2>
        <p className="text-sm" style={{ color: "var(--color-sub)" }}>
          {result.subtitle}
        </p>
        <div
          className="mt-3 inline-block px-3 py-1 rounded-full text-xs font-bold"
          style={{ background: result.color, color: "#fff" }}
        >
          スコア {totalScore} / 20点
        </div>
      </div>

      <div
        className="w-full rounded-2xl p-5 mb-5"
        style={{ background: "var(--color-card)", border: "1px solid var(--color-border)" }}
      >
        <p className="text-sm leading-relaxed" style={{ color: "var(--color-txt)" }}>
          {result.description}
        </p>
      </div>

      <div
        className="w-full rounded-2xl p-5 mb-6"
        style={{ background: "var(--color-accent-pale)", border: "1px solid var(--color-border)" }}
      >
        <p className="text-xs font-bold mb-3" style={{ color: "var(--color-accent)" }}>
          改善ポイント
        </p>
        <ul className="flex flex-col gap-2">
          {result.advice.map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "var(--color-txt)" }}>
              <span style={{ color: "var(--color-accent)", flexShrink: 0 }}>✓</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      <ShareButtons result={result} resultUrl={resultUrl} />

      <button
        onClick={onRetry}
        className="mt-4 text-sm underline underline-offset-2"
        style={{ color: "var(--color-dim)" }}
      >
        もう一度診断する
      </button>
    </div>
  );
}

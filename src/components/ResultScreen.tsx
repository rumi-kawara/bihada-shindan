"use client";

import { useState } from "react";
import { Result } from "@/lib/results";
import ShareButtons from "./ShareButtons";

type Props = {
  result: Result;
  totalScore: number;
  onRetry: () => void;
};

function Divider() {
  return (
    <svg width="70" height="10" viewBox="0 0 70 10" className="mx-auto block">
      <line x1="0" y1="5" x2="26" y2="5" stroke="var(--color-border)" strokeWidth="0.75" />
      <circle cx="30" cy="5" r="1.5" fill="var(--color-accent)" />
      <circle cx="35" cy="5" r="2.5" fill="var(--color-accent)" />
      <circle cx="40" cy="5" r="1.5" fill="var(--color-accent)" />
      <line x1="44" y1="5" x2="70" y2="5" stroke="var(--color-border)" strokeWidth="0.75" />
    </svg>
  );
}

export default function ResultScreen({ result, totalScore, onRetry }: Props) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";
  const resultUrl = `${baseUrl}/result/${result.type}`;

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName: name, type: result.type }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-md mx-auto w-full px-4 py-6">
    <div
      className="relative overflow-hidden rounded-3xl flex flex-col items-center px-6 py-10 w-full"
      style={{ background: "var(--color-card)" }}
    >
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: "-50px",
          right: "-50px",
          width: "150px",
          height: "150px",
          background: "var(--color-accent-light)",
          opacity: 0.4,
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          bottom: "60px",
          left: "-40px",
          width: "100px",
          height: "100px",
          background: "var(--color-accent-light)",
          opacity: 0.3,
        }}
      />

      <p
        className="relative text-xs mb-5 text-center"
        style={{ color: "var(--color-dim)", letterSpacing: "0.08em" }}
      >
        diagnosis result
      </p>

      <h2
        className="text-2xl font-normal mb-2 text-center"
        style={{ color: result.color }}
      >
        {result.title}
      </h2>
      <p className="text-sm mb-6 text-center leading-relaxed" style={{ color: "var(--color-sub)" }}>
        {result.subtitle}
      </p>

      <div className="mb-6">
        <Divider />
      </div>

      <div
        className="inline-block mb-8 px-4 py-1 rounded-full text-xs"
        style={{ border: `0.5px solid ${result.color}`, color: result.color, letterSpacing: "0.05em" }}
      >
        SCORE {totalScore} / 20
      </div>

      <p
        className="text-sm leading-loose mb-8 text-center"
        style={{ color: "var(--color-txt)" }}
      >
        {result.description}
      </p>

      <div className="w-full mb-8">
        <p
          className="text-xs mb-3 text-center"
          style={{ color: "var(--color-dim)", letterSpacing: "0.08em" }}
        >
          改善ポイント
        </p>
        <ul className="flex flex-col gap-3">
          {result.advice.map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "var(--color-txt)" }}>
              <span style={{ color: result.color, flexShrink: 0 }}>·</span>
              <span className="leading-relaxed">{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative w-full mb-8 rounded-2xl p-6" style={{ background: "var(--color-bg)" }}>
        {status === "success" ? (
          <p className="text-sm text-center leading-relaxed" style={{ color: "var(--color-sub)" }}>
            登録しました！あなたのタイプ向けのケア講座をメールでお届けします。
          </p>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
            <p className="text-sm mb-1 text-center leading-relaxed" style={{ color: "var(--color-txt)" }}>
              あなたのタイプ専用のスキンケア講座を無料でお届けします
            </p>
            <input
              type="text"
              placeholder="お名前"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-3 py-2 rounded-lg border text-sm"
              style={{ borderColor: "var(--color-border)", background: "var(--color-bg)" }}
            />
            <input
              type="email"
              required
              placeholder="メールアドレス"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 rounded-lg border text-sm"
              style={{ borderColor: "var(--color-border)", background: "var(--color-bg)" }}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-4 py-3 rounded-full text-sm mt-1"
              style={{ background: "var(--color-accent)", color: "var(--color-bg)", letterSpacing: "0.05em" }}
            >
              {status === "loading" ? "送信中..." : "無料で受け取る"}
            </button>
            {status === "error" && (
              <p className="text-xs text-center" style={{ color: "var(--color-ng)" }}>
                登録に失敗しました。もう一度お試しください。
              </p>
            )}
          </form>
        )}
      </div>

      <ShareButtons result={result} resultUrl={resultUrl} />

      <div className="mt-8 mb-2">
        <Divider />
      </div>
      <p
        className="text-xs text-center"
        style={{ color: "var(--color-dim)", letterSpacing: "0.08em" }}
      >
        清楚・清潔・すっぴん感
      </p>

      <button
        onClick={onRetry}
        className="relative mt-6 text-sm underline underline-offset-2"
        style={{ color: "var(--color-dim)" }}
      >
        もう一度診断する
      </button>
    </div>
    </div>
  );
}

"use client";

type Props = {
  onStart: () => void;
};

export default function IntroScreen({ onStart }: Props) {
  return (
    <div className="flex flex-col items-center text-center px-6 py-12 max-w-md mx-auto">
      <p
        className="text-xs mb-6"
        style={{ color: "var(--color-dim)", letterSpacing: "0.08em" }}
      >
        skincare diagnosis
      </p>
      <h1
        className="text-3xl font-normal mb-3"
        style={{ color: "var(--color-txt)", fontFamily: "var(--font-serif-jp)" }}
      >
        美肌診断
      </h1>
      <p
        className="text-sm mb-8"
        style={{ color: "var(--color-sub)" }}
      >
        あなたのスキンケア習慣チェック
      </p>
      <div
        className="w-full rounded-2xl p-6 mb-8 text-left"
        style={{ background: "var(--color-card)" }}
      >
        <p className="text-sm leading-loose" style={{ color: "var(--color-txt)" }}>
          毎日のスキンケア、正しくできていますか？<br />
          10問の質問に答えて、あなたの美肌度を診断します。<br />
          <br />
          NG習慣を発見して、今日から正しいケアを始めましょう。
        </p>
      </div>
      <button
        onClick={onStart}
        className="w-full py-4 rounded-full text-base tracking-wide transition-opacity duration-200 hover:opacity-90 active:scale-95"
        style={{
          background: "var(--color-accent)",
          color: "var(--color-bg)",
          minHeight: "56px",
        }}
      >
        診断スタート
      </button>
      <p className="text-xs mt-4" style={{ color: "var(--color-dim)" }}>
        全10問 · 所要時間：約2分
      </p>
    </div>
  );
}

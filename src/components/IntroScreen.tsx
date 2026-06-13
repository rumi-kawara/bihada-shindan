"use client";

type Props = {
  onStart: () => void;
};

export default function IntroScreen({ onStart }: Props) {
  return (
    <div className="flex flex-col items-center text-center px-6 py-10 max-w-md mx-auto">
      <div className="text-6xl mb-4">🧴</div>
      <h1
        className="text-2xl font-bold mb-2"
        style={{ color: "var(--color-txt)" }}
      >
        美肌診断
      </h1>
      <p
        className="text-sm font-medium mb-6"
        style={{ color: "var(--color-accent)" }}
      >
        あなたのスキンケア習慣チェック
      </p>
      <div
        className="w-full rounded-2xl p-5 mb-8 text-left"
        style={{ background: "var(--color-accent-pale)", border: "1px solid var(--color-border)" }}
      >
        <p className="text-sm leading-relaxed" style={{ color: "var(--color-sub)" }}>
          毎日のスキンケア、正しくできていますか？<br />
          10問の質問に答えて、あなたの美肌度を診断します。<br />
          <br />
          NG習慣を発見して、今日から正しいケアを始めましょう。
        </p>
      </div>
      <button
        onClick={onStart}
        className="w-full py-4 rounded-2xl text-white font-bold text-base tracking-wide transition-all duration-200 hover:opacity-90 active:scale-95"
        style={{
          background: "linear-gradient(135deg, var(--color-accent-light), var(--color-accent))",
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

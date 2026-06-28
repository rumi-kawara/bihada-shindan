"use client";

type Props = {
  current: number;
  total: number;
};

export default function ProgressBar({ current, total }: Props) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full">
      <div className="flex justify-between text-xs mb-1" style={{ color: "var(--color-sub)" }}>
        <span>質問 {current} / {total}</span>
        <span>{pct}%</span>
      </div>
      <div
        className="w-full h-2 rounded-full overflow-hidden"
        style={{ background: "var(--color-border)" }}
      >
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${pct}%`,
            background: "var(--color-accent)",
          }}
        />
      </div>
    </div>
  );
}

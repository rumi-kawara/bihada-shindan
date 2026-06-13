import { ImageResponse } from "next/og";
import { results, resultTypes, ResultType } from "@/lib/results";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return resultTypes.map((type) => ({ type }));
}

export default async function Image({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  const result = results[type as ResultType];

  if (!result) {
    return new ImageResponse(
      <div style={{ width: 1200, height: 630, display: "flex", background: "#FFF8F0" }} />
    );
  }

  return new ImageResponse(
    <div
      style={{
        width: 1200,
        height: 630,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "linear-gradient(135deg, #FFF8F0 0%, #FFEDF4 100%)",
        position: "relative",
      }}
    >
      {/* 装飾円 */}
      <div
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: result.color,
          opacity: 0.12,
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -60,
          left: -60,
          width: 240,
          height: 240,
          borderRadius: "50%",
          background: result.color,
          opacity: 0.08,
          display: "flex",
        }}
      />

      {/* タイトル */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 32,
        }}
      >
        <div style={{ fontSize: 80, marginBottom: 8, display: "flex" }}>{result.emoji}</div>
        <div
          style={{
            fontSize: 20,
            color: result.color,
            fontWeight: "bold",
            letterSpacing: "0.1em",
            display: "flex",
          }}
        >
          美肌診断
        </div>
      </div>

      {/* カード */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#FFFFFF",
          borderRadius: 24,
          padding: "40px 60px",
          border: `3px solid ${result.color}`,
          boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
          minWidth: 600,
        }}
      >
        <div
          style={{
            fontSize: 18,
            color: result.color,
            fontWeight: "bold",
            marginBottom: 12,
            display: "flex",
          }}
        >
          あなたの美肌タイプ
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: "bold",
            color: result.color,
            marginBottom: 16,
            display: "flex",
          }}
        >
          {result.title}
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#666666",
            display: "flex",
          }}
        >
          {result.subtitle}
        </div>
      </div>

      {/* フッター */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          display: "flex",
          fontSize: 18,
          color: "#AAAAAA",
        }}
      >
        あなたの美肌度は？ → 診断してみよう
      </div>
    </div>,
    { ...size }
  );
}

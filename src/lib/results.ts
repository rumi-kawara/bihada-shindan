export type ResultType = "master" | "candidate" | "caution" | "urgent";

export type Result = {
  type: ResultType;
  title: string;
  subtitle: string;
  emoji: string;
  description: string;
  advice: string[];
  color: string;
  bgColor: string;
};

export const results: Record<ResultType, Result> = {
  master: {
    type: "master",
    title: "美肌マスター",
    subtitle: "あなたのケアはほぼ完璧！",
    emoji: "✨",
    description:
      "スキンケアの基本を完璧に押さえています。泡立て、温度管理、化粧水の浸透法まで、美肌の黄金ルールを実践中。この調子でケアを続ければ、年齢を重ねても美しい素肌をキープできます。",
    advice: [
      "引き続き化粧水の重ね付けを続けよう",
      "紫外線対策も忘れずに",
      "睡眠と水分補給でさらに美肌を底上げ",
    ],
    color: "#4CAF82",
    bgColor: "#E8F5EE",
  },
  candidate: {
    type: "candidate",
    title: "美肌予備軍",
    subtitle: "あと少しで美肌が手に入る！",
    emoji: "🌸",
    description:
      "良い習慣が身についています！化粧水の重ね付けや、タオルの押し当て方など、もう少し丁寧にケアすることで一段上の美肌を目指せます。今の習慣をベースに少しだけ意識を変えてみましょう。",
    advice: [
      "化粧水を5回以上に分けて重ねてみよう",
      "タオルは押し当てるだけにする",
      "お湯の温度を少し下げてみよう",
    ],
    color: "#E8789A",
    bgColor: "#FFEDF4",
  },
  caution: {
    type: "caution",
    title: "要注意ゾーン",
    subtitle: "知らずにやっているNG習慣があります",
    emoji: "⚠️",
    description:
      "良い習慣と悪い習慣が混在しています。特に「お湯の温度」「化粧水のつけ方」を見直すだけで、肌の変化を感じられるはずです。焦らず、一つずつ正しいケアに変えていきましょう。",
    advice: [
      "まず熱いお湯での洗顔をやめよう（35度以下に）",
      "化粧水は叩かず、ハンドプレスで入れよう",
      "クレンジングはこすらずになじませよう",
    ],
    color: "#F0A860",
    bgColor: "#FFF4E5",
  },
  urgent: {
    type: "urgent",
    title: "今すぐ見直して！",
    subtitle: "NG習慣が美肌を遠ざけています",
    emoji: "🆘",
    description:
      "毎日のスキンケアに、肌にダメージを与える習慣が多く含まれています。熱いお湯の使用、ゴシゴシ洗い、化粧水の叩きつけは今すぐやめて。正しいケアに変えるだけで、肌が見違えるように変わります。",
    advice: [
      "シャワーや熱湯を顔に直接かけるのは今日でやめよう",
      "洗顔はホイップ状の泡で優しく、タオルは押し当てるだけに",
      "化粧水はハンドプレスで5回以上重ね付けしよう",
    ],
    color: "#E05C6A",
    bgColor: "#FDEAEC",
  },
};

export const resultTypes: ResultType[] = ["master", "candidate", "caution", "urgent"];

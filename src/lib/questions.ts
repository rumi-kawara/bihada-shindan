export type Choice = {
  label: string;
  text: string;
  score: number;
};

export type Question = {
  id: number;
  text: string;
  choices: [Choice, Choice, Choice];
};

export const questions: Question[] = [
  {
    id: 1,
    text: "洗顔のとき、泡の立て方は？",
    choices: [
      { label: "A", text: "きめ細かいホイップ状になるまでしっかり泡立てる", score: 2 },
      { label: "B", text: "ある程度泡立ててから洗う", score: 1 },
      { label: "C", text: "泡立てずにそのまま洗う、またはシャワーを直接かける", score: 0 },
    ],
  },
  {
    id: 2,
    text: "洗顔に使うお湯の温度はどのくらいですか？",
    choices: [
      { label: "A", text: "ぬるめ（32〜35度）のお湯を使う", score: 2 },
      { label: "B", text: "少し温かめ（36〜38度）のお湯を使う", score: 1 },
      { label: "C", text: "熱め（40度以上）か、お風呂のお湯をそのまま使う", score: 0 },
    ],
  },
  {
    id: 3,
    text: "クレンジングをするとき、肌への触れ方は？",
    choices: [
      { label: "A", text: "こすらず、くるくるとなじませて優しく落とす", score: 2 },
      { label: "B", text: "なるべく優しくするが、たまに少し擦ることもある", score: 1 },
      { label: "C", text: "しっかり落とそうとゴシゴシこする", score: 0 },
    ],
  },
  {
    id: 4,
    text: "洗顔後、タオルで顔を拭くとき？",
    choices: [
      { label: "A", text: "清潔なタオルを顔にそっと押し当てて水分を吸い取るだけ", score: 2 },
      { label: "B", text: "軽くふき取る程度にしている", score: 1 },
      { label: "C", text: "タオルで顔をゴシゴシ拭いている", score: 0 },
    ],
  },
  {
    id: 5,
    text: "化粧水は何回に分けてつけますか？",
    choices: [
      { label: "A", text: "5回以上に分けて、少量ずつ丁寧に入れる", score: 2 },
      { label: "B", text: "2〜3回に分けてつける", score: 1 },
      { label: "C", text: "1回でたっぷりつけて終わり", score: 0 },
    ],
  },
  {
    id: 6,
    text: "化粧水をつけるときの方法は？",
    choices: [
      { label: "A", text: "手の温かさを使い、ハンドプレスでじっくり肌に浸透させる", score: 2 },
      { label: "B", text: "手で優しくなじませる程度", score: 1 },
      { label: "C", text: "バシャバシャ叩きながらつける", score: 0 },
    ],
  },
  {
    id: 7,
    text: "シートマスク・パックをするとき、つけている時間は？",
    choices: [
      { label: "A", text: "8〜10分でしっかり外し、残った美容液はハンドプレスで入れる", score: 2 },
      { label: "B", text: "10〜12分程度でとり外す", score: 1 },
      { label: "C", text: "15分以上、乾くまでそのままにすることが多い", score: 0 },
    ],
  },
  {
    id: 8,
    text: "保湿ケアの方法は？",
    choices: [
      { label: "A", text: "化粧水→美容液→乳液→クリームの順で丁寧に重ねる", score: 2 },
      { label: "B", text: "化粧水と乳液は使っている", score: 1 },
      { label: "C", text: "オールインワンジェルだけで済ませる", score: 0 },
    ],
  },
  {
    id: 9,
    text: "洗顔後、スキンケアを始めるまでの時間は？",
    choices: [
      { label: "A", text: "1〜2分以内にすぐに始める", score: 2 },
      { label: "B", text: "5分以内には始めている", score: 1 },
      { label: "C", text: "10分以上経ってから始めることが多い", score: 0 },
    ],
  },
  {
    id: 10,
    text: "お風呂での洗顔のタイミングは？",
    choices: [
      { label: "A", text: "最後に洗顔して、浴室を出たらすぐスキンケアをする", score: 2 },
      { label: "B", text: "入浴の途中で洗顔している", score: 1 },
      { label: "C", text: "お風呂のお湯で洗う、またはシャワーで流すだけのことが多い", score: 0 },
    ],
  },
];

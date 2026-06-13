import { results, resultTypes, ResultType } from "@/lib/results";
import { notFound } from "next/navigation";
import ResultDisplay from "@/components/ResultDisplay";
import type { Metadata } from "next";

type Props = { params: Promise<{ type: string }> };

export async function generateStaticParams() {
  return resultTypes.map((type) => ({ type }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = await params;
  const result = results[type as ResultType];
  if (!result) return {};
  return {
    title: `【${result.title}】美肌診断の結果`,
    description: result.description,
    openGraph: {
      title: `【${result.title}】美肌診断の結果`,
      description: result.subtitle,
      type: "website",
    },
  };
}

export default async function ResultPage({ params }: Props) {
  const { type } = await params;
  const result = results[type as ResultType];
  if (!result) notFound();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";
  const resultUrl = `${baseUrl}/result/${type}`;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center py-6">
      <ResultDisplay result={result} resultUrl={resultUrl} />
    </main>
  );
}

import type { ResultType } from "./results";

export function calcResult(scores: number[]): ResultType {
  const total = scores.reduce((sum, s) => sum + s, 0);
  if (total >= 17) return "master";
  if (total >= 12) return "candidate";
  if (total >= 6) return "caution";
  return "urgent";
}

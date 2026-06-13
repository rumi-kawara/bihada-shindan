"use client";

import { Question } from "@/lib/questions";
import ProgressBar from "./ProgressBar";

type Props = {
  question: Question;
  questionIndex: number;
  total: number;
  onAnswer: (score: number) => void;
};

export default function QuestionScreen({ question, questionIndex, total, onAnswer }: Props) {
  return (
    <div className="flex flex-col px-6 py-8 max-w-md mx-auto w-full">
      <div className="mb-6">
        <ProgressBar current={questionIndex + 1} total={total} />
      </div>

      <div
        className="rounded-2xl p-5 mb-6"
        style={{ background: "var(--color-card)", border: "1px solid var(--color-border)" }}
      >
        <p
          className="text-base font-bold leading-relaxed"
          style={{ color: "var(--color-txt)" }}
        >
          Q{question.id}. {question.text}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {question.choices.map((choice) => (
          <button
            key={choice.label}
            className="choice-btn"
            onClick={() => onAnswer(choice.score)}
          >
            <span
              className="inline-block font-bold mr-2 text-sm"
              style={{ color: "var(--color-accent)" }}
            >
              {choice.label}
            </span>
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
}

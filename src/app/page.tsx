"use client";

import { useState } from "react";
import { questions } from "@/lib/questions";
import { results } from "@/lib/results";
import { calcResult } from "@/lib/scoring";
import IntroScreen from "@/components/IntroScreen";
import QuestionScreen from "@/components/QuestionScreen";
import ResultScreen from "@/components/ResultScreen";

type Phase = "intro" | "questions" | "result";

export default function Home() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [fading, setFading] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState<number[]>([]);

  const transition = (fn: () => void) => {
    setFading(true);
    setTimeout(() => {
      fn();
      setFading(false);
    }, 280);
  };

  const handleStart = () => {
    transition(() => {
      setCurrentQ(0);
      setScores([]);
      setPhase("questions");
    });
  };

  const handleAnswer = (score: number) => {
    const newScores = [...scores, score];
    if (currentQ + 1 < questions.length) {
      transition(() => {
        setScores(newScores);
        setCurrentQ((q) => q + 1);
      });
    } else {
      transition(() => {
        setScores(newScores);
        setPhase("result");
      });
    }
  };

  const handleRetry = () => {
    transition(() => {
      setCurrentQ(0);
      setScores([]);
      setPhase("intro");
    });
  };

  const resultType = scores.length === questions.length ? calcResult(scores) : "master";
  const totalScore = scores.reduce((s, v) => s + v, 0);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center py-6">
      <div
        className={fading ? "fade-exit" : "fade-enter"}
        style={{ width: "100%", maxWidth: "448px" }}
      >
        {phase === "intro" && <IntroScreen onStart={handleStart} />}
        {phase === "questions" && (
          <QuestionScreen
            question={questions[currentQ]}
            questionIndex={currentQ}
            total={questions.length}
            onAnswer={handleAnswer}
          />
        )}
        {phase === "result" && (
          <ResultScreen
            result={results[resultType]}
            totalScore={totalScore}
            onRetry={handleRetry}
          />
        )}
      </div>
    </main>
  );
}

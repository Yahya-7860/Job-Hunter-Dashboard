import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsHero() {
  const words = ["Fresher's Job", "Internship", "Trainings", "Authentic job"];

  return (
    <div className="h-[40rem] px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Find
        <FlipWords words={words} /> <br />
        in Indore, with Job Hunter
      </div>
    </div>
  );
}

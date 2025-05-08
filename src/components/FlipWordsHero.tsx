import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsHero() {
  const words = ["Fresher's Job", "Internship", "Resume Tips", "Authentic job"];

  return (
    <div className="text-4xl mx-auto font-normal lg:mt-12 text-black dark:text-neutral-400">
      Find
      <FlipWords words={words} /> <br />
      on Job Hunter
    </div>
  );
}

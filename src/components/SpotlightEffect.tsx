import React from "react";
import { Spotlight } from "../components/ui/Spotlight";
import { FlipWordsHero } from "./FlipWordsHero";

export function SpotlightEffect() {
  return (
    <div className="relative flex  w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
      <Spotlight
        className="-top-10 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="relative mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <div className="mx-auto mt-4 max-w-lg text-base font-normal text-neutral-300">
          <FlipWordsHero />
        </div>
      </div>
    </div>
  );
}

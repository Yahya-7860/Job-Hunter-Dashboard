"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import ExpandJobCard from "./ExpandJobCard";
import ResumeTips from "../pages/ResumeTipsPage";
import AvoidResumeMistakes from "@/pages/AvoidResumeMistakes";

export default function SlidingCards() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Indore Based Hiring Updates
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      <ExpandJobCard />
    </>
  );
};

const data = [
  {
    category: "Just For You",
    title: "See Latest Fresher Job",
    src: "/interview.jpg",
    content: <DummyContent />,
  },
  {
    category: "Too much valuable",
    title: "Resume Tips",
    src: "/resume.png",
    content: <ResumeTips />,
  },
  {
    category: "Caution",
    title: "Avoid Resume Mistakes",
    src: "/resumeAvoid.jpg",
    content: <AvoidResumeMistakes />,
  },
];

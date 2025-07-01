"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
      <h1 className="text-center font-sans font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 lg:mb-12">
        Know me Better
      </h1>
      <div className="rounded-md flex flex-col antialiased text-base sm:text-lg lg:text-xl text-neutral-500 font-light font-sans items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "I used to be a chai lover, but after discovering coffee, I became a coffee enthusiast. The aroma, the taste, and the energy boost - it's all perfect. Coffee has become my daily ritual, and I can't imagine starting my day without it.",
  },
  {
    quote: "I love going to the gym and reading books about finance.",
  },
  {
    quote: "I love dogs and traveling the world to explore new cultures.",
  },
  {
    quote:
      "I love to cook and experiment with new recipes. There's something so satisfying about creating a delicious meal from scratch.",
  },
  {
    quote:
      "I love football and swimming; they are my favorite sports. The thrill of the game, the teamwork, and the competition make them so exciting. I enjoy playing with friends and watching matches on TV.",
  },
];
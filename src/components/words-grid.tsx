import { useState } from "react";

export default function WordsGrid({
  words,
  guess,
  tries,
}: {
  words: string[];
  guess: string;
  tries: number;
}) {
  const isCorrectStyle = "border-green-300";
  const isIncorrectStyle = "border-red-300";
  const defaultStyle = "border-slate-300";

  return (
    <div className="mt-5 grid grid-cols-5 gap-x-2 md:gap-x-8 gap-y-6 md:gap-y-10">
      {words.map((word, rowIndex) => {
        return word.split("").map((char, i) => (
          <div
            className={`${!guess ? defaultStyle : char == guess.split("")[i] ? isCorrectStyle : isIncorrectStyle} bg-black text-center border rounded-3xl  p-3 px-16 `}
            key={i}
          >
            <p className="text-base md:text-2xl text-white text-extrabold">
              {char}
            </p>
          </div>
        ));
      })}
    </div>
  );
}

import { useState } from "react";

export default function WordsGrid({
  words,
  guess,
}: {
  words: string[];
  guess: string;
}) {
  const [row, setRow] = useState(1);
  const [currentWord, setCurrentWord] = useState(words[row - 1]);

  const isCorrectStyle = "border-green-300";

  const log = (e: string) => console.log(e);

  return (
    <div className="mt-5 grid grid-cols-5 gap-x-2 md:gap-x-8 gap-y-6 md:gap-y-10">
      {words.map((word, rowIndex) => {
        if (row <= rowIndex) {
          return;
        }

        return word.split("").map((char, i) => (
          <div
            className={`${char == guess.split("")[i - 1] ? isCorrectStyle : ""} bg-black text-center border rounded-3xl border-slate-500 p-3 px-16 `}
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

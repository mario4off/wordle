import { useEffect, useState } from "react";

export default function WordsGrid({
  currentWord,
  guess,
}: {
  currentWord: string;
  guess: string;
}) {
  const isCorrectStyle = "border-green-300";
  const isIncorrectStyle = "border-red-300";
  const defaultStyle = "border-slate-700";
  const activeStyle = "border-slate-300";

  const MAX_ROWS = 6;
  const WORD_LENGTH = 5;

  const [guessRecord, setGuessRecord] = useState<string[]>([]);

  useEffect(() => {
    if (guessRecord?.length == 0) {
      setGuessRecord(() => [currentWord]);
    } else {
      setGuessRecord((prev) => [...prev, currentWord]);
    }
  }, [guess]);

  return (
    <div className="mt-5 grid grid-cols-5 gap-x-2 md:gap-x-8 gap-y-6 md:gap-y-10">
      {Array.from({ length: MAX_ROWS }, (_, rowIndex) => {
        const guessedWord = guessRecord[rowIndex] ?? "";

        {
          return Array.from({ length: WORD_LENGTH }, (_, index) => {
            const char = guessedWord[index] ?? "";

            return (
              <div
                className={`${char != "" ? activeStyle : defaultStyle} bg-black text-center border rounded-3xl  p-3 px-16 `}
                key={`${rowIndex}-${index}`}
              >
                <p className="text-base md:text-2xl min-h-10 text-white text-extrabold">
                  {char}
                </p>
              </div>
            );
          });
        }

        // return currentWord.split("").map((char, index) => (
        //   <div
        //     className={`${!guess ? defaultStyle : char == guess.split("")[index] ? isCorrectStyle : isIncorrectStyle} bg-black text-center border rounded-3xl  p-3 px-16 `}
        //     key={index}
        //   >
        //     <p className="text-base md:text-2xl text-white text-extrabold">
        //       {char}
        //     </p>
        //   </div>
        // ));
      })}
    </div>
  );
}

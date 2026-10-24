import { useEffect, useState } from "react";

export default function WordsGrid({
  currentWord,
  guess,
  tries,
}: {
  currentWord: string;
  guess: string;
  tries: number;
}) {
  const isCorrectStyle = "border-green-300";
  const isIncorrectStyle = "border-red-300";
  const defaultStyle = "border-slate-700";
  const activeStyle = "border-slate-300";

  const MAX_ROWS = 6;
  const WORD_LENGTH = 5;

  const [guessRecord, setGuessRecord] = useState<string[]>([]);

  useEffect(() => {
    if (tries == 0) {
      return;
    }

    setGuessRecord((prev) => [...prev, guess]);
  }, [tries, guess]);

  useEffect(() => {
    setGuessRecord([]);
  }, [currentWord]);

  console.log(currentWord);

  return (
    <div className="mt-5 grid grid-cols-5 gap-x-2 md:gap-x-8 gap-y-6 md:gap-y-10">
      {Array.from({ length: MAX_ROWS }, (_, rowIndex) => {
        const guessedWord = guessRecord[rowIndex] ?? "";
        // const charReference = {}

        // if (guessedWord) {
        //   for (let i = 0; i< currentWord.length; i++) {
        //     if (currentWord.split('')[i] == guessedWord.split('')[i]){

        //     }
        //   }
        // }

        {
          return Array.from({ length: WORD_LENGTH }, (_, index) => {
            const char = guessedWord[index] ?? "";

            let cellStyle: string;

            if (char != "") {
              if (char == currentWord.split("")[index]) {
                cellStyle = isCorrectStyle;
              } else {
                cellStyle = activeStyle;
              }
            } else {
              cellStyle = defaultStyle;
            }

            return (
              <div
                className={`${cellStyle} bg-black text-center border rounded-3xl  p-3 px-16 min-w-38`}
                key={`${rowIndex}-${index}`}
              >
                <p className="text-base md:text-2xl min-h-10 text-white text-extrabold">
                  {char}
                </p>
              </div>
            );
          });
        }
      })}
    </div>
  );
}

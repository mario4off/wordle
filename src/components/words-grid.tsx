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
  const isCorrectStyle = "border-green-400";
  const hintStyle = "border-yellow-300";
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

  function breakdownCurrentWord(word: string) {
    const letters: Record<string, number> = {};

    for (const char of word) {
      if (letters[char]) {
        letters[char]++;
      } else {
        letters[char] = 1;
      }
    }

    return letters;
  }

  const defineCellStyle = (
    guessChar: string,
    referenceChar: string,
    letters: Record<string, number>,
  ) => {
    if (guessChar != "") {
      if (guessChar == referenceChar) {
        return isCorrectStyle;
      }

      if (letters[guessChar] > 0) {
        console.log("pista", guessChar);
        letters[guessChar]--;
        return hintStyle;
      }

      return activeStyle;
    }
    return defaultStyle;
  };

  return (
    <div className="mt-1 md:mt-5 grid grid-cols-5 gap-x-2 md:gap-x-8 gap-y-6 md:gap-y-10">
      {Array.from({ length: MAX_ROWS }, (_, rowIndex) => {
        const guessedWord = guessRecord[rowIndex] ?? "";

        const letters = breakdownCurrentWord(currentWord);

        {
          return Array.from({ length: WORD_LENGTH }, (_, index) => {
            const char = guessedWord[index] ?? "";

            return (
              <div
                className={`${defineCellStyle(char, currentWord.split("")[index], letters)} bg-black flex justify-center items-center border rounded-3xl  p-1 md:p-3 px-4 md:px-16  w-auto md:min-w-38`}
                key={`${rowIndex}-${index}`}
              >
                <p className="text-base md:text-2xl min-h-4 md:min-h-10 text-white text-center text-extrabold">
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

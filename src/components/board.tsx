import { useState } from "react";
import words from "../config/words-list.json";
import RandomGameButton from "./random-game-button";
import { getRandomWords } from "../services/wordsService";
import WordsGrid from "./words-grid";

export default function Board() {
  const [randomWords, setRandomWords] = useState<string[]>(
    getRandomWords(words),
  );

  return (
    <section className="px-12 flex flex-col items-center  gap-18">
      <WordsGrid words={randomWords} />
      <input
        type="text"
        maxLength={5}
        className="border border-amber-300 text-center text-xl tracking-widest text-slate-300 min-h-12 rounded-md w-52"
      />

      <RandomGameButton onClick={() => setRandomWords(getRandomWords(words))} />
    </section>
  );
}

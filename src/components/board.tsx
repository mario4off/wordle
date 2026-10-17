import { useState } from "react";
import words from "../config/words-list.json";
import RandomGameButton from "./random-game-button";
import { getRandomWords } from "../services/wordsService";
import WordsGrid from "./words-grid";
import { normalizeString } from "../utils";

export default function Board() {
  const [randomWords, setRandomWords] = useState<string[]>(
    getRandomWords(words),
  );

  const [guess, setGuess] = useState("");
  return (
    <section className="px-12 flex flex-col items-center  gap-18">
      <WordsGrid words={randomWords} />
      <input
        type="text"
        maxLength={5}
        value={guess}
        onChange={(e) => setGuess(normalizeString(e.target.value))}
        className="border border-amber-300 text-amber-300 text-center text-xl tracking-widest min-h-12 rounded-md w-52"
      />

      <RandomGameButton onClick={() => setRandomWords(getRandomWords(words))} />
    </section>
  );
}

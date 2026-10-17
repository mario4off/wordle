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
    <section className="px-12 flex flex-col items-center min-h-3/4 gap-18">
      <WordsGrid words={randomWords} />

      <RandomGameButton onClick={() => setRandomWords(getRandomWords(words))} />
    </section>
  );
}

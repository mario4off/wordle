import { useState } from "react";
import words from "../config/words-list.json";
import RandomGameButton from "./random-game-button";
import { getRandomWords } from "../services/wordsService";
import WordsGrid from "./words-grid";
import GuessForm from "./guess-form";

export default function Board() {
  const [randomWords, setRandomWords] = useState<string[]>(
    getRandomWords(words),
  );

  const [guess, setGuess] = useState("");

  return (
    <section className="px-12 flex flex-col items-center  gap-18">
      <WordsGrid words={randomWords} guess={guess} />

      <GuessForm setGuess={setGuess} />

      <RandomGameButton onClick={() => setRandomWords(getRandomWords(words))} />
    </section>
  );
}

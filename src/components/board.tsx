import { useState } from "react";
import words from "../config/words-list.json";
import RandomGameButton from "./random-game-button";
import { getRandomWords } from "../services/wordsService";
import WordsGrid from "./words-grid";
import GuessInput from "./guess-input";
import SendGuessButton from "./send-guess-button";

export default function Board() {
  const [randomWords, setRandomWords] = useState<string[]>(
    getRandomWords(words),
  );
  const [row, setRow] = useState(1);
  const [guess, setGuess] = useState("");
  console.log(guess);

  return (
    <section className="px-12 flex flex-col items-center  gap-18">
      <WordsGrid words={randomWords} row={row} />
      <GuessInput value={guess} onChange={setGuess} />
      <SendGuessButton onClick={() => console.log("")} />
      <RandomGameButton onClick={() => setRandomWords(getRandomWords(words))} />
    </section>
  );
}

import { useState } from "react";
import words from "../config/words-list.json";
import RandomGameButton from "./random-game-button";
import { getRandomWords } from "../services/wordsService";

export default function Board() {
  const [randomWords, setRandomWords] = useState<string[]>();

  return (
    <section className="px-12 flex flex-col items-center">
      <p>tablero</p>

      <RandomGameButton onClick={() => setRandomWords(getRandomWords(words))} />
    </section>
  );
}

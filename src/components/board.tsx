import { useState } from "react";
import words from "../config/words-list.json";
import RandomGameButton from "./random-game-button";
import { getRandomWords } from "../services/wordsService";

export default function Board() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const randomWords = getRandomWords(words);

  return (
    <section className="px-12 flex flex-col items-center">
      <p>tablero</p>
      {!isGameStarted ? (
        <RandomGameButton onClick={() => setIsGameStarted(true)} />
      ) : (
        "dfasdf"
      )}
    </section>
  );
}

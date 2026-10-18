import { useState } from "react";
import words from "../config/words-list.json";
import RandomGameButton from "./random-game-button";
import { getRandomWord } from "../services/wordsService";
import WordsGrid from "./words-grid";
import GuessForm from "./guess-form";

export default function Board() {
  const [randomWord, setRandomWord] = useState(getRandomWord(words));

  const [tries, setTries] = useState(0);
  const [currentWord] = useState(randomWord[0]);
  const [guess, setGuess] = useState<string>("");

  const winner = guess === currentWord;

  const handleGuess = (newGuess: string) => {
    setGuess(newGuess);
    setTries(tries + 1);
  };

  console.log(tries);

  return (
    <section className="px-12 flex flex-col items-center  gap-18">
      <WordsGrid currentWord={randomWord} guess={guess} />

      {winner && <h1>GANASTE!!!</h1>}

      <GuessForm setGuess={handleGuess} />

      <RandomGameButton onClick={() => setRandomWord(getRandomWord(words))} />
    </section>
  );
}

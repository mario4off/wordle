import { useEffect, useState } from "react";
import words from "../config/words-list.json";
import RandomGameButton from "./random-game-button";
import { getRandomWords } from "../services/wordsService";
import WordsGrid from "./words-grid";
import GuessForm from "./guess-form";

export default function Board() {
  const [randomWords, setRandomWords] = useState<string[]>(
    getRandomWords(words),
  );

  const [wordsInUse, setWordsInUse] = useState([randomWords[0]]);
  const [tries, setTries] = useState(0);
  const [currentWord, setCurrentWord] = useState(randomWords[0]);
  const [guess, setGuess] = useState<string>("");

  const winner = guess === currentWord;

  const handleGuess = (newGuess: string) => {
    setGuess(newGuess);
    setTries(tries + 1);
  };

  console.log(tries);

  return (
    <section className="px-12 flex flex-col items-center  gap-18">
      <WordsGrid words={wordsInUse} guess={guess} tries={tries} />

      {winner && <h1>GANASTE!!!</h1>}

      <GuessForm setGuess={handleGuess} />

      <RandomGameButton onClick={() => setRandomWords(getRandomWords(words))} />
    </section>
  );
}

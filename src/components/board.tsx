import { useEffect, useState } from "react";
import words from "../config/words-list.json";
import RestartGameButton from "./restart-game-button";
import { getRandomWord } from "../services/wordsService";
import WordsGrid from "./words-grid";
import GuessForm from "./guess-form";

type GameStatus = "won" | "lost" | "playing";
const GAME_RESULT = {
  playing: {
    message: "",
    style: {
      container: "",
      text: "",
    },
  },
  won: {
    message: "Ganaste 🥇",
    style: {
      container: "border-green-800 ",
      text: "text-green-600",
    },
  },
  lost: {
    message: "Perdiste",
    style: {
      container: " border-red-800 ",
      text: "text-red-600",
    },
  },
} satisfies Record<
  GameStatus,
  { message: string; style: { container: string; text: string } }
>;

export default function Board() {
  const [tries, setTries] = useState(0);
  const [currentWord, setCurrentWord] = useState(getRandomWord(words));
  const [guess, setGuess] = useState("");
  const [gameStatus, setGameStatus] = useState<GameStatus>("playing");
  const gameResult = GAME_RESULT[gameStatus];

  const handleGuess = (newGuess: string) => {
    setGuess(newGuess);
    if (currentWord.toUpperCase() == newGuess) {
      setGameStatus("won");
      return;
    }

    setTries(tries + 1);
  };

  useEffect(() => {
    if (tries == 6) {
      setGameStatus("lost");
    }
  }, [tries]);

  const handleRestart = () => {
    setCurrentWord(getRandomWord(words));
    setTries(0);
    setGameStatus("playing");
  };

  return (
    <section className="px-12 flex flex-col items-center  gap-18 ">
      <WordsGrid currentWord={currentWord} guess={guess} tries={tries} />

      <div className="min-h-34 flex items-center">
        {gameStatus == "playing" ? (
          <GuessForm setGuess={handleGuess} />
        ) : (
          <div
            className={`border px-3 p-2 rounded-md ${gameResult.style.container}`}
          >
            <h2 className={`${gameResult.style.text}`}>{gameResult.message}</h2>
          </div>
        )}
      </div>

      <RestartGameButton restart={handleRestart} />
    </section>
  );
}

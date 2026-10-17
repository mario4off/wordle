import { useState } from "react";
import words from "../config/words-list.json";
import RandomGameButton from "./random-game-button";
import { getRandomWords } from "../services/wordsService";

export default function Board() {
  const [randomWords, setRandomWords] = useState<string[]>(
    getRandomWords(words),
  );

  return (
    <section className="px-12 flex flex-col items-center">
      <header className="grid grid-cols-5 gap-x-28 gap-y-12">
        {randomWords.map((word) =>
          word.split("").map((char, i) => (
            <div
              className=" text-center border rounded-3xl border-white p-3"
              key={i}
            >
              <p className="text-xl text-white text-extrabold">{char}</p>
            </div>
          )),
        )}
      </header>

      <RandomGameButton onClick={() => setRandomWords(getRandomWords(words))} />
    </section>
  );
}

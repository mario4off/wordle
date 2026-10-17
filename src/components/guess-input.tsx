import { useState } from "react";
import { normalizeString } from "../utils";

export default function GuessInput() {
  const [guess, setGuess] = useState("");
  return (
    <input
      type="text"
      maxLength={5}
      value={guess}
      onChange={(e) => setGuess(normalizeString(e.target.value))}
      className="border border-amber-300 text-amber-300 text-center text-xl tracking-widest min-h-12 rounded-md w-52"
    />
  );
}

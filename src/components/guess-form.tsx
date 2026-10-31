import { useState } from "react";
import { normalizeString } from "../utils";
import RestartGameButton from "./restart-game-button";

export default function GuessForm({
  setGuess,
  restart,
}: {
  setGuess: (e: string) => void;
  restart: () => void;
}) {
  const handleSubmit = (formData: FormData) => {
    const guess = formData.get("guess") as string;

    if (guess.length == 5) {
      setGuess(formData.get("guess") as string);
      setValue("");
    }
  };

  const [value, setValue] = useState("");
  return (
    <form
      className="flex items-center justify-center gap-2 flex-col md:gap-10 mt-8"
      action={handleSubmit}
    >
      <div className="relative flex justify-center w-full">
        <input
          type="text"
          name="guess"
          maxLength={5}
          onChange={(e) => setValue(normalizeString(e.target.value))}
          value={value}
          className="w-30 md:w-52 border border-amber-300 text-amber-300 text-center text-base tracking-widest min-h-10 md:min-h-12 rounded-md"
        />

        <div className="absolute left-full ms-[20px] md:ms-[30px] top-1/2 -translate-y-1/2">
          <RestartGameButton restart={restart} />
        </div>
      </div>

      <button
        type="submit"
        className=" text-amber-300 cursor-pointer text-xl md:border border-amber-300 px-3 p-2 rounded-md hover:bg-amber-900"
      >
        <span className="hidden md:block">Enviar palabra</span>
        <img
          src="/arrow-up.webp"
          alt="arrow up"
          className="block md:hidden w-8 h-8 object-contain"
        />
      </button>
    </form>
  );
}

import { useState } from "react";
import { normalizeString } from "../utils";

export default function GuessForm({
  setGuess,
}: {
  setGuess: (e: string) => void;
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
      className="flex items-center mb-6 gap-2 flex-col md:gap-10 mt-8"
      action={handleSubmit}
    >
      <input
        type="text"
        name="guess"
        maxLength={5}
        onChange={(e) => setValue(normalizeString(e.target.value))}
        value={value}
        className="w-30 md:w-52 border border-amber-300 text-amber-300 text-center text-base tracking-widest min-h-10 md:min-h-12 rounded-md"
      />

      <button
        type="submit"
        className=" text-amber-300 cursor-pointer text-xl md:border border-amber-300 px-3 p-2 rounded-md hover:bg-amber-900"
      >
        <span className="hidden md:block">Enviar palabra</span>
        <img
          src="/public/arrow-up.webp"
          alt="arrow up"
          className="block md:hidden w-8 h-8 object-contain"
        />
      </button>
    </form>
  );
}

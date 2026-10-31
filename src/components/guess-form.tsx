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
    <form className="flex md:flex-col gap-10" action={handleSubmit}>
      <input
        type="text"
        name="guess"
        maxLength={5}
        onChange={(e) => setValue(normalizeString(e.target.value))}
        value={value}
        className="border border-amber-300 text-amber-300 text-center text-xl tracking-widest md:min-h-12 rounded-md w-52"
      />
      <button
        type="submit"
        className="text-amber-300 cursor-pointer text-xl border border-amber-300 px-3 p-2 rounded-md hover:bg-amber-900"
      >
        <span className="hidden md:block">Enviar palabra</span>
        <img
          src="/public/arrow-up.webp"
          alt="arrow up"
          className="block md:hidden min-h-8 min-w-8"
        />
      </button>
    </form>
  );
}

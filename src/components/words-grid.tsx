import { useState } from "react";

export default function WordsGrid({ words }: { words: string[] }) {
  const [selectedChar, setSelectedChar] = useState("");

  return (
    <div className="mt-5 grid grid-cols-5 gap-x-2 md:gap-x-8 gap-y-6 md:gap-y-10">
      {words.map((word) =>
        word.split("").map((char, i) => (
          <div
            className=" text-center border rounded-3xl border-slate-500 p-3 px-16 group hover:border-cyan-500"
            key={i}
          >
            <p
              onClick={() => setSelectedChar(char)}
              className="text-base md:text-2xl text-white text-extrabold group-hover:text-cyan-500"
            >
              {char}
            </p>
          </div>
        )),
      )}
    </div>
  );
}

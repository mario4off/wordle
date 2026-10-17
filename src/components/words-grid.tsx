import { useState } from "react";

export default function WordsGrid({ words }: { words: string[] }) {
  const [selectedChar, setSelectedChar] = useState("");

  return (
    <div className="grid grid-cols-5 gap-x-10 gap-y-18">
      {words.map((word) =>
        word.split("").map((char, i) => (
          <div
            className=" text-center border rounded-3xl border-slate-500 p-3 group hover:border-cyan-500"
            key={i}
          >
            <p
              onClick={() => setSelectedChar(char)}
              className="text-4xl text-white text-extrabold group-hover:text-cyan-500"
            >
              {char}
            </p>
          </div>
        )),
      )}
    </div>
  );
}

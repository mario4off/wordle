import { useState } from "react";

export default function WordsGrid({ words }: { words: string[] }) {
  const [row, setRow] = useState(1);
  return (
    <div className="mt-5 grid grid-cols-5 gap-x-2 md:gap-x-8 gap-y-6 md:gap-y-10">
      {words.map((word, rowIndex) => {
        if (rowIndex) {
          return;
        }

        return word.split("").map((char, i) => (
          <div
            className=" text-center border rounded-3xl border-slate-500 p-3 px-16 group hover:border-cyan-500"
            key={i}
          >
            <p className="text-base md:text-2xl text-black text-extrabold group-hover:text-cyan-500">
              {char}
            </p>
          </div>
        ));
      })}
    </div>
  );
}

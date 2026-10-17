export default function WordsGrid({ words }: { words: string[] }) {
  return (
    <div className="grid grid-cols-5 gap-x-10 gap-y-18">
      {words.map((word) =>
        word.split("").map((char, i) => (
          <div
            className=" text-center border rounded-3xl border-slate-500 p-3"
            key={i}
          >
            <p className="text-xl text-white text-extrabold">{char}</p>
          </div>
        )),
      )}
    </div>
  );
}

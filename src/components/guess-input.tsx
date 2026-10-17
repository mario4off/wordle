import { normalizeString } from "../utils";

export default function GuessInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: string) => void;
}) {
  return (
    <input
      type="text"
      maxLength={5}
      value={value}
      onChange={(e) => onChange(normalizeString(e.target.value))}
      className="border border-amber-300 text-amber-300 text-center text-xl tracking-widest min-h-12 rounded-md w-52"
    />
  );
}

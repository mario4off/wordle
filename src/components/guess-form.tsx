export default function GuessForm({
  setGuess,
}: {
  setGuess: (e: string) => void;
}) {
  const handleSubmit = (formData: FormData) => {
    setGuess(formData.get("guess") as string);
  };

  return (
    <form className="flex flex-col gap-10" action={handleSubmit}>
      <input
        type="text"
        name="guess"
        maxLength={5}
        minLength={5}
        className="border border-amber-300 text-amber-300 text-center text-xl tracking-widest min-h-12 rounded-md w-52"
      />
      <button
        type="submit"
        className="text-amber-300 cursor-pointer text-xl border border-amber-300 px-3 p-2 rounded-md hover:bg-amber-900"
      >
        Enviar palabra
      </button>
    </form>
  );
}

export default function RestartGameButton({
  restart,
}: {
  restart: () => void;
}) {
  return (
    <button
      onClick={() => restart()}
      className="text-amber-300 cursor-pointer text-xl border border-amber-400 px-3 p-2 rounded-md hover:bg-amber-900"
    >
      Reiniciar partida
    </button>
  );
}

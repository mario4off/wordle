export default function RandomGameButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={() => onClick()}
      className="text-amber-300 border border-amber-300 px-3 p-2 rounded-md hover:bg-amber-900"
    >
      Reiniciar partida
    </button>
  );
}

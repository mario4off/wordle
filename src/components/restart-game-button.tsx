export default function RestartGameButton({
  restart,
}: {
  restart: () => void;
}) {
  return (
    <div className="flex justify-end w-full">
      <button
        onClick={() => restart()}
        className="text-amber-300 cursor-pointer text-md  md:text-xl  rounded-md hover:bg-amber-900"
      >
        <img
          className="max-w-6 md:max-w-8"
          src="/cycle.webp"
          alt="circular arrows"
        />
      </button>
    </div>
  );
}

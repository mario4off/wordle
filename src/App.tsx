import Board from "./components/board";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <>
      <main className="bg-black min-h-dvh w-full grid grid-rows-[auto-1fr-auto]">
        <Header />
        <Board />
        <Footer />
      </main>
    </>
  );
}

export default App;

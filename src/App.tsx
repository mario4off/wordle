import Board from "./components/board";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <>
      <main className="fixed inset-0 overflow-y-auto h-dvh w-full grid grid-rows-[auto-1fr-auto]">
        <Header />
        <Board />
        <Footer />
      </main>
    </>
  );
}

export default App;

import Board from "./components/board";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <>
      <main className="min-h-svh w-full grid grid-rows-[auto_1fr_auto]">
        <Header />
        <Board />
        <Footer />
      </main>
    </>
  );
}

export default App;

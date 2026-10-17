import Board from "./components/board";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <>
      <main className="bg-black h-dvh w-full flex flex-col justify-between">
        <Header />
        <Board />
        <Footer />
      </main>
    </>
  );
}

export default App;

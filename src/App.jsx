import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Apresentacao from "./components/Apresentacao";

function App() {
  return (
    <div id="portifolio">
      <header>
        <Navbar />
      </header>

      <main>
        <Apresentacao />

        <section></section>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;

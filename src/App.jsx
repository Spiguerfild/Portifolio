import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Apresentacao from "./components/Apresentacao";
import SectionHistory from "./components/SectionHistory.jsx";
import SectionProjects from "./components/SectionProjects.jsx";
function App() {
  return (
    <div id="portifolio">
      <header>
        <Navbar />
      </header>

      <main>
        <Apresentacao />

        <section>
          <SectionHistory />
        </section>

        <section>
          <SectionProjects />
        </section>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;

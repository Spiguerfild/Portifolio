import "./SectionProjects.css";
import TopSections from "./TopSections.jsx";
import img_1 from "../img/projetos_cadastro_basico.png";
import img_2 from "../img/projetos_pokedex.png";
import img_3 from "../img/projetos_buscar_cep.png";
import git_img from "../img/"
function SectionProjects() {
  return (
    <div id="section-projects">
      <TopSections title={`Projects`} />
      <div className="container-projects">
        <div className="card-project">
          <img src={img_1} alt="" width={254} />
          <h3>Simple Page</h3>
        </div>
        <div className="card-project">
          <img src={img_2} alt="" width={254} />
          <a href="https://github.com/Spiguerfild/Pokedex"><img src={}/> GitLink</a>
          <a href="https://github.com/Spiguerfild/Pokedex">GitLink</a>
          <h3>Pokedex</h3>
        </div>
        <div className="card-project">
          <img src={img_3} alt="" width={254} />
          <h3>Busca CEP</h3>
        </div>
      </div>
      <div className="container-projects">
        <div className="card-project"></div>
      </div>
    </div>
  );
}

export default SectionProjects;

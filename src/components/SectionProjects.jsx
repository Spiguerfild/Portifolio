import "./SectionProjects.css";
import TopSections from "./TopSections.jsx";
import img_1 from "../img/projetos_cadastro_basico.png";
import img_2 from "../img/projetos_pokedex.png";
import img_3 from "../img/projetos_buscar_cep.png";
import img_4 from "../img/site_magic.png"
import git_img from "../img/github.png";
import lin_img from "../img/linkedin.png";


function SectionProjects() {
  return (
    <div id="section-projects">
      <TopSections title={`Projects`} />
      <div className="container-projects">
        <div className="card-project">
          <img src={img_1} alt="" width={254} />

          <a
            href="https://github.com/Spiguerfild/projeto_1_danki"
            target="_blank"
          >
            <img className="icon-prj" src={git_img} alt="" /> GitLink
          </a>
          <a
            href="https://www.linkedin.com/posts/luis-henrique-spiga_quase-finalizando-a-cria%C3%A7%C3%A3o-da-p%C3%A1gina-ainda-activity-6968580660055736320-IXne?utm_source=share&utm_medium=member_desktop"
            target="_blank"
          >
            <img className="icon-prj" src={lin_img} /> Linkedin
          </a>
          <h3>Simple Page</h3>
        </div>
        <div className="card-project">
          <img src={img_2} alt="" width={254} />
          <a href="https://github.com/Spiguerfild/Pokedex" target="_blank">
            <img className="icon-prj" src={git_img} alt="" /> GitLink
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/posts/luis-henrique-spiga_mais-um-projeto-realizado-com-sucesso-activity-7020794796826869760-e3wo/?utm_source=share&utm_medium=member_desktop"
          >
            <img className="icon-prj" src={lin_img} /> Linkedin
          </a>
          <h3>Pokedex</h3>
        </div>
        <div className="card-project">
          <img src={img_3} alt="" width={254} />
          <a href="https://github.com/Spiguerfild/buscador-CEP-REACT" target="_blank">
            <img className="icon-prj" src={git_img} alt="" /> GitLink
          </a>
          <a target="_blank" href="https://www.linkedin.com/posts/luis-henrique-spiga_projeto-pesquisador-de-cep-utilizei-s%C3%B3-activity-7023872375658037248-yowQ?utm_source=share&utm_medium=member_desktop">
            <img className="icon-prj" src={lin_img} /> Linkedin
          </a>
          <h3>Search CEP</h3>
        </div>

      </div>
      <div className="container-projects">
        <div className="card-project">
          <img src={img_4} alt="" width={254} />
          <a href="https://github.com/Spiguerfild/projeto-site-magic" target="_blank">
            <img className="icon-prj" src={git_img} alt="" /> GitLink
          </a>
          <a href="https://www.linkedin.com/posts/luis-henrique-spiga_bom-dia-segue-mais-um-projeto-um-clone-activity-7032348278629240833-lMSb?utm_source=share&utm_medium=member_desktop">
            <img className="icon-prj" src={lin_img} /> Linkedin
          </a>
          <h3>Clone Page</h3>
        </div>
      </div>

    </div>
  );
}

export default SectionProjects;

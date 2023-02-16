import "./Apresentacao.css";
import TopSections from './TopSections';
import foto from "../img/foto-perfil.png";


function Apresentacao() {
  return (
    <div id="apresentacao">
      <TopSections title={"Home"} />
      <div className="container-apresentacao">
        <div className="text-ap">
          <h1>Hi, i'm Luis Henrique</h1>
        
            <p class="line-1 anim-typewriter">Front-end <span>Dev</span>eloper.</p>
       
        </div>

        <div className="div-foto-ap">
          <img className="foto-ap" src={foto} alt="" width={350} />
        </div>
      </div>
  
    </div>
  );
}

export default Apresentacao;

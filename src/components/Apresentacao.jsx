import "./Apresentacao.css";
import foto from "../img/foto-perfil.png";


function Apresentacao() {
  return (
    <div id="apresentacao">
      <div className="container-apresentacao">
        <div className="text-ap">
          <h1>Hi, i'm Luis Henrique</h1>
        
            <p class="line-1 anim-typewriter">Front-end Developer </p>
       
        </div>

        <div className="div-foto-ap">
          <img className="foto-ap" src={foto} alt="" width={350} />
        </div>
      </div>
  
    </div>
  );
}

export default Apresentacao;

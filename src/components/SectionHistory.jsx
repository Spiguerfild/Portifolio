import TopSections from './TopSections.jsx'
import './SectionHistory.css'


function SectionHistory() {
  return (
    <div id="Section-history-container">

      <TopSections title={`History`} />
      <div className='history'>


        <p>Minha historia com programação começou quando eu estava no ensino médio, entrei na equipe de robotica do colégio,
          nossa equipe era de aproximadamente 12 pessoas, e começamos a nos preparar para a FLL, <span>torneio de robótica</span>.
        </p>
        <p>
          o torneio é dividido em projeto de pesquisa, montagem e <span>programação do robô</span>, o meu papel na equipe era de realizar a programação
          do robô e foi ai que tive meus primeiros contatos e dores de cabeça com lógica de programação, o robô deveria ser capaz de realizar as missões que
          eram propostas na temporada, tive 2 anos de expêriencia com lógica de programação no programa LEGO Mindstorms, tive que aprender tudo do zero com vídeos e exemplos na
          internet, e claro <span>Muitos testes</span>.
        </p>
        <p>Após o ensino médio eu entrei na Faculdade de Análise e Desenvolvimento de Sistemas, onde estou ganhando conhecimento e desenvolvendo habilidades de
          programação/Desenvolvimento WEB.
        </p>
        <p>E desde então tenho me esforçado realizando Projetos principalmente com <span>Javascript | HTML | CSS</span>, também estou aprendendo a utilizar
          frameworks como <span>REACT</span>,
          Agora continuo construindo minha história no mundo da Tecnologia.
        </p>
      </div>
    </div>
  );
}

export default SectionHistory;

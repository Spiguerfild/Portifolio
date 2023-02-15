import TopSections from "./TopSections.jsx";
import "./SectionHistory.css";
import img_hi from "../img/scroll.png";

function SectionHistory() {
  return (
    <div id="Section-history-container">
      <TopSections title={`History`} />
      <div className="content-general-history">
        <div className="foto-png">
          <img src={img_hi} alt="" width={250} />
        </div>
        <div className="history">
          <p>

            My history with programming started when I was in high school,
            I joined the high school robotics team, our team was approximately 12 people,
            and we started to prepare for the FLL,<span> robotics tournament</span>.
          </p>
          <p>
            The tournament is divided into a research project, assembly and
            <span> robot programming</span>, my role in the team was to
            program the robot and that's when I had my first
            contacts and headaches with programming logic, the robot should
            be able to carry out the missions that were proposed in the season,
            I had 2 years of experience with programming logic through the program
            LEGO Mindstorms, I had to learn everything from scratch with videos and
            examples on the internet, and of course <span>Many tests</span>, I had the opportunity
            to experience
          </p>
          <p>
            After high school I entered the Faculty of Analysis and
            Systems Development, where I am gaining knowledge and
            developing programming skills (logic) / WEB Development.
          </p>
          <p>
          And since then I have been making an effort carrying out Projects mainly
            with <span>Javascript</span> | <span>HTML </span>|<span> CSS</span>, I'm also learning to
            use frameworks like <span>REACT</span>, Now I continue
            building my history in the world of Technology.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionHistory;

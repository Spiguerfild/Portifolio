import "./Navbar.css";

function Navbar() {
  return (
    <div id="navbar">
      <ul className="navbar-portifolio">
        <div className="title">
          <h1>
            Lui<span>s Hen</span>rique
          </h1>
        </div>

        <div className="links">
          <li>
            <a className="link-slide" href="#apresentacao">
              Home
            </a>
          </li>

          <li>
            <a className="link-slide" href="#Section-history-container">
              History
            </a>
          </li>

          <li>
            <a className="link-slide" href="#section-projects">
              Projects
            </a>
          </li>

          <li>
            <a className="link-slide" href="#contact-me">
              Contactme
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;

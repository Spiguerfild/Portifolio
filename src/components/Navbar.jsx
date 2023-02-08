import "./Navbar.css";

function Navbar() {
  return (
    <div id="navbar">
      
        <ul className="navbar-portifolio">
          <div className="title">
            <h1>
              Portifo<span>lio</span>
            </h1>
          </div>

          <div className="links">
            <li>
              <a className="link-slide" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="link-slide" href="#">
                Projetos
              </a>
            </li>
            <li>
              <a className="link-slide" href="#">
                Contato
              </a>
            </li>
            <li>
              <a className="link-slide" href="#">
                História
              </a>
            </li>
          </div>
        </ul>
      
    </div>
  );
}

export default Navbar;

import "./Navbar.css";

function Navbar() {
  return (
    <div id="navbar">
      <ul className="navbar-expand-lg navbar-portifolio">

        <div className="title">
          <h1>
            Portifo<span>lio</span>
          </h1>
             
        </div>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
       <div class="collapse navbar-collapse" id="navbarText">

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
        </div>
      </ul>
      
    </div>
  );
}

export default Navbar;

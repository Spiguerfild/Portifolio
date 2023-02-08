import "./Navbar.css";

function Navbar() {
  return (
    <div id="navbar">
      <header>
        <ul class="nav">

          <div>
           <h1>Portifo<span>l</span>io</h1>
              
            
          </div>

          <div className="links">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Projetos
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contato
              </a>
            </li>

          </div>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;

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
            <a className="link-slide" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="link-slide" href="#">
              Projects
            </a>
          </li>
          <li>
            <a className="link-slide" href="#">
              History
            </a>
          </li>
          <li>
            <a className="link-slide" href="#">
             
              Contactme
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;

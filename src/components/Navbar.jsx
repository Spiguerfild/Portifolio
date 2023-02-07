import "./Navbar.css";

function Navbar() {
  return (
    <div id="navbar">
      <header>
        <ul class="nav">

        <div>
          <a class="navbar-brand" href="#">
            Navbar
          </a>
        </div>

          <div className="links">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">
                Active
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </div>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;

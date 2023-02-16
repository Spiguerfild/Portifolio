import "./Navbar.css";

function Navbar() {
  return (
    <div id="navbar">
      <div class="container">


        <ul className="navbar-portifolio">
          <div class="row">
            <div className="col-3">
              <div className="title col-lg-3" >
                <h1>
                  Lui<span>s Hen</span>rique
                </h1>
              </div>
            </div>
            <div className="col-9">

              <div className="links">

                <li className="col-2">
                  <a className="link-slide" href="#apresentacao">
                    Home
                  </a>
                </li>

                <div className="col-2">
                  <li className="">
                    <a className="link-slide" href="#Section-history-container">
                      History
                    </a>
                  </li>
                </div>

                <li className="col-2">
                  <a className="link-slide" href="#section-projects">
                    Projects
                  </a>
                </li>
                <li className="col-2" >
                  <a className="link-slide" href="#contact-me">
                    Contactme
                  </a>
                </li>
              </div>
            </div>
          </div>
        </ul>
      </div>

    </div>
  );
}

export default Navbar;

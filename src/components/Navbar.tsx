import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -70; // Adjust this value according to your navbar height
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-white fixed-top">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="navbar-brand logo d-flex align-items-center">
            <span>
              <img src="/img/logo.png" alt="" className="img-fluid" />
            </span>
            <h1 onClick={() => navigate("/")}>Alpha</h1>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse nav-link-container"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <HashLink
                  smooth
                  to="/"
                  scroll={(el) => scrollWithOffset(el)}
                  className="nav-link"
                >
                  Home
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                  smooth
                  to="/about"
                  scroll={(el) => scrollWithOffset(el)}
                  className="nav-link"
                >
                  About
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                  smooth
                  to="/services"
                  scroll={(el) => scrollWithOffset(el)}
                  className="nav-link"
                >
                  Services
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                  smooth
                  to="/portfolio"
                  scroll={(el) => scrollWithOffset(el)}
                  className="nav-link"
                >
                  Portfolio
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                  smooth
                  to="/#contact"
                  scroll={(el) => scrollWithOffset(el)}
                  className="nav-link"
                >
                  Contact
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

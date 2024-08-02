import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {

  const Navigate = useNavigate();
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-white fixed-top">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="navbar-brand logo d-flex align-items-center">
            <span>
              <img src="./assets/img/logo.png" alt="" className="img-fluid" />
            </span>
            <h1 onClick={() => Navigate("/")}>Alpha</h1>
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
                <HashLink className="nav-link" aria-current="page" to="/#">
                  Home
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" to="/#about">
                  About
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" to="/#services">
                  Services
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" to="/portfolio">
                  Portfolio
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" to="/#testimonials">
                  Testimonials
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" to="/#contact">
                  Contact
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-social-links d-flex align-items-center">
          <a href="#" className="twitter">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" className="facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="linkedin">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

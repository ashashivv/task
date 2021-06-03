import React from "react";
import company from "../src/images/company.jpg";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <a className="navbar-brand" href="#">
            Company Name
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <a className="nav-link " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#">
                  Why Us
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#">
                  Gallery
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#">
                  Team
                </a>
              </li>
              <li className="nav-item dropdown me-3">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blog
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>

            <button className="btn btn-warning" type="submit">
              About Us
            </button>
          </div>
        </div>
      </nav>
      <div className="contact">
        <h3>Contact Us</h3>
        <h6>
          Home - Page - <span>Contact Us</span>
        </h6>
      </div>
    </>
  );
};

export default Navbar;

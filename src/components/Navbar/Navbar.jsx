import React, { Component } from "react";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg sticky-top">
          <div className="container">
            <a className="navbar-brand fw-bolder" href="?">
              START REACT
            </a>
            <button
              className="navbar-toggler display-flex align-items-center p-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu <i className="fa-solid fa-bars fa-sm"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
                <li>
                  <a
                    href="#portfolio"
                    className="nav-link active fw-bolder my-4  p-3"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#about" className="nav-link fw-bolder my-4 p-3">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="nav-link fw-bolder my-4 p-3">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

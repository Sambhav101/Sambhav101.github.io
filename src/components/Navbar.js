import React from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="navbar-container">
        <div className="hamburger-menu">
          <FaBars color="#fff" />
        </div>
        <div className="nav-wrapper">
          <div className="nav-item">
            <a href="#root">About</a>
          </div>
          <div className="nav-item">
            <a href="#">Resume</a>
          </div>
          <div className="nav-item">
            <a href="#project">Projects</a>
          </div>
          <div className="nav-item">
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaHome } from "react-icons/fa";

const BootstrapNavbar = () => {
  return (
    <div className="Bootstrap-Navbar">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#">
          <FaHome />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#project">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default BootstrapNavbar;

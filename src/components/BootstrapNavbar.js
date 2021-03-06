import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import PDF from "../documents/resume.pdf";

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
            <Nav.Link href="#root">About</Nav.Link>
            <Nav.Link href="#experience">Education</Nav.Link>
            <Nav.Link href="#project">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link className="resume-link" href={PDF} target="_blank">
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default BootstrapNavbar;

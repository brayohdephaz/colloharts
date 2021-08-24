import React from "react";
import "./navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "./logo.svg";

const NavbarComp = () => {
  return (
    <div>
      <Navbar bg="white" expand="lg">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          {/* React Bootstrap */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="container">
            <Nav className="me-auto">
              <Nav.Link className="navbar-items" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="navbar-items" href="#link">
                Portfolio
              </Nav.Link>
              <Nav.Link className="navbar-items" href="#link">
                Contacts
              </Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComp;

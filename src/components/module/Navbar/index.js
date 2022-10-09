import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";

import "./index.scss";

export default function NavbarComponent() {
  return (
    <div id="navbar">
      <Navbar bg="transparent" variant="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="nav-landing-page" />
          <Navbar.Collapse id="nav-landing-page">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="header" spy={true} duration={1500}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="about" spy={true} duration={1500}>
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="education" spy={true} duration={1500}>
                  Education
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="skills" spy={true} duration={1500} offset={-50}>
                  Skills
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="experience" spy={true} duration={1500} offset={100}>
                  Experience
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="project" spy={true} duration={1500}>
                  Projects
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

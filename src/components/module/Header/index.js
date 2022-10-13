import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import HeaderProfile from "../../../assets/img/header-profile.png";

import "./index.scss";

export default function Header() {
  return (
    <section id="header">
      <img
        src={HeaderProfile}
        alt="header-profile"
        id="header-profile"
        data-aos="fade-left"
      />

      <Container>
        <Row>
          <Col md={6} className="profile-col">
            <div data-aos="fade-right">
              <h1>Muhammad Alfi Gufron</h1>
              <h3>Software Engineer (Fullstack)</h3>
            </div>
          </Col>
          <Col md={6} className="img-col"></Col>
        </Row>
      </Container>
    </section>
  );
}

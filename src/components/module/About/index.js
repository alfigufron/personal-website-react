import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import AboutProfile from "../../../assets/img/about-profile.png";

import "./index.scss";

export default function About() {
  const socialMedia = [
    {
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=alfigufron21@gmail.com&body=Hi Gufron, I'am interested in your profile",
      icon: "ri-mail-fill",
    },
    {
      url: "https://t.me/fronnss",
      icon: "ri-telegram-fill",
    },
    {
      url: "https://www.linkedin.com/in/muhammad-alfi-gufron-6495b01a7/?originalSubdomain=id",
      icon: "ri-linkedin-box-fill",
    },
    {
      url: "https://github.com/alfigufron",
      icon: "ri-github-fill",
    },
    {
      url: "https://web.facebook.com/alfi.gufran.9/",
      icon: "ri-facebook-box-fill",
    },
    {
      url: "https://instagram.com/fronnss/",
      icon: "ri-instagram-line",
    },
  ];

  return (
    <section id="about">
      <Container>
        <Row>
          <Col md={6} className="image-col">
            <img
              src={AboutProfile}
              alt="about-profile"
              id="about-profile"
              data-aos="fade-up-right"
            />
          </Col>
          <Col md={6}>
            <div className="detail" data-aos="fade-up-left">
              <h6 className="text-muted">My Intro</h6>
              <h2>About Me</h2>
              <div className="biodata d-flex py-2">
                <div>
                  <h6>Name</h6>
                  <h6>Address</h6>
                  <h6>Email</h6>
                </div>
                <div className="ps-3">
                  <h6>: Muhammad Alfi Gufron</h6>
                  <h6>: Bogor, West Java, Indonesia</h6>
                  <h6>: alfigufron21@gmail.com</h6>
                </div>
              </div>
              <p className="text-muted">
                Very Interested in software development and graphic design since
                I was in high school. Always trying to learn from mistakes to
                improve myself and also learn something new to improve my
                skills. I like to learn on the job and am able to work well
                alone and with a team. I also like to spread the spirit of
                teamwork, able to work under pressure and on time for work.
              </p>

              <div className="mt-2 d-flex social-media">
                {socialMedia.map((data, index) => (
                  <a
                    key={index}
                    target="_blank"
                    href={data.url}
                    rel="noreferrer"
                  >
                    <i className={data.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

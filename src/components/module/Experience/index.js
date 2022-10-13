import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import "./index.scss";

export default function Experience() {
  const experiences = [
    {
      title: "Web Developer",
      type: "Internship",
      company: "PT Mitrasoft Global Perdana",
      date: {
        start_at: "January 2020",
        end_at: "April 2020",
      },
    },
    {
      title: "Full Stack Developer",
      type: "Part Time",
      company: "Trikerja Indonesia",
      date: {
        start_at: "May 2020",
        end_at: "November 2020",
      },
    },
    {
      title: "Front End Developer",
      type: "Part Time",
      company: "PT Mitrasoft Global Perdana",
      date: {
        start_at: "November 2020",
        end_at: "January 2021",
      },
    },
    {
      title: "Full Stack Engineer",
      type: "Full Time",
      company: "Garda Medica",
      date: {
        start_at: "May 2021",
        end_at: "July 2021",
      },
    },
    {
      title: "Full Stack Engineer",
      type: "Freelance",
      company: "Bogor, West Java, Indonesia",
      date: {
        start_at: "April 2020",
        end_at: "February 2022",
      },
    },
    {
      title: "Full Stack Engineer",
      type: "Part Time",
      company: "Altaflix Techno Global",
      date: {
        start_at: "June 2021",
        end_at: "July 2022",
      },
    },
    {
      title: "Full Stack Engineer",
      type: "Part Time",
      company: "Marva Cipta Indonesia",
      date: {
        start_at: "Aug 2021",
        end_at: "Sep 2022",
      },
    },
    {
      title: "Technical Lead",
      type: "Full Time",
      company: "Cariilmu.co.id",
      date: {
        start_at: "Oct 2021",
        end_at: "Present",
      },
    },
  ];

  return (
    <section id="experience">
      <Container className="min-vh-100 d-flex align-items-center">
        <div className="w-100">
          <div className="text-center" data-aos="fade-up">
            <h2 className="fw-bold">Experience</h2>
          </div>

          <div className="experience-list">
            <Row className="justify-content-center">
              {experiences.map((data, index) => (
                <Col key={index} md={6} className="experience">
                  <Card data-aos="zoom-out-down" data-aos-offset="300">
                    <Card.Body>
                      <h4 id="title">
                        {data.title} | {data.type}
                      </h4>

                      <h5 id="company">
                        <i className="ri-map-pin-fill"></i>
                        {data.company}
                      </h5>

                      <h5 id="date">
                        <i className="ri-calendar-todo-line"></i>
                        {data.date.start_at} - {data.date.end_at}
                      </h5>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
}

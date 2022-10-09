import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./index.scss";

export default function Education() {
  const educations = [
    {
      education: "Bachelor's Degree",
      school: "Pakuan University",
      major: "Computer Science",
      year: "2021 - 2025",
    },
    {
      education: "Vocational High School",
      school: "SMK Negeri 1 Cibinong",
      major: "Software Engineering",
      year: "2018 - 2021",
    },
    {
      education: "Junior High School",
      school: "SMP Puspanegara",
      year: "2016 - 2018",
    },
  ];

  const achievements = [
    {
      type: "champion",
      title: "2nd Place at LKS Kabupaten Bogor 2019 Web Technologies",
    },
    {
      type: "award",
      title:
        "Participant Coding Experience Bootcamp 2020 from Center for Digital Society (CfDS) Universitas Gadjah Mada",
    },
    {
      type: "award",
      title:
        "Participant Kamp Kreatif SMK Indonesia (KKSI) 2020 Artificial Intelligence (AI)",
    },
    {
      type: "award",
      title:
        "Semifinalist Hackathon Maritim 2021 Dinas Pembinaan Potensi Maritim Markas Besar Angkatan Laut",
    },
    {
      type: "award",
      title:
        "Software Development Associate Engineer Certification Badan Nasional Serifikasi Profesi",
    },
  ];

  return (
    <section id="education">
      <Container className="min-vh-100 d-flex align-items-center">
        <div className="w-100">
          <div className="text-center" data-aos="fade-up">
            <h2 className="fw-bold">Education</h2>
            <h6 className="text-muted">List of Education and Achievement</h6>
          </div>

          <Row className="mt-4">
            <Col md={6} className="list-education">
              <div className="start-education"></div>

              {educations.map((data, index) => (
                <div
                  key={index}
                  className={`${data.major ? "" : "without-major "}${
                    !index ? "first" : ""
                  } education`}
                >
                  <div data-aos="fade-up">
                    <h5 className="text-muted">{data.education}</h5>
                    <h3>{data.school}</h3>
                    {data.major ? (
                      <h5 className="major text-muted">{data.major}</h5>
                    ) : null}
                    <h6>{data.year}</h6>
                  </div>
                </div>
              ))}
            </Col>

            <Col md={6} className="achievements">
              <h5 className="title text-muted pb-3" data-aos="fade-left">
                <i className="ri-award-fill"></i>
                Achievements
              </h5>

              <ul className="list-achievement">
                {achievements.map((data, index) => (
                  <li key={index} data-aos="fade-left">
                    <h5>
                      {data.type === "champion" ? (
                        <i className="ri-trophy-line"></i>
                      ) : (
                        <i className="ri-medal-line"></i>
                      )}
                      {data.title}
                    </h5>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

import React from "react";
import { Container, ProgressBar, Row, Col, Badge } from "react-bootstrap";

import PhpIcon from "../../../assets/img/skills/php.png";
import LaravelIcon from "../../../assets/img/skills/laravel.png";
import JavascriptIcon from "../../../assets/img/skills/js.png";
import VueIcon from "../../../assets/img/skills/vuejs.png";
import NodeIcon from "../../../assets/img/skills/nodejs.png";
import ExpressIcon from "../../../assets/img/skills/expressjs.png";
import ReactIcon from "../../../assets/img/skills/reactjs.png";
import FlutterIcon from "../../../assets/img/skills/flutter.png";
import PythonIcon from "../../../assets/img/skills/python.png";
import FlaskIcon from "../../../assets/img/skills/flask.png";
import MysqlIcon from "../../../assets/img/skills/mysql.png";
import PostgreIcon from "../../../assets/img/skills/postgresql.png";
import SqlserverIcon from "../../../assets/img/skills/sqlserver.png";
import MongoIcon from "../../../assets/img/skills/mongodb.png";
import CssIcon from "../../../assets/img/skills/css.png";
import FigmaIcon from "../../../assets/img/skills/figma.png";
import SassIcon from "../../../assets/img/skills/sass.png";
import XdIcon from "../../../assets/img/skills/xd.png";
import PhotoshopIcon from "../../../assets/img/skills/photoshop.png";

import "./index.scss";

export default function Skill() {
  const skills = [
    {
      title: "Programming",
      list: [
        {
          icon: PhpIcon,
          value: 90,
        },
        {
          icon: LaravelIcon,
          value: 88,
        },
        {
          icon: JavascriptIcon,
          value: 88,
        },
        {
          icon: VueIcon,
          value: 85,
        },
        {
          icon: NodeIcon,
          value: 82,
        },
        {
          icon: ExpressIcon,
          value: 82,
        },
        {
          icon: ReactIcon,
          value: 80,
        },
        {
          icon: FlutterIcon,
          value: 70,
        },
        {
          icon: PythonIcon,
          value: 65,
        },
        {
          icon: FlaskIcon,
          value: 50,
        },
      ],
    },
    {
      title: "Database",
      list: [
        {
          icon: MysqlIcon,
          value: 80,
        },
        {
          icon: PostgreIcon,
          value: 60,
        },
        {
          icon: SqlserverIcon,
          value: 50,
        },
        {
          icon: MongoIcon,
          value: 40,
        },
      ],
    },
    {
      title: "Design",
      list: [
        {
          icon: CssIcon,
          value: 85,
        },
        {
          icon: SassIcon,
          value: 80,
        },
        {
          icon: FigmaIcon,
          value: 78,
        },
        {
          icon: PhotoshopIcon,
          value: 60,
        },
        {
          icon: XdIcon,
          value: 60,
        },
      ],
    },
    {
      title: "Addition",
      list: [
        {
          name: "ESLint",
          url: "https://eslint.org/",
        },
        {
          name: "Prettier",
          url: "https://prettier.io/",
        },
        {
          name: "Mocha",
          url: "https://mochajs.org/",
        },
        {
          name: "Vuex",
          url: "https://vuex.vuejs.org/",
        },
        {
          name: "React Redux",
          url: "https://react-redux.js.org/",
        },
        {
          name: "Flutter Provider",
          url: "https://pub.dev/packages/provider",
        },
        // {
        //   name: "Bootstrap",
        //   url: "https://getbootstrap.com/",
        // },
        // {
        //   name: "Tailwind CSS",
        //   url: "https://tailwindcss.com/",
        // },
      ],
    },
  ];

  return (
    <section id="skills">
      <Container className="min-vh-100 d-flex align-items-center">
        <div className="w-100">
          <div className="text-center" data-aos="fade-up">
            <h2 className="fw-bold">Skills</h2>
          </div>
          {skills.map((data, index) => (
            <div key={index} className="skill-group">
              <h5 className="title text-muted" data-aos="fade-up">
                {data.title}
              </h5>

              <Row
                className={
                  data.title === "Addition"
                    ? "d-flex justify-content-center"
                    : ""
                }
              >
                {data.title !== "Addition" ? (
                  data.list.map((skill, index) => (
                    <Col
                      key={index}
                      lg={6}
                      className="skill"
                      data-aos="fade-up"
                    >
                      <div className="detail-icon">
                        <img
                          src={skill.icon}
                          alt={`icon-${index++}`}
                          className="icon"
                        />
                      </div>

                      <ProgressBar striped now={skill.value} max={100} />
                    </Col>
                  ))
                ) : (
                  <Row className="justify-content-center">
                    {data.list.map((skill, index) => (
                      <Col
                        md={2}
                        key={index}
                        data-aos="fade-up"
                        className="text-center mt-4"
                      >
                        <a href={skill.url} target="_blank" rel="noreferrer">
                          <Badge bg="secondary" className="w-100 p-2">
                            <h5 className="mb-0">{skill.name}</h5>
                          </Badge>
                        </a>
                      </Col>
                    ))}
                  </Row>
                )}
              </Row>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

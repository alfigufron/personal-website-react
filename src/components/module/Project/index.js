import React from "react";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";

import ManagementIbaMobile from "../../../assets/img/project/management-iba-mobile.png";
import TechStore from "../../../assets/img/project/tech-store.png";
import Covid19 from "../../../assets/img/project/covid19-info.png";
import TrikerjaIndonesia from "../../../assets/img/project/trikerja.png";
import KedaiKopi from "../../../assets/img/project/coffe-shop.png";
import PilihYukApp from "../../../assets/img/project/pilih-yuk.png";
import IbaReport from "../../../assets/img/project/iba-report.png";
import DataCenter from "../../../assets/img/project/data-center.png";
import CtxAir from "../../../assets/img/project/ctx-shipping.png";
import VotingSmkCbn from "../../../assets/img/project/e-voting-smkn-1-cbn.png";
import ImporIkan from "../../../assets/img/project/impor-ikan.png";
import BelanjaIkan from "../../../assets/img/project/belanja-ikan.png";
import VotingApp from "../../../assets/img/project/e-voting.png";
import SimrsGarda from "../../../assets/img/project/simrs-garda.png";
import SimrsGardaMobile from "../../../assets/img/project/simrs-garda-mobile.png";
import EcifFtui2021 from "../../../assets/img/project/ecif-ui.png";
import Hyperloop from "../../../assets/img/project/hyperloop-edu-pro.png";
import ScpMobile from "../../../assets/img/project/scp-mobile.png";
import LmsCIWeb from "../../../assets/img/project/cariilmu-lms-web-app.png";
import DashboardCIWeb from "../../../assets/img/project/cariilmu-dashboard-web-app.png";

import "./index.scss";

export default function Project() {
  const projects = [
    {
      cover: DashboardCIWeb,
      name: "Cariilmu Dashboard Web App",
      description: "Website for Manage Prakerja Online Course",
      technologies: ["Express", "React", "MySQL"],
    },
    {
      cover: LmsCIWeb,
      name: "Cariilmu Web App",
      description:
        "High quality interactive and inspiring Prakerja Online Course",
      technologies: ["Express", "Next", "MySQL"],
    },
    {
      cover: ScpMobile,
      name: "Security Checkpoint",
      description:
        "Tracking System to help security checks in industrial environments",
      technologies: ["Express", "Kotlin", "MySQL"],
    },
    {
      cover: Hyperloop,
      name: "Hyperloop Edu Pro",
      description: "School Management Information System & E-Learning",
      technologies: ["Laravel 7", "React", "PostgreSQL"],
    },
    {
      cover: EcifFtui2021,
      name: "ECIF FTUI 2021",
      description:
        "University of Indonesia Faculty of Engineering Job Portal Site",
      technologies: ["Laravel 7", "MySQL"],
    },
    {
      cover: SimrsGardaMobile,
      name: "SIMRS Garda Mobile",
      description: "Mobile App Hospital Management Information System",
      technologies: ["Flutter", "Lumen", "MySQL", "PostgreSQL"],
    },
    {
      cover: SimrsGarda,
      name: "SIMRS Garda Web App",
      description: "Website Hospital Management Information System",
      technologies: ["Vue", "Lumen", "MySQL", "PostgreSQL"],
    },
    {
      cover: VotingApp,
      name: "E-Voting Web App",
      description: "Live, secure & transparent Online Voting",
      technologies: ["Express", "React", "MySQL", "SCSS"],
    },
    {
      cover: BelanjaIkan,
      name: "Belanja Ikan App",
      description: "Electronic market sells fish for UMKM",
      technologies: ["Express", "Vue", "SCSS", "Flutter", "MySQL"],
    },
    {
      cover: ImporIkan,
      name: "Impor Ikan App",
      description: "Buying and selling fish on a large scale",
      technologies: ["Laravel 7", "React", "SCSS", "MySQL"],
    },
    {
      cover: VotingSmkCbn,
      name: "E-Voting SMKN 1 Cibinong",
      description: "E-voting for the election of the student council president",
      technologies: ["Laravel 7", "MySQL"],
    },
    {
      cover: CtxAir,
      name: "CTX Air Cargo Shipping",
      description: "Shipping and tracking Air Cargo",
      technologies: ["HTML", "SCSS"],
    },
    {
      cover: DataCenter,
      name: "Data Center App",
      description: "SMKN 1 Cibinong Document Data Center",
      technologies: ["Laravel 7", "Vue", "SCSS", "MySQL"],
    },
    {
      cover: IbaReport,
      name: "IBA Report",
      description: "Web Application for Islamic Banking Reporting",
      technologies: ["Vue", "SCSS"],
    },
    {
      cover: PilihYukApp,
      name: "Pilih Yuk App",
      description: "Simultaneous and realtime voting application",
      technologies: ["Laravel 7", "Vue", "SCSS", "MySQL"],
    },
    {
      cover: KedaiKopi,
      name: "Kedai Kopi",
      description: "Coffee ordering website",
      technologies: ["Laravel 7", "MySQL"],
    },
    {
      cover: TrikerjaIndonesia,
      name: "Trikerja Indonesia",
      description:
        "Career education online course that provides learning and training",
      technologies: ["Laravel 7", "MySQL"],
    },
    {
      cover: Covid19,
      name: "Covid-19 Info",
      description: "Latest data information about covid 19",
      technologies: ["Vue", "SCSS"],
    },
    {
      cover: TechStore,
      name: "Tech Store",
      description: "Computer equipment online shop",
      technologies: ["Laravel 7", "MySQL"],
    },
    {
      cover: ManagementIbaMobile,
      name: "IBA Mobile Management",
      description: "Website for managing Islamic Banking Application Mobile",
      technologies: ["Python", "Flask", "SQL Server"],
    },
  ];

  return (
    <section id="project">
      <Container className="min-vh-100 d-flex align-items-center">
        <div className="w-100">
          <div className="text-center" data-aos="fade-up">
            <h2 className="fw-bold">Projects</h2>
          </div>

          <div className="project-list">
            <Row>
              {projects.map((data, index) => (
                <Col key={index} md={4} className="project">
                  <Card data-aos="zoom-up" data-aos-offset="500">
                    <Card.Img variant="top" src={data.cover} />
                    <Card.Body>
                      <h5 className="title">{data.name}</h5>
                      <span className="description text-muted">
                        {data.description}
                      </span>

                      <div className="technologies">
                        {data.technologies.map((technology, index) => (
                          <Badge key={index}>{technology}</Badge>
                        ))}
                      </div>
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

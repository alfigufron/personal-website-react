import React from "react";

import {
  Navbar,
  About,
  Education,
  Header,
  Skill,
  Experience,
  Project,
} from "../../../components";

import "./index.scss";

export default function LandingPage() {
  return (
    <div id="landing-page">
      <Navbar />
      <Header />
      <About />
      <Education />
      <Skill />
      <Experience />
      <Project />
    </div>
  );
}

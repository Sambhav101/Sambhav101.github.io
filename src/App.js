import React, { useState } from "react";

import "./App.css";
import Particles from "react-particles-js";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BootstrapNavbar from "./components/BootstrapNavbar";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <div class="main-page">
        <Particles
          params={{
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 900,
                },
              },
              color: {
                value: "#ffe123",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 4,
                  color: "#f3a5bc",
                },
              },
              opacity: {
                value: 0.5,
              },
              line_linked: {
                distance: 160,
                opacity: 0.2,
              },
              interactivity: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                detect_on: "window",
              },
            },
          }}
        />
        <BootstrapNavbar />
        <Header />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </Router>
  );
}

export default App;

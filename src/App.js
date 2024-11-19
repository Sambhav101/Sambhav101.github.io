import React, { useEffect, useState, useMemo } from "react";

import "./App.css";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull} from 'tsparticles';
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BootstrapNavbar from "./components/BootstrapNavbar";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          color: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 180,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: "circle"
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Router>
        <div class="main-page">
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
          />
          <BootstrapNavbar/>
          <Header/>
          <Education/>
          <Experience/>
          <Projects/>
          <Contact/>
        </div>
      </Router>
    );
  }
}

export default App;

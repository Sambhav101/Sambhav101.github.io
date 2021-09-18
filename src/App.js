import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BootstrapNavbar from "./components/BootstrapNavbar";
import Education from "./components/Education";

function App() {
  return (
    <div class="main-page">
      <BootstrapNavbar />
      <Header />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

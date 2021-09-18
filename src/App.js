import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BootstrapNavbar from "./components/BootstrapNavbar";
import Experience from "./components/Experience";

function App() {
  return (
    <div class="main-page">
      <BootstrapNavbar />
      <Header />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

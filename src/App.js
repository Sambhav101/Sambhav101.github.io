import React, { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BootstrapNavbar from "./components/BootstrapNavbar";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <BootstrapNavbar />
      <Header />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

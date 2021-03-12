import React, { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <Sidebar open={open} setOpen={setOpen} />
      <Header />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

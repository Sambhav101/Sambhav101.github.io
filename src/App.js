import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BootstrapNavbar from "./components/BootstrapNavbar";

function App() {
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

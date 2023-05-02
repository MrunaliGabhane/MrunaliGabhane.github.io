import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particlesOptions } from "./particlesConfig";
import { Button, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";
import Project from "./Components/Project/Project";
// import Static from "./Components/Static/Static";
import GitHub from "./Components/Github/Github";

import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import BackToTop from "./Components/Home/BacktoTop";

function App() {
     const particlesInit = (engine) => {
    loadFull(engine);
  };
  const { colorMode, toggleColorMode } = useColorMode();

  return (
      <div
          className="App"
          >
             <Particles init={particlesInit} options={particlesOptions} />
          <Navbar  />
          <Home  />
          <About  />
          <Skills  />
          <Project  />
          <GitHub  />
          <Contact  />
          <BackToTop />
          <Footer  />
      </div>
  );
}

export default App;

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

import "./App.css";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
         <Services/>
      <Portfolio />
      <Contact />
    
   
    </>
  );
}

export default App;

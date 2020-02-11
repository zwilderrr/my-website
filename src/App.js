import React from "react";
import "./App.css";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

const App = () => {
  return (
    <div className="app">
      <div className="header">
        <div className="name">Zack Wilder</div>
        <Contact />
      </div>

      <div className="tile-container">
        <div>
          <About />
          <Technologies />
        </div>
        <Experience />
      </div>
    </div>
  );
};

export default App;

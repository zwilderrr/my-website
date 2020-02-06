import React from "react";
import "./App.css";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

const App = () => {
  return (
    <div className="app">
      <div className="name">Zack Wilder</div>

      <Contact />

      <div className="tile-container">
        <div>
          <div className="left-row">
            <About />
            <Technologies />
          </div>
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default App;

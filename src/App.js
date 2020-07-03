import React from "react";
import "./App.css";
import About from "./components/About";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <div className="content-container fade-in">
          <div className="left">
            <div className="about tile">
              <About />
            </div>
            <div className="education tile">
              <Education />
            </div>
          </div>
          <div className="right">
            <div className="experience tile">
              <Experience />
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Contact />
      </div>
    </>
  );
}

export default App;

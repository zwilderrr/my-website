import React from "react";
import { tech } from "../info/tech";
import "./Technologies.css";

const Technologies = () => {
  return (
    <div className="tile technologies">
      <div className="tile-title">Tech</div>
      <div className="tile-header">Languages</div>
      <div className="languages">
        {tech.languages.map((tech, i) => (
          <div key={i}>{tech}</div>
        ))}
      </div>
      <div className="tile-header">Frameworks & Libraries</div>
      <div className="languages">
        {tech.frameworks.map((tech, i) => (
          <div key={i}>{tech}</div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;

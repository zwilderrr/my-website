import React from "react";
import { experience } from "../info/experience";
import "./Experience.css";

const Experience = () => (
  <div className="tile experience">
    <div className="tile-title">Selected Experience</div>
    {experience.map((item, i) => (
      <div key={i} className="spacer-one">
        <div className="tile-header">
          {item.title} @ {item.company} ({item.location}) | {item.from} -{" "}
          {item.to}
        </div>
        <div>{item.summary}</div>
        <div className="">{item.tech}</div>
        <div className="">
          {item.description.map((line, i) => (
            <div key={i}>- {line}</div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Experience;

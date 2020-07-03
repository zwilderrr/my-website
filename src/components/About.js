import React from "react";
import { aboutMe } from "../info/aboutMe";
import { tech } from "../info/tech";
import { interests } from "../info/interests";
import "./About.css";

const About = () => (
  <div>
    <div className="section-title" style={{ color: "tomato" }}>
      About me
    </div>
    <div>{aboutMe}</div>

    <br />

    <div className="section-title section-heading">
      Languages, Frameworks & Libraries
    </div>
    <div className="two-col">
      <div>
        {tech.languages.map(tech => (
          <div>{tech}</div>
        ))}
      </div>
      <div>
        {tech.frameworks.map(tech => (
          <div>{tech}</div>
        ))}
      </div>
    </div>

    <br />

    <div className="section-title section-heading">Interests</div>
    <div className="two-col">
      <div>
        {interests.left.map(interest => (
          <div>{interest}</div>
        ))}
      </div>
      <div>
        {interests.right.map(interest => (
          <div>{interest}</div>
        ))}
      </div>
    </div>
  </div>
);

export default About;

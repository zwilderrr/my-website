import React from "react";
import { aboutMe } from "../info/aboutMe";
import { education } from "../info/education";
import { interests } from "../info/interests";
import "./About.css";

const About = () => (
  <div className="tile about">
    <div className="tile-title">About me</div>
    <div>{aboutMe}</div>
    <br />
    <div className="tile-header">Interests</div>
    <div>
      {interests.map((interest, i) => (
        <div key={i}>{interest}</div>
      ))}
    </div>
    <br />
    <div className="tile-header">Education</div>
    {education.map((item, i) => (
      <div key={i}>
        <div className="">{item.school}</div>
        <div>
          {item.location} ({item.dates})
        </div>
        <div className="">{item.description}</div>
        <br />
      </div>
    ))}
  </div>
);

export default About;

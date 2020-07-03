import React from "react";
import { education } from "../info/education";
import "./Education.css";

function Education() {
  return (
    <>
      <div className="section-title" style={{ color: "powderblue" }}>
        Education
      </div>
      {education.map(edu => (
        <div className="block">
          <div>
            <span className="bold">{edu.school}</span>
            <span> ({edu.location})</span>
          </div>
          <div>{edu.dates}</div>
          <div className="italic">{edu.description}</div>
        </div>
      ))}
    </>
  );
}

export default Education;

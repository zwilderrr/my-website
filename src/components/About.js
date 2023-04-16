import "./About.css";

import React from "react";
import { aboutMe } from "../info/aboutMe";
import { interests } from "../info/interests";
import { tech } from "../info/tech";

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
				{tech.languages.map((tech, i) => (
					<div key={i}>{tech}</div>
				))}
			</div>
			<div>
				{tech.frameworks.map((tech, i) => (
					<div key={i}>{tech}</div>
				))}
			</div>
		</div>

		<br />

		<div className="section-title section-heading">Interests</div>
		<div className="two-col">
			<div>
				{interests.left.map((interest, i) => (
					<div key={i}>{interest}</div>
				))}
			</div>
			<div>
				{interests.right.map((interest, i) => (
					<div key={i}>{interest}</div>
				))}
			</div>
		</div>
	</div>
);

export default About;

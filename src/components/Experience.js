import React from "react";
import { experience } from "../info/experience";
import { portfolio } from "../info/portfolio";
import "./Experience.css";

const Experience = () => (
	<div>
		<div className="section-title" style={{ color: "yellowgreen" }}>
			Experience
		</div>
		{experience.map((item, i) => (
			<div className="block" key={i}>
				<div>
					<span className="bold">
						{item.title} @ {item.company}
					</span>{" "}
					<span>
						({item.location}) | {item.from} {item.to && `- ${item.to}`}
					</span>
				</div>
				<div>{item.summary}</div>
				<div className="italic">{item.tech}</div>
				<ul>
					{item.description.map((line, i) => (
						<li key={i} className="description">
							{line}
						</li>
					))}
				</ul>
			</div>
		))}
		<div className="projects-heading">Projects</div>
		{portfolio.map((item, i) => (
			<div className="block" key={i}>
				<div>
					<span className="bold">{item.title}</span>
				</div>
				<div>{item.tagline}</div>
				<div className="italic">{item.website}</div>
				<ul>
					{item.description.map((line, i) => (
						<li key={i} className="description">
							{line}
						</li>
					))}
				</ul>
			</div>
		))}
	</div>
);

export default Experience;

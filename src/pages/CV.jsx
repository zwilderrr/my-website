import "./CV.css";

import About from "../components/About";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";

export function CV() {
	return (
		<>
			<div className="cv-wrapper">
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
			<div>
				<Contact />
			</div>
		</>
	);
}

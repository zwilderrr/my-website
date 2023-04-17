import "./CV.css";

import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";

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

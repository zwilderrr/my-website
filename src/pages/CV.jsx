import "./CV.css";

import About from "../components/About";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";
import { useNavigate } from "react-router";

export function CV() {
	const navigate = useNavigate();
	return (
		<>
			<div className="cv-wrapper">
				<div className="left">
					<div className="about tile hoverable" onClick={() => navigate("/")}>
						<About />
					</div>
					<div
						className="education tile hoverable"
						onClick={() => navigate("/")}
					>
						<Education />
					</div>
				</div>
				<div className="right hoverable" onClick={() => navigate("/")}>
					<div
						className="experience tile hoverable"
						onClick={() => navigate("/")}
					>
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

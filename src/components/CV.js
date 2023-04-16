import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Header from "./Header";
import { useLocation } from "react-router";

export function CV() {
	const location = useLocation();
	const animateHeader = location?.state !== "fromHome";

	return (
		<>
			<div className="app-container">
				<Header animate={animateHeader} />
				<div
					className="content-container"
					style={animateHeader ? {} : { opacity: 1, animation: "none" }}
				>
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
			</div>
			<div className="footer">
				<Contact />
			</div>
		</>
	);
}

import "./Header.css";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Header({ animate = true }) {
	if (animate) {
		return (
			<>
				<div className="name">
					<div>
						<Typewriter
							words={["", "Zack Wilder"]}
							typeSpeed={80}
							delaySpeed={300}
						/>
					</div>
					<div className="title">
						<Typewriter
							words={["", "software engineer"]}
							delaySpeed={1600}
							typeSpeed={50}
						/>
					</div>
					<div className="title orange">
						<Typewriter words={["", "", "."]} delaySpeed={1400} />
					</div>
				</div>
			</>
		);
	}

	return (
		<>
			<div className="name">
				<div>
					<span>Zack Wilder</span>
				</div>
				<div className="title">
					<span>software engineer</span>
				</div>
				<div className="title orange">
					<span>.</span>
				</div>
			</div>
		</>
	);
}

export default Header;

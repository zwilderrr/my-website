import "./Header.css";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Header() {
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
					<Typewriter words={["", "", "."]} delaySpeed={1500} />
				</div>
			</div>
		</>
	);
}

export default Header;

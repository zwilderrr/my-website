import React from "react";
import "./Header.css";
import Typist from "react-typist";

const engineer = ;

function Header() {
	return (
		<>
			<div className="header">
				<Typist
					cursor={{
						show: true,
						element: <span className="name">&nbsp;</span>,
					}}
					avgTypingDelay={100}
				>
					<Typist.Delay ms={500} />
					<span className="name">Zack Wilder</span>
				</Typist>

				<Typist
					cursor={{
						show: true,
						element: <span className="text">&nbsp;</span>,
					}}
					avgTypingDelay={50}
				>
					<Typist.Delay ms={2000} />
					<span className="text">software engineer</span>
					<Typist.Delay ms={1000} />
					<span className="text" style={{ color: "tomato" }}>
						.
					</span>
				</Typist>
			</div>
		</>
	);
}

export default Header;

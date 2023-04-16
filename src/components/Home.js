import "./Home.css";

import Header from "./Header";
import { useNavigate } from "react-router-dom";

export function Home() {
	const navigate = useNavigate();

	return (
		<div className="app-container">
			<Header />
			<div className="home fade-in">
				<div className="card-wrapper">
					<div
						onClick={() => navigate("/cv", { state: "fromHome" })}
						className="card"
					>
						<div className="card-content">CV</div>
					</div>

					<div
						onClick={() =>
							window.open(
								"https://blobstars.io",
								"_blank",
								"noopener,noreferrer"
							)
						}
						className="card blobstars"
					>
						<div className="card-content">BlobStarsNFT</div>
					</div>

					<div
						onClick={() =>
							window.open(
								"https://foundation.app/collection/nonart",
								"_blank",
								"noopener,noreferrer"
							)
						}
						className="card"
					>
						<div className="card-content">nonart (soon)</div>
					</div>
				</div>
			</div>
		</div>
	);
}

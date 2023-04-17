import "./Home.css";

import { ExternalLinkIcon } from "../assets/ExternalLinkIcon";
import { useNavigate } from "react-router-dom";

export function Home() {
	const navigate = useNavigate();

	return (
		<div className="home">
			<div className="card-wrapper">
				<div onClick={() => navigate("/cv")} className="card">
					<div className="card-content">CV</div>
				</div>

				<div
					onClick={() =>
						window.open("https://blobstars.io", "_blank", "noopener,noreferrer")
					}
					className="card blobstars"
					style={{ position: "relative" }}
				>
					<ExternalLinkIcon />
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
					className="card nonart"
					style={{ position: "relative" }}
				>
					<ExternalLinkIcon />
					<div className="card-content">nonart (soon)</div>
				</div>
			</div>
		</div>
	);
}

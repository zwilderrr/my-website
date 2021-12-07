import React from "react";
import "./Contact.css";

function Contact() {
	return (
		<div className="contact">
			<div>
				<a
					href="https://linkedin.com/in/zwilder"
					target="_blank"
					rel="noopener noreferrer"
				>
					linkedIn
				</a>
			</div>
			<div>
				<a
					href="https://github.com/zwilderrr"
					target="_blank"
					rel="noopener noreferrer"
				>
					github
				</a>
			</div>
			{/* <div>
        <a
          href="https://medium.com/@zackwilder"
          target="_blank"
          rel="noopener noreferrer"
        >
          medium
        </a>
      </div> */}
			{/* <div>
      <a
        href="mailto:hi@zackwilder.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        > email
      </a>
    </div> */}
		</div>
	);
}

export default Contact;

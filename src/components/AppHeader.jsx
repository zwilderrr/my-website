import "./Header.css";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

function AppHeader() {
  return (
    <div className="name" onClick={() => (window.location.href = "/")}>
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
      <div className="title blue">
        <Typewriter words={["", "", "."]} delaySpeed={1400} />
      </div>
    </div>
  );
}

export default AppHeader;

import "./App.css";

import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { CV } from "./components/CV";
import { Home } from "./components/Home";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/cv" element={<CV />} />
		</Routes>
	);
}

export default App;

import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { CV } from "./components/CV";
import Header from "./components/Header";
import { Home } from "./components/Home";

function App() {
	return (
		<div className="app-container">
			<Header />
			<div className="content-container">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/cv" element={<CV />} />
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;

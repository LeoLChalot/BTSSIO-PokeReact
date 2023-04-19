import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Bestiaire from "./Components/Bestiaire/Bestiaire";
import Pokedex from "./Components/Pokedex/Pokedex";
import NoPage from './Components/NoPage/NoPage'

function App() {
	return (
		<div className="App">
			<div>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<Home />} />
              <Route path="/bestiaire" element={<Bestiaire />} />
              <Route path="/pokedex" element={<Pokedex />} />
							<Route path="*" element={<NoPage />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;

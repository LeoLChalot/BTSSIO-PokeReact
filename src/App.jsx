import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Bestiaire from "./Components/Bestiaire/Bestiaire";
import Pokedex from "./Components/Pokedex/Pokedex";
import NoPage from "./Components/NoPage/NoPage";
import Pokesearch from "./Components/PokeSearch/PokeSearch";
import "./App.css";

function App() {
	return (
		<>
		{/* { console.log(localStorage) } */}
			<div className="App">
				<div>
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<Layout />}>
								<Route index element={<Home />} />
								<Route path="/bestiaire" element={<Bestiaire />} />
								<Route path="/pokedex" element={<Pokedex />} />
								<Route path="/pokesearch" element={<Pokesearch />} />
								<Route path="*" element={<NoPage />} />
							</Route>
						</Routes>
					</BrowserRouter>
				</div>
			</div>
		</>
	);
}

export default App;

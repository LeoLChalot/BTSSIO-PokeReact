import { useState, useEffect } from "react";
import "./Bestiaire.css";
import axios from "axios";

export default function Home() {
	let [pokeArray, setPokeArray] = useState([]);

	useEffect(() => {
		async function displayPokemon() {
			try {
				axios
					.get("https://pokeapi.co/api/v2/ability/?limit=20&offset=20")
					.then((res) => console.log(res))
					.catch((e) => console.log(e));
			} catch {
				(e) => console.log(e);
			}
		}
        displayPokemon();
	}, []);

	return (
		<>
			<div className="Bestiaire-container">
				<h1>Bestiaire</h1>
			</div>
		</>
	);
}

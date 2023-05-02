import "./Pokedex.css";
import { useEffect, useState } from "react";
import Miniature from "../PokeMiniature/Miniature";

export default function Home() {
	const [pokedex, setPokedex] = useState([]);

	useEffect(() => {
		let pokedexList = JSON.parse(localStorage.getItem("pokedex")) || [];
		setPokedex(pokedexList);
		console.log(pokedex);
	}, []);

	return (
		<>
			<div className="pokedex-main">
				<h1>Pokédex</h1>
				<div className="pokedex-container">
					{pokedex.map((pokemon) => {
						return (
							<>
								<Miniature
									id={pokemon.numPoke}
									name={pokemon.name}
									type={pokemon.type}
									sprite={pokemon.sprite}
									btn="delete"
								/>
							</>
						);
					})}
				</div>
			</div>
		</>
	);
}

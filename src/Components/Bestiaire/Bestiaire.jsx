import { useState, useEffect } from "react";
import "./Bestiaire.css";
import axios from "axios";


export default function Home() {
	let [pokeArray, setPokeArray] = useState([]);
	let offset = 0;
	let limit = 20;

	useEffect(() => {
		async function displayPokemon(offset, limit) {
			try {
				axios
					.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
					.then((res) => {
						let data = res.data;
						console.log(data);
						console.log(pokeArray);
						let results = data.results;
						results.map((pokemon) => {
							return(
								<>
									<div className="pokeCard">
										{ pokemon }
									</div>
								</>
							)
						});
						console.log(pokeArray)
					})
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
				<div className="Pokemons-container">
				{pokeArray.map((pokemon) => {
					<div className="Pokemon-card">
						<p>{ pokemon.name }</p>
					</div>
				})}
				</div>
				
			</div>
		</>
	);
}

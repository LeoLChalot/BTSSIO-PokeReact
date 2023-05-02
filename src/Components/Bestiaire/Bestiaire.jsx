import { useState, useEffect } from "react";
import "./Bestiaire.css";
import axios, { all } from "axios";
import { v4 as uuidv4 } from "uuid";
import Miniature from "../PokeMiniature/Miniature";

export default function Home() {
	let [allPokemon, setAllPokemon] = useState([]);
	let [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20");
	let [urlPlus, setUrlPlus] = useState("");
	let [urlMoins, setUrlMoins] = useState("");
	let urlLast = "https://pokeapi.co/api/v2/pokemon?offset=1261&limit=1";
	let pokedex = [];

	useEffect(() => {
		displayPokemon(url);
	}, []);

	async function displayPokemon(url, sort) {
		try {
			// ? On récupère la liste de l'ensemble des pokémons (limit et offset à utiliser pour la pagination)
			axios
				.get(url)
				.then((res) => {
					console.log(res);
					const data = res.data;
					const results = data.results;
					console.log(results);
					results.sort(function compare(a, b) {
						if (a.name < b.name) return -1;
						if (a.name > b.name) return 1;
						return 0;
					});

					setUrlPlus((urlMoins) => data.next);
					if (data.previous != undefined) {
						setUrlMoins((urlPlus) => data.previous);
					}

					// ? Pour chaque résultat, on récupère les informations (Object) pour chaque pokémon
					results.map(async (pokemon) => {
						try {
							axios.get(pokemon.url).then((pokeData) => {
								let pokemonInfo = pokeData.data;
								setAllPokemon((allPokemon) => [...allPokemon, pokemonInfo]);
							});
						} catch {
							(e) => console.log(e);
						}
					});
				})

				.catch((e) => console.log(e));
		} catch {
			(e) => console.log(e);
		}
	}
	function pageFirst() {
		setAllPokemon((allPokemon) => []);
		displayPokemon(url);
	}
	function pageLast() {
		setAllPokemon((allPokemon) => []);
		displayPokemon(urlLast);
	}
	function pagePlus() {
		setAllPokemon((allPokemon) => []);
		displayPokemon(urlPlus);
	}
	function pageMoins() {
		setAllPokemon((allPokemon) => []);
		if (urlMoins != undefined) {
			displayPokemon(urlMoins);
		}
	}
	function addToPokedex(pokemon) {
		console.log(pokemon);
	}

	return (
		<>
			<main>
				<div className="pokemon-container">
					{allPokemon.map((pokemon) => {
						return (
							<>
								<Miniature
									id={pokemon.id}
									name={pokemon.name}
									type={pokemon.types[0].type.name}
									sprite={pokemon.sprites.front_default}
									btn="add"
								/>
							</>
						);
					})}
				</div>
				<div className="pagination">
					<button id="pagination-moins" onClick={pageMoins}>
						⬅️
					</button>
					<button id="pagination-first" onClick={pageFirst}>
						⏮️
					</button>
					<button id="pagination-last" onClick={pageLast}>
						⏭️
					</button>
					<button id="pagination-plus" onClick={pagePlus}>
						➡️
					</button>
				</div>
			</main>
		</>
	);
}

// export default pokedex;

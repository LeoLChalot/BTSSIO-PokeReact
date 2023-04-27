import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Bestiaire.css";
import axios from "axios";
import {v4 as uuidv4} from 'uuid'

export default function Home() {
	let [allPokemon, setAllPokemon] = useState([]);
	let [urlPlus, setUrlPlus] = useState('');
	let [urlMoins, setUrlMoins] = useState('');
	let limit = 20;
	let offset = 20;
	const max = 1281;
	let url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"


	useEffect(() => {displayPokemon(url)}, []);

	async function displayPokemon(url) {
		try {
			// ? On récupère la liste de l'ensemble des pokémons (limit et offset à utiliser pour la pagination)
			axios
				.get(url)
				.then((res) => {
					console.log(res)
					const data = res.data;
					const results = data.results;
					setUrlPlus(urlMoins => data.next)
					// urlPlus = data.next;
					setUrlPlus(urlPlus => data.previous)
					// urlMoins = data.previous;
					console.log(urlPlus, urlMoins)

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
	console.log(urlPlus, urlMoins)

	function pagePlus(){
		// console.log(urlPlus)
		setAllPokemon(allPokemon => [])
		displayPokemon(urlPlus);
	}
	function pageMoins(){
		setAllPokemon(allPokemon => [])
		displayPokemon(urlMoins);
	}

	// console.log(allPokemon)

	return (
		<>
			<main>
				<div className="title">
					<h2>Pokémons</h2>
				</div>
				<div className="pokemon-container">
					{allPokemon.map((pokemon) => {
						return (
							<>
								<div key={uuidv4()}className="poke-card">
									<p>{pokemon.name}</p>
									<img src={pokemon.sprites.front_default} alt="image du pokémon" />
									<div className="btn-container">
										<button className="btn-info">Info</button>
										<button className="btn-add">Add</button>
									</div>
								</div>
							</>
						);
					})}
				</div>
				<div className="pagination">
					<button id="pagination-moins" onClick={pageMoins}>⬅️</button>
					<button id="pagination-plus" onClick={pagePlus}>➡️</button>
				</div>
			</main>
		</>
	);
}

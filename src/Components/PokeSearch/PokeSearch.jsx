import "./PokeSearch.css";
import { useState } from "react";
import Pokecard from "../Pokecard/Pokecard";
import pokeball from "../../assets/pokeball.png";
import axios from "axios";

export default function PokeSearch() {
	const [pokemon, setPokemon] = useState("clefairy");
	const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
	const [pokeObj, setPokeObj] = useState({
		id: 0,
		name: "--",
		type: "--",
		hp: 0,
		attack: 0,
		defense: 0,
		height: 0,
		weight: 0,
		image: pokeball,
	});

	async function displayPokemon(url) {
		console.log(url);
		try {
			axios
				.get(url)
				.then((res) => {
					console.log(2);
					let pokemon = res.data;
					// console.log(pokemon);
					// console.log(pokemon.sprites.other.dream_world.front_default);
					setPokeObj((pokeObj) => ({
						id: pokemon.id,
						name: pokemon.name,
						type: pokemon.types[0].type,
						hp: pokemon.stats[0].base_stat,
						attack: pokemon.stats[1].base_stat,
						defense: pokemon.stats[2].base_stat,
						height: pokemon.height,
						weight: pokemon.weight,
						image: pokemon.sprites.other.dream_world.front_default,
					}));
				})
				.catch((e) => console.log(e));
		} catch {
			(e) => console.log(e);
		}
		console.log(3);
	}

	function handleSubmit(e) {
		// Prevent the browser from reloading the page
		e.preventDefault();
		// Read the form data
		const form = e.target;
		const formData = new FormData(form);
		const formJson = Object.fromEntries(formData.entries());
		// console.log(formJson.pokemon);
		setPokemon(formJson.pokemon);
		setUrl(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
		displayPokemon(url);
	}

	return (
		<>
			<div className="poke-form">
				<form onSubmit={handleSubmit}>
					<input type="text" name="pokemon" id="pokemon" placeholder="Pokemon..." />
					<input type="submit" value="Chercher" />
				</form>
			</div>
			<div className="poke-container">
				<Pokecard
					id={pokeObj.id}
					name={pokeObj.name}
					type={pokeObj.type.name}
					hp={pokeObj.hp}
					attack={pokeObj.attack}
					defense={pokeObj.defense}
					height={pokeObj.height}
					weight={pokeObj.weight}
					image={pokeObj.image}
				/>
			</div>
		</>
	);
}

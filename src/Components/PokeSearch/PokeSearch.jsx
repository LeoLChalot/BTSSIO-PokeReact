import "./PokeSearch.css";
import { useState } from "react";
import Pokecard from "../Pokecard/Pokecard";
import pokeball from "../../assets/pokeball.png";
import axios from "axios";

export default function PokeSearch() {
	const [pokemon, setPokemon] = useState("");
	const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/`);
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
		setUrl("https://pokeapi.co/api/v2/pokemon/" + pokemon);
		// console.log("Url func displayPokemon : ", url);
		try {
			axios
				.get(url)
				.then((res) => {
					// console.log(2);
					let pokemon = res.data;
					console.log(pokemon);
					let id = pokemon.id;
					let name = pokemon.name;
					let type = pokemon.types[0].type;
					let hp = pokemon.stats[0].base_stat;
					let attack = pokemon.stats[1].base_stat;
					let defense = pokemon.stats[2].base_stat;
					let height = pokemon.height;
					let weight = pokemon.weight;
					let image = pokemon.sprites.other.dream_world.front_default;
					setPokeObj((pokeObj) => ({
						// ...pokeObj,
						id: id,
						name: name,
						type: type,
						hp: hp,
						attack: attack,
						defense: defense,
						height: height,
						weight: weight,
						image: image,
					}));
					// console.log(3);
				})
				.catch((e) => console.log(e));
		} catch {
			(e) => console.log(e);
		}
		// console.log(4);
	}

	function handleSubmit(e) {
		// console.log(1);
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		const formJson = Object.fromEntries(formData.entries());
		let pokemonName = formJson.pokemon;
		pokemonName = pokemonName.toLowerCase();

		setPokemon(pokemonName);
		setUrl("https://pokeapi.co/api/v2/pokemon/" + pokemon);
		// console.log("Url func handleSubmit : ", url);
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

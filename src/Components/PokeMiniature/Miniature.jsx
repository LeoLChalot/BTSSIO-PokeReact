import "./Miniature.css";
import { v4 as uuidv4 } from "uuid";
import pokeball from "../../assets/pokeball.png";
import { useState } from "react";

export default function Miniature({ id, name, type, sprite, btn }) {

	let pokedex = JSON.parse(localStorage.getItem("pokedex")) || [];
	console.log(pokedex);

	function handleDelete() {
		pokedex = pokedex.filter((pokemon) => pokemon.name !== name)
		
	}

	function handleAdd() {
		pokedex.push({
			id: uuidv4(),
			numPoke: id,
			name: name,
			type: type,
			sprite: sprite,
		});
		localStorage.setItem("pokedex", JSON.stringify(pokedex));
		console.log(pokedex);
	}

	return (
		<>
			<div key={uuidv4()} className="poke-card" type={type}>
				<img className="img-pokemon" src={sprite} alt="image du pokémon" />
				<p>{name}</p>
				<div className="btn-container">
					{btn == "add" && <img onClick={handleAdd} className="btn-add" src={pokeball} alt="" />}
					{btn == "delete" && <button onClick={handleDelete}>Delete</button>}
				</div>
			</div>
		</>
	);
}

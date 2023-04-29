import "./PokeSearch.css";
import { useState } from "react";
import Pokecard from "../Pokecard/Pokecard";
import viteLogo from "../../../public/vite.svg";
import axios from "axios";

export default function PokeSearch() {
	const [pokemon, setPokemon] = useState("clefairy");
	const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
	const [id, setId] = useState([]);
	const [name, setName] = useState([]);
	const [type, setType] = useState([]);
	const [hp, setHp] = useState([]);
	const [attack, setAttack] = useState([]);
	const [defense, setDefense] = useState([]);
	const [weight, setWeight] = useState([]);
	const [height, setHeight] = useState([]);
	const [image, setimage] = useState([]);

	async function displayPokemon(url) {
		// console.log(1);
		console.log(url);
		try {
			axios
				.get(url)
				.then((res) => {
					console.log(2);
					// console.log(res);
					let data = res.data;
					console.log(data);
					setId(data.id);
					setName(data.name);
					setType(data.types[0].type);
					setHp(data.stats[0].base_stat);
					setAttack(data.stats[1].base_stat);
					setDefense(data.stats[2].base_stat);
					setHeight(data.height);
					setWeight(data.weight);
					setimage(data.sprites.front_default);
                    console.log(data.stats[1].base_stat)
                    console.log(id, name, type, hp, attack, defense, height, weight, image);
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
        // return (
        //     <Pokecard
        //         id={id}
        //         name={name}
        //         type={type}
        //         hp={hp}
        //         attack={attack}
        //         defense={defense}
        //         height={height}
        //         weight={weight}
        //         image={image}
        //     />
        // )
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
            {id != '' && <Pokecard
                id={id}
                name={name}
                type={type}
                hp={hp}
                attack={attack}
                defense={defense}
                height={height}
                weight={weight}
                image={image}
            />}
            
            </div>
			{/* <Pokecard
				id={1}
				name="Roucoups"
				type="normal"
				hp={40}
				attack={50}
				defense={30}
				height={35}
				weight={15}
				image={viteLogo}
			/> */}
		</>
	);
}

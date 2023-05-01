import "./Miniature.css";
import { v4 as uuidv4 } from "uuid";
import pokeball from '../../assets/pokeball.png'

export default function Miniature({ id, name, type, sprite}) {
	return (
		<>
			<div key={uuidv4()} className="poke-card" type={type}>
				<img className="img-pokemon" src={sprite} alt="image du pokémon" />
				<p>{name}</p>
				<div className="btn-container">
					{/* <button className="btn-info">Info</button> */}
						<img className="btn-add" src={pokeball} alt="" />
				</div>
			</div>
		</>
	);
}

import "./Miniature.css";
import { v4 as uuidv4 } from "uuid";

export default function Miniature({ id, name, type, sprite}) {
	return (
		<>
			<div key={uuidv4()} className="poke-card" type={type}>
				<img src={sprite} alt="image du pokémon" />
				<p>{name}</p>
				<div className="btn-container">
					<button className="btn-info">Info</button>
					<button className="btn-add" onClick={() => {console.log(id)}}>add</button>
				</div>
			</div>
		</>
	);
}

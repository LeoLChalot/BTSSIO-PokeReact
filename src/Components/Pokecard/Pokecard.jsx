import "./Pokecard.css";
import pokeball from "../../assets/pokeball.png";
export default function Pokecard({ id, name, type, hp, attack, defense, height, weight, image }) {

	weight = weight * 0.45;

	return (
		<>
			<main className="pokecard-body">
				<div className="pokecard">
					<div className="image">
						<img className="logo-big" src={image} alt="image pokemon" />
					</div>
					<div className="stats-container">
						<div className="poke-id">
							<img className="logo-small" src={image} alt="image pokemon" height="45" />
							<p>No. {id}</p>
							<p>{name}</p>
							<img className="pokeball" src={pokeball} alt="pokeball" />
						</div>
						<div className="poke-physics">
							<table className="physics">
								<tbody>
									<tr>
										<td>Type</td>
										<td>{type}</td>
									</tr>
									<tr>
										<td>Height</td>
										<td>{height}0 cm</td>
									</tr>
									<tr>
										<td>Weight</td>
										<td>{weight} kg</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="poke-fight">
							<table className="fight">
								<tbody>
									<tr>
										<td>Hp</td>
										<td>{hp}</td>
									</tr>
									<tr>
										<td>Attack</td>
										<td>{attack}</td>
									</tr>
									<tr>
										<td>Defense</td>
										<td>{defense}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

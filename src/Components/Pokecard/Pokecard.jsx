import "./Pokecard.css";

export default function Pokecard({ id, name, type, hp, attack, defense, height, weight, image }) {
	return (
		<>
			<main className="pokecard-body">
				<div className="pokecard">
					<div className="image">
						<img className="logo-big" src={image} alt="img roucool" />
					</div>
					<div className="stats-container">
						<div className="poke-id">
							<img className="logo-small" src={image} alt="roucool" height="45" />
							<p>No. {id}</p>
							<p>{name}</p>
							<img className="pokeball" src={image} alt="pokeball" />
						</div>
						<div className="poke-physics">
							<table className="physics">
								<tr>
									<td>Type</td>
									<td>{type}</td>
								</tr>
								<tr>
									<td>Height</td>
									<td>{height}</td>
								</tr>
								<tr>
									<td>Weight</td>
									<td>{weight}</td>
								</tr>
							</table>
						</div>
						<div className="poke-fight">
							<table className="fight">
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
							</table>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

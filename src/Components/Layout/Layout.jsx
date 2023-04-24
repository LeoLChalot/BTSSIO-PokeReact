import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import logo from "../../assets/logo.png";
import React, { useEffect } from "react";

export default function Layout() {
	useEffect(() => toggleAside(), []);

	function toggleAside() {
		let btnPoke = document.querySelector(".btn-aside-ext");
		let asideMenu = document.querySelector(".Aside-menu");
		console.log("1");
		btnPoke.classList.toggle("active");
		asideMenu.classList.toggle("active");
	}

	return (
		<>
			<header>
				<nav className="Navbar">
					<div className="logo">
						<img src={logo} alt="logo pokémon" />
					</div>
					<ul>
						<li>
							<Link to="/bestiaire">Bestaire</Link>
						</li>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/pokedex">Pokédex</Link>
						</li>
					</ul>
				</nav>
				<div className="btn-aside-ext" onClick={() => toggleAside()}>
					<div className="btn-aside-line">
						<div className="btn-aside-in">
							<div className="btn-black-point"></div>
						</div>
					</div>
				</div>
				<aside className="Aside-menu">
					<div className="logo">
						<img src={logo} alt="logo pokémon" />
					</div>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/bestiaire">Bestaire</Link>
						</li>
						<li>
							<Link to="/pokedex">Pokédex</Link>
						</li>
					</ul>
				</aside>
			</header>
			<Outlet />
		</>
	);
}

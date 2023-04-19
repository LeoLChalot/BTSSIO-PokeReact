import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import React, { useEffect } from "react";

export default function Layout() {
    let btnPoke = document.querySelector(".btn-aside-ext");
    let asideMenu = document.querySelector(".Aside-menu");

    useEffect(() => toggleAside(), [])

	function toggleAside() {
		console.log("1");
		btnPoke.classList.toggle("active");
		asideMenu.classList.toggle("active");
	}

	return (
		<>
			<header>
				<nav className="Navbar">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/bestiaire">Béstaire</Link>
						</li>
						<li>
							<Link to="/pokedex">Pokédex</Link>
						</li>
					</ul>
				</nav>
				{/* onClick={toggleAside()} */}
				<div className="btn-aside-ext" onClick={() => toggleAside()}>
					<div className="btn-aside-line">
						<div className="btn-aside-in">
							<div className="btn-black-point"></div>
						</div>
					</div>
				</div>
				<aside className="Aside-menu">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/bestiaire">Béstaire</Link>
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

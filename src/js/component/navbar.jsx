import React from "react";
import { NavLink } from "react-router-dom";

//style sheet

import "../../styles/navbar.scss";

//navBar

export class Navbar extends React.Component {
	render() {
		return (
<<<<<<< HEAD
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<a class="navbar-brand" href="#">
					Navbar
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon" />
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav">
						<li class="nav-item active">
							<a class="nav-link" href="#">
								Home <span class="sr-only">(current)</span>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								Features
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								Pricing
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link disabled" href="#">
								Disabled
							</a>
						</li>
					</ul>
				</div>
=======
			<nav className="navbar navbar-expand-sm navbar-light bg-light">
				<ul className="navbar-nav">
					<li className="nav-item">
						<NavLink
							exact
							to="/"
							className="header-item"
							activeClassName="active">
							Home
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							to="/cart"
							className="header-item"
							activeClassName="active">
							Cart
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							to="/product"
							className="header-item"
							activeClassName="active">
							Products
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							to="/"
							className="header-item"
							activeClassName="active">
							Blog
						</NavLink>
					</li>
				</ul>
>>>>>>> f5889d341d8f66404eebee42605b01870534d667
			</nav>
		);
	}
}

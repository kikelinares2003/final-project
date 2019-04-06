import React from "react";
import { NavLink } from "react-router-dom";

//style sheet

import "../../styles/navbar.scss";

//navBar

export class Navbar extends React.Component {
	render() {
		return (
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
							to="/product-list"
							className="header-item"
							activeClassName="active">
							Products
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							to="/blog"
							className="header-item"
							activeClassName="active">
							Blog
						</NavLink>
					</li>
				</ul>
			</nav>
		);
	}
}

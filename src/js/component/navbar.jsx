import React from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

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
<<<<<<< HEAD
							Cart (3)
=======
							Cart (
							<Context.Consumer>
								{({ store, actions }) => {
									return <a>{actions.ItemsInCart()}</a>;
								}}
							</Context.Consumer>
							)
>>>>>>> 9c06cde6a6396959a8ce6205c1a0b9d98a88407a
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
					<li className="nav-item">
						<NavLink
							exact
							to="/product"
							className="header-item"
							activeClassName="active">
							Product Page
						</NavLink>
					</li>
				</ul>
			</nav>
		);
	}
}

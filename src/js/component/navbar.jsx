import React from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

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
							Cart <i className="fas fa-cart-plus" />{" "}
							<Context.Consumer>
								{({ store, actions }) => {
									return actions.ItemsInCart();
								}}
							</Context.Consumer>{" "}
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
						<Context.Consumer>
							{({ store, actions }) => {
								if (store.session.isLoggedIn) {
									return (
										<NavLink
											exact
											to="/login"
											onClick={e => {
												actions.handleSignOut();
											}}
											className="header-item"
											activeClassName="active">
											Log Out{" "}
											<i className="fas fa-sign-in-alt" />
										</NavLink>
									);
								} else {
									return (
										<NavLink
											exact
											to="/login"
											className="header-item"
											activeClassName="active">
											Login{" "}
											<i className="fas fa-sign-in-alt" />
										</NavLink>
									);
								}
							}}
						</Context.Consumer>
					</li>
				</ul>
			</nav>
		);
	}
}

Navbar.propTypes = {
	history: PropTypes.object
};

import React from "react";
import { Link } from "react-router-dom";
import { Home } from "./src/js/views/landing.jsx";
import { Cart } from "./src/js/views/cart.jsx";
import { Blog } from "./src/js/views/blog.jsx";
import { Product } from "./src/js/views/product.jsx";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="#">
					Navbar
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link" href={Home}>
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href={Blog}>
								Blog
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href={Cart}>
								Cart
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href={Product}>
								Product
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

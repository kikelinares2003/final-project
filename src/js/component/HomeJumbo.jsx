//create your first component
import React from "react";

//include images into your bundle
//need cool image of auto parts!
import homeHero from "../../img/home-hero.png";

const HomeJumbo = () => {
	return (
		<div className="jumbotron home-jumbo">
			<div className="container">
				<h1 className="display-4">Computer Solutions</h1>
				<p className="lead">IT Products Technology Solutions</p>
				<hr className="my-4" />
				<p />
				<a
					className="btn btn-primary btn-lg"
					href="product-list.jsx"
					role="button">
					Go Shopping
				</a>
			</div>
		</div>
	);
};

export default HomeJumbo;

//create your first component
import React from "react";

//include images into your bundle
//need cool image of auto parts!
import blackWhiteBridge from "../../img/b-w-bridge.jpg";

const HomeJumbo = () => {
	return (
		<div className="jumbotron">
			<h1 className="display-4">Pasco Auto Parts</h1>
			<p className="lead">
				We are a leading provider of after market performance auto parts
			</p>
			<hr className="my-4" />
			<p>
				It uses utility classNamees for typography and spacing to space
				content out within the larger container.
			</p>
			<a
				className="btn btn-primary btn-lg"
				href="product-list.jsx"
				role="button">
				Go Shopping
			</a>
		</div>
	);
};

export default HomeJumbo;

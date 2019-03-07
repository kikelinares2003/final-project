import React from "react";
import { Link } from "react-router-dom";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class Product extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<img src={rigoImage} />
			</div>
		);
	}
}

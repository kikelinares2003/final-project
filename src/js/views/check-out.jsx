import React from "react";
import { Link } from "react-router-dom";

import CheckOutCart from "../component/co-cart.jsx";
import CheckOutForm from "../component/co-form.jsx";

//import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class CheckOut extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<CheckOutCart />
					<CheckOutForm />
				</div>
			</div>
		);
	}
}

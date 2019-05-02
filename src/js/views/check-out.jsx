import React from "react";
import { Link } from "react-router-dom";

import { CheckOutCart } from "../component/co-cart.jsx";
import { CheckOutForm } from "../component/co-form.jsx";
import PropTypes from "prop-types";

import "../../styles/z-sitewide.css";

export class CheckOut extends React.Component {
	render() {
		return (
			<div className="container mt-4">
				<div className="row">
					<CheckOutCart />
					<CheckOutForm />
				</div>
			</div>
		);
	}
}

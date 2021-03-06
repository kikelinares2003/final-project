import React from "react";
import { Link } from "react-router-dom";

import HomeJumbo from "../component/HomeJumbo.jsx";
import { Specials } from "../component/Specials.jsx";
import { ShopCategory } from "../component/ShopCategory.jsx";
import ContactSection from "../component/ContactSection.jsx";

import "../../styles/z-sitewide.css";

export class Home extends React.Component {
	render() {
		return (
			<div>
				<HomeJumbo />
				<Specials />
				<ShopCategory />
			</div>
		);
	}
}

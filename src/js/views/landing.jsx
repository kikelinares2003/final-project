import React from "react";
import { Link } from "react-router-dom";

import HeroView from "../component/HeroView.jsx";
import Sections from "../component/Sections.jsx";
import ContactSection from "../component/ContactSection.jsx";

//import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class Landing extends React.Component {
	render() {
		return (
			<div>
				<HeroView />
				<Sections />
				<ContactSection />
			</div>
		);
	}
}

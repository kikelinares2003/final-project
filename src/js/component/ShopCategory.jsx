//create your first component
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

//include images into your bundle
//import capeImg from "../../img/cape_inView.jpg";

export class ShopCategory extends React.Component {
	render() {
		return (
			<React.Fragment>
				<hr className="p-3" />

				<div className="container">
					<h3>Shop by Category</h3>
					<div className="row d-flex justify-content-between my-1">
						<Link
							to="/by-category/Wheels"
							className="wheels col border border-secondary rounded d-flex flex-column justify-content-center mx-1">
							<div className="text-center">
								<h5 className="p-2">Wheels</h5>
							</div>
						</Link>
						<Link
							to="/by-category/Ignition"
							className="ignition col border border-secondary rounded d-flex flex-column justify-content-center mx-1">
							<div className="text-center">
								<h5 className="p-2">Ignition</h5>
							</div>
						</Link>
						<Link
							to="/by-category/Engines"
							className="engines col border border-secondary rounded d-flex flex-column justify-content-center mx-1">
							<div className="text-center">
								<h5 className="p-2">Engines</h5>
							</div>
						</Link>
					</div>

					<div className="row d-flex justify-content-between my-1">
						<Link
							to="/by-category/Cooling"
							className="cooling col border border-secondary rounded d-flex flex-column justify-content-center mx-1">
							<div className="text-center">
								<h5 className="p-2">Cooling</h5>
							</div>
						</Link>
						<Link
							to="/by-category/Fuel"
							className="fuel col border border-secondary rounded d-flex flex-column justify-content-center mx-1">
							<div className="text-center">
								<h5 className="p-2">Fuel</h5>
							</div>
						</Link>
						<Link
							to="/by-category/Safety"
							className="safety col border border-secondary rounded d-flex flex-column justify-content-center mx-1">
							<div className="text-center">
								<h5 className="p-2">Safety</h5>
							</div>
						</Link>
						<Link
							to="/by-category/Brakes"
							className="brakes col border border-secondary rounded d-flex flex-column justify-content-center mx-1">
							<div className="text-center">
								<h5 className="p-2">Brakes</h5>
							</div>
						</Link>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

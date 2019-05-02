//create your first component
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

//include images into your bundle
//import capeImg from "../../img/cape_inView.jpg";

export class ShopCategory extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="container shopCategory pb-2">
					<h3>Shop by Category</h3>
					<hr />
					<div className="row d-flex justify-content-between my-1">
						<Link
							to={"/by-category/Servers"}
							className="wheels col border border-secondary rounded d-flex flex-column justify-content-center mx-1">
							<div className="text-center align middle">
								Servers
							</div>
						</Link>
						<Link
							to="/by-category/Printers&Scanners"
							className="ignition col border border-secondary rounded d-flex flex-column justify-content-center mx-1">
							<div className="text-center align middle">
								Printers and Scanners
							</div>
						</Link>
						<Link
							to="/by-category/Networking"
							className="engines col border border-secondary rounded d-flex flex-column justify-content-center mx-1">
							<div className="text-center align middle">
								Networking
							</div>
						</Link>
					</div>

					<div className="row d-flex justify-content-between my-1">
						<Link
							to="/by-category/Cooling"
							className="cooling col border border-secondary rounded d-flex flex-column justify-content-center mx-1">
							<div className="text-center align middle">
								Memory
							</div>
						</Link>
						<Link
							to="/by-category/Storage"
							className="safety col border border-secondary rounded d-flex flex-column justify-content-center mx-1">
							<div className="text-center align middle">
								Storage
							</div>
						</Link>
						<Link
							to="/by-category/Projectors"
							className="brakes col border border-secondary rounded d-flex flex-column justify-content-center mx-1">
							<div className="text-center align middle">
								Projectors
							</div>
						</Link>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

ShopCategory.propTypes = {
	match: PropTypes.object
};

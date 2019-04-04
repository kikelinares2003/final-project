//create your first component
import React from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

//include images into your bundle
//import capeImg from "../../img/cape_inView.jpg";

export class Specials extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="container">
					<div className="row">
						<div className="card col-4 specialsCard">
							<img src="..." className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Special Name 1</h5>
								<p className="card-text">
									These are the super special details. These
									are the super special details. These are the
									super special details. These are the super
									special details.{" "}
								</p>
								<a href="#" className="btn btn-primary">
									Save Money!
								</a>
							</div>
						</div>
						<div className="card col-4 specialsCard">
							<img src="..." className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Special Name 1</h5>
								<p className="card-text">
									These are the super special details. These
									are the super special details. These are the
									super special details. These are the super
									special details.{" "}
								</p>
								<a href="#" className="btn btn-primary">
									Save Money!
								</a>
							</div>
						</div>
						<div className="card col-4 specialsCard">
							<img src="..." className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Special Name 1</h5>
								<p className="card-text">
									These are the super special details. These
									are the super special details. These are the
									super special details. These are the super
									special details.{" "}
								</p>
								<a href="#" className="btn btn-primary">
									Save Money!
								</a>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

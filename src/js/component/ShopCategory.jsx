//create your first component
import React from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

//include images into your bundle
//import capeImg from "../../img/cape_inView.jpg";

export class ShopCategory extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="container">
					<div className="row p-3">
						<div className="card col-2">
							<img src="..." className="card-img-top" alt="..." />
							<div className="card-body">
								<p className="card-text">
									{
										"Some quick example text to build on the card title and make up the bulk of the card's content."
									}
								</p>
							</div>
						</div>
						<div className="card col-2">
							<img src="..." className="card-img-top" alt="..." />
							<div className="card-body">
								<p className="card-text">
									{
										"Some quick example text to build on the card title and make up the bulk of the card's content."
									}
								</p>
							</div>
						</div>
						<div className="card col-2">
							<img src="..." className="card-img-top" alt="..." />
							<div className="card-body">
								<p className="card-text">
									{
										"Some quick example text to build on the card title and make up the bulk of the card's content."
									}
								</p>
							</div>
						</div>
						<div className="card col-2">
							<img src="..." className="card-img-top" alt="..." />
							<div className="card-body">
								<p className="card-text">
									{
										"Some quick example text to build on the card title and make up the bulk of the card's content."
									}
								</p>
							</div>
						</div>
						<div className="card col-2">
							<img src="..." className="card-img-top" alt="..." />
							<div className="card-body">
								<p className="card-text">
									{
										"Some quick example text to build on the card title and make up the bulk of the card's content."
									}
								</p>
							</div>
						</div>
						<div className="card col-2">
							<img src="..." className="card-img-top" alt="..." />
							<div className="card-body">
								<p className="card-text">
									{
										"Some quick example text to build on the card title and make up the bulk of the card's content."
									}
								</p>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

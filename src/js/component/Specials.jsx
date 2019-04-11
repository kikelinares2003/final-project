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
					<div className="row p-3">
						<Context.Consumer>
							{({ store, actions }) => {
								return store.specials.map((prod, i) => {
									return (
										<div
											className="card col-4 specialsCard"
											key={prod.ID}>
											<img
												src={prod.image_1}
												className="card-img-top"
												alt="..."
											/>
											<div className="card-body">
												<h5 className="card-title">
													{prod.post_title}
												</h5>
												<p className="card-text">
													These are the super special
													details. These are the super
													special details. These are
													the super special details.
													These are the super special
													details.{" "}
												</p>
												<a
													href="#"
													className="btn btn-primary">
													Save Money!
												</a>
											</div>
										</div>
									);
								});
							}}
						</Context.Consumer>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

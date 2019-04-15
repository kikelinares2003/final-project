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
				<div className="container">
					<div className="row p-3">
						<Context.Consumer>
							{({ store, actions }) => {
								return store.products.map((prod, i) => {
									return (
										<div
											className="card col categoryCard"
											key={prod.ID}>
											<img
												src={prod.image_1}
												className="card-img-top img-fluid"
												alt="..."
											/>
											<div className="card-body">
												<h5 className="card-title">
													{prod.category}
												</h5>
												<hr />
												<Link
													// onClick={e=>actions.}
													to={
														"/product/" +
														prod.category
													}
													className="btn card-link">
													Shop Category
												</Link>
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

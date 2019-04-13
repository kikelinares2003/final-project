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
						{({ store }) => {
							return store.products.map((prod, i) => {
								return (
									<div className="card col-2" key={prod.ID}>
										<img
											src="..."
											className="card-img-top"
											alt="..."
										/>
										<div className="card-body">
											<h5 className="card-text">
												{prod.category}
											</h5>
										</div>
									</div>
								);
							});
						}}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

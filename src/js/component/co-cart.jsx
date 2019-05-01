//create your first component
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import { Form } from "react";

//include images into your bundle
//import capeImg from "../../img/cape_inView.jpg";

export class CheckOutCart extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="col-md-4 order-md-2 mb-4">
					<h4 className="d-flex justify-content-between align-items-center mb-3">
						<span className="text-muted">Your cart</span>
						<span className="badge badge-secondary badge-pill">
							3
						</span>
					</h4>
					<Context.Consumer>
						<ul className="list-group mb-3">
							{({ store, actions }) => {
								return store.cartStore.map((item, index) => {
									return (
										<React.Fragment key={index}>
											<li
												className="list-group-item d-flex justify-content-between lh-condensed"
												key={index}>
												<div>
													<h6 className="my-0">
														{item.post_title}
													</h6>
												</div>
												<span className="text-muted">
													{item.post_title}
												</span>
											</li>
											<li className="list-group-item d-flex justify-content-between">
												<span>Total (USD)</span>
												<strong>$20</strong>
											</li>
										</React.Fragment>
									);
								});
							}}
						</ul>
					</Context.Consumer>
					<form className="card p-2">
						<div className="input-group">
							<input
								type="text"
								className="form-control"
								placeholder="Promo code"
							/>
							<div className="input-group-append">
								<button
									type="submit"
									className="btn btn-secondary">
									Redeem
								</button>
							</div>
						</div>
					</form>
				</div>
			</React.Fragment>
		);
	}
}

//export default CheckOutCart;

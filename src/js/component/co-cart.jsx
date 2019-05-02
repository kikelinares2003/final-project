//create your first component
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import { Form } from "react";

//include images into your bundle
//import capeImg from "../../img/cape_inView.jpg";

export class CheckOutCart extends React.Component {
	constructor(props) {
		super(props);
		this.state = { total: 0 };
	}
	render() {
		return (
			<React.Fragment>
				<div className="col-md-4 order-md-2 mb-4">
					<h4 className="d-flex justify-content-between align-items-center mb-3">
						<span className="text-muted">Your cart</span>
						<span className="badge badge-secondary badge-pill">
							<Context.Consumer>
								{({ store, actions }) => {
									return actions.ItemsInCart();
								}}
							</Context.Consumer>{" "}
						</span>
					</h4>
					<hr />
					<ul className="list-group mb-3">
						<Context.Consumer>
							{({ store, actions }) => {
								return store.cartStore.map((item, index) => {
									return (
										<React.Fragment key={item.product.ID}>
											<li className="list-group-item d-flex justify-content-between lh-condensed">
												<div>
													<h6 className="my-0">
														{
															item.product
																.product_name
														}
													</h6>
												</div>
												<span className="text-muted">
													{item.product.price}
												</span>
											</li>
										</React.Fragment>
									);
								});
							}}
						</Context.Consumer>
						<Context.Consumer>
							{({ store, actions }) => {
								return (
									<li className="list-group-item d-flex justify-content-between">
										<span>Total (USD)</span>
										<strong>
											{actions.totalPrice(
												store.cartStore
											)}
										</strong>
									</li>
								);
							}}
						</Context.Consumer>
					</ul>

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

export default CheckOutCart;

import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.jsx";

import "../../styles/demo.css";

export class Cart extends React.Component {
	constructor(props) {
		super(props);
		this.state = { total: 0 };
	}
	render() {
		return (
			<div className="container mt-5 mb-5">
				<div className="card shopping-cart">
					<div className="card-header bg-primary text-light float-right ">
						<span>
							<i
								className="fa fa-shopping-cart"
								aria-hidden="true"
								// margin-
							/>
						</span>
						<Link
							id="bttnCtxt"
							to={"/product-list/"}
							className="btn btn-outline-info btn-sm pull-right text-white bg-success">
							Continue shopping
						</Link>
						<div /*className="clearfix"*/ />
					</div>
					<div className="cart-body">
						<Context.Consumer>
							{({ store, actions }) => {
								return store.cartStore.map((item, index) => {
									return (
										<div key={item.product.ID}>
											<div className="row mt-1 mb-1">
												<div className="col-12 col-sm-12 col-md-2 text-center">
													<img
														className="img-responsive"
														src={
															item.product.image
																.url
														}
														alt="prewiew"
														width="120"
														height="80"
													/>
												</div>
												<div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
													<h4 className="product-name">
														<strong>
															<Link
																to={
																	"/product/" +
																	item.ID
																}>
																{
																	item.product
																		.product_name
																}
															</Link>
														</strong>
													</h4>
													<h4>
														<small>
															{
																item.product
																	.short_desc
															}
														</small>
													</h4>
												</div>
												<div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
													<div
														className="col-3 col-sm-3 col-md-6 text-md-right"
														style={{
															paddingTop: "5px"
														}}>
														<h6>
															$
															<strong>
																{
																	item.product
																		.price
																}{" "}
																<span className="text-muted">
																	x
																</span>
															</strong>
														</h6>
													</div>
													<div className="col-4 col-sm-4 col-md-4">
														<div className="quantity">
															<input
																onChange={e => {
																	e.preventDefault();
																	actions.setQty(
																		e,
																		index
																	);
																}}
																type="number"
																step="1"
																max="99"
																min="1"
																value={item.qty}
																title="Qty"
																className="qty"
																size="6"
															/>
														</div>
													</div>
													<div className="col-2 col-sm-2 col-md-2 text-right">
														<button
															onClick={() => {
																actions.deleteFromCart(
																	index
																);
															}}
															type="button"
															className="btn btn-outline-danger btn-xs">
															<i
																className="fa fa-trash"
																aria-hidden="true"
															/>
														</button>
													</div>
												</div>
											</div>
											<hr />
										</div>
									);
								});
							}}
						</Context.Consumer>
						<div className="pull-right float-right mr-2">
							<Context.Consumer>
								{({ store, actions }) => {
									return (
										<div key={store.products.ID}>
											<button
												onClick={() => {
													this.setState({
														total: actions.totalPrice(
															store.cartStore
														)
													});
												}}
												id="updateCart"
												className="btn btn-outline-secondary pull-right mt-2">
												Update shopping cart
											</button>
										</div>
									);
								}}
							</Context.Consumer>
						</div>
					</div>
					<div className="card-footer">
						{/*<div className="coupon col-md-5 col-sm-5 no-padding-left pull-left">
							<div className="row">
								<div className="col-6">
									<input
										type="text"
										className="form-control"
										placeholder="cupon code"
									/>
								</div>
								<div className="col-6">
									<input
										type="submit"
										className="btn btn-default"
										value="Use cupon"
									/>
								</div>
							</div>
						</div>*/}
						<div className="pull-right" style={{ margin: "10px" }}>
							<a
								href={"/check-out"}
								className="btn btn-success pull-right">
								Checkout
							</a>
							<div
								className="pull-right"
								style={{ margin: "5px" }}>
								Total price:$ <b>{this.state.total}</b>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

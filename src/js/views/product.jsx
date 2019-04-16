import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
//import Carousel from "react-bootstrap/Carousel";
//import Navbar from "../component/navbar.jsx";
//import Footer from "./src/js/component/functional/footer.jsx";
import "../../styles/product.scss";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

const footerStyle = {
	position: "absolute",
	bottom: "0",
	left: "0"
};

export class Product extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					let product = store.products.filter((item, index) => {
						if (item.ID == this.props.match.params.theid) {
							return item;
						}
					});

					return (
						<div className="mt-5 mb-5">
							<div className="container-fluid">
								<div className="row">
									<div className="col-md-5">
										<div
											id="carouselExampleControls"
											className="carousel slide"
											data-ride="carousel">
											<div className="carousel-inner">
												<div className="carousel-item active">
													<img
														src={product[0].image_1}
														className="d-block w-100"
														alt="..."
													/>
													<div className="carousel-item">
														<img
															src={
																product[0]
																	.image_2
															}
															className="d-block w-100"
															alt="..."
														/>
													</div>
												</div>
											</div>
											<a
												className="carousel-control-prev"
												href="#carouselExampleControls"
												role="button"
												data-slide="prev">
												<span
													className="carousel-control-prev-icon"
													aria-hidden="true"
												/>
												<span className="sr-only">
													Previous
												</span>
											</a>
											<a
												className="carousel-control-next"
												href="#carouselExampleControls"
												role="button"
												data-slide="next">
												<span
													className="carousel-control-next-icon"
													aria-hidden="true"
												/>
												<span className="sr-only">
													Next
												</span>
											</a>
										</div>
									</div>
									<div className="col-md-7">
										<p className="new-product">NEW</p>
										<h2>{product[0].post_title}</h2>
										<p>
											Product ID:{" "}
											{product[0].meta_keys.prod_id}{" "}
										</p>
										<hr />
										<div className="product-rating">
											<i className="fa fa-star gold" />{" "}
											<i className="fa fa-star gold" />{" "}
											<i className="fa fa-star gold" />{" "}
											<i className="fa fa-star gold" />{" "}
											<i className="fa fa-star-o" />{" "}
										</div>
										<p className="price">
											{" "}
											<b>USD </b>
											{product[0].meta_keys.price}
										</p>
										<hr />
										<p>
											<b>Description: </b>{" "}
											{product[0].meta_keys.prod_desc}
										</p>
										<hr />
										<div className="btn-group cart">
											<button
												onClick={() => {
													actions.addToCart(
														product[0]
													);
												}}
												type="button"
												className="btn btn-success mt-5">
												Add to cart
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

Product.propTypes = {
	match: PropTypes.object
};

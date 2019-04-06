import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

//import Navbar from "../component/navbar.jsx";
//import Footer from "./src/js/component/functional/footer.jsx";
import "../../styles/product.scss";

export class Products extends React.Component {
	render() {
		return (
			<div className="container mt-5 mb-5">
				<div className="row">
					<div className="col-md-5">
						<div
							id="carouselExampleControls"
							className="carousel slide"
							data-ride="carousel">
							<div className="carousel-inner">
								<div className="carousel-item active">
									<img
										src="https://via.placeholder.com/20"
										className="d-block w-100"
										alt="..."
									/>
									<div className="carousel-item">
										<img
											src="https://via.placeholder.com/50"
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
								<span className="sr-only">Previous</span>
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
								<span className="sr-only">Next</span>
							</a>
						</div>
					</div>
					<div className="col-md-5">
						<p className="new-product">NEW</p>
						<h2>Product Name</h2>
						<p>SKU: Product SKU</p>
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
							$150.00
						</p>
						<p>
							<b>Availability: </b> Available
						</p>
						<div>
							<label>Quantity: </label>
							<input type="text" value="1" />
						</div>
						<div className="btn-group cart">
							<button
								type="button"
								className="btn btn-success mt-5">
								Add to cart
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

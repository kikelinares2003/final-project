import React from "react";
import { Link } from "react-router-dom";

//import Navbar from "../component/navbar.jsx";
//import Footer from "./src/js/component/functional/footer.jsx";
import "../../styles/product.scss";

export class Product extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-3">
						<h1>here goes the product image</h1>
					</div>
					<div className="col-sm-9" />
					<div className="content-wrapper">
						<div className="item-container">
							<div className="container">
								<div className="col-md-12">
									<div className="product col-md-3 service-image-left">
										<center>
											<img
												id="item-display"
												src="http://www.corsair.com/Media/catalog/product/g/s/gs600_psu_sideview_blue_2.png"
												alt=""
											/>
										</center>
									</div>

									<div className="container service1-items col-sm-2 col-md-2 pull-left">
										<center>
											<a
												id="item-1"
												className="service1-item">
												<img
													src="http://www.corsair.com/Media/catalog/product/g/s/gs600_psu_sideview_blue_2.png"
													alt=""
												/>
											</a>
											<a
												id="item-2"
												className="service1-item">
												<img
													src="http://www.corsair.com/Media/catalog/product/g/s/gs600_psu_sideview_blue_2.png"
													alt=""
												/>
											</a>
											<a
												id="item-3"
												className="service1-item">
												<img
													src="http://www.corsair.com/Media/catalog/product/g/s/gs600_psu_sideview_blue_2.png"
													alt=""
												/>
											</a>
										</center>
									</div>
								</div>

								<div className="col-md-7">
									<div className="product-title">
										Corsair GS600 600 Watt PSU
									</div>
									<div className="product-desc">
										The Corsair Gaming Series GS600 is the
										ideal price/performance choice for
										mid-spec gaming PC
									</div>
									<div className="product-rating">
										<i className="fa fa-star gold" />{" "}
										<i className="fa fa-star gold" />{" "}
										<i className="fa fa-star gold" />{" "}
										<i className="fa fa-star gold" />{" "}
										<i className="fa fa-star-o" />{" "}
									</div>
									<hr />
									<div className="product-price">
										$ 1234.00
									</div>
									<div className="product-stock">
										In Stock
									</div>
									<hr />
									<div className="btn-group cart">
										<button
											type="button"
											className="btn btn-success">
											Add to cart
										</button>
									</div>
									<div className="btn-group wishlist">
										<button
											type="button"
											className="btn btn-danger">
											Add to wishlist
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

import React from "react";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
	CardDeck
} from "reactstrap";

import { Context } from "../store/appContext.jsx";
import { Container, Row, Col } from "reactstrap";
import "../../styles/product-list.scss";
import { NavLink, Link } from "react-router-dom";

export class ProductList extends React.Component {
	render() {
		return (
			<div className="container">
				<h2 className="brand-head p-2">Product List</h2>
				<div className="row product-list">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.products.map((item, index) => {
								return (
									<div
										className="col-md-6 col-lg-4 pb-2"
										key={item.ID}>
										<div className="card card-prod-list">
											<div className="card-body text-center">
												<img
													src={item.image.url}
													className="card-img-top w-50"
													alt="..."
												/>
												<h5 className="card-title">
													{item.product_name}
												</h5>
											</div>
											<ul className="list-group list-group-flush prod-desc">
												<li className="list-group-item">
													{item.meta_keys.short_desc}
												</li>
											</ul>
											<h3 className="text-right p-1">
												${item.price}
											</h3>
											<div className="card-body text-center">
												<Link
													// onClick={e=>actions.}
													to={"/product/" + item.ID}
													className="card-link">
													More Information
												</Link>
												<a
													href={""}
													onClick={e => {
														e.preventDefault();
														actions.addToCart(item);
													}}
													className="card-link">
													Add to Cart{" "}
													<i className="fas fa-cart-plus" />
												</a>
											</div>
										</div>
									</div>
								);
							});
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}

export default ProductList;

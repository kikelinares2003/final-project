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
import PropTypes from "prop-types";

export class ByCategory extends React.Component {
	render() {
		return (
			<div className="container">
				<h2 className="brand-head p-2">Product List</h2>
				<hr />
				<div className="row product-list">
					<Context.Consumer>
						{({ store, actions }) => {
							let prod = store.products.filter(
								(product, index) => {
									if (
										product.meta_keys.category.includes(
											this.props.match.params.category
										)
									) {
										return product;
									}
								}
							);
							return prod.map((item, index) => {
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
													{item.post_title}
												</h5>
											</div>
											<ul className="list-group list-group-flush prod-desc">
												<li className="list-group-item">
													{item.meta_keys.short_desc}
												</li>
											</ul>
											<h3 className="text-right p-1">
												${item.meta_keys.price}
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
													className="card-link text-nowrap">
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

export default ByCategory;

ByCategory.propTypes = {
	match: PropTypes.object
};

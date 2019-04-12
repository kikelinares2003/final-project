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

export class ProductList extends React.Component {
	render() {
		return (
			<CardDeck className="mt-3 mb-3">
				<Context.Consumer>
					{({ store, actions }) => {
						return store.products.map((item, index) => {
							return (
								<div className="col-md-3" key={item.theid}>
									<Card className="mt-2 mb-2">
										<CardImg
											//top
											//	width="100%"
											src={item.image_1}
											alt="Card image cap"
										/>
										<CardBody>
											<CardTitle>
												{item.post_title}
											</CardTitle>
											<CardText>
												{item.meta_keys.short_desc}
											</CardText>
											<Button>Check Product</Button>
										</CardBody>
									</Card>
								</div>
							);
						});
					}}
				</Context.Consumer>
			</CardDeck>
		);
	}
}

export default ProductList;

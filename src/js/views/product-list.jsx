import React from "react";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button
} from "reactstrap";

import { Context } from "../store/appContext.jsx";

export class ProductList extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return store.products.map((item, index) => {
						return (
							<div
								className="container col-md-6"
								key={item.theid}>
								<Card className="mt-5 mb-5">
									<CardImg
										top
										width="10%"
										height="10%"
										src={item.image_1}
										alt="Card image cap"
									/>
									<CardBody>
										<CardTitle>{item.post_title}</CardTitle>
										<CardText>
											{item.meta_keys.prod_desc}
										</CardText>
										<Button>Check Product</Button>
									</CardBody>
								</Card>
							</div>
						);
					});
				}}
			</Context.Consumer>
		);
	}
}

export default ProductList;

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
					return store.cartStore.map((item, index) => {
						return (
							<div
								className="container col-md-6"
								key={item.theid}>
								<Card className="mt-5 mb-5">
									<CardImg
										top
										width="10%"
										height="10%"
										src={item.productImage}
										alt="Card image cap"
									/>
									<CardBody>
										<CardTitle>
											{item.productName}
										</CardTitle>
										<CardText>
											{item.productDescription}
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

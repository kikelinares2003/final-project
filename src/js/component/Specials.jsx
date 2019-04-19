//create your first component
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

//include images into your bundle
//import capeImg from "../../img/cape_inView.jpg";

export class Specials extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="container">
					<h3>Daily Specials</h3>
					<div className="row p-3">
						<Context.Consumer>
							{({ store, actions }) => {
								return store.specials.map((prod, i) => {
									return (
										<div
											className="card col specialsCard mx-1"
											key={prod.ID}>
											<div className="specialImg">
												<img
													src={prod.acf.image_1}
													className="card-img-top img-fluid mx-auto"
													alt="..."
												/>
											</div>
											<div className="clearer" />
											<div className="card-body text-left d-flex flex-column justify-content-between">
												<h5 className="card-title">
													{prod.post_title}
												</h5>
												<p className="card-text">
													{prod.acf.short_desc}
												</p>
												<Link
													// onClick={e=>actions.}
													to={"/product/" + prod.ID}
													className="btn btn-primary card-link">
													Save Money
												</Link>
											</div>
										</div>
									);
								});
							}}
						</Context.Consumer>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

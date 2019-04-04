//create your first component
import React from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

//include images into your bundle
//import capeImg from "../../img/cape_inView.jpg";

export class Sections extends React.Component {
	render() {
		return (
			<div className="container">
				<Context.Consumer>
					{({ store, actions }) => {
						return store.sections.map((v, i) => {
							return (
								<div className="sectionContainer" key={i}>
									<a name={v.title} />
									<div className="content-section-b">
										<div className="row">
											<div className="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
												<hr className="section-heading-spacer" />
												<div className="clearfix" />
												<h2 className="section-heading">
													<NavLink
														to={v.url}
														className="header-item"
														activeClassName="active">
														{v.title}
													</NavLink>
												</h2>
												<p className="lead">{v.para}</p>
											</div>
											<div className="col-lg-5 col-sm-pull-6  col-sm-6">
												<img
													className="img-fluid"
													src={v.img}
													alt=""
												/>
											</div>
											<button
												index={i}
												id="deleteSection"
												onClick={() =>
													actions.deleteSection(i)
												}>
												Delete Me
											</button>
										</div>
									</div>
								</div>
							);
						});
					}}
				</Context.Consumer>
			</div>
		);
	}
}

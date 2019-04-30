import React from "react";
import { Context } from "../store/appContext.jsx";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "../../styles/profile-page.css";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { History } from "react-router-dom";

export class ProfilePage extends React.Component {
	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div className="container">
								<div className="row">
									<div className="col-xs-12 col-sm-6 col-md-6">
										<div className="well well-sm">
											<div className="row">
												<div className="col-sm-6 col-md-4">
													<img
														src="http://placehold.it/380x500"
														alt=""
														className="img-rounded img-responsive"
													/>
												</div>
												<div className="col-sm-6 col-md-8">
													<h4>
														{
															store.session
																.user_nicename
														}
													</h4>
													<small>
														<cite title="San Francisco, USA">
															San Francisco, USA{" "}
															<i className="glyphicon glyphicon-map-marker" />
														</cite>
													</small>
													<p>
														<i className="glyphicon glyphicon-envelope" />
														email@example.com
														<br />
														<i className="glyphicon glyphicon-globe" />
														<a href="http://www.jquery2dotnet.com">
															www.jquery2dotnet.com
														</a>
														<br />
														<i className="glyphicon glyphicon-gift" />
														June 02, 1988
													</p>

													<div className="btn-group">
														<button
															type="button"
															className="btn btn-primary">
															Social
														</button>
														<button
															type="button"
															className="btn btn-primary dropdown-toggle"
															data-toggle="dropdown">
															<span className="caret" />
															<span className="sr-only">
																Social
															</span>
														</button>
														<ul
															className="dropdown-menu"
															role="menu">
															<li>
																<a href="#">
																	Twitter
																</a>
															</li>
															<li>
																<a href="https://plus.google.com/+Jquery2dotnet/posts">
																	Google +
																</a>
															</li>
															<li>
																<a href="https://www.facebook.com/jquery2dotnet">
																	Facebook
																</a>
															</li>
															<li className="divider" />
															<li>
																<a href="#">
																	Github
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}

export default ProfilePage;

ProfilePage.propTypes = {
	history: PropTypes.object
};

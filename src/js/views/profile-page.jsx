import React from "react";
import { Context } from "../store/appContext.jsx";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { History } from "react-router-dom";

import "../../styles/z-sitewide.css";

export class ProfilePage extends React.Component {
	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div className="container">
								<div className="row">
									<div className="col-12 col-md-4">
										<img
											className="prof-pict"
											src={
												"https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
											}
										/>
									</div>
									<div className="col-12 col-md-8">
										<div className="row">
											<div className="col-12">
												<h3 className="">Name:</h3>
												<h3 className="">
													{
														store.session
															.user_display_name
													}
												</h3>
											</div>
											<hr />
											<div className="col-12">
												<h5 className="">Email: </h5>
												<h5 className="">
													email@address
												</h5>
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

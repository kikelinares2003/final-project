import React from "react";
import { Context } from "../store/appContext.jsx";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
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
							<Container>
								<div className="wrapper-div mt-5">
									<Row className="mt-3">
										<Col
											xs={6}
											md={4}
											className="prof-container">
											<img
												className="prof-pict "
												src={
													"https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
												}
												roundedCircle
											/>
										</Col>
									</Row>
									<Row>
										<Col xs="3" className="ml-3">
											<label className="text-primary">
												<i className="fas fa-user">
													{"    "}
													{"  "}
												</i>
												{"  "} Username:
											</label>
										</Col>
										<Col
											xs="6"
											style={{ position: "left" }}>
											<label className="text-primary">
												{
													store.session
														.user_display_name
												}
											</label>
										</Col>
									</Row>
									<Row>
										<Col xs="3" className="ml-3">
											<label>Email:</label>{" "}
										</Col>
										<Col xs="6">
											<label>
												{store.session.user_email}
											</label>
										</Col>
									</Row>
								</div>
							</Container>
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

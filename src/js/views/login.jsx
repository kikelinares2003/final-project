import React from "react";
import { Context } from "../store/appContext.jsx";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "../../styles/login.css";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { History } from "react-router-dom";

export class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: "",
			pass: ""
		};
	}
	handleSubmit = e => {
		//e.preventDefault();
		this.props.history.push("/profile-page/");
	};
	render() {
		return (
			<div id="logreg-forms">
				<Form className="form-signin" onSubmit={this.handleSubmit}>
					<h1
						className="h3 mb-3 font-weight-normal"
						style={{ textAlign: "center" }}
						Sign
						in
					/>
					<input
						onChange={e => {
							this.setState({ user: e.target.value });
						}}
						type="email"
						id="inputEmail"
						className="form-control"
						placeholder="Email address"
						required=""
						//autofocus=""
					/>
					<input
						onChange={e => {
							this.setState({ pass: e.target.value });
						}}
						type="password"
						id="inputPassword"
						className="form-control"
						placeholder="Password"
						required=""
					/>
					<Context.Consumer>
						{({ store, actions }) => {
							return (
								<div>
									<button
										className="btn btn-success btn-block"
										type="submit"
										onClick={e => {
											e.preventDefault();
											actions.login(
												this.state.user,
												this.state.pass,
												session => {
													if (
														store.session.isLoggedIn
													) {
														this.handleSubmit();
													} else if (
														store.session
															.isLoggedIn == false
													) {
														alert("Wrong Password");
													}
												}
											);
										}}>
										<i className="fas fa-sign-in-alt" />{" "}
										Sign in
									</button>
								</div>
							);
						}}
					</Context.Consumer>
					<a href="#" id="forgot_pswd">
						Forgot password?
					</a>
				</Form>

				<Form action="/reset/password/" className="form-reset">
					<input
						type="email"
						id="resetEmail"
						className="form-control"
						placeholder="Email address"
						required=""
						//autofocus=""
					/>
					<button className="btn btn-primary btn-block" type="submit">
						Reset Password
					</button>
					<a href="#" id="cancel_reset">
						<i className="fas fa-angle-left" /> Back{" "}
					</a>
				</Form>

				<Form action="/signup/" className="form-signup">
					<div className="social-login">
						<button
							className="btn facebook-btn social-btn"
							type="button">
							<span>
								<i className="fab fa-facebook-f" /> Sign up with
								Facebook
							</span>{" "}
						</button>
					</div>
					<div className="social-login">
						<button
							className="btn google-btn social-btn"
							type="button">
							<span>
								<i className="fab fa-google-plus-g" /> Sign up
								with Google+
							</span>{" "}
						</button>
					</div>

					<p style={{ textAlign: "center" }} OR />

					<input
						type="text"
						id="user-name"
						className="form-control"
						placeholder="Full name"
						required=""
						//autofocus=""
					/>
					<input
						type="email"
						id="user-email"
						className="form-control"
						placeholder="Email address"
						required
						//autofocus=""
					/>
					<input
						type="password"
						id="user-pass"
						className="form-control"
						placeholder="Password"
						required
						//autofocus=""
					/>
					<input
						type="password"
						id="user-repeatpass"
						className="form-control"
						placeholder="Repeat Password"
						required
						//autofocus=""
					/>

					<button className="btn btn-primary btn-block" type="submit">
						<i className="fas fa-user-plus" /> Sign Up
					</button>
					<a href="#" id="cancel_signup">
						<i className="fas fa-angle-left" /> Back
					</a>
				</Form>
				<br />
			</div>
		);
	}
}

export default Login;

Login.propTypes = {
	history: PropTypes.object
};

//create your first component
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

//include images into your bundle
//import capeImg from "../../img/cape_inView.jpg";

export class CheckOutForm extends React.Component {
	contructor(props) {
		//super(props);
		this.setState = {
			firstName: "",
			lastName: "",
			email: "",
			address: "",
			address2: "",
			country: "",
			state: "",
			zip: "",
			paymentMethod: "",
			nameOnCard: "",
			cardNumber: "",
			expDate: "",
			CVV: ""
		};
	}
	handlePayment = e => {
		//process payment
	};
	render() {
		return (
			<div className="col-md-8 order-md-1">
				<h4 className="mb-3">Billing address</h4>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<form
								className="needs-validation pb-5"
								noValidate
								onSubmit={this.handlePayment}>
								<div className="row">
									<div className="col-md-6 mb-3">
										<label htmlFor="firstName">
											First name
										</label>
										<input
											onChange={e => {
												this.setState({
													firstName: e.target.value
												});
											}}
											type="text"
											className="form-control"
											id="firstName"
											placeholder=""
											defaultValue=""
											required
										/>
										<div className="invalid-feedback">
											Valid first name is required.
										</div>
									</div>

									<div className="col-md-6 mb-3">
										<label htmlFor="lastName">
											Last name
										</label>
										<input
											onChange={e => {
												this.setState({
													lastName: e.target.value
												});
											}}
											type="text"
											className="form-control"
											id="lastName"
											placeholder=""
											defaultValue=""
											required
										/>
										<div className="invalid-feedback">
											Valid last name is required.
										</div>
									</div>
								</div>

								<div className="mb-3">
									<label htmlFor="email">
										Email{" "}
										<span className="text-muted">
											(Optional)
										</span>
									</label>
									<input
										onChange={e => {
											this.setState({
												email: e.target.value
											});
										}}
										type="email"
										className="form-control"
										id="email"
										placeholder="you@example.com"
									/>
									<div className="invalid-feedback">
										Please enter a valid email address for
										shipping updates.
									</div>
								</div>

								<div className="mb-3">
									<label htmlFor="address">Address</label>
									<input
										onChange={e => {
											this.setState({
												address: e.target.value
											});
										}}
										type="text"
										className="form-control"
										id="address"
										placeholder="1234 Main St"
										required
									/>
									<div className="invalid-feedback">
										Please enter your shipping address.
									</div>
								</div>

								<div className="mb-3">
									<label htmlFor="address2">
										Address 2{" "}
										<span className="text-muted">
											(Optional)
										</span>
									</label>
									<input
										onChange={e => {
											this.setState({
												address2: e.target.value
											});
										}}
										type="text"
										className="form-control"
										id="address2"
										placeholder="Apartment or suite"
									/>
								</div>

								<div className="row">
									<div className="col-md-5 mb-3">
										<label htmlFor="country">Country</label>
										<select
											onChange={e => {
												this.setState({
													country: e.target.value
												});
											}}
											className="custom-select d-block w-100"
											id="country"
											required>
											<option defaultValue="">
												Choose...
											</option>
											<option>United States</option>
										</select>
										<div className="invalid-feedback">
											Please select a valid country.
										</div>
									</div>
									<div className="col-md-4 mb-3">
										<label htmlFor="state">State</label>
										<select
											onChange={e => {
												this.setState({
													state: e.target.value
												});
											}}
											className="custom-select d-block w-100"
											id="state"
											required>
											<option defaultValue="">
												Choose...
											</option>
											<option>California</option>
										</select>
										<div className="invalid-feedback">
											Please provide a valid state.
										</div>
									</div>
									<div className="col-md-3 mb-3">
										<label htmlFor="zip">Zip</label>
										<input
											onChange={e => {
												this.setState({
													zip: parseInt(
														e.target.value
													)
												});
											}}
											type="text"
											className="form-control"
											id="zip"
											placeholder=""
											required
										/>
										<div className="invalid-feedback">
											Zip code required.
										</div>
									</div>
								</div>

								<hr className="mb-4" />

								<h4 className="mb-3">Payment</h4>

								<div className="d-block my-3">
									<div className="custom-control custom-radio">
										<input
											onSelect={e => {
												this.setState({
													paymentMethod:
														e.target.value
												});
											}}
											id="credit"
											name="paymentMethod"
											type="radio"
											className="custom-control-input"
											defaultChecked
											required
										/>
										<label
											className="custom-control-label"
											htmlFor="credit">
											Credit card
										</label>
									</div>
									<div className="custom-control custom-radio">
										<input
											onSelect={e => {
												this.setState({
													paymentMethod:
														e.target.value
												});
											}}
											id="debit"
											name="paymentMethod"
											type="radio"
											className="custom-control-input"
											required
										/>
										<label
											className="custom-control-label"
											htmlFor="debit">
											Debit card
										</label>
									</div>
									<div className="custom-control custom-radio">
										<input
											onSelect={e => {
												this.setState({
													paymentMethod:
														e.target.value
												});
											}}
											id="paypal"
											name="paymentMethod"
											type="radio"
											className="custom-control-input"
											required
										/>
										<label
											className="custom-control-label"
											htmlFor="paypal">
											Paypal
										</label>
									</div>
								</div>

								<div className="row">
									<div className="col-md-6 mb-3">
										<label htmlFor="cc-name">
											Name on card
										</label>
										<input
											onChange={e => {
												this.setState({
													nameOnCard: e.target.value
												});
											}}
											type="text"
											className="form-control"
											id="cc-name"
											placeholder=""
											required
										/>
										<small className="text-muted">
											Full name as displayed on card
										</small>
										<div className="invalid-feedback">
											Name on card is required
										</div>
									</div>
									<div className="col-md-6 mb-3">
										<label htmlFor="cc-number">
											Credit card number
										</label>
										<input
											onChange={e => {
												this.setState({
													cardNumber: parseInt(
														e.target.value
													)
												});
											}}
											type="text"
											className="form-control"
											id="cc-number"
											placeholder=""
											required
										/>
										<div className="invalid-feedback">
											Credit card number is required
										</div>
									</div>
								</div>

								<div className="row">
									<div className="col-md-3 mb-3">
										<label htmlFor="cc-expiration">
											Expiration
										</label>
										<input
											onChange={e => {
												this.setState({
													expiration: e.target.value
												});
											}}
											type="text"
											className="form-control"
											id="cc-expiration"
											placeholder=""
											required
										/>
										<div className="invalid-feedback">
											Expiration date required
										</div>
									</div>
									<div className="col-md-3 mb-3">
										<label htmlFor="cc-expiration">
											CVV
										</label>
										<input
											onChange={e => {
												this.setState({
													cvv: parseInt(
														e.target.value
													)
												});
											}}
											type="text"
											className="form-control"
											id="cc-cvv"
											placeholder=""
											required
										/>
										<div className="invalid-feedback">
											Security code required
										</div>
									</div>
								</div>

								<hr className="mb-4" />

								<button
									className="btn btn-primary btn-lg btn-block"
									type="submit">
									Continue to checkout
								</button>
							</form>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}

//export default CheckOutForm;

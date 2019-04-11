//create your first component
import React from "react";

//include images into your bundle
//import capeImg from "../../img/cape_inView.jpg";
var fontColor = { color: "white" };

const ContactSection = () => {
	return (
		<React.Fragment>
			<div className="container">
			<hr />
				<div className="row p-3">
					<div className="col">
						<p>Join Email</p>
					</div>
					<div className="col-md-6">
						<input
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter email"
						/>
					</div>
					<div className="col">
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</div>
				</div>
				<hr />
			</div>
		</React.Fragment>
	);
};
export default ContactSection;

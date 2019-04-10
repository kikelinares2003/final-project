//create your first component
import React from "react";

//include images into your bundle
//import capeImg from "../../img/cape_inView.jpg";
var fontColor = { color: "white" };

const ContactSection = () => {
	return (
		<div className="container">
			<div className="row">
				<form>
					<div className="col-sm-12 col-md-9">
						<input
							type="email"
							name="email"
							required="required"
							placeholder="Email*"
						/>
					</div>
					<div className="col-sm-12 col-md-3">
						<input
							type="submit"
							name="submit"
							value="Send Message"
							className="btn btn-send network-name"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};
export default ContactSection;

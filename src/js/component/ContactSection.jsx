//create your first component
import React from "react";

//include images into your bundle
//import capeImg from "../../img/cape_inView.jpg";
var fontColor = { color: "white" };

const ContactSection = () => {
	return (
		<React.Fragment>
			<a name="contact" />
			<section className="banner" id="contact" style={fontColor}>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="section-title">
								<h1>Contact Me</h1>
								<span className="st-border" />
							</div>
						</div>
						<div className="col-sm-4 contact-info">
							<p className="contact-content">
								Please feel free to contact me. If you have any
								questions for me regarding the site, I`m happy
								to try to answer them the best that I can. If
								you just feel like saying `hello`, I always
								enjoy that as well. Thank you.
							</p>
							<p className="st-address">
								<i className="fa fa-map-marker" />{" "}
								<strong>Lauderdale by the Sea, FL</strong>
							</p>
							<p className="st-phone">
								<i className="fa fa-mobile" />{" "}
								<strong>770.540.6228</strong>
							</p>
							<p className="st-email">
								<i className="fa fa-envelope-o" />{" "}
								<strong>dawson.kacey@gmail.com</strong>
							</p>
							<p className="st-website">
								<i className="fa fa-globe" />{" "}
								<strong>www.kaceydawson.com</strong>
							</p>
						</div>
						<div className="col-sm-7 col-sm-offset-1">
							<form
								action="php/send-contact.php"
								className="contact-form"
								name="contact-form"
								method="post">
								<div className="row">
									<div className="col-sm-6">
										<input
											type="text"
											name="name"
											required="required"
											placeholder="Name*"
										/>
									</div>
									<div className="col-sm-6">
										<input
											type="email"
											name="email"
											required="required"
											placeholder="Email*"
										/>
									</div>
									<div className="col-sm-6">
										<input
											type="text"
											name="subject"
											placeholder="Subject"
										/>
									</div>
									<div className="col-sm-6">
										<input
											type="text"
											name="website"
											placeholder="Website"
										/>
									</div>
									<div className="col-sm-12">
										<textarea
											name="message"
											required="required"
											cols="30"
											rows="7"
											placeholder="Message*"
										/>
									</div>
									<div className="col-sm-12">
										<input
											type="submit"
											name="submit"
											value="Send Message"
											className="btn btn-send network-name"
										/>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};
export default ContactSection;

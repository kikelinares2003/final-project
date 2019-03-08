//create your first component
import React from "react";
import { NavLink } from "react-router-dom";

//include images into your bundle
import resumeImg from "../../img/resume.jpg";

const ResumeSection = () => {
	return (
		<React.Fragment>
			<a name="resume" />
			<div className="content-section-a">
				<div className="container">
					<div className="row">
						<div className="col-lg-5 col-lg-offset-2 col-sm-6">
							<hr className="section-heading-spacer" />
							<div className="clearfix" />
							<h2 className="section-heading">
								<NavLink
									to="/blog"
									className="header-item"
									activeClassName="active">
									Blog
								</NavLink>
							</h2>
							<p className="lead">
								Thank you for taking a minute to go over{" "}
								<a target="_self" href="resume.html">
									my resume
								</a>
								. I have 15 years developing web pages and
								creating user interfaces. Please take a minute
								to go over my extensive web development and
								corporate experience.
							</p>
						</div>
						<div className="col-lg-5 col-lg-offset-2 col-sm-6">
							<img
								className="img-fluid"
								src={resumeImg}
								alt="generic resume"
							/>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ResumeSection;

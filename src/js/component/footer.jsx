import React from "react";
import { NavLink } from "react-router-dom";

//style sheet

import "../../styles/footer.scss";

export class Footer extends React.Component {
	render() {
		return (
			<section id="footer">
				<div className="container">
					<div className="row text-center text-xs-center text-sm-left text-md-left">
						<div className="col-xs-12 col-sm-4 col-md-4">
							<ul className="list-unstyled list-inline quick-links">
								<li className="list-inline-item">
									<a href="javascript:void();">Home</a>
								</li>
								<li className="list-inline-item">
									<a href="javascript:void();">About</a>
								</li>
								<li className="list-inline-item">
									<a href="javascript:void();">Contact Us</a>
								</li>
								<li className="list-inline-item">
									<a href="javascript:void();">Blog</a>
								</li>
								<li className="list-inline-item">
									<a href="javascript:void();">Cart</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

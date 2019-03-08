//create your first component
import React from "react";
import { NavLink } from "react-router-dom";

//include images into your bundle
import capeImg from "../../img/cape_inView.jpg";

const GraphicSection = () => {
	return (
		<React.Fragment>
			<a name="graphics" />
			<div className="content-section-b">
				<div className="container">
					<div className="row">
						<div className="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
							<hr className="section-heading-spacer" />
							<div className="clearfix" />
							<h2 className="section-heading">
								<NavLink
									to="/product"
									className="header-item"
									activeClassName="active">
									Products
								</NavLink>
							</h2>
							<p className="lead">
								I also have extensive Photoshop and graphic
								design experience! Please visit my{" "}
								<a target="_self" href="graphics.html">
									graphic examples
								</a>{" "}
								page and check out my style. I created most of
								these for new and used auto dealers when I
								worked with{" "}
								<a
									rel="noopener"
									href="http://www.autotrader.com/">
									Autotrader.com
								</a>
							</p>
						</div>
						<div className="col-lg-5 col-sm-pull-6  col-sm-6">
							<img
								className="img-responsive"
								src={capeImg}
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default GraphicSection;

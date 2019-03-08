//create your first component
import React from "react";

//include images into your bundle
import blackWhiteBridge from "../../img/b-w-bridge.jpg";

const HeroView = () => {
	return (
		<React.Fragment>
			<a name="home" />
			<div className="intro-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="intro-message">
								<h1>React Router Exercise</h1>
								<h3>Provided Kacey Dawson</h3>
								<hr className="intro-divider" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default HeroView;

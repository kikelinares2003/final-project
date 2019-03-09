import React from "react";
import { Link } from "react-router-dom";

export class Blog extends React.Component {
	render() {
		return (
			<div className="text-center">
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-4">#LearnToCode</h1>
						<p className="lead">
							This is a modified jumbotron that occupies the
							entire horizontal space of its parent.
						</p>
					</div>
				</div>
				<div className="card text-center w-50 mx-auto">
					<img
						className="card-img-top"
						src="https://via.placeholder.com/350x150"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Blog Post name</h5>
						<p className="card-text">
							With supporting text below as a natural lead-in to
							additional content.lorem ipsum,.
						</p>
						<button className="btn btn-primary">
							check out the full story
						</button>
					</div>
					<div className="card-footer text-muted">6 days ago</div>
				</div>
			</div>
		);
	}
}

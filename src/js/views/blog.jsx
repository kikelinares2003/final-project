import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "../component/blogcards.jsx";

export class Blog extends React.Component {
	render() {
		return (
			<div>
				<div className="jumbotron jumbotron-fluid text-center">
					<div className="container">
						<h1 className="display-4">#LearnToCode</h1>
						<p className="lead">
							This is a modified jumbotron that occupies the
							entire horizontal space of its parent.
						</p>
					</div>
				</div>
				<div>
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
				</div>
			</div>
		);
	}
}

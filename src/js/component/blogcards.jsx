import React from "react";
import { Link } from "react-router-dom";
import "../../styles/blogstyle.css";
export default function BlogCard(props) {
	return (
		<div>
			<div
				className="jumbotron jumbotron-fluid"
				style={{ backgroundColor: "white" }}>
				<div className="container">
					<div className="img-container float-right" />
					<p className="font-weight-bold">#LearnToCode</p>
					<p className="text-muted">
						This is a modified jumbotron that occupies the entire
						horizontal space of its parent.
					</p>

					<p className="font-weight-normal">Author name</p>
					<p className="text-muted">
						Publish Date star button to fav
					</p>
				</div>
			</div>
		</div>
	);
}

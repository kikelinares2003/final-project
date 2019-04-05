import React from "react";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

//import Navbar from "../component/navbar.jsx";
//import Footer from "./src/js/component/functional/footer.jsx";
import "../../styles/product.scss";

export class Products extends React.Component {
	render() {
		return (
			<div className="container-fluid">
					<div className= "row">
					<div className= "col-md-5">
					   <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
							  <div className="carousel-inner">
							    <div className="carousel-item active">
							      <img src="https://via.placeholder.com/150" className="d-block w-100" alt="..."/>
							    </div>
							  </div>
							  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
							    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
							    <span className="sr-only">Previous</span>
							  </a>
							  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
							    <span className="carousel-control-next-icon" aria-hidden="true"></span>
							    <span className="sr-only">Next</span>
							  </a>
						</div>
					</div>
					<div className= "col-md-5">
							test
				
					</div>				
				</div>
			</div>
		);
	}
}

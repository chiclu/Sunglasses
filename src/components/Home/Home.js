import React, {Component} from 'react';
import './Home.css';


class Home extends Component {
	render() {
		return(

			<div>
				<section id="home" className="lead-section">
					<div className="carousel slide" id="lead-slider">
						<div className="carousel-inner">

							<div className="carousel-item active" style={{backgroundImage: 'url(./img/slider-img.png)'}}>
								<div className="container">
									<div className="caption p-4 bg-dark text-white">
									<h2>Choose your sunglasses</h2>
									</div>
								</div>
							</div>

							<div className="carousel-item">
								<div className="container">
									<div className="caption p-4 bg-dark text-white">
									<h2>Choose your sunglasses</h2>
									</div>
								</div>
							</div>

							<div className="carousel-item">
								<div className="container">
									<div className="caption p-4 bg-dark text-white">
									<h2>Choose your sunglasses</h2>
									</div>
								</div>
							</div>

						</div>

						<div className="container position-relative">
							<ol className="carousel-indicators">
							    <li data-target="#lead-slider" data-slide-to="0" className="active"></li>
							    <li data-target="#lead-slider" data-slide-to="1"></li>
							    <li data-target="#lead-slider" data-slide-to="2"></li>
							</ol>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export {Home};
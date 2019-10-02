import React from 'react';	
import './AboutUs.css';


const AboutUs = () => {
	return (
		<div className="container" id='about'>
			<div className="row mt-5 mt-md-8 mt-xl-0">
				<div className="col-12 mb-2 col-md-6 mb-md-0">
					<div className="aboutTextArea">
						<h2 className="labelAbout">About Us</h2>
						<div className="lineAbout"></div>
						<p>Eternity bands are a classy and stylish innovation to storm the market. These are often gifted for a marriage anniversary or at the time of giving birth to a child. These eternity bands need no occasion to be gifted and can be given as gifts whenever one wishes to.
						</p>
						<button className="btnAbout background1 rounded-0">LEARN MORE</button>
					</div>
				</div>
				<div className="col-12 col-md-6 justify-content-center">
					<div className="imgAbout"><img src="/img/img-about.png" alt="sunglass"></img>
					</div>
				</div>
			</div>
		</div>
	)
}

export {AboutUs};

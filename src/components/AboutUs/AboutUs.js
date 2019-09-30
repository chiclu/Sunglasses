import React from 'react';	
import './AboutUs.css';


const AboutUs = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-12 mb-4 col-md-6 mb-md-0 aboutTextArea">
					<h2 className="labelAbout">About Us</h2>
					<div className="lineAbout"></div>
					<span>Eternity bands are a classy and stylish innovation to storm the market. These are often gifted for a marriage anniversary or at the time of giving birth to a child. These eternity bands need no occasion to be gifted and can be given as gifts whenever one wishes to.
					</span>
				</div>
				<div className="col-12 col-md-6 imgAbout"><img src="/img/img-about.png" alt="sunglass"></img>
				</div>
			</div>
		</div>
	)
}

export {AboutUs};

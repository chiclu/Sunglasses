import React, {Component,Fragment} from 'react';
import './App.css';
import './custom.scss';


import {Header} from './components/Header/Header';
import {Home} from './components/Home/Home';
import {AboutUs} from './components/AboutUs/AboutUs';
import {Services} from './components/Services/Services';
import {Achievements} from './components/Achievements/Achievements';
import {Products} from './components/Products/Products';
import {Contact} from './components/Contact/Contact';



class App extends Component {
    render() {
    	return(
    		<Fragment>
	      		<Header />
	      		<Home />
	      		<AboutUs />
				<Services />
				<Achievements />
				<Products />
				<Contact />
    		</Fragment>
    	)
  	}
}

export default App;


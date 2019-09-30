import React, {Component,Fragment} from 'react';
import './App.css';
import './custom.scss';

import {Header} from './components/Header/Header';
import {Home} from './components/Home/Home';
import {AboutUs} from './components/AboutUs/AboutUs';


class App extends Component {
    render() {
    	return(
    		<Fragment>
	      		<Header />
	      		<Home />
	      		<AboutUs />
    		</Fragment>
    	)
  	}
}

export default App;


import React, {Component} from 'react';
import './Header.css';


class Header extends Component {
    render() {
        return(
            <div className="container">
                
                    <nav className="navbar navbar-expand-lg row justify-content-md-center">
                        <div className="navbar-brand col-3"><img className="logo" src="./img/logo.png" alt='Logo'>
                            </img></div>

                        <div className="collapse navbar-collapse col-9" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">HOME</li>
                                <li className="nav-item">ABOUT US</li>
                                <li className="nav-item">SERVICES</li>
                                <li className="nav-item">ACHIEVEMENTS</li>
                                <li className="nav-item">PRODUCTS</li>
                                <li className="nav-item">CONTACT</li>
                            </ul>
                        </div>

                    </nav>
         
            </div>

            
        )
    }
}

export {Header};
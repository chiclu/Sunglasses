import React, {Component} from 'react';
import './Header.css';


class Header extends Component {
    render() {
        return(
            <div className="background1">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light h-100 px-0 pb-lg-0">

                        <a className="navbar-brand" href="#about"><img src="./img/logo.png" alt="Logo"/></a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu-button" aria-controls="menu-button" aria-expanded="false" aria-label="Toggle navigation border-radius-1">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="menu-button">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link  active" href="#home">HOME
                                        <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">ABOUT US</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#services">SERVICES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#achievements">ACHIEVEMENT</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#products">PRODUCTS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">CONTACT</a>
                                </li>
                           </ul>
                                
                  </div>
                </nav>
                </div>
            </div>
        )
    }
}

export {Header}
import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
    return (
        <section id="contact" className="mt-4">
            <div className="container">
                <div className="text-center mb-4">
                    <h2 className="text-center mb-3">Contast Us</h2>
                    <span className="productLine mb-4 d-inline-block"></span>
                </div>

                <div className="row mb-4">
                    <div className="col-12 col-lg-6">
                        <form>
                            <div className="form-group d-flex">
                                <input name="name" 
                                       type="text" 
                                       placeholder="Your Name" 
                                       className="form-control name mb-4 m-0 rounded-0">
                                </input>

                                <input name="email" 
                                       type="text" 
                                       placeholder="Your Email" 
                                       className="form-control email mb-4 m-0 rounded-0">
                                </input>

                                <textarea name="text-area" 
                                       type="textarea" 
                                       placeholder="Your Message" 
                                       className="textArea mb-4 rounded-0">
                                </textarea>
                                <button type="submit" name="submit" className="submitBTN  mb-4">Submit</button>
                            </div>
                            
                        </form>
                    </div>

                    <div className="col-12 col-lg-5 ml-auto contact-icons p-0 m-auto m-lg-0 ml-lg-auto mb-5">
                        <div className="iconsContainer p-sm-0">
                            <div>
                                <span className="mr-4"><FontAwesomeIcon icon={faMapMarkerAlt}/></span>
                                <span className="mb-3 firstText">210 Camren Parkways Apt. 611</span>
                            </div>
                            <div>
                                <span className="mr-4 d-inline-block"><FontAwesomeIcon icon={faEnvelopeOpen} /></span>
                                <span>bins_fritz@crawford.org</span>
                            </div>
                            <div>
                                <span className="mr-4"><FontAwesomeIcon icon={faPhone}/></span>
                                <span>316-191-1642</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container-fluid footer">
                <div className="container footer-inner d-sm-flex align-items-sm-center justify-content-sm-between">
                        <a className="logo-footer d-block text-center mb-3 pt-3" href="#">
                            <img src="./img/logo.png" alt="Logo"/>
                        </a>
                    <div className="social-icons text-center">
                        <a><img src="./img/Group-6.png" alt="Facebook"/></a>
                        <a><img src="./img/Fill-7.png" alt="Twetter"/></a>
                        <a><img src="./img/Group-3.png" alt="Instagram"/></a>
                    </div>
                </div>
            </div>
        </section>
    )
}


export {Contact};
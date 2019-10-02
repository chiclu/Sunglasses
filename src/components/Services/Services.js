import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faTruckLoading, faGlasses } from '@fortawesome/free-solid-svg-icons';



const Services = () => {
    return (
        <section id="services" className="mt-1 mt-md-5">
            <div className="container">
                <h2 className="labelService mb-3 mb-md-4 text-center">Services</h2>
                <div className="serviceLine mb-5"></div>

                <div className="row">
                    <div className="col-12 col-lg-4 mb-4">
                        <div className="serviceItem p-4 text-center">
                            <div className="rounded-circle d-inline-block text-center mt-4">
                                <span className="text-white dollar">
                                    <FontAwesomeIcon icon={faDollarSign} />
                                </span>
                            </div>
                            <h2 className="text-white labels mt-3">Sale</h2>
                            <p className="text-white serviceText mt-3">Lorem Ipsum is simply dummy
                                text of the printing industry.</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 mb-4">
                        <div className="serviceItem p-4 text-center">
                            <div className="rounded-circle d-inline-block text-center mt-4">
                                <span className="text-white truck">
                                    <FontAwesomeIcon icon={faTruckLoading} />
                                </span>
                            </div>
                            <h2 className="text-white labels mt-3">Delivery</h2>
                            <p className="text-white serviceText mt-3">Lorem Ipsum is simply dummy
                                text of the printing industry.</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="serviceItem p-4 text-center">
                            <div className="rounded-circle d-inline-block text-center mt-4">
                                <span className="text-white glasses">
                                    <FontAwesomeIcon icon={faGlasses} />
                                </span>
                            </div>
                            <h2 className="text-white labels mt-3">Frames</h2>
                            <p className="text-white serviceText mt-3">Lorem Ipsum is simply dummy
                                text of the printing industry.</p>
                        </div>
                    </div>
                </div>
            </div>

            
        </section>
    )
}

export {Services};
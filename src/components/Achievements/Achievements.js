import React from 'react';
import './Achievements.css';

const Achievements = () => {
    return(
        <section id="achievements" className="mt-5 mb-5">
            <div className="container-fluid" style={{backgroundImage: 'url(./img/img.png)'}}>
                <div className="row pt-lg-5 pb-lg-5">
                    <div className="col-12 col-md-6 col-lg-3 mb-3 pt-5">
                        <div className="achItem text-center text-white">
                            <h2>1345</h2>
                            <p>Lorem ipsum</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 pt-5">
                        <div className="achItem text-center text-white">
                            <h2>657</h2>
                            <p>Lorem ipsum</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 pt-5">
                        <div className="achItem text-center text-white">
                            <h2>24/7</h2>
                            <p>Lorem ipsum</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 pt-5 pb-4">
                        <div className="achItem text-center text-white">
                            <h2>89%</h2>
                            <p>Lorem ipsum</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export {Achievements};
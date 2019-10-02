import React from 'react';
import './Products.css';


const Products = () => {
    return(
        <section id="products" className="mt-4 mt-md-5">
            <div className="container">
                <div className="text-center mb-4">
                    <h2 className="text-center mb-3">Products</h2>
                    <span className="productLine mb-4 d-inline-block"></span>
                </div>

                <div className="row product-main">

                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="imgPr position-relative">
                            <img src="./img/img-2.png"></img>
                                <p className="position-absolute textPr text-center">Lorem Ipsum is simply dummy text of the printing.</p>
                                <p className="text-center mt-2 mb-0 mb-md-2 titlePr">BRAND NAME</p>
                            <p className="text-center pricePr">345 $</p>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="imgPr position-relative">
                            <img src="./img/img-3.png"></img>
                                <p className="position-absolute textPr text-center">Lorem Ipsum is simply dummy text of the printing.</p>
                                <p className="text-center mt-2 mb-0 mb-md-2 titlePr">BRAND NAME</p>
                            <p className="text-center pricePr">345 $</p>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="imgPr position-relative">
                            <img src="./img/img-4.png" ></img>
                                <p className="position-absolute textPr text-center">Lorem Ipsum is simply dummy text of the printing.</p>
                                <p className="text-center mt-2 mb-0 mb-md-2 titlePr">BRAND NAME</p>
                            <p className="text-center pricePr">345 $</p>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="imgPr position-relative">
                            <img src="./img/img-5.png" ></img>
                                <p className="position-absolute textPr text-center">Lorem Ipsum is simply dummy text of the printing.</p>
                                <p className="text-center mt-2 mb-0 mb-md-2 titlePr">BRAND NAME</p>
                            <p className="text-center pricePr">345 $</p>
                        </div>
                    </div>

                </div>
                <div className="points d-inline-block d-flex mt-4 mb-5">
                    <span className="control-pr"></span>
                    <span className="control-pr"></span>
                    <span className="control-pr"></span>
                </div>
            </div>
        </section>
    )
}


export {Products};
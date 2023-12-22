import React from "react";


const Sec = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-md-4 col-12 p-4 position-relative " height={'450px'}>
                            <img src="./images/featured.jpg" className="img-fluid" alt="not found" />

                            <img src="./images/featured-icon.png" height={"80px"} className="position-absolute top-100 start-0 translate-middle bg-danger p-3 rounded-5" alt="" />
                        </div>
                        <div className="col-md-4 col-12">
                            <h6>| FEATURED</h6>
                            <h2>Best Appartment & Sea View</h2>
                            <ul className="list-group bg-secondary">
                                <li className="list-group-item">
                                    <p className="text-danger m-0">Best useful link ?</p>
                                </li>
                                <li className="list-group-item">
                                    <p>Get <b>The best villa</b> website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the <span className="text-info">best free CSS templates</span> in the word. Please tell your friends about ir.</p>
                                </li>
                                <li className="list-group-item">
                                    <p className="m-0">How does this work ?</p>
                                </li>
                                <li className="list-group-item">
                                    <p className="m-0 text-secondary">Why is villa Agency the best ?</p>
                                </li>
                            </ul>

                        </div>
                        <div className="col-md-4 col-12 px-5">
                            <ul className="list-group shadow-lg">
                                <li className="list-group-item d-flex justify-content-around">
                                    <img src="./images/info-icon-01.png" height={"50px"} alt="" />
                                    <div className="row w-75">
                                        <h4>250 m2</h4>
                                        <p className="m-0 text-secondary">Total Flat Space</p>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-around">
                                    <img src="./images/info-icon-02.png" height={"50px"} alt="" />
                                    <div className="row w-75">
                                        <h4>Contract</h4>
                                        <p className="m-0 text-secondary">Contract Ready</p>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-around">
                                    <img src="./images/info-icon-03.png" height={"50px"} alt="" />
                                    <div className="row w-75">
                                        <h4>Payment</h4>
                                        <p className="m-0 text-secondary">Payment</p>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-around">
                                    <img src="./images/info-icon-04.png" height={"50px"} alt="" />
                                    <div className="row w-75">
                                        <h4>Safety</h4>
                                        <p className="m-0 text-secondary">24/7 Under</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
};


export default Sec;
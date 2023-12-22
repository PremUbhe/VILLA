import React from "react";


const Forth = () => {
    return (
        <>
            <div className="container my-5">
                <div className="header d-flex align-items-end">
                    <div className="row">
                        <h6 className="text-danger">|BEST DEAL</h6>
                        <h2>Find Your Best Deal Right Now!</h2>
                    </div>
                    <div className="d-flex w-50 justify-content-around">
                        <button className="btn btn-danger h-50">Appartment</button>
                        <button className="btn btn-dark h-50">Villa House</button>
                        <button className="btn btn-dark h-50">Penthouse</button>
                    </div>
                </div>
                <div className="row justify-content-center pt-4">
                    <div className="col-md-3 col-12">
                        <ul className="list-group shadow-lg">
                            <li className="list-group-item">
                                <p>Total Flat Space <b>185 m2</b></p>
                            </li>
                            <li className="list-group-item">
                                <p>Floor number <b>26th</b></p>
                            </li>
                            <li className="list-group-item">
                                <p>Number of rooms <b>4</b></p>
                            </li>
                            <li className="list-group-item">
                                <p>Parking Available <b>Yes</b></p>
                            </li>
                            <li className="list-group-item">
                                <p>Payment Process <b>Bank</b></p>
                            </li>
                        </ul>

                    </div>
                    <div className="col-md-4 col-12">
                        <img src="./images/property-05.jpg" className="img-fluid align-self-center" alt="" />

                    </div>
                    <div className="col-md-3 col-12">

                        <p><b>Extra Info About Property</b></p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat veniam, recusandae obcaecati sit rerum ipsa libero adipisci sapiente modi cum.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur delectus aut voluptatibus repellendus, dolorum fuga laboriosam aliquam esse vitae sed.</p>
                        <button className='btn bg-black text-light py-0'><i className="fa-solid fa-calendar bg-danger p-2 rounded-5 text-light"></i> Schedule a visite</button>


                    </div>
                </div>
            </div>
        </>
    )
};


export default Forth;
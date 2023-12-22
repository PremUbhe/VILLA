import React from "react";


const Thir = () => {
    return (
        <>
            <div className="container-fluid " style={{ height: '600px' }}>


                <div className="container position-relative">
                    <img src="./images/video-bg.jpg" className=" img-fluid" alt="not found" />
                    <div className="header position-absolute text-center w-25 top-50 start-50 translate-middle">
                        <h6 className="text-danger">| VIDEO VIEW</h6>
                        <h2 className="text-light">Get Closer View & Different Feeling</h2>
                    </div>

                    <img src="./images/video-frame.jpg" className="position-absolute my-4 rounded top-100 start-50 translate-middle" style={{ width: '800px', height: '300px' }} alt="" />
                </div>
            </div>

            <div className="container position-static d-flex">
                <ul className="list-group d-flex flex-row w-100 justify-content-around">
                    <li className="list-group-item rounded d-flex align-items-center justify-content-around w-25">
                        <h2 className="text-danger">34</h2>
                        <div className="row w-75">
                            <p>Buildings</p>
                            <p className="">Finished Now</p>
                        </div>
                    </li>
                    <li className="list-group-item rounded d-flex align-items-center justify-content-around w-25">
                        <h2 className="text-danger">12</h2>
                        <div className="row w-75">
                            <p>Years</p>
                            <p className="">Experience</p>
                        </div>
                    </li>
                    <li className="list-group-item rounded d-flex align-items-center justify-content-around w-25">
                        <h2 className="text-danger">24</h2>
                        <div className="row w-75">
                            <p>Awwards</p>
                            <p className="">Won 2023</p>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
};


export default Thir;
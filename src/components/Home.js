import React from "react";



const Home = () => {
    return (
        <>
            <div className="container-fluid position-relative p-0">
                <img src="./images/banner-01.jpg" alt="" className="img-fluid" />
                <div className="container position-absolute top-50 start-0">
                    <i className="fa-solid fa-angle-left position-absolute bg-blur p-2 rounded-5 text-light  top-50 start-0"></i>

                    <div className="header position-absolute top-50 start-50 translate-middle">
                        <h6 className="bg-light p-2 w-25">Toronto, <span className="text-danger">Canada</span></h6>
                        <h1 className="text-light">HURRY! GET THE BEST VILLA FOR YOU</h1>
                    </div>
                    <i className="fa-solid fa-angle-right position-absolute bg-blur p-2 rounded-5 text-light top-50 end-0"></i>
                </div>


            </div>
        </>
    )
};


export default Home;
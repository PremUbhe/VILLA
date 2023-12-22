import React from "react";


const Header = () => {
    return (
        <>
            <div className="container d-flex align-items-center justify-content-between p-1">
                <div className="d-flex w-50 justify-content-around">
                    <p className="m-0"><i className="fa-solid fa-envelope text-danger"></i>  info@company.com</p>
                    <p className="m-0"><i className="fa-solid fa-location-dot text-danger"></i>  Sunny Isles Beach, FL 33160</p>
                </div>

                <div className="d-flex w-25 justify-content-around">
                    <i className="fa-brands fa-facebook bg-secondary p-1 rounded-5 text-light"></i>
                    <i className="fa-brands fa-twitter bg-secondary p-1 rounded-5 text-light"></i>
                    <i className="fa-brands fa-linkedin bg-secondary p-1 rounded-5 text-light"></i>
                    <i className="fa-brands fa-instagram bg-secondary p-1 rounded-5 text-light"></i>
                </div>
            </div>
        </>
    )
};


export default Header;
import React from 'react';


const Navbar = () => {
    return (
        <>
            <div className="container-fluid border border-1 navbar">
                <div className="container d-flex justify-content-between">
                    <div className="nav-brand">
                        <h3>VILLA</h3>
                    </div >
                    <ul className='nav'>
                        <li className='nav-item'>
                            <a className='nav-link' href="#">Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="#">Properties</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="#">Property Details</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="#">Contact Us</a>
                        </li>
                        <button className='btn bg-black text-light py-0'><i className="fa-solid fa-calendar bg-danger p-2 rounded-5 text-light"></i> Schedule a visite</button>
                    </ul>

                </div>
            </div >
        </>
    )
};



export default Navbar;
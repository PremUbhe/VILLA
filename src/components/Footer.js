import React from "react";


const Footer = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="container position-relative">
                    <img src="./images/contact-bg.jpg" className="img-fluid" alt="..." />
                    <div className="header position-absolute text-center w-25 top-50 start-50 translate-middle">
                        <h6 className="text-danger">| CONTACT US</h6>
                        <h2 className="text-light">Get in Touch With Our Agents</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center my-5">
                        <div className="col-md-7 col-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15133.323242851997!2d73.80661599999999!3d18.5139471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf6c96affedf%3A0x8384e344c1e0baa3!2sRathod%20Coaching%20classes(RCC)!5e0!3m2!1sen!2sin!4v1703239104445!5m2!1sen!2sin" width="600" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <ul className="list-group mt-3 d-flex flex-row w-100 justify-content-around">
                                <li className="list-group-item rounded d-flex align-items-center justify-content-around">
                                    <img src="./images/email-icon.png" className="me-2" height={"40px"} alt="..." />
                                    <div className="row">
                                        <p className="m-0">info@villa.co</p>
                                        <p className="m-0">Business Email</p>
                                    </div>
                                </li>
                                <li className="list-group-item rounded d-flex align-items-center justify-content-around">
                                    <img src="./images/phone-icon.png" className="me-2" height={"40px"} alt="..." />
                                    <div className="row">
                                        <p className="m-0">010-020-0340</p>
                                        <p className="m-0">Phone Number</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-5 col-12">
                            <form action="" className=" card p-4 d-flex flex-column">
                                <label className="my-3" htmlFor="name">Full Name</label>
                                <input className="bg-light rounded p-2 border-0" type="text" name="name" id="name" placeholder="Your Name.." />
                                <label className="my-3" htmlFor="email">Full Name</label>
                                <input className="bg-light rounded p-2 border-0" type="email" name="email" id="email" placeholder="Your E-mail.." />
                                <label className="my-3" htmlFor="subject">Full Name</label>
                                <input className="bg-light rounded p-2 border-0" type="text" name="subject" id="subject" placeholder="Subject.." />
                                <label className="my-3" htmlFor="message">Message</label>
                                <textarea className="bg-light rounded p-2 border-0" name="message" id="message" cols="30" rows="4" placeholder="Your Message.."></textarea>
                                <button className="btn btn-dark my-3 w-75 align-self-center" type="submit">Send Message</button>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container-fluid bg-dark text-light " style={{ height: '60px' }}>
                <p className="m-0 text-center">Copyright @ Prem Ubhe</p>
            </div>
        </>
    )
};


export default Footer; 
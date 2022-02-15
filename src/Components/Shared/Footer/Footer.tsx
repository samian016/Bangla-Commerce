import React from 'react';
import logo1 from './images/logo.png';

const Footer = () => {
    return (
        <div className='container mt-2'>
            <div className='bg-dark rounded p-1'>
                <h1 className='text-white text-center'>This is footer</h1>
                <div className="container my-2">
                    <div className="row g-2">
                        <div className="col-lg-2">
                            <div className="p- border bg-light"> 
                            <div className="logo">
                                <img className='img-fluid' src={logo1} alt=""/>
                            </div>
                            <div>
                                <h5>Awesome grocery store website template</h5>
                            </div>
                            <div>
                                <h6>Address: 5171 W Campbell Ave undefined Kent, Utah 53127 United States</h6>
                            </div>
                            <div>
                                <h6>Call Us:(+91) - 540-025-124553</h6>
                            </div>
                            <div>
                                <h6>Email:sale@Nest.com</h6>
                            </div>
                            <div>
                                <h6>Hours:10:00 - 18:00, Mon - Sat</h6>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="p-3 border bg-light">2nd Custom column</div>
                        </div>
                        <div className="col-lg-2">
                            <div className="p-3 border bg-light">3rd Custom column</div>
                        </div>
                        <div className="col-lg-2">
                            <div className="p-3 border bg-light">4th Custom column</div>
                        </div>
                        <div className="col-lg-2">
                            <div className="p-3 border bg-light">5th Custom column</div>
                        </div>
                        <div className="col-lg-2">
                            <div className="p-3 border bg-light">6th Custom column</div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Footer;
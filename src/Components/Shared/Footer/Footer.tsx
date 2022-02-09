import React from 'react';
import logo1 from './images/logo.png';

const Footer = () => {
    return (
        <div className='container mt-2'>
            <div className='bg-dark rounded p-1'>
                <h1 className='text-white'>This is footer</h1>

                <div className="container my-2">
                    <div className="row g-2">
                        <div className="col-lg-3">
                            <div className="p-3 border bg-light"> 
                            <div className="logo">
                                <img className='img-fluid' src={logo1} alt=""/>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="p-3 border bg-light">2nd Custom column</div>
                        </div>
                        <div className="col-lg-3">
                            <div className="p-3 border bg-light">3rd Custom column</div>
                        </div>
                        <div className="col-lg-3">
                            <div className="p-3 border bg-light">4th Custom column</div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Footer;
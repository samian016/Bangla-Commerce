import React from 'react';
import logo1 from './images/logo.png';
import logo2 from './images/app-store.jpg';
import logo3 from './images/google-play.jpg';
import logo4 from './images/payment-method.png';
import './Footer.css';


const Footer = () => {
    return (
        <div className='container-fluid overflow-hidden my-3'>
            <div className='mx-5'>
                <div className="my-3">
                    <div className="row g-2">
                        <div className="col-lg-2 col-md-3">
                            <div className="p- ">
                                <div className="logo">
                                    <img className='img-fluid' src={logo1} alt="" />
                                </div>
                                <div>
                                    <p className='fw-bold'>Awesome grocery store website template</p>
                                </div>
                                <div>
                                    <h6 className='fw-thin'>
                                        <span className='fw-bold'>Address: </span>
                                        5171 W Campbell Ave undefined Kent, Utah 53127 United States</h6>
                                </div>
                                <div>
                                    <h6 className='fw-thin'>
                                        <span className='fw-bold'>Call Us: </span>
                                        (+91) - 540-025-124553</h6>
                                </div>
                                <div>
                                    <h6 className='fw-thin'>
                                        <span className='fw-bold'>Email: </span>
                                        sale@Nest.com</h6>
                                </div>
                                <div>
                                    <h6 className='fw-thin'>
                                        <span className='fw-bold'>Hours: </span>
                                        10:00 - 18:00, Mon - Sat</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3">
                            <div className="p-3 ">
                                <a href="http://"><h6 className='font-h6 text-muted'>Company</h6></a>
                                <a href="http://"><h6 className='font-h6'>About Us</h6></a>
                                <a href="http://"><h6 className='font-h6 mt-4'>Delivery Information</h6></a>
                                <a href="http://"><h6 className='font-h6 mt-3'>Privacy Policy</h6></a>
                                <a href="http://"><h6 className='font-h6 mt-3'>Contact Us</h6></a>
                                <a href="http://"><h6 className='font-h6 mt-3'> Support Center</h6></a>
                                <a href="http://"><h6 className='font-h6 mt-3'>Careers</h6></a>

                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3">
                            <div className="p-3 ">
                                <h1 className='font-h1'>Account</h1>
                                <a href="http://"><h6 className='font-h6 mt-4'>Sign In</h6></a>
                                <a href="http://"><h6 className='font-h6'>View Cart</h6></a>
                                <a href="http://"><h6 className='font-h6'>My Wishlist</h6></a>
                                <a href="http://"><h6 className='font-h6'>Track My Order</h6></a>
                                <a href="http://"><h6 className='font-h6'>Help Ticket</h6></a>
                                <a href="http://"><h6 className='font-h6'>Shipping Details</h6></a>
                                <a href="http://"><h6 className='font-h6'>Compare products</h6></a>

                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3">
                            <div className="p-3 ">
                                <h1 className='font-h1'>Corporate</h1>
                                <a href="http://"><h6 className='font-h6 mt-4'>Become a Vendor</h6></a>
                                <a href="http://"><h6 className='font-h6'>Affiliate Program</h6></a>
                                <a href="http://"><h6 className='font-h6'>Farm Business</h6></a>
                                <a href="http://"><h6 className='font-h6'>Farm Careers</h6></a>
                                <a href="http://"><h6 className='font-h6'>Our Suppliers</h6></a>
                                <a href="http://"><h6 className='font-h6'>Accessibility</h6></a>
                                <a href="http://"><h6 className='font-h6'>Promotions</h6></a>


                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3">
                            <div className="p-3 ">
                                <h1 className='font-h1'>Popular</h1>
                                <a href="http://"><h6 className='font-h6 mt-4'>Milk & Flavoured Milk</h6></a>
                                <a href="http://"><h6 className='font-h6'>Butter and Margarine</h6></a>
                                <a href="http://"><h6 className='font-h6'>Eggs Substitutes</h6></a>
                                <a href="http://"><h6 className='font-h6'>Marmalades</h6></a>
                                <a href="http://"><h6 className='font-h6'>Sour Cream and Dips</h6></a>
                                <a href="http://"><h6 className='font-h6'>Tea & Kombucha</h6></a>
                                <a href="http://"><h6 className='font-h6'>Cheese</h6></a>

                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3">
                            <div className="p-3 ">
                                <h1 className='font-h1'>Install Apps</h1>
                                <h5 className='font-h6'>From Apps Store or Google Play</h5>
                                <div className='my-4'>
                                    <a href="">
                                        <img src={logo2} alt="" className="w-50 p-1" />
                                    </a>
                                    <a href="">
                                        <img src={logo3} alt="" className="w-50 p-1" />
                                    </a>
                                </div>
                                <div>
                                    <h5 className=''>Secured Payment Gateways</h5>
                                    <a href="">
                                        <img src={logo4} alt="" className="img-fluid my-3" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2nd footer */}


                    <div className="hr"><hr /></div>

                    <div className="mt-2">
                        <div className="row g-2">
                            <div className="col-lg-3 col-md-3">
                                <div className="p-3">
                                    <p className='text-secondary'>© 2021,<span className='text-success fw-bold'>Bangla</span>-Ecommerce</p>
                                    <p className='text-secondary'>All rights reserved</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <div className="p-3 ">
                                    <h3 className='fw-bold text-success'>1900 - 6666</h3>
                                    <p className='text-secondary'>Working 8:00 - 22:00</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <div className="p-3 ">
                                    <h3 className='fw-bold text-success'>1900 - 8888</h3>
                                    <p className='text-secondary'>24/7 Support Center</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <div className="p-3 ">
                                    <h6>Follow Us</h6>
                                    <p className='text-secondary'>Up to 15% discount on your first subscribe</p>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>



        </div>
    );
};

export default Footer;